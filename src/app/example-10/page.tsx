import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  productCategories,
  clients,
  gallery,
  valueProps,
  techniques,
  pricing,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  TextReveal,
  CountUp,
  DrawLine,
  Stagger,
  StaggerItem,
  Pulse,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-10 · Manufaktura przemysłowa" };

const STEEL = "#18181b";
const STEEL_SOFT = "#27272a";
const STEEL_LINE = "#3f3f46";
const STEEL_MUTED = "#71717a";
const YELLOW = "#facc15"; // industrial / safety
const FG = "#fafafa";

export default function Example10() {
  return (
    <MotionRoot>
    <main
      style={{ background: STEEL, color: FG }}
      className="min-h-screen font-grotesk"
    >
      <BackLink />
      <BlueprintGrid />

      {/* Industrial top bar */}
      <div
        className="relative z-10 border-b font-mono text-[10px] uppercase tracking-[0.25em]"
        style={{ borderColor: STEEL_LINE, color: STEEL_MUTED, background: STEEL_SOFT }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2" style={{ color: YELLOW }}>
              <Pulse className="h-1.5 w-1.5 rounded-full" scale={[1, 1.7, 1]}>
                <span
                  className="block h-full w-full rounded-full"
                  style={{ background: YELLOW, boxShadow: `0 0 6px ${YELLOW}` }}
                />
              </Pulse>
              pracownia czynna
            </span>
            <span className="hidden sm:inline">NIP PL 5541105954 / EST. 1984</span>
            <span className="hidden lg:inline">Jakość ISO · test 60 km/h</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{company.hours.weekdays}</span>
            <a href={company.phoneHref} style={{ color: FG }}>
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-4">
            <div
              className="grid h-10 w-10 place-items-center font-mono text-sm font-bold"
              style={{
                background: YELLOW,
                color: STEEL,
                clipPath:
                  "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
              }}
            >
              J-A
            </div>
            <div>
              <div className="text-base font-bold tracking-tight">
                Manufaktura J-ART
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Flagi · Banery · Maszty / Osielsko, PL
              </div>
            </div>
          </Link>
          <nav className="hidden gap-1 md:flex">
            {[
              { l: "Produkty", n: "01" },
              { l: "Specyfikacje", n: "02" },
              { l: "Realizacje", n: "03" },
              { l: "Cennik", n: "04" },
              { l: "Kontakt", n: "05" },
            ].map((i) => (
              <a
                key={i.l}
                href="#"
                className="flex items-baseline gap-1.5 px-3 py-2 text-sm hover:bg-zinc-800/50"
              >
                <span className="font-mono text-[10px] text-zinc-500">
                  {i.n}
                </span>
                <span>{i.l}</span>
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${company.primaryEmail}?subject=Zapytanie%20ofertowe`}
            className="border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors"
            style={{ borderColor: YELLOW, color: YELLOW }}
          >
            → Złóż zapytanie
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-0 px-6 py-20 lg:py-32">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ borderColor: STEEL_LINE, color: YELLOW }}
            >
              <span>SERIA 26·Q2</span>
              <span style={{ color: STEEL_MUTED }}>/</span>
              <span style={{ color: STEEL_MUTED }}>
                Fabryka Flag · Kujawsko-Pomorskie
              </span>
            </div>
            <h1
              className="mt-10 font-bold uppercase leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
            >
              <TextReveal text="Flagi przemysłowe." stagger={0.07} duration={0.8} />
              <br />
              <span style={{ color: YELLOW }}>
                <TextReveal
                  text="Specyfikacja"
                  delay={0.5}
                  stagger={0.07}
                  duration={0.8}
                />
              </span>{" "}
              <TextReveal
                text="bez kompromisów."
                delay={0.85}
                stagger={0.07}
                duration={0.8}
              />
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Producent flag, banerów i masztów dla zastosowań przemysłowych,
              instytucjonalnych i reklamowych. 42 lata produkcji w jednej
              lokalizacji. Karty katalogowe, RFQ, dokumentacja techniczna.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#produkty"
                className="border-2 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em]"
                style={{ borderColor: YELLOW, background: YELLOW, color: STEEL }}
              >
                ↓ Karty katalogowe
              </a>
              <a
                href={`mailto:${company.primaryEmail}?subject=Zapytanie%20ofertowe`}
                className="border-2 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em]"
                style={{ borderColor: FG, color: FG }}
              >
                → Złóż zapytanie ofertowe
              </a>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                Odpowiedź &lt; 24 h
              </span>
            </div>
          </div>

          {/* Hero spec card */}
          <Reveal delay={1.4} y={32} duration={1} className="col-span-12 mt-12 lg:col-span-5 lg:mt-0 lg:pl-12">
            <div
              className="border"
              style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
            >
              <div
                className="flex items-center justify-between border-b px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{ borderColor: STEEL_LINE, color: STEEL_MUTED }}
              >
                <span>Karta produktu / dokument 01-FL-110</span>
                <span style={{ color: YELLOW }}>★ flagowy</span>
              </div>
              <div className="relative aspect-[5/4]">
                <Image
                  src="https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png"
                  alt="Flaga firmowa — model 01-FL-110"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div
                  className="absolute left-4 top-4 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    borderColor: YELLOW,
                    color: YELLOW,
                    background: "rgba(24,24,27,0.85)",
                  }}
                >
                  FL-110 · 110×70 cm
                </div>
              </div>
              <dl
                className="grid grid-cols-2 divide-x divide-y-0 text-sm"
                style={{ borderColor: STEEL_LINE }}
              >
                {[
                  ["Materiał", "Poliester 110 g/m²"],
                  ["Druk", "Sitodruk / Sublimacja"],
                  ["Wiatr", "≤ 60 km/h"],
                  ["Obszycie", "Profesjonalne + taśmy"],
                  ["Mocowanie", "Karabińczyki / tunel"],
                  ["Termin", "od 4 dni roboczych"],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className="border-t px-5 py-3"
                    style={{
                      borderColor: STEEL_LINE,
                      borderLeftWidth: i % 2 === 0 ? 0 : 1,
                    }}
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key metrics strip */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
      >
        <Stagger
          stagger={0.1}
          className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x px-0 md:grid-cols-4"
        >
          {valueProps.map((v, i) => {
            const numericMatch = v.value.match(/^([\d,]+)(.*)$/);
            const isCountable = numericMatch !== null;
            const num = isCountable ? parseInt(numericMatch[1], 10) : 0;
            const suffix = isCountable ? numericMatch[2] : "";
            return (
              <StaggerItem
                key={v.label}
                className="px-6 py-8"
                style={{ borderColor: STEEL_LINE }}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    M-0{i + 1}
                  </div>
                  <div className="font-mono text-[10px]" style={{ color: YELLOW }}>
                    ●
                  </div>
                </div>
                <div
                  className="mt-4 font-bold tabular-nums tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {isCountable ? (
                    <>
                      <CountUp to={num} duration={1.6 + i * 0.15} />
                      {suffix}
                    </>
                  ) : (
                    v.value
                  )}
                </div>
                <div className="mt-1 text-xs text-zinc-400">
                  {v.label} · {v.detail}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Products / catalog */}
      <section
        id="produkty"
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <SectionHeader
            num="01"
            label="Katalog produktów"
            title="Linie produkcyjne"
            kicker="8 kart katalogowych"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: STEEL_LINE }}>
            {productCategories.map((p, i) => (
              <a
                key={p.slug}
                href="#"
                className="group flex flex-col border-r border-b transition-colors hover:bg-zinc-800/40"
                style={{
                  borderColor: STEEL_LINE,
                  borderTopWidth: i < 4 ? 1 : 0,
                  borderLeftWidth: i % 4 === 0 ? 1 : 0,
                }}
              >
                <div
                  className="relative aspect-[5/4] overflow-hidden border-b"
                  style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div
                    className="absolute left-3 top-3 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{
                      borderColor: YELLOW,
                      color: YELLOW,
                      background: "rgba(24,24,27,0.85)",
                    }}
                  >
                    SKU {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-400">
                    {p.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    <span>Karta PDF</span>
                    <span style={{ color: YELLOW }} aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs / techniques */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <SectionHeader
            num="02"
            label="Specyfikacja techniczna"
            title="Cztery procesy. Cztery zastosowania."
            kicker="Jakość klasy ISO"
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left font-mono text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: STEEL_LINE }}>
                  <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Proc.
                  </th>
                  <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Metoda
                  </th>
                  <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Charakterystyka
                  </th>
                  <th className="py-3 pr-4 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Optymalne dla
                  </th>
                </tr>
              </thead>
              <tbody>
                {techniques.map((t, i) => (
                  <tr
                    key={t.name}
                    className="border-b"
                    style={{ borderColor: STEEL_LINE }}
                  >
                    <td className="py-4 pr-4 tabular-nums text-zinc-500">
                      0{i + 1}
                    </td>
                    <td className="py-4 pr-4">
                      <span className="text-base font-bold uppercase text-white">
                        {t.name}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-zinc-300 font-sans">
                      {t.short}
                    </td>
                    <td className="py-4 pr-4 text-right">
                      <span
                        className="inline-block border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em]"
                        style={{ borderColor: YELLOW, color: YELLOW }}
                      >
                        {i === 0 ? "B2B" : i === 1 ? "Foto" : i === 2 ? "Premium" : "Tradycja"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Production process */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <SectionHeader
            num="03"
            label="Proces produkcyjny"
            title="Od zapytania do wysyłki w 4 dni."
          />

          <div className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-6" style={{ background: STEEL_LINE }}>
            {[
              { n: "01", label: "Zapytanie", time: "0 h" },
              { n: "02", label: "Wycena", time: "≤ 24 h" },
              { n: "03", label: "Projekt", time: "≤ 48 h" },
              { n: "04", label: "Akceptacja", time: "—" },
              { n: "05", label: "Produkcja", time: "min. 4 dni" },
              { n: "06", label: "Wysyłka", time: "DPD / InPost" },
            ].map((s) => (
              <div
                key={s.n}
                className="p-5"
                style={{ background: STEEL }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Krok {s.n}
                </div>
                <div className="mt-4 text-xl font-bold uppercase tracking-tight">
                  {s.label}
                </div>
                <div
                  className="mt-2 font-mono text-xs uppercase tracking-widest"
                  style={{ color: YELLOW }}
                >
                  {s.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizations gallery */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <SectionHeader
            num="04"
            label="Realizacje · ostatnie 12 miesięcy"
            title="Wybrane wdrożenia"
          />

          <div className="mt-12 grid grid-cols-2 gap-px sm:grid-cols-4 lg:grid-cols-6" style={{ background: STEEL_LINE }}>
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className="group relative"
                style={{ background: STEEL }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 640px) 50vw, 16vw"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-zinc-950/95 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span style={{ color: YELLOW }}>
                    R-{String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="text-zinc-300">{g.client ?? g.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — industrial RFQ style */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <SectionHeader
            num="05"
            label="Cennik produktów standardowych"
            title="Ceny brutto · 1 szt."
            kicker="Pozostałe — wycena indywidualna"
          />

          <div className="mt-12 grid gap-px lg:grid-cols-3" style={{ background: STEEL_LINE }}>
            {pricing.groups.map((g) => (
              <div key={g.title} style={{ background: STEEL }} className="p-6">
                <div
                  className="flex items-baseline justify-between border-b pb-3 font-mono text-[10px] uppercase tracking-[0.25em]"
                  style={{ borderColor: STEEL_LINE, color: YELLOW }}
                >
                  <span>{g.title}</span>
                  <span style={{ color: STEEL_MUTED }}>
                    {g.items.length} POZ.
                  </span>
                </div>
                <ul className="mt-4 space-y-2 font-mono text-sm">
                  {g.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex justify-between gap-3 tabular-nums"
                    >
                      <span className="text-zinc-400">{it.name}</span>
                      <span className="text-white">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            // Klienci · sektor B2B i instytucjonalny
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c, i) => (
              <div
                key={c}
                className="flex items-baseline gap-2 border-l-2 pl-3 text-sm"
                style={{ borderColor: i % 3 === 0 ? YELLOW : STEEL_LINE }}
              >
                <span className="font-mono text-[10px] text-zinc-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bold uppercase">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — industrial Q/A table */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <SectionHeader
            num="06"
            label="FAQ · Dokumentacja"
            title="Pytania techniczne klientów."
            kicker="6 najczęściej zadawanych"
          />

          <div
            className="mt-12 border"
            style={{ borderColor: STEEL_LINE }}
          >
            <div
              className="grid grid-cols-12 gap-4 border-b px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
              style={{ borderColor: STEEL_LINE }}
            >
              <div className="col-span-1">Poz.</div>
              <div className="col-span-4">Pytanie</div>
              <div className="col-span-7">Odpowiedź</div>
            </div>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="grid grid-cols-12 gap-4 border-b px-6 py-6 last:border-b-0"
                style={{
                  borderColor: STEEL_LINE,
                  background: i % 2 === 0 ? STEEL_SOFT : "transparent",
                }}
              >
                <div className="col-span-1">
                  <span
                    className="font-mono text-base font-bold tabular-nums"
                    style={{ color: YELLOW }}
                  >
                    Q.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <div className="text-base font-bold uppercase tracking-tight">
                    {f.q}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex flex-col items-start justify-between gap-3 border p-5 text-sm sm:flex-row sm:items-center"
            style={{ borderColor: YELLOW, background: STEEL_SOFT, color: YELLOW }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em]">
              ! Pytania nieobjęte tabelą →
            </span>
            <a
              href={`mailto:${company.primaryEmail}`}
              className="font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              {company.primaryEmail} ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA — RFQ */}
      <section
        className="relative z-10 border-b"
        style={{ borderColor: STEEL_LINE }}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-0 px-6 py-24">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: YELLOW }}
            >
              // Złóż zapytanie ofertowe
            </div>
            <h2
              className="mt-6 font-bold uppercase leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Zapytanie
              <br />
              <span style={{ color: YELLOW }}>ofertowe.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Załącz projekt lub opisz wymagania — odpowiemy w ciągu jednego dnia
              roboczego z pełną wyceną i terminem realizacji.
            </p>
          </div>
          <div className="col-span-12 mt-10 lg:col-span-5 lg:mt-0 lg:pl-12">
            <div
              className="border"
              style={{ borderColor: STEEL_LINE, background: STEEL_SOFT }}
            >
              <div
                className="border-b px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
                style={{ borderColor: STEEL_LINE }}
              >
                Linia bezpośrednia · odpowiedź ≤ 24 h
              </div>
              <div className="space-y-px" style={{ background: STEEL_LINE }}>
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-between px-5 py-5 hover:bg-zinc-800/40"
                  style={{ background: STEEL_SOFT }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Telefon
                  </span>
                  <span className="font-mono text-lg font-bold">
                    {company.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${company.primaryEmail}?subject=Zapytanie%20ofertowe`}
                  className="flex items-center justify-between px-5 py-5 hover:bg-zinc-800/40"
                  style={{ background: STEEL_SOFT }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Email · zapytanie
                  </span>
                  <span className="font-mono text-base font-bold">
                    {company.primaryEmail}
                  </span>
                </a>
                <div
                  className="flex items-center justify-between px-5 py-5"
                  style={{ background: STEEL_SOFT }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Warsztat
                  </span>
                  <span className="font-mono text-sm">
                    {company.address}, {company.postal} {company.city}
                  </span>
                </div>
              </div>
              <a
                href={`mailto:${company.primaryEmail}?subject=Zapytanie%20ofertowe`}
                className="block px-5 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.25em]"
                style={{ background: YELLOW, color: STEEL }}
              >
                → Wyślij zapytanie teraz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 border-b px-6 py-12 md:grid-cols-4" style={{ borderColor: STEEL_LINE }}>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Spółka
            </div>
            <div className="mt-3 text-sm font-bold uppercase">
              {company.legalName}
            </div>
            <div className="mt-2 font-mono text-xs text-zinc-400">
              NIP: {company.nip}
              <br />
              Rejestr: zał. 1984
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Lokalizacja
            </div>
            <div className="mt-3 font-mono text-xs text-zinc-300">
              {company.address}
              <br />
              {company.postal} {company.city}
              <br />
              {company.region}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Godziny pracy
            </div>
            <div className="mt-3 font-mono text-xs text-zinc-300">
              {company.hours.weekdays}
              <br />
              {company.hours.saturday}
              <br />
              <span className="text-zinc-500">({company.hours.note})</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Bezpośrednio
            </div>
            <div className="mt-3 space-y-1 font-mono text-xs">
              <a href={company.phoneHref} className="block text-white hover:text-yellow-400">
                {company.phone}
              </a>
              {company.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block text-zinc-300 hover:text-white">
                  {e}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:flex-row sm:justify-between">
          <div>
            © 1984—{new Date().getFullYear()} · wszystkie prawa zastrzeżone
          </div>
          <div>wer. 2026 · wydanie przemysłowe</div>
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

function SectionHeader({
  num,
  label,
  title,
  kicker,
}: {
  num: string;
  label: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="pb-6">
      <Reveal y={14} duration={0.6}>
        <div className="flex flex-wrap items-baseline gap-4 font-mono text-[10px] uppercase tracking-[0.3em]">
          <span style={{ color: YELLOW }}>// {num}</span>
          <span className="text-zinc-500">{label}</span>
          {kicker && <span className="text-zinc-500">·</span>}
          {kicker && <span style={{ color: YELLOW }}>{kicker}</span>}
        </div>
      </Reveal>
      <Reveal delay={0.15} y={18}>
        <h2
          className="mt-4 font-bold uppercase leading-tight tracking-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          {title}
        </h2>
      </Reveal>
      <DrawLine
        delay={0.45}
        duration={0.9}
        thickness={1}
        color={STEEL_LINE}
        style={{ marginTop: "1.5rem" }}
      />
    </div>
  );
}

function BlueprintGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function BackLink() {
  return (
    <Link
      href="/"
      className="fixed left-4 top-12 z-50 border border-zinc-700 bg-zinc-900/90 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-100 backdrop-blur hover:bg-zinc-800"
    >
      ← galeria
    </Link>
  );
}
