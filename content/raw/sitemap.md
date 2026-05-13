# Sitemap — source artifact

Captured from `https://flagiosielsko.pl/sitemap_index.xml` → `https://flagiosielsko.pl/page-sitemap.xml`

## URL list (10 URLs total)

| URL | Last modified |
|---|---|
| https://flagiosielsko.pl/ | 2026-04-27T12:12:00+00:00 |
| https://flagiosielsko.pl/flagietki-2/ | 2026-03-29T10:56:08+00:00 |
| https://flagiosielsko.pl/podstawy/ | 2026-03-29T11:07:06+00:00 |
| https://flagiosielsko.pl/proporczyki/ | 2026-03-29T11:08:20+00:00 |
| https://flagiosielsko.pl/stojaczki/ | 2026-03-29T11:10:05+00:00 |
| https://flagiosielsko.pl/koszulki/ | 2026-03-29T11:11:21+00:00 |
| https://flagiosielsko.pl/flagi/ | 2026-03-31T08:24:26+00:00 |
| https://flagiosielsko.pl/banery/ | 2026-03-31T19:44:06+00:00 |
| https://flagiosielsko.pl/maszty/ | 2026-04-20T19:44:10+00:00 |

## Robots.txt

```
# START YOAST BLOCK
# ---------------------------
User-agent: *
Disallow:

Sitemap: https://flagiosielsko.pl/sitemap_index.xml
# ---------------------------
# END YOAST BLOCK
```

## Tech stack notes (inferred)

- **CMS:** WordPress
- **SEO plugin:** Yoast SEO (generates sitemap and OG tags)
- **Theme:** Generic WordPress theme — likely Twenty Sixteen / OceanWP / similar (default-feeling)
- **No e-commerce:** No WooCommerce or shop endpoints; all sales via email/phone

## Redirect plan for redesign (URL continuity)

When the new multi-page structure is deployed, set up 301 redirects:

| Old | New |
|---|---|
| `/` | `/` (same — but content collapses to landing) |
| `/flagi/` | `/oferta/flagi` |
| `/flagietki-2/` | `/oferta/flagietki` |
| `/banery/` | `/oferta/banery` |
| `/proporczyki/` | `/oferta/proporczyki` |
| `/koszulki/` | `/oferta/koszulki` |
| `/maszty/` | `/oferta/maszty` |
| `/podstawy/` | `/oferta/podstawy` |
| `/stojaczki/` | `/oferta/stojaczki` |

Anchor links currently on `/` should remap:

| Old anchor | New URL |
|---|---|
| `/#j-art` | `/o-nas` |
| `/#kontakt` | `/kontakt` |
| `/#oferta` | `/oferta` |
| `/#realizacje` | `/realizacje` |
| `/#info` | `/informacje` |
