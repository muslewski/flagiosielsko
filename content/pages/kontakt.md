---
slug: /kontakt
title: Kontakt
page_type: contact
source_section: "#kontakt (anchor on /)"
priority: P0
---

# Kontakt (Contact)

## Purpose

Make it trivially easy to reach J-ART: by phone, email, in person. Show address with map. Display business hours. Capture inquiries via form.

## Verbatim content from current site

### Section heading
**KONTAKT**

### Company / address block

```
J-ART Janusz Wlekliński
86-031 OSIELSKO
ul. Centralna 12 B
NIP PL 5541105954
tel. +48 602 619 763
```

### Email addresses

- flagi@j-art.eu
- flagi@flagiosielsko.pl
- j-art@datum.pl

### Business hours (from INFO section)

```
CZYNNE:
Poniedziałek – Piątek 8:00 – 18:00
Sobota 9:00 – 16:00 (nie zawsze)
```

### Ordering methods (from INFO section)

> ZAMÓWIENIA można składać osobiście, telefonicznie, pocztą elektroniczną. Możliwa jest wysyłka zamówionego towaru do Klienta po opłaceniu faktury proforma przez Zamawiającego (DPD, Paczkomat INPOST lub wskazana firma przez Klienta)

## Suggested UI sections for the redesigned Contact page

1. **Page hero**
   - H1: "Kontakt"
   - Lead: "Zadzwoń, napisz lub odwiedź nas w Osielsku. Odpowiadamy w ciągu jednego dnia roboczego."

2. **Primary contact methods** (3-card grid)
   - **Telefon**
     - +48 602 619 763
     - "Pon–Pt 8:00–18:00, Sb 9:00–16:00"
     - `tel:+48602619763` link
   - **Email**
     - flagi@j-art.eu (primary)
     - `mailto:` link
     - "Odpowiadamy w ciągu 24h w dni robocze"
   - **Wizyta osobista**
     - ul. Centralna 12 B, 86-031 Osielsko
     - "Zapraszamy do warsztatu"

3. **Contact form** (does not currently exist — spec below)
   - Imię i nazwisko / Firma
   - Email (required)
   - Telefon
   - Typ zapytania (dropdown: Wycena flag / Wycena baneru / Wycena masztu / Inne)
   - Wiadomość (textarea)
   - Załącz projekt (optional file upload — accept .pdf, .jpg, .png, .ai, .eps)
   - Checkbox: zgoda na przetwarzanie danych (RODO)
   - Submit: "Wyślij zapytanie"
   - Success state: "Dziękujemy, odezwiemy się w ciągu 24h."

4. **Map**
   - Google Maps embed
   - Pin: ul. Centralna 12 B, 86-031 Osielsko
   - Note: "Parking dostępny na terenie"

5. **Full company details block**
   ```
   J-ART Janusz Wlekliński
   ul. Centralna 12 B
   86-031 Osielsko
   NIP: PL 5541105954
   ```

6. **All email addresses** (for completeness, secondary)
   - flagi@j-art.eu — primary
   - flagi@flagiosielsko.pl — alternative
   - j-art@datum.pl — alternative

7. **Ordering / shipping note**
   - "Zamówienia przyjmujemy osobiście, telefonicznie i mailowo."
   - "Wysyłka po opłaceniu proformy: DPD, Paczkomat InPost lub firma kurierska wskazana przez Klienta."

## Notes for redesign

- Current site has NO contact form — adding one is high-value.
- Phone number is mobile (+48 602 619 763) — make it prominent and tap-to-call on mobile.
- "Sobota 9:00–16:00 (nie zawsze)" — keep the "nie zawsze" honesty or replace with "Sobota: po wcześniejszym kontakcie" for clarity.
- Three email addresses is confusing — make `flagi@j-art.eu` primary in UI; list others as alternatives or remove.
- No social media presence currently — ask client if they want one added.
