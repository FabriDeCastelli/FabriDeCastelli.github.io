# Journeys photos

The `/journeys/` page uses a fixed cross-fading photo backdrop. By default
it pulls five photos from Unsplash so the page renders fully out of the
box. To self-host, drop your own JPGs in this folder and update the
`src=` attributes in [`_pages/journeys.md`](../../_pages/journeys.md).

Each `<img class="bg-img">` carries a `data-key` that wires it to its
section via `[data-image-key]`. The mapping is:

| `data-key`  | Section in `_pages/journeys.md`            | Suggested filename       |
|-------------|---------------------------------------------|--------------------------|
| `intro`     | Intro hero                                  | `intro.jpg`              |
| `patagonia` | Chapter I — Torres del Paine (Patagonia)    | `patagonia.jpg`          |
| `kyoto`     | Chapter II — Fushimi Inari (Kyoto)          | `kyoto.jpg`              |
| `atacama`   | Chapter III — Atacama Desert                | `atacama.jpg`            |
| `lofoten`   | Chapter IV — Lofoten Archipelago (+ outro)  | `lofoten.jpg`            |

To swap, change e.g.

```html
<img class="bg-img" data-key="patagonia"
     src="https://images.unsplash.com/photo-..." alt="" />
```

to

```html
<img class="bg-img" data-key="patagonia"
     src="{{ base_path }}/images/journeys/patagonia.jpg" alt="" />
```

Recommended: landscape, **at least 2400px wide**, JPG or WebP, optimised
to roughly 250–400KB each (these are full-bleed background images).
