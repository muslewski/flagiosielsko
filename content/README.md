# Flagi Osielsko — Scraped Content

Source website: https://flagiosielsko.pl
Scraped on: 2026-05-13
Original site type: WordPress single-page site with product subpages
Target redesign: Multi-page modern website

## What's here

This folder contains the full content scrape of the existing flagiosielsko.pl website, **restructured for a multi-page redesign**. The current website is a single long-scroll page with sections (J-ART, KONTAKT, OFERTA, REALIZACJE, INFO) plus 8 separate product detail subpages. We've reorganized the content into discrete "future subpages" so UI design agents can treat each as its own route.

## Folder layout

```
content/
├── README.md                # This file
├── site-structure.md        # Information architecture & sitemap proposal
├── brand/                   # Brand identity & SEO meta
│   ├── identity.md          # Company info, tone, audience, clients
│   └── seo.md               # Page titles, OG tags, descriptions
├── pages/                   # Main site pages (one file = one future route)
│   ├── home.md              # Landing page
│   ├── o-nas.md             # About — "J-ART" section
│   ├── oferta.md            # Offer overview / products index
│   ├── realizacje.md        # Portfolio / gallery
│   ├── cennik.md            # Pricing (currently buried in "INFO")
│   ├── informacje.md        # Care, ordering, delivery info
│   └── kontakt.md           # Contact details, address, form spec
├── produkty/                # Product detail pages (8 categories)
│   ├── flagi.md
│   ├── flagietki.md
│   ├── banery.md
│   ├── proporczyki.md
│   ├── koszulki.md
│   ├── maszty.md
│   ├── podstawy.md
│   └── stojaczki.md
├── gallery/                 # Image catalog
│   ├── manifest.md          # All 32 gallery images with URLs + captions
│   └── by-category/         # Grouped by product type
└── raw/                     # Source artifacts for reference
    ├── homepage-text.md     # Plain-text extraction
    └── sitemap.md           # Original XML sitemap contents
```

## How to use this for UI design

Each file in `pages/` and `produkty/` is structured as:

1. **Frontmatter** — slug, title, source URL, page type
2. **Purpose** — what the page should achieve
3. **Content (verbatim)** — original Polish text from the site
4. **Suggested UI sections** — hints for visual blocks on the new page
5. **Notes for redesign** — content gaps, opportunities

The verbatim Polish text is the source of truth. Suggested sections and notes are starting points — designers should iterate.

## Content language

All copy is in **Polish (pl_PL)**. Do not translate unless explicitly asked. Polish characters (ą, ć, ę, ł, ń, ó, ś, ź, ż) must be preserved.
