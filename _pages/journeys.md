---
layout: single
permalink: /journeys/
title: "Journeys"
author_profile: false
journeys_page: true
---

{% include base_path %}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400&display=swap" rel="stylesheet">

<div class="journeys-page">

  <!-- ============== TOP BAR ============== -->
  <header class="topbar">
    <a href="{{ base_path }}/" class="topbar__home" rel="home" aria-label="Back to home">
      <span class="topbar__arrow" aria-hidden="true">&larr;</span>
      <span class="topbar__home-label">Home</span>
    </a>
    <div class="brand">
      <span class="dot" aria-hidden="true"></span>
      <span class="brand__text">Journeys &mdash; Vol. 04</span>
    </div>
    <nav class="years" aria-label="Jump to a journey by year">
      <a href="#chapter-patagonia" class="year" data-year-link="patagonia">2023</a>
      <a href="#chapter-kyoto"     class="year" data-year-link="kyoto">2024</a>
      <a href="#chapter-atacama"   class="year" data-year-link="atacama">2025</a>
      <a href="#chapter-lofoten"   class="year" data-year-link="lofoten">2026</a>
    </nav>
  </header>

  <!-- ============== BACKGROUND LAYER ============== -->
  <div class="bg-stage" aria-hidden="true">
    <!-- Five cross-fading images. JS toggles .is-active.
         Swap the src= values to {{ base_path }}/images/journeys/<name>.jpg
         to host the photos locally; the data-key wires each image to its
         section via [data-image-key]. -->
    <img class="bg-img" data-key="patagonia"
         src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"
         alt="" loading="eager" decoding="async" />
    <img class="bg-img" data-key="kyoto"
         src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"
         alt="" loading="lazy" decoding="async" />
    <img class="bg-img" data-key="atacama"
         src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"
         alt="" loading="lazy" decoding="async" />
    <img class="bg-img" data-key="lofoten"
         src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"
         alt="" loading="lazy" decoding="async" />
    <img class="bg-img" data-key="intro"
         src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"
         alt="" loading="eager" decoding="async" />
  </div>

  <!-- ============== FOREGROUND ============== -->
  <main class="narrative">

    <!-- INTRO -->
    <section class="intro" data-image-key="intro">
      <p class="eyebrow">A scroll through four landscapes</p>
      <h1>Where the world<br/>still feels <em>quiet</em>.</h1>
      <p class="lede">
        Four places. Four ways of looking. Scroll slowly &mdash; the
        landscape is meant to arrive at the pace of breath, not pixels.
      </p>
      <div class="scroll-hint">
        <span>Scroll</span>
        <span class="line"></span>
      </div>
    </section>

    <!-- CHAPTER 1 — PATAGONIA -->
    <section class="chapter" id="chapter-patagonia" data-align="left" data-image-key="patagonia" data-year="2023">
      <article class="panel">
        <p class="chapter-num"><span class="rule"></span>Chapter I &middot; Stone</p>
        <h2>The granite cathedrals of the south.</h2>
        <p class="place">Torres del Paine &middot; Patagonia, Chile</p>
        <p>
          Three vertical towers of glacier-polished granite rise out of a
          windswept steppe at the bottom of the world. Up here the weather
          is the protagonist &mdash; you do not visit Patagonia so much as
          <strong>negotiate with it</strong>.
        </p>
        <p>
          Walk the W trail at first light. The light is not golden;
          it is silver, and the towers turn briefly the colour of a fresh bruise
          before settling back into grey.
        </p>
        <div class="meta-row">
          <div>
            <span class="label">Best Light</span>
            <span class="value">Sept &ndash; Apr</span>
          </div>
          <div>
            <span class="label">Stay</span>
            <span class="value">EcoCamp Domes</span>
          </div>
          <div>
            <span class="label">Pace</span>
            <span class="value">5&ndash;7 days</span>
          </div>
        </div>
      </article>
    </section>

    <!-- CHAPTER 2 — KYOTO -->
    <section class="chapter" id="chapter-kyoto" data-align="right" data-image-key="kyoto" data-year="2024">
      <article class="panel">
        <p class="chapter-num"><span class="rule"></span>Chapter II &middot; Cedar</p>
        <h2>Ten thousand red gates, one footpath.</h2>
        <p class="place">Fushimi Inari &middot; Kyoto, Japan</p>
        <p>
          The trail to the summit of Mount Inari passes beneath
          <strong>ten thousand vermilion torii</strong>, each donated by a
          family or a small business, each carrying a name in black ink on its
          back side. By the time you reach the top, the city below has gone
          almost silent.
        </p>
        <p>
          Go at dusk, when the lanterns come on one by one and the last
          school groups have left. The cedars hold the smell of the day's rain.
        </p>
        <div class="meta-row">
          <div>
            <span class="label">Best Light</span>
            <span class="value">Apr &middot; Nov</span>
          </div>
          <div>
            <span class="label">Stay</span>
            <span class="value">Ryokan Yoshida-Sanso</span>
          </div>
          <div>
            <span class="label">Pace</span>
            <span class="value">3&ndash;4 days</span>
          </div>
        </div>
      </article>
    </section>

    <!-- CHAPTER 3 — ATACAMA -->
    <section class="chapter" id="chapter-atacama" data-align="left" data-image-key="atacama" data-year="2025">
      <article class="panel">
        <p class="chapter-num"><span class="rule"></span>Chapter III &middot; Salt</p>
        <h2>The driest sky on earth.</h2>
        <p class="place">Atacama Desert &middot; Northern Chile</p>
        <p>
          At 2,400 metres, the air thins to almost nothing. Some valleys here
          have not seen rain in <strong>recorded human history</strong>. NASA
          tests Mars rovers in the red sand outside San Pedro because the
          landscape is the closest thing on this planet to another one.
        </p>
        <p>
          Stay out after midnight. Without moisture, without light, without
          sound &mdash; the Milky Way is not a band across the sky. It is the sky.
        </p>
        <div class="meta-row">
          <div>
            <span class="label">Best Light</span>
            <span class="value">Mar &ndash; May</span>
          </div>
          <div>
            <span class="label">Stay</span>
            <span class="value">Tierra Atacama</span>
          </div>
          <div>
            <span class="label">Pace</span>
            <span class="value">4&ndash;6 days</span>
          </div>
        </div>
      </article>
    </section>

    <!-- CHAPTER 4 — LOFOTEN -->
    <section class="chapter" id="chapter-lofoten" data-align="right" data-image-key="lofoten" data-year="2026">
      <article class="panel">
        <p class="chapter-num"><span class="rule"></span>Chapter IV &middot; Sea</p>
        <h2>Mountains that rise straight out of the cold.</h2>
        <p class="place">Lofoten Archipelago &middot; Arctic Norway</p>
        <p>
          A hundred kilometres above the Arctic Circle, jagged peaks fall
          directly into the sea. The fishing villages are painted
          <strong>rorbu red</strong> so the boats can find them in fog. In
          winter the sun barely rises; in summer it never sets.
        </p>
        <p>
          Drive the E10 from &Aring; to Henningsv&aelig;r. Stop often. The light here
          does not behave like light elsewhere.
        </p>
        <div class="meta-row">
          <div>
            <span class="label">Best Light</span>
            <span class="value">Feb &middot; Jun</span>
          </div>
          <div>
            <span class="label">Stay</span>
            <span class="value">Reine Rorbuer</span>
          </div>
          <div>
            <span class="label">Pace</span>
            <span class="value">6&ndash;8 days</span>
          </div>
        </div>
      </article>
    </section>

    <!-- OUTRO -->
    <section class="outro" data-image-key="lofoten">
      <article class="panel">
        <p class="chapter-num chapter-num--centered"><span class="rule"></span>End of Volume</p>
        <h2 class="outro__title">Four places. One slow afternoon.</h2>
        <p>
          Volume 05 ships in spring &mdash; Iceland's highlands, the Faroe Islands,
          the Tibetan plateau, the Namib. Until then, walk somewhere your
          phone has no signal.
        </p>
        <p class="signature">&mdash; The Field Desk</p>
      </article>
    </section>

  </main>

  <!-- ============== SIDE RAIL ============== -->
  <aside class="rail" aria-hidden="true">
    <span class="tick" data-rail="patagonia"></span>
    <span class="tick" data-rail="kyoto"></span>
    <span class="tick" data-rail="atacama"></span>
    <span class="tick" data-rail="lofoten"></span>
    <span class="index"><span class="now">01</span> / 04</span>
  </aside>

</div>
