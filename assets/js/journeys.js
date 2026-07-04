/* ============================================================
 * Journeys - scrollytelling controller (vanilla JS).
 *
 * Active section is the one whose vertical midpoint is closest
 * to the viewport midpoint. This is robust to section height
 * (chapters here are 150vh, which broke threshold-based IO).
 *
 * Panel reveals still use IntersectionObserver since panels are
 * compact and move predictably through the trigger zone.
 *
 * Wired in _includes/scripts.html when page.journeys_page is true.
 * ============================================================ */

(function () {
  'use strict';

  function init() {
    var root = document.querySelector('.journeys-page');
    if (!root) return;

    var bgImages  = Array.prototype.slice.call(root.querySelectorAll('.bg-img'));
    var sections  = Array.prototype.slice.call(root.querySelectorAll('[data-image-key]'));
    var panels    = Array.prototype.slice.call(root.querySelectorAll('.panel'));
    var ticks     = Array.prototype.slice.call(root.querySelectorAll('.rail .tick'));
    var yearLinks = Array.prototype.slice.call(root.querySelectorAll('.topbar .year'));
    var indexNow  = root.querySelector('.rail .index .now');

    if (!bgImages.length || !sections.length) return;

    // Map data-key -> <img>
    var bgByKey = {};
    bgImages.forEach(function (img) { bgByKey[img.dataset.key] = img; });

    // Best-effort preload
    bgImages.forEach(function (img) {
      try { var pre = new Image(); pre.src = img.src; } catch (_) {}
    });

    var railOrder = ['patagonia', 'kyoto', 'atacama', 'lofoten'];

    var currentImageKey = null;
    function setActiveImage(key) {
      if (key === currentImageKey) return;
      currentImageKey = key;
      bgImages.forEach(function (img) {
        img.classList.toggle('is-active', img.dataset.key === key);
      });
    }

    var currentRailIdx = -1;
    function setActiveRail(idx) {
      if (idx === currentRailIdx) return;
      currentRailIdx = idx;
      ticks.forEach(function (t, i) { t.classList.toggle('is-active', i === idx); });
      yearLinks.forEach(function (a, i) { a.classList.toggle('is-active', i === idx); });
      if (indexNow) {
        var n = (idx >= 0 ? idx : 0) + 1;
        indexNow.textContent = String(n).padStart(2, '0');
      }
    }

    // ------- Pick the section whose midpoint is closest to the
    //         viewport midpoint. This works regardless of section
    //         height because we never compare visibility ratios.
    function pickActive() {
      var vh = window.innerHeight;
      var mid = vh / 2;
      var bestKey = null;
      var bestDist = Infinity;
      var lastChapterIdxBeforeMid = -1;

      for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        var r = s.getBoundingClientRect();
        // Skip sections entirely off-screen
        if (r.bottom < 0 || r.top > vh) continue;

        var sMid = (r.top + r.bottom) / 2;
        var d = Math.abs(sMid - mid);
        if (d < bestDist) {
          bestDist = d;
          bestKey = s.dataset.imageKey;
        }

        // Track the most recent chapter whose top has crossed the
        // viewport midpoint - used to keep the rail counter sticky
        // during the intro/outro (which are not chapters themselves).
        var key = s.dataset.imageKey;
        var ci = railOrder.indexOf(key);
        if (ci !== -1 && r.top <= mid) {
          lastChapterIdxBeforeMid = ci;
        }
      }

      if (bestKey) setActiveImage(bestKey);

      // Rail rules:
      //   - If the active section IS a chapter, sync rail to it.
      //   - Else (intro / outro), keep the most recent chapter shown
      //     so the counter doesn't snap back to 01 on the outro or
      //     flicker at the seams.
      var activeChapterIdx = railOrder.indexOf(bestKey);
      if (activeChapterIdx !== -1) {
        setActiveRail(activeChapterIdx);
      } else if (lastChapterIdxBeforeMid !== -1) {
        setActiveRail(lastChapterIdxBeforeMid);
      } else {
        // Before any chapter is reached: counter reads 01/04 but no tick
        // and no year link is highlighted (matches the initial HTML state).
        setActiveRail(0);
        ticks.forEach(function (t) { t.classList.remove('is-active'); });
        yearLinks.forEach(function (a) { a.classList.remove('is-active'); });
        currentRailIdx = -1; // allow re-set later
      }
    }

    // rAF-throttle scroll/resize handler
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        pickActive();
        ticking = false;
      });
    }

    // Initial render
    setActiveImage('intro');
    pickActive();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // ------- Panel reveal (fade + slide in) -----------------------
    if (typeof window.IntersectionObserver !== 'undefined') {
      var panelObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
          } else {
            // Fade out only when well clear of the trigger zone, so
            // re-scrolling feels cinematic rather than twitchy.
            var r = e.boundingClientRect;
            var vh2 = window.innerHeight;
            if (r.top > vh2 * 0.9 || r.bottom < vh2 * 0.1) {
              e.target.classList.remove('is-visible');
            }
          }
        });
      }, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-15% 0px -15% 0px'
      });
      panels.forEach(function (p) { panelObserver.observe(p); });
    } else {
      panels.forEach(function (p) { p.classList.add('is-visible'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
