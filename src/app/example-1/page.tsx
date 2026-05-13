import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  aboutShort,
  productCategories,
  clients,
  valueProps,
  gallery,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  Stagger,
  StaggerItem,
  TextReveal,
  HoverLift,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-1 · Klasyczny heritage" };

const PALETTE = {
  cream: "#f5efe6",
  paper: "#fbf7f0",
  ink: "#1a1612",
  red: "#9b1d20",
  redDeep: "#7a161a",
  gold: "#a87f4b",
};

export default function Example1() {
  return (
    <MotionRoot>
    <main
      style={{ background: PALETTE.paper, color: PALETTE.ink }}
      className="font-display"
    >

      {/* Top bar — sticky, paper-tinted glass */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: "rgba(26,22,18,0.12)",
          background: "rgba(251,247,240,0.85)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="flex items-baseline gap-3">
            <span
              className="font-display text-2xl font-bold tracking-tight"
              style={{ color: PALETTE.red }}
            >
              J-ART
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-neutral-700">
              Manufaktura flag · od 1984
            </span>
          </div>
          <nav className="hidden gap-8 font-sans text-sm md:flex">
            {["O nas", "Oferta", "Realizacje", "Cennik", "Kontakt"].map((l) => (
              <a key={l} className="hover:opacity-60" href="#">
                {l}
              </a>
            ))}
          </nav>
          <a
            href={company.phoneHref}
            className="rounded-full px-5 py-2 font-sans text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ background: PALETTE.red }}
          >
            Zamów wycenę
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 pt-20 pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal y={12} duration={0.6}>
              <p
                className="font-sans text-xs uppercase tracking-[0.4em]"
                style={{ color: PALETTE.gold }}
              >
                Est. 1984 · Osielsko · Kujawsko-Pomorskie
              </p>
            </Reveal>
            <h1 className="mt-8 font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-tight">
              <TextReveal text="Flagi szyte z pasją" stagger={0.08} duration={0.8} />
              <br />
              <span style={{ color: PALETTE.red }} className="italic">
                <TextReveal
                  text="od czterech dekad"
                  delay={0.5}
                  stagger={0.08}
                  duration={0.8}
                />
              </span>
              <span className="font-sans text-2xl align-top">.</span>
            </h1>
            <Reveal delay={1.1} y={18}>
              <p className="mt-10 max-w-xl font-sans text-lg leading-relaxed text-neutral-800">
                Rodzinna manufaktura z Osielska. Produkujemy flagi firmowe,
                narodowe i klubowe dla klientów w kraju i za granicą — z tą samą
                starannością, jaką wkładamy w nasze pierwsze zamówienia z 1984
                roku.
              </p>
            </Reveal>
            <Reveal delay={1.3} y={12} className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#oferta"
                className="rounded-full px-8 py-3.5 font-sans text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ background: PALETTE.ink }}
              >
                Zobacz ofertę
              </a>
              <a
                href={company.phoneHref}
                className="rounded-full border px-8 py-3.5 font-sans text-sm font-medium transition-colors"
                style={{ borderColor: PALETTE.ink }}
              >
                {company.phone}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.4} y={36} duration={1}>
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ background: PALETTE.cream, aspectRatio: "3/4" }}
              >
                <Image
                  src="https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png"
                  alt="Flagi J-ART"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div
                  className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-4 backdrop-blur"
                  style={{ background: "rgba(245, 239, 230, 0.85)" }}
                >
                  <span className="font-display italic">
                    „każde zamówienie z najwyższą starannością"
                  </span>
                  <span
                    className="font-sans text-xs uppercase tracking-widest"
                    style={{ color: PALETTE.gold }}
                  >
                    — Założyciel
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Value strip */}
        <Stagger
          stagger={0.12}
          className="mt-24 grid divide-y border-y md:grid-cols-4 md:divide-x md:divide-y-0"
        >
          {valueProps.map((v) => (
            <StaggerItem key={v.label} className="px-2 py-8">
              <div
                className="font-sans text-xs uppercase tracking-[0.3em]"
                style={{ color: PALETTE.gold }}
              >
                {v.label}
              </div>
              <div className="mt-4 font-display text-4xl font-semibold">
                {v.value}
              </div>
              <div className="mt-1 font-sans text-sm text-neutral-700">
                {v.detail}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* About */}
      <section
        className="py-24"
        style={{ background: PALETTE.cream }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-12">
          <Reveal y={20} duration={0.7} className="lg:col-span-4">
            <p
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: PALETTE.gold }}
            >
              O firmie
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
              Czterdzieści dwa lata.
              <br />
              <span className="italic" style={{ color: PALETTE.red }}>
                Jedna rodzina.
              </span>
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-sans text-lg leading-relaxed text-neutral-800">
              <span
                className="float-left mr-3 mt-2 font-display text-7xl font-bold leading-none"
                style={{ color: PALETTE.red }}
              >
                F
              </span>
              {aboutShort.slice(1)}
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-neutral-700">
              Produkujemy flagi dla klientów krajowych i zagranicznych — od
              koncernów motoryzacyjnych po samorządy. Każda flaga przechodzi
              indywidualną kontrolę jakości przed wysyłką.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="border-y py-24"
        style={{
          borderColor: "rgba(26,22,18,0.12)",
          background: PALETTE.paper,
        }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p
                  className="font-sans text-xs uppercase tracking-[0.4em]"
                  style={{ color: PALETTE.gold }}
                >
                  Linia czasu
                </p>
                <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
                  Cztery dekady,
                  <br />
                  <span className="italic" style={{ color: PALETTE.red }}>
                    jedna pracownia.
                  </span>
                </h2>
              </div>
              <p className="max-w-sm font-sans text-sm text-neutral-700">
                Kamienie milowe ostatnich 42 lat — od pierwszego zlecenia po
                realizacje dla koncernów światowych.
              </p>
            </div>
          </Reveal>

          <Stagger
            stagger={0.15}
            className="mt-16 relative grid gap-12 lg:grid-cols-5"
            margin="0px 0px -100px 0px"
          >
            {[
              {
                year: "1984",
                title: "Powstanie firmy",
                desc: "Janusz Wlekliński zakłada warsztat w Osielsku.",
              },
              {
                year: "1989",
                title: "Wejście w branżę flag",
                desc: "Pierwsze zamówienia reklamowe — flagi, banery, sitodruk.",
              },
              {
                year: "2000s",
                title: "Ekspansja regionalna",
                desc: "Realizacje dla urzędów wojewódzkich i samorządów.",
              },
              {
                year: "2010s",
                title: "Klienci międzynarodowi",
                desc: "Współpraca z koncernami: Nissan, Yamaha, Prime Food.",
              },
              {
                year: "2026",
                title: "42 lata ciągłej produkcji",
                desc: "Wciąż w tych samych rękach, wciąż w Osielsku.",
              },
            ].map((m) => (
              <StaggerItem key={m.year} className="relative">
                <div
                  className="absolute left-0 top-5 h-3 w-3 rounded-full ring-4"
                  style={{
                    background: PALETTE.red,
                    boxShadow: `0 0 0 4px ${PALETTE.paper}`,
                  }}
                />
                <div className="pl-6">
                  <div
                    className="font-display text-3xl font-bold italic"
                    style={{ color: PALETTE.red }}
                  >
                    {m.year}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {m.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-700">
                    {m.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Products */}
      <section id="oferta" className="mx-auto max-w-7xl px-8 py-24">
        <Reveal y={20} duration={0.7}>
          <div className="flex items-end justify-between">
            <div>
              <p
                className="font-sans text-xs uppercase tracking-[0.4em]"
                style={{ color: PALETTE.gold }}
              >
                Oferta · 8 kategorii
              </p>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
                Wszystko, co nosi
                <br />
                <span className="italic">Twoje barwy</span>
              </h2>
            </div>
            <Link
              href="/"
              className="hidden font-sans text-sm underline-offset-4 hover:underline md:block"
            >
              Pełna oferta →
            </Link>
          </div>
        </Reveal>

        <Stagger
          stagger={0.08}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {productCategories.map((p, i) => (
            <StaggerItem key={p.slug} variant="spring">
              <HoverLift lift={-4}>
                <article
                  className="group relative overflow-hidden rounded-sm border bg-white"
                  style={{ borderColor: "rgba(26,22,18,0.12)" }}
                >
                  <div
                    className="relative"
                    style={{ background: PALETTE.cream, aspectRatio: "4/5" }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <div
                      className="font-sans text-xs uppercase tracking-widest"
                      style={{ color: PALETTE.gold }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-neutral-700">
                      {p.summary}
                    </p>
                  </div>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Gallery + clients */}
      <section
        className="py-24"
        style={{ background: PALETTE.ink, color: PALETTE.cream }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <p
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: PALETTE.gold }}
            >
              Realizacje
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
              Marki, które nam zaufały
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-display text-2xl italic">
            {clients.map((c, i) => (
              <span
                key={c}
                style={{
                  color: i % 2 === 0 ? PALETTE.cream : PALETTE.gold,
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
            {gallery.slice(0, 12).map((g) => (
              <div
                key={g.src}
                className="relative aspect-square overflow-hidden rounded-sm"
                style={{ background: "#2a2522" }}
              >
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover opacity-80 transition-opacity hover:opacity-100"
                  sizes="(max-width: 640px) 50vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — editorial */}
      <section
        className="border-y py-24"
        style={{
          borderColor: "rgba(26,22,18,0.12)",
          background: PALETTE.cream,
        }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p
                  className="font-sans text-xs uppercase tracking-[0.4em]"
                  style={{ color: PALETTE.gold }}
                >
                  Często pytane
                </p>
                <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
                  Sześć pytań,
                  <br />
                  <span className="italic" style={{ color: PALETTE.red }}>
                    sześć odpowiedzi.
                  </span>
                </h2>
              </div>
              <p className="font-sans text-sm text-neutral-700 lg:col-span-5 lg:col-start-8">
                Najczęstsze pytania, które słyszymy od klientów. Czegoś brakuje?
                Zadzwoń — odbieramy osobiście.
              </p>
            </div>
          </Reveal>

          <dl className="mt-16 divide-y" style={{ borderColor: "rgba(26,22,18,0.12)" }}>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="grid grid-cols-12 items-baseline gap-6 border-t py-8"
                style={{ borderColor: "rgba(26,22,18,0.12)" }}
              >
                <dt
                  className="col-span-2 font-display text-3xl italic font-bold tabular-nums lg:col-span-1"
                  style={{ color: PALETTE.red }}
                >
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <dt className="col-span-10 font-display text-2xl font-semibold lg:col-span-4">
                  {f.q}
                </dt>
                <dd className="col-span-12 font-sans text-base leading-relaxed text-neutral-700 lg:col-span-7">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24"
        style={{ background: PALETTE.paper }}
      >
        <div className="mx-auto max-w-4xl px-8 text-center">
          <Reveal y={20} duration={0.7}>
            <p
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: PALETTE.gold }}
            >
              Kontakt
            </p>
            <h2 className="mt-6 font-display text-5xl font-bold leading-tight">
              Zaprojektujmy
              <br />
              <span className="italic" style={{ color: PALETTE.red }}>
                Twoją flagę.
              </span>
            </h2>
          </Reveal>
          <p className="mx-auto mt-8 max-w-xl font-sans text-lg text-neutral-700">
            Zadzwoń, napisz lub odwiedź nasz warsztat w Osielsku. Pierwszy projekt
            i wycena otrzymasz w ciągu jednego dnia roboczego.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={company.phoneHref}
              className="rounded-full px-8 py-3.5 font-sans text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
              style={{ background: PALETTE.red }}
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.primaryEmail}`}
              className="rounded-full border px-8 py-3.5 font-sans text-sm font-medium transition-colors"
              style={{ borderColor: PALETTE.ink }}
            >
              {company.primaryEmail}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ borderColor: "rgba(26,22,18,0.12)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 font-sans text-sm text-neutral-600 sm:flex-row sm:justify-between">
          <div>
            © 1984–{new Date().getFullYear()} {company.legalName} · {company.city},{" "}
            {company.address} · NIP {company.nip}
          </div>
          <div>{company.hours.weekdays} · {company.hours.saturday}</div>
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

