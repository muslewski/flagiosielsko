import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  productCategories,
  clients,
  gallery,
  valueProps,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  SnapIn,
  Stagger,
  StaggerItem,
  WobbleHover,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-7 · Neo-brutalizm" };

const CREAM = "#fffaeb";
const HOT_RED = "#ff3b30";
const YELLOW = "#ffd93d";
const BLUE = "#1d4ed8";
const BLACK = "#0a0a0a";

export default function Example7() {
  return (
    <MotionRoot>
    <main
      style={{ background: CREAM, color: BLACK }}
      className="min-h-screen font-grotesk"
    >
      <BackLink />

      {/* Header */}
      <header
        className="sticky top-0 z-30 border-b-4"
        style={{ borderColor: BLACK, background: CREAM }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-black"
            style={{ color: BLACK }}
          >
            J-ART
            <span style={{ color: HOT_RED }}>!</span>
          </Link>
          <nav className="hidden gap-2 md:flex">
            {["Oferta", "Realizacje", "Kontakt"].map((l) => (
              <a
                key={l}
                href="#"
                className="border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href={company.phoneHref}
            className="border-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_#0a0a0a] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            style={{ borderColor: BLACK, background: HOT_RED }}
          >
            Zamów flagę
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-4 px-6 py-16" style={{ borderColor: BLACK }}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className="inline-block border-2 px-3 py-1 text-xs font-black uppercase tracking-widest"
              style={{ borderColor: BLACK, background: YELLOW }}
            >
              ★ rodzinna manufaktura · od 1984
            </div>
            <h1
              className="mt-8 font-black uppercase leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              <SnapIn from="x">
                <span className="inline-block">Flagi.</span>
              </SnapIn>
              <br />
              <SnapIn from="x" delay={0.1}>
                <span className="inline-block" style={{ color: HOT_RED }}>
                  Banery.
                </span>
              </SnapIn>
              <br />
              <SnapIn from="x" delay={0.2}>
                <span className="inline-block">Maszty.</span>
              </SnapIn>
              <br />
              <SnapIn from="scale" delay={0.35}>
                <span
                  className="inline-block rotate-[-3deg] px-3"
                  style={{ background: BLACK, color: CREAM }}
                >
                  42 lata!
                </span>
              </SnapIn>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-semibold">
              Rodzinna pracownia z Osielska. Robimy flagi dla Nissan, Yamaha,
              urzędów wojewódzkich i klubów sportowych. Czasem dla Twojego
              kuzyna też.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#oferta"
                className="border-2 px-6 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[6px_6px_0_0_#0a0a0a] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#0a0a0a]"
                style={{ borderColor: BLACK, background: BLACK }}
              >
                Zobacz ofertę →
              </a>
              <a
                href={company.phoneHref}
                className="border-2 px-6 py-3 text-sm font-black uppercase tracking-widest shadow-[6px_6px_0_0_#0a0a0a] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#0a0a0a]"
                style={{ borderColor: BLACK, background: CREAM }}
              >
                {company.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -left-3 -top-3 h-full w-full border-4"
                style={{ borderColor: BLACK, background: HOT_RED }}
              />
              <div
                className="relative aspect-[4/5] overflow-hidden border-4"
                style={{ borderColor: BLACK, background: CREAM }}
              >
                <Image
                  src="https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png"
                  alt="Flagi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 rotate-[6deg] border-2 px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0a0a0a]"
                style={{ borderColor: BLACK, background: YELLOW }}
              >
                Zrobione w Osielsku 🚩
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-4" style={{ borderColor: BLACK }}>
        <div
          className="mx-auto grid max-w-7xl divide-y-4 sm:grid-cols-2 sm:divide-x-4 sm:divide-y-0 lg:grid-cols-4"
          style={{
            ["--tw-divide-opacity" as never]: "1",
            borderColor: BLACK,
          } as React.CSSProperties}
        >
          {valueProps.map((v, i) => (
            <div
              key={v.label}
              className="p-6"
              style={{
                background:
                  i === 0
                    ? CREAM
                    : i === 1
                      ? YELLOW
                      : i === 2
                        ? HOT_RED
                        : BLUE,
                color: i >= 2 ? "white" : BLACK,
              }}
            >
              <div className="text-xs font-black uppercase tracking-widest">
                {v.label}
              </div>
              <div className="mt-4 text-5xl font-black leading-none">
                {v.value}
              </div>
              <div className="mt-2 text-sm font-semibold">{v.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section
        id="oferta"
        className="border-b-4 px-6 py-16"
        style={{ borderColor: BLACK }}
      >
        <div className="mx-auto max-w-7xl">
          <Reveal y={28} duration={0.7}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className="font-black uppercase leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Co mamy
                <br />
                <span style={{ color: HOT_RED }}>na półce.</span>
              </h2>
              <span
                className="border-2 px-4 py-2 text-xs font-black uppercase tracking-widest"
                style={{ borderColor: BLACK, background: YELLOW }}
              >
                8 kategorii
              </span>
            </div>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {productCategories.map((p, i) => {
              const tilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
              const colors = [CREAM, YELLOW, "#ffe5e3", "#e6efff"];
              return (
                <StaggerItem key={p.slug} variant="spring">
                <WobbleHover rotation={i % 2 === 0 ? -2 : 2}>
                <a
                  href="#"
                  className={`group block border-4 p-4 shadow-[6px_6px_0_0_#0a0a0a] ${tilts[i % 4]}`}
                  style={{ borderColor: BLACK, background: colors[i % 4] }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-2" style={{ borderColor: BLACK }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold">{p.summary}</p>
                </a>
                </WobbleHover>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Clients */}
      <section
        className="border-b-4 px-6 py-12"
        style={{ borderColor: BLACK, background: BLACK, color: CREAM }}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="inline-block border-2 px-3 py-1 text-xs font-black uppercase tracking-widest"
            style={{ borderColor: CREAM, background: HOT_RED }}
          >
            Zaufali nam
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-2xl font-black uppercase tracking-tight">
            {clients.map((c, i) => (
              <span
                key={c}
                className="inline-block"
                style={{
                  color: i % 2 === 0 ? CREAM : YELLOW,
                  textShadow: i % 3 === 0 ? `3px 3px 0 ${HOT_RED}` : undefined,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b-4 px-6 py-16" style={{ borderColor: BLACK }}>
        <div className="mx-auto max-w-7xl">
          <Reveal y={28} duration={0.7}>
            <h2
              className="font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Realizacje<span style={{ color: HOT_RED }}>!</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {gallery.map((g, i) => (
              <div
                key={g.src}
                className="relative aspect-square overflow-hidden border-4"
                style={{
                  borderColor: BLACK,
                  background: CREAM,
                  transform: `rotate(${(i % 5) - 2}deg)`,
                }}
              >
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
                {g.client && (
                  <div
                    className="absolute left-0 top-0 px-2 py-1 text-[10px] font-black uppercase tracking-widest"
                    style={{ background: YELLOW, color: BLACK }}
                  >
                    {g.client}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — brutal style */}
      <section className="border-b-4 px-6 py-16" style={{ borderColor: BLACK, background: YELLOW }}>
        <div className="mx-auto max-w-7xl">
          <Reveal y={28} duration={0.7}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className="font-black uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                FAQ<span style={{ color: HOT_RED }}>?</span>
              </h2>
              <span
                className="border-2 px-3 py-1 text-xs font-black uppercase tracking-widest"
                style={{ borderColor: BLACK, background: BLACK, color: YELLOW }}
              >
                6 najczęstszych pytań
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-0 md:grid-cols-2">
            {[
              {
                q: "Ile czeka się na flagę?",
                a: "Minimum 4 dni robocze od potwierdzenia zamówienia. Większe projekty — wycenamy termin indywidualnie.",
              },
              {
                q: "Czy projektujecie sami?",
                a: "Tak, mamy własny dział projektowania graficznego. Dostarcz logo, my zrobimy resztę.",
              },
              {
                q: "Jak wytrzymała jest flaga?",
                a: "Wytrzymuje wiatr do 60 km/h. Powyżej zalecamy opuszczenie. Pranie co miesiąc — przedłuża żywotność.",
              },
              {
                q: "Czy jedna sztuka też?",
                a: "Tak. Robimy od jednej sztuki — nie dyskryminujemy małych zamówień. Cena za sztukę spada od 5+.",
              },
              {
                q: "Wysyłka — jak?",
                a: "DPD, Paczkomat InPost lub kurier wskazany przez Ciebie. Po opłaceniu proformy.",
              },
              {
                q: "Faktura VAT?",
                a: "Oczywiście. Pełna księgowość, faktura na firmę lub osobę prywatną.",
              },
            ].map((f, i) => (
              <div
                key={f.q}
                className="border-4 p-6"
                style={{
                  borderColor: BLACK,
                  background: i % 2 === 0 ? CREAM : "white",
                  marginLeft: i % 2 === 0 ? 0 : -4,
                  marginTop: i >= 2 ? -4 : 0,
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="border-2 px-2 py-0.5 text-xs font-black uppercase tracking-widest"
                    style={{ borderColor: BLACK, background: HOT_RED, color: "white" }}
                  >
                    Q.{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {f.q}
                  </h3>
                </div>
                <p className="mt-4 text-base font-semibold leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 inline-block border-4 p-4 shadow-[8px_8px_0_0_#0a0a0a]" style={{ borderColor: BLACK, background: BLACK, color: CREAM }}>
            <span className="font-black uppercase tracking-widest">
              Nie znalazłeś odpowiedzi?{" "}
              <a href={company.phoneHref} style={{ color: YELLOW }} className="underline">
                Zadzwoń!
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-b-4 px-6 py-20"
        style={{ borderColor: BLACK, background: HOT_RED }}
      >
        <div className="mx-auto max-w-7xl text-white">
          <Reveal y={28} duration={0.7}>
            <h2
              className="font-black uppercase leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              ZADZWOŃ
              <br />
              <span style={{ color: BLACK }}>DZIŚ.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-bold">
              Wycena w ciągu jednego dnia roboczego. Bez automatów, bez voicemail
              — odbiera Janusz albo ktoś z rodziny.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={company.phoneHref}
              className="border-4 px-6 py-3 text-lg font-black uppercase tracking-widest shadow-[8px_8px_0_0_#0a0a0a] transition-transform hover:translate-x-2 hover:translate-y-2 hover:shadow-[0_0_0_0_#0a0a0a]"
              style={{ borderColor: BLACK, background: BLACK, color: CREAM }}
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.primaryEmail}`}
              className="border-4 px-6 py-3 text-lg font-black uppercase tracking-widest shadow-[8px_8px_0_0_#0a0a0a] transition-transform hover:translate-x-2 hover:translate-y-2 hover:shadow-[0_0_0_0_#0a0a0a]"
              style={{ borderColor: BLACK, background: CREAM, color: BLACK }}
            >
              {company.primaryEmail}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs font-black uppercase tracking-widest sm:flex-row sm:justify-between">
          <div>© 1984—{new Date().getFullYear()} · {company.legalName}</div>
          <div>NIP {company.nip} · {company.city}</div>
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

function BackLink() {
  return (
    <Link
      href="/"
      className="fixed left-4 top-4 z-50 border-2 border-black bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0a0a0a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-transform"
    >
      ← galeria
    </Link>
  );
}
