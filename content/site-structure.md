# Site Structure — Proposed Information Architecture

This is the **target sitemap** for the redesigned flagiosielsko.pl. The existing site is one long page; we're proposing splitting it into proper routes.

## Current state (existing site)

- **One main page** (`/`) with anchor sections: `#j-art`, `#kontakt`, `#oferta`, `#realizacje`, `#info`
- **Eight product detail pages**:
  - `/flagi/`, `/flagietki-2/`, `/banery/`, `/proporczyki/`, `/koszulki/`, `/maszty/`, `/podstawy/`, `/stojaczki/`
- Nav menu items: HOME, J-ART, KONTAKT, OFERTA, REALIZACJE, INFO

## Proposed sitemap (redesign target)

```
/                          → Home (hero, value props, featured products, social proof, CTA)
/o-nas                     → About — J-ART story, 30+ years experience, regional position
/oferta                    → Offer index (8 product categories as cards/grid)
  /oferta/flagi            → Flagi (firmowe, państw, klubowe, gabinetowe…)
  /oferta/flagietki        → Flagietki (small handheld flags)
  /oferta/banery           → Banery reklamowe
  /oferta/proporczyki      → Proporczyki
  /oferta/koszulki         → Koszulki (screen-printed t-shirts)
  /oferta/maszty           → Maszty (składane, winder, gabinetowe)
  /oferta/podstawy         → Podstawy do masztów
  /oferta/stojaczki        → Stojaczki do proporczyków
/realizacje                → Portfolio gallery (32+ projects, filterable by category)
/cennik                    → Pricing table (PL flags, UE flags, accessories)
/informacje                → Care guides, delivery, ordering process, FAQ
/kontakt                   → Contact form, address, map, hours, NIP
```

## Navigation recommendation

**Primary nav** (top bar): `Strona główna` · `O nas` · `Oferta` · `Realizacje` · `Cennik` · `Kontakt`

**Secondary** (in `/oferta` page or megamenu): 8 product subpages

**Footer**: contact mini-block, nav repeat, hours, copyright

## Page priority for redesign

| Tier | Pages | Why |
|------|-------|-----|
| **P0** (must) | `home`, `oferta`, `kontakt` | Conversion-critical |
| **P1** (high) | `o-nas`, `realizacje`, all 8 `produkty/*` | Trust + decision support |
| **P2** (medium) | `cennik`, `informacje` | Self-service info |

## Content gaps to flag for the client

The existing site is text-light. Before launching the redesign, the client should provide:

- **Hero photography** — high-res product/process shots (current hero is one stylized image)
- **Founder/team photos** — about page needs a face
- **Case study write-ups** — gallery has 32 images but no project narratives
- **Customer testimonials** — currently zero
- **Certifications / awards** — currently none shown
- **Social media handles** — currently none linked
- **Detailed product specs** — most product pages have 1–2 sentences only
- **Logo + brand colors** — no consistent brand mark visible
- **Contact form fields** — none currently exist; spec one in `pages/kontakt.md`

## Key trust signals to preserve / amplify

The existing site shows:
- **42+ years in business** (founded 1984, advertising since 1989) — lead with this
- **Notable clients**: Nissan, Yamaha, Prime Food, Mac-Graf, Pixel, Gmina Osielsko, Urząd Wojewódzki, Sportway, WSG, Dudek, Cortez — logo wall opportunity
- **Visit counter**: 46,350 visits on the previous site (since May 2019). Counter is dated UX; replace with concrete metrics instead.
- **"Significant regional position in the Kujavia-Pomerania region"** — geo authority

## SEO continuity notes

- Existing slugs that **must redirect** if changed:
  - `/flagietki-2/` → `/oferta/flagietki` (note the `-2` suffix from a prior URL conflict)
  - `/flagi/`, `/banery/`, `/proporczyki/`, `/koszulki/`, `/maszty/`, `/podstawy/`, `/stojaczki/` → `/oferta/[slug]`
- Keep H1 keywords aligned with current page titles
