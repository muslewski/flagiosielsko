import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  aboutShort,
  productCategories,
  clients,
  gallery,
  techniques,
  valueProps,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  DrawLine,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-6 · Katalog / Lookbook" };

// Editorial lookbook — alternating full-bleed spreads, oversized chapter numbers,
// minimal sans labels (Inter) + display serif (Playfair) for moments of breath.
const INK = "#0a0a0a";
const PAPER = "#fffdf7";
const RED = "#c1121f";

type SpreadMeta = {
  subtitle: string;
  model: string;
  year: string;
  specs: [string, string][];
  techniques: string[];
};

const SPREAD_META: SpreadMeta[] = [
  {
    subtitle: "Symbol, który niesie wiatr.",
    model: "model 01-FL-110",
    year: "MMXXVI",
    specs: [
      ["Materiał", "Poliester 110–120 g/m²"],
      ["Druk", "Sitodruk / sublimacja"],
      ["Wiatr", "≤ 60 km/h"],
      ["Mocowanie", "Karabińczyki / tunel"],
    ],
    techniques: ["Sitodruk", "Sublimacja", "Wszywane"],
  },
  {
    subtitle: "Mały gest, jasny znak.",
    model: "model 02-FT-21",
    year: "MMXXVI",
    specs: [
      ["Materiał", "Poliester"],
      ["Druk", "Sitodruk / cyfrowy"],
      ["Format", "21 × 13 cm"],
      ["Kanalik", "Ø 4 mm"],
    ],
    techniques: ["Sitodruk", "Sublimacja"],
  },
  {
    subtitle: "Przestrzeń wypełniona przekazem.",
    model: "model 03-BN-500",
    year: "MMXXVI",
    specs: [
      ["Materiał", "PCV frontlit 500 g/m²"],
      ["Alternatywa", "Mesh 330 g/m²"],
      ["Brzegi", "Podwójnie zagrzewane"],
      ["Mocowanie", "Kółka co ~50 cm"],
    ],
    techniques: ["Frontlit", "Mesh", "Wodoodporne"],
  },
  {
    subtitle: "Dwie strony jednego wyróżnienia.",
    model: "model 04-PR-DS",
    year: "MMXXVI",
    specs: [
      ["Materiał", "Poliester / satyna"],
      ["Druk", "Sitodruk dwustronny"],
      ["Wykończenie", "Sznurek / cięte termicznie"],
      ["Format", "Indywidualny"],
    ],
    techniques: ["Sitodruk", "Satyna", "Sublimacja"],
  },
];

export default function Example6() {
  return (
    <MotionRoot>
    <main
      style={{ background: PAPER, color: INK }}
      className="relative font-sans"
    >
      <PaperGrain />

      {/* Header — wafer thin, all caps */}
      <header
        className="sticky top-0 z-30 border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)", background: PAPER }}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-4">
          <Link
            href="/"
            className="text-base font-medium tracking-[0.2em]"
          >
            J·ART
          </Link>
          <nav className="hidden gap-10 text-[10px] font-medium uppercase tracking-[0.3em] md:flex">
            <a href="#chapter-1">No. 01</a>
            <a href="#chapter-2">No. 02</a>
            <a href="#chapter-3">No. 03</a>
            <a href="#chapter-4">No. 04</a>
            <a href="#chapter-5">No. 05</a>
          </nav>
          <a
            href={company.phoneHref}
            className="text-[10px] font-medium uppercase tracking-[0.3em]"
            style={{ color: RED }}
          >
            Skontaktuj się →
          </a>
        </div>
      </header>

      {/* Cover spread — masthead, hero, in-this-issue */}
      <section className="border-b" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-0 px-8">
          <div className="col-span-12 flex flex-col justify-between pt-12 pb-12 lg:col-span-5 lg:pr-12 lg:pt-20 lg:pb-20">
            {/* Top — masthead */}
            <Reveal y={12} duration={0.6}>
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
                  Vol. XLII · No. 02
                </p>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
                  Wiosna · 2026
                </p>
              </div>
              <div className="mt-5 h-px w-full" style={{ background: INK }} />
            </Reveal>

            {/* Center — title */}
            <Reveal y={36} duration={1.1} delay={0.15} className="my-12 lg:my-0">
              <p
                className="font-mono text-[10px] font-medium uppercase tracking-[0.4em]"
                style={{ color: RED }}
              >
                Katalog wydany przez
              </p>
              <h1 className="mt-3 font-display text-[clamp(3.5rem,9vw,9rem)] font-medium italic leading-[0.92] tracking-[-0.02em]">
                J<span style={{ color: RED }}>—</span>ART
              </h1>
              <p className="mt-6 font-display text-2xl italic leading-tight text-neutral-700">
                Manufaktura flag.
                <br />
                Osielsko, 1984—2026.
              </p>
            </Reveal>

            {/* Bottom — in this issue */}
            <Reveal y={12} duration={0.6} delay={0.4}>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
                — W tym wydaniu
              </p>
              <ul className="mt-4 space-y-1.5 font-display text-base italic leading-snug text-neutral-800">
                <li>Czterdzieści dwa lata ciągłej produkcji</li>
                <li>Linia produktowa — kolekcja 26·02</li>
                <li>Rzemiosło — cztery techniki druku</li>
                <li>Realizacje dla Yamaha, Nissan, urzędów wojewódzkich</li>
                <li>Spis marek, które nam zaufały</li>
              </ul>
              <div className="mt-5 h-px w-full" style={{ background: "rgba(10,10,10,0.15)" }} />
              <p className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                {company.address} · {company.postal} {company.city}
              </p>
            </Reveal>
          </div>

          {/* Cover image */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative h-[60vh] min-h-[420px] lg:h-screen lg:max-h-[860px]">
              <Image
                src="https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png"
                alt="Okładka · linia flag"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              {/* Crop marks — printer's registration */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-4 top-4 h-3 w-px bg-white/70" />
                <div className="absolute left-4 top-4 h-px w-3 bg-white/70" />
                <div className="absolute right-4 top-4 h-3 w-px bg-white/70" />
                <div className="absolute right-4 top-4 h-px w-3 bg-white/70" />
                <div className="absolute bottom-4 left-4 h-3 w-px bg-white/70" />
                <div className="absolute bottom-4 left-4 h-px w-3 bg-white/70" />
                <div className="absolute bottom-4 right-4 h-3 w-px bg-white/70" />
                <div className="absolute bottom-4 right-4 h-px w-3 bg-white/70" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
                    Okładka
                  </p>
                  <p className="mt-1 font-display text-lg italic">
                    Linia flagowa · model 01-FL-110
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                  s. 01
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spis treści — Table of contents (magazine-style) */}
      <section
        className="border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)" }}
      >
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <div className="grid grid-cols-12 gap-8">
            <Reveal y={20} duration={0.7} className="col-span-12 lg:col-span-3">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
                — Spis treści
              </p>
              <DrawLine
                delay={0.2}
                duration={0.9}
                color={RED}
                style={{ marginTop: "0.75rem", width: "2rem" }}
              />
              <h2 className="mt-8 font-display text-[clamp(2.5rem,4.5vw,4rem)] font-medium italic leading-[1.02]">
                Z tego
                <br />
                wydania.
              </h2>
              <p className="mt-6 max-w-[16ch] text-sm leading-relaxed text-neutral-600">
                Sześć rozdziałów. Cztery dekady. Jedna pracownia.
              </p>
            </Reveal>

            <div className="col-span-12 lg:col-span-9">
              <ol className="divide-y" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
                {[
                  { num: "01", title: "Słowo wstępne", desc: "List od założyciela, 1984–2026", page: "04" },
                  { num: "02", title: "Linia produktowa · Kolekcja", desc: "Cztery spready linii flagowej 26·02", page: "12" },
                  { num: "03", title: "Rzemiosło · Proces", desc: "Cztery techniki druku, jeden standard", page: "28" },
                  { num: "04", title: "Realizacje · Portfolio", desc: "Fotoreportaż z ostatnich 12 miesięcy", page: "36" },
                  { num: "05", title: "Klienci · Spis marek", desc: "Marki, które nam zaufały", page: "48" },
                  { num: "06", title: "FAQ · Pytania i odpowiedzi", desc: "Listy do redakcji", page: "56" },
                ].map((c, i) => (
                  <Reveal
                    key={c.num}
                    y={14}
                    duration={0.55}
                    delay={i * 0.05}
                    className="group block"
                  >
                    <a
                      href={`#chapter-${c.num}`}
                      className="grid grid-cols-12 items-baseline gap-4 border-t py-6 transition-colors hover:bg-neutral-100/50"
                      style={{ borderColor: "rgba(10,10,10,0.12)" }}
                    >
                      <span
                        className="col-span-2 font-display text-2xl italic font-medium lg:col-span-1"
                        style={{ color: RED }}
                      >
                        {c.num}
                      </span>
                      <div className="col-span-10 lg:col-span-7">
                        <p className="font-display text-2xl italic leading-snug">
                          {c.title}
                        </p>
                        <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>
                      </div>
                      <span
                        aria-hidden
                        className="col-span-1 hidden text-neutral-300 lg:block"
                      >
                        ·······
                      </span>
                      <span className="col-span-12 text-right font-mono text-xs uppercase tracking-[0.3em] tabular-nums text-neutral-500 lg:col-span-3">
                        s. {c.page}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ol>

              <div
                className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500"
                style={{ borderColor: INK, borderTopWidth: "2px" }}
              >
                <span>72 strony · 5 sekcji · 32 fotografie</span>
                <span>Edycja zamknięta · marzec 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1 — Słowo wstępne */}
      <ChapterDivider num="01" label="Słowo wstępne" />
      <section className="border-b" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-8 px-8 py-24">
          {/* Sidebar — byline */}
          <Reveal y={20} duration={0.7} className="col-span-12 lg:col-span-3">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              Wprowadzenie · s. 04
            </p>
            <DrawLine
              delay={0.2}
              duration={0.9}
              color={RED}
              style={{ marginTop: "0.75rem", width: "2rem" }}
            />
            <div className="mt-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Autor
              </p>
              <p className="mt-2 font-display text-xl italic">
                Janusz Wlekliński
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                założyciel · 1984
              </p>
            </div>
            <div
              className="mt-10 inline-flex items-baseline gap-2 border-t pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500"
              style={{ borderColor: "rgba(10,10,10,0.15)" }}
            >
              <span>Marzec 2026</span>
              <span>·</span>
              <span>3 min czytania</span>
            </div>
          </Reveal>

          {/* Body */}
          <Reveal
            y={20}
            duration={0.7}
            delay={0.1}
            className="col-span-12 lg:col-span-7 lg:col-start-5"
          >
            {/* Standfirst pull quote */}
            <p
              className="font-display text-3xl italic leading-snug sm:text-4xl"
              style={{ color: INK }}
            >
              <span style={{ color: RED }}>„</span>
              Każde zamówienie, niezależnie od wielkości, traktujemy z najwyższą
              starannością.
              <span style={{ color: RED }}>"</span>
            </p>

            {/* First column with drop cap */}
            <p className="mt-12 text-base leading-relaxed text-neutral-800">
              <span
                className="float-left mr-4 mt-1 font-display text-[6rem] italic font-medium leading-[0.78]"
                style={{ color: RED }}
              >
                {aboutShort.charAt(0)}
              </span>
              {aboutShort.slice(1)}
            </p>

            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              W epoce produkcji masowej coraz trudniej znaleźć warsztat, który
              wciąż mierzy każdą flagę przed wysyłką. J-ART istnieje od 1984
              roku — i nadal to robi, z dbałością wyniesioną z czasów ręcznego
              sitodruku.
            </p>

            {/* Signature */}
            <div
              className="mt-12 flex items-end justify-between border-t pt-6"
              style={{ borderColor: "rgba(10,10,10,0.15)" }}
            >
              <div>
                <p
                  className="font-display text-4xl italic"
                  style={{ color: RED }}
                >
                  J. Wlekliński
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  Założyciel · Osielsko
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                — Koniec rozdziału I —
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats — editorial figures */}
      <section
        className="border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)", background: "#f8f5ef" }}
      >
        <div className="mx-auto max-w-[1500px] px-8 py-16">
          <Reveal y={18} duration={0.7}>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b pb-6" style={{ borderColor: "rgba(10,10,10,0.15)" }}>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
                — Manufaktura w liczbach
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Edycja 26·02 · stan na marzec
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {valueProps.map((v, i) => {
              const roman = ["I", "II", "III", "IV"][i] ?? String(i + 1);
              return (
                <Reveal
                  key={v.label}
                  y={16}
                  duration={0.6}
                  delay={i * 0.08}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display text-xl italic font-medium"
                      style={{ color: RED }}
                    >
                      {roman}
                    </span>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                      {v.label}
                    </p>
                  </div>
                  <p className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] italic font-medium leading-[0.95]">
                    {v.value}
                  </p>
                  <p className="mt-2 max-w-[18ch] text-sm leading-snug text-neutral-600">
                    {v.detail}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapter 2 — Editorial spreads */}
      <ChapterDivider num="02" label="Linia produktowa · Kolekcja" />
      <section id="chapter-2">
        {productCategories.slice(0, 4).map((p, i) => {
          const meta = SPREAD_META[i];
          const reverse = i % 2 === 1;
          const startPage = 12 + i * 4;
          return (
            <article
              key={p.slug}
              className="border-b"
              style={{ borderColor: "rgba(10,10,10,0.1)" }}
            >
              <div className="mx-auto max-w-[1500px] px-8 py-20">
                {/* Top meta strip — like a printed page header */}
                <div
                  className="flex items-baseline justify-between border-b pb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500"
                  style={{ borderColor: "rgba(10,10,10,0.12)" }}
                >
                  <span>
                    Spread {String(i + 1).padStart(2, "0")} ·{" "}
                    <span style={{ color: RED }}>{p.slug.toUpperCase()}</span>
                  </span>
                  <span>S. {startPage}–{startPage + 3}</span>
                  <span className="hidden sm:inline">
                    Edycja 26·02 · {p.title}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-x-8 gap-y-10 pt-16">
                  {/* Big folio number */}
                  <div
                    className={`hidden lg:col-span-1 lg:block ${
                      reverse ? "lg:order-3" : "lg:order-1"
                    }`}
                  >
                    <div
                      className="font-display text-[clamp(4rem,8vw,7rem)] italic font-medium leading-none"
                      style={{ color: RED }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-4 h-px w-full" style={{ background: INK }} />
                    <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                      ROK
                      <br />
                      MMXXVI
                    </div>
                  </div>

                  {/* Image */}
                  <figure className="col-span-12 lg:order-2 lg:col-span-6">
                    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Annotation overlay */}
                      <div
                        className="absolute left-4 top-4 inline-flex items-center gap-2 border bg-white/90 px-2 py-1 backdrop-blur"
                        style={{ borderColor: INK }}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                          Fig. {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: RED }}
                          aria-hidden
                        />
                      </div>
                    </div>
                    <figcaption
                      className="mt-4 flex items-baseline justify-between border-t pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500"
                      style={{ borderColor: "rgba(10,10,10,0.12)" }}
                    >
                      <span>Fot. {p.title}, {meta.model}</span>
                      <span>{meta.year}</span>
                    </figcaption>
                  </figure>

                  {/* Text column */}
                  <div
                    className={`col-span-12 lg:col-span-5 ${
                      reverse ? "lg:order-1" : "lg:order-3"
                    }`}
                  >
                    <header>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: RED }}>
                        Prod. {String(i + 1).padStart(2, "0")} · seria 26·02
                      </p>
                      <h3 className="mt-4 font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium italic leading-[1.02]">
                        {p.title}
                      </h3>
                      <p className="mt-3 font-display text-xl italic text-neutral-500">
                        {meta.subtitle}
                      </p>
                    </header>

                    {/* Body with drop cap */}
                    <p className="mt-8 text-base leading-relaxed text-neutral-800">
                      <span
                        className="float-left mr-3 mt-1 font-display text-[5rem] italic font-medium leading-[0.75]"
                        style={{ color: RED }}
                      >
                        {p.description.charAt(0)}
                      </span>
                      {p.description.slice(1)}
                    </p>

                    {/* Specs */}
                    <dl
                      className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6"
                      style={{ borderColor: "rgba(10,10,10,0.12)" }}
                    >
                      {meta.specs.map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                            {k}
                          </dt>
                          <dd className="mt-1 text-sm font-medium">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    {/* Swatches / technique badges */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {meta.techniques.map((t) => (
                        <span
                          key={t}
                          className="border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em]"
                          style={{ borderColor: INK }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                      <a
                        href="#"
                        className="group inline-flex items-baseline gap-2 border-b pb-1 font-medium"
                        style={{ borderColor: INK }}
                      >
                        Karta produktu
                        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                      </a>
                      <a
                        href="#"
                        className="group inline-flex items-baseline gap-2 border-b pb-1 font-medium text-neutral-500"
                        style={{ borderColor: "rgba(10,10,10,0.4)" }}
                      >
                        Wyceń projekt
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Mini-collection — remaining products */}
      <section className="border-b" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
        <div className="mx-auto max-w-[1500px] px-8 py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                Pozostała kolekcja
              </p>
              <div className="mt-3 h-px w-8" style={{ background: RED }} />
              <p className="mt-6 font-display text-3xl italic leading-tight">
                Akcesoria
                <br />i drobne elementy.
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-600">
                Cztery uzupełniające pozycje kolekcji — od koszulek z nadrukiem
                po stojaczki na biurko.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {productCategories.slice(4).map((p, i) => (
                  <a
                    key={p.slug}
                    href="#"
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div
                      className="mt-3 flex items-baseline justify-between border-t pt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500"
                      style={{ borderColor: "rgba(10,10,10,0.12)" }}
                    >
                      <span style={{ color: RED }}>
                        Prod. {String(5 + i).padStart(2, "0")}
                      </span>
                      <span>seria 26·02</span>
                    </div>
                    <h4 className="mt-2 font-display text-2xl italic">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-sm leading-snug text-neutral-600">
                      {p.summary}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3 — Process */}
      <ChapterDivider num="03" label="Rzemiosło · Proces" />
      <section id="chapter-3" className="border-b" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
        <div className="mx-auto max-w-[1500px] px-8 py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-display text-5xl font-medium italic leading-tight">
                Cztery techniki.
                <br />
                <span style={{ color: RED }}>Jeden standard.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base text-neutral-700">
                Wybór techniki to nie kwestia gustu, a decyzja inżynieryjna.
                Sitodruk znosi kapryśny wiatr lepiej niż sublimacja — ale ta
                druga oddaje gradient niedostępny dla farby.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid gap-px sm:grid-cols-2" style={{ background: "rgba(10,10,10,0.1)" }}>
                {techniques.map((t, i) => (
                  <div key={t.name} className="p-8" style={{ background: PAPER }}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: RED }}>
                      Tech. 0{i + 1}
                    </p>
                    <h3 className="mt-4 font-display text-3xl italic">
                      {t.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {t.short}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4 — Pull quote + photo essay */}
      <ChapterDivider num="04" label="Realizacje · Portfolio" />
      <section
        id="chapter-4"
        className="border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)" }}
      >
        {/* Editorial centered quote */}
        <div className="mx-auto max-w-3xl px-8 py-20 text-center">
          <div className="mx-auto h-px w-12" style={{ background: RED }} />
          <p className="mt-10 font-display text-3xl italic leading-snug sm:text-4xl">
            „Pracujemy z producentami samochodów, federacjami sportowymi i
            urzędami wojewódzkimi. To zobowiązuje."
          </p>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            — Z pracowni, 2026
          </p>
        </div>

        {/* Photo essay — editorial rhythm: hero · trio · pair · quartet · pair */}
        <div className="border-t" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
          <div className="mx-auto max-w-[1500px] px-8 py-16">
            <div className="grid grid-cols-12 gap-6">
              {gallery.slice(0, 12).map((g, i) => {
                /* Clean editorial layout — no row-spans, predictable rows.
                   Row 1: 1 hero wide (16:9)
                   Row 2: trio of squares
                   Row 3: pair of wide (3:2)
                   Row 4: quartet of portraits (3:4)
                   Row 5: pair of wide (3:2) */
                const layouts = [
                  "col-span-12 aspect-[16/9]",
                  "col-span-6 lg:col-span-4 aspect-square",
                  "col-span-6 lg:col-span-4 aspect-square",
                  "col-span-12 lg:col-span-4 aspect-square",
                  "col-span-12 lg:col-span-6 aspect-[3/2]",
                  "col-span-12 lg:col-span-6 aspect-[3/2]",
                  "col-span-6 lg:col-span-3 aspect-[3/4]",
                  "col-span-6 lg:col-span-3 aspect-[3/4]",
                  "col-span-6 lg:col-span-3 aspect-[3/4]",
                  "col-span-6 lg:col-span-3 aspect-[3/4]",
                  "col-span-12 lg:col-span-6 aspect-[3/2]",
                  "col-span-12 lg:col-span-6 aspect-[3/2]",
                ];
                return (
                  <figure
                    key={g.src}
                    className={`group relative ${layouts[i]}`}
                  >
                    <div className="relative h-full w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={g.src}
                        alt={g.caption}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes={
                          i === 0
                            ? "100vw"
                            : "(max-width: 768px) 50vw, 33vw"
                        }
                      />
                    </div>
                    <figcaption className="mt-3 flex items-baseline justify-between border-t pt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
                      <span style={{ color: RED }}>
                        P.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate pl-3">
                        {g.client ?? g.caption}
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5 — Spis klientów */}
      <ChapterDivider num="05" label="Klienci · Spis marek" />
      <section
        id="chapter-5"
        className="border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)" }}
      >
        <div className="mx-auto max-w-[1500px] px-8 py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                Lista klientów · wybór
              </p>
              <h2 className="mt-4 font-display text-5xl font-medium italic leading-tight">
                Marki, które
                <br />
                <span style={{ color: RED }}>nam zaufały.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <ul className="divide-y" style={{ borderColor: "rgba(10,10,10,0.15)" }}>
                {clients.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-baseline justify-between py-4 first:border-t"
                    style={{ borderColor: "rgba(10,10,10,0.15)" }}
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-neutral-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl italic">{c}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                      {i < 4 ? "Corporate" : i < 8 ? "Sport" : "Public sector"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6 — FAQ as editorial Q/A list */}
      <ChapterDivider num="06" label="FAQ · Pytania i odpowiedzi" />
      <section
        className="border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)" }}
      >
        <div className="mx-auto max-w-[1500px] px-8 py-20">
          {/* Section header */}
          <div className="mb-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                Listy do redakcji
              </p>
              <div className="mt-3 h-px w-8" style={{ background: RED }} />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h3 className="font-display text-5xl font-medium italic leading-tight">
                Sześć pytań,
                <br />
                <span style={{ color: RED }}>sześć odpowiedzi.</span>
              </h3>
            </div>
          </div>

          {/* Q/A list — clean horizontal rhythm */}
          <dl>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="grid grid-cols-12 gap-x-8 gap-y-4 border-t py-10"
                style={{ borderColor: "rgba(10,10,10,0.12)" }}
              >
                {/* Folio number */}
                <div className="col-span-12 lg:col-span-1">
                  <span
                    className="font-display text-2xl italic font-medium"
                    style={{ color: RED }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Question — left half */}
                <dt className="col-span-12 lg:col-span-5">
                  <p className="font-display text-2xl italic leading-snug">
                    {f.q}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                    Pyt. {String(i + 1).padStart(2, "0")} / VI
                  </p>
                </dt>

                {/* Answer — right half */}
                <dd className="col-span-12 lg:col-span-6">
                  <p className="text-base leading-relaxed text-neutral-700">
                    {f.a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          {/* Closing CTA inline */}
          <div
            className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "rgba(10,10,10,0.12)" }}
          >
            <p className="font-display text-xl italic text-neutral-700">
              Twoje pytanie tu nie pasuje? Napisz lub zadzwoń.
            </p>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 border-b pb-1 text-sm font-medium"
              style={{ borderColor: INK }}
            >
              {company.phone}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Colophon / CTA */}
      <section
        className="border-b"
        style={{ borderColor: "rgba(10,10,10,0.1)" }}
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-8 px-8 py-24">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              Stopka · Kontakt
            </p>
            <div className="mt-3 h-px w-12" style={{ background: RED }} />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-medium italic leading-[1.02]">
              Następne wydanie — z Twoim projektem na okładce.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Telefon
                </p>
                <a href={company.phoneHref} className="mt-2 block font-display text-2xl italic">
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Email
                </p>
                <a
                  href={`mailto:${company.primaryEmail}`}
                  className="mt-2 block font-display text-2xl italic"
                >
                  {company.primaryEmail}
                </a>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href={`mailto:${company.primaryEmail}`}
                className="border-2 px-7 py-3 text-xs font-medium uppercase tracking-[0.3em] hover:bg-neutral-900 hover:text-white"
                style={{ borderColor: INK }}
              >
                Zamów katalog PDF
              </a>
              <a
                href={company.phoneHref}
                className="px-7 py-3 text-xs font-medium uppercase tracking-[0.3em] text-white"
                style={{ background: INK }}
              >
                Umów wizytę w pracowni
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Colophon — full masthead at the back */}
      <section
        className="border-b"
        style={{
          background: "#f8f5ef",
          borderColor: "rgba(10,10,10,0.1)",
        }}
      >
        <div className="mx-auto max-w-[1500px] px-8 py-24">
          <Reveal y={20} duration={0.7}>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
              — Stopka redakcyjna · Colophon
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] font-medium italic leading-[1.02]">
              J<span style={{ color: RED }}>—</span>ART
              <span className="text-neutral-500"> · Wydanie 26·02</span>
            </h2>
            <DrawLine
              delay={0.3}
              duration={1}
              color={INK}
              style={{ marginTop: "1.5rem", width: "6rem", height: "2px" }}
            />
          </Reveal>

          {/* Main masthead grid */}
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {[
              {
                label: "Wydawca",
                value: company.legalName,
                detail: `${company.address}, ${company.postal} ${company.city}`,
              },
              {
                label: "Pracownia",
                value: "Osielsko, Kujawsko-Pomorskie",
                detail: "Działa od 1984 roku · firma rodzinna",
              },
              {
                label: "Format",
                value: "210 × 297 mm",
                detail: "72 strony · 32 fotografie · papier matowy 130 g/m²",
              },
              {
                label: "Nakład",
                value: "500 egzemplarzy",
                detail: "Marzec 2026 · edycja wiosenna",
              },
              {
                label: "Druk",
                value: "Sitodruk · sublimacja",
                detail: "Wykonano w pracowni J-ART",
              },
              {
                label: "Redakcja",
                value: "J. Wlekliński",
                detail: "Założyciel i redaktor naczelny",
              },
              {
                label: "Fotografia",
                value: "Archiwum J-ART",
                detail: "Realizacje 1984–2026",
              },
              {
                label: "Kontakt",
                value: company.phone,
                detail: company.primaryEmail,
              },
            ].map((row) => (
              <div key={row.label}>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                  {row.label}
                </p>
                <p className="mt-3 font-display text-lg italic leading-tight">
                  {row.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom: legal */}
          <div
            className="mt-16 grid grid-cols-1 gap-4 border-t pt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 sm:grid-cols-3"
            style={{ borderColor: INK, borderTopWidth: "2px" }}
          >
            <span>NIP {company.nip}</span>
            <span className="sm:text-center">Wszelkie prawa zastrzeżone</span>
            <span className="sm:text-right">
              © 1984—{new Date().getFullYear()} · J-ART
            </span>
          </div>
        </div>
      </section>

      {/* Final imprint bar — black */}
      <footer
        className="px-8 py-6"
        style={{ background: INK, color: PAPER }}
      >
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.4em] sm:flex-row">
          <span className="opacity-60">
            Wydrukowano w Polsce · Printed in Poland
          </span>
          <span className="font-display text-base italic not-italic-mono opacity-90">
            J<span style={{ color: RED }}>—</span>ART · 26·02
          </span>
          <span className="opacity-60">ISSN 2026·02 · Wydanie skończone</span>
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

function ChapterDivider({ num, label }: { num: string; label: string }) {
  return (
    <section className="border-b" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
      <div
        className="mx-auto max-w-[1500px] px-8 py-10"
        style={{ background: "transparent" }}
      >
        <Reveal y={20} duration={0.8}>
          <div className="flex items-baseline justify-between">
            <div className="font-display text-[clamp(4rem,12vw,10rem)] font-medium italic leading-none tracking-[-0.03em]">
              {num}
            </div>
            <div className="text-right">
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-500">
                Rozdział
              </p>
              <p className="mt-2 text-base">{label}</p>
            </div>
          </div>
        </Reveal>
        <DrawLine
          delay={0.3}
          duration={1.1}
          thickness={1}
          color="#c1121f"
          style={{ marginTop: "1.5rem", width: "100%", maxWidth: "8rem" }}
        />
      </div>
    </section>
  );
}

function PaperGrain() {
  // SVG fractal noise — gives the page a subtle printed-paper texture.
  // Fixed-position, pointer-events-none so it doesn't interfere with interaction.
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] opacity-[0.055] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='220' height='220' filter='url(%23n)' opacity='0.85'/></svg>\")",
        backgroundSize: "220px 220px",
      }}
    />
  );
}

