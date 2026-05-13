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
  pricing,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  Stagger,
  StaggerItem,
  HoverLift,
  CountUp,
  MotionAccordion,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-5 · Bento w hero + sekcje" };

const RED = "#dc143c";
const INK = "#0a0a0a";
const BG = "#f4f4f5";

export default function Example5() {
  return (
    <MotionRoot>
    <main style={{ background: BG, color: INK }} className="min-h-screen font-sans">

      {/* Top nav */}
      <header className="sticky top-0 z-30 backdrop-blur" style={{ background: "rgba(244,244,245,0.75)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-lg font-bold">J-ART</span>
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              Flagi Osielsko
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            {["O nas", "Oferta", "Realizacje", "Cennik", "Kontakt"].map((l) => (
              <a key={l} href="#" className="hover:text-neutral-900">
                {l}
              </a>
            ))}
          </nav>
          <a
            href={company.phoneHref}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Zamów wycenę
          </a>
        </div>
      </header>

      {/* === HERO BENTO === sticky-stack layer 1 (mobile: relative only — cards stack tall) */}
      <section
        className="relative z-[1] px-6 pt-16 pb-24 sm:pt-24 lg:sticky lg:top-0"
        style={{ background: BG }}
      >
        <div className="mx-auto max-w-7xl">
        <Stagger
          stagger={0.08}
          className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 sm:grid-cols-6 lg:grid-cols-12"
        >
          {/* Main hero card */}
          <StaggerItem
            variant="spring"
            className="relative col-span-1 row-span-3 overflow-hidden rounded-3xl bg-white p-8 shadow-sm sm:col-span-6 lg:col-span-8"
            style={{ minHeight: 460 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Od 1984 roku · Manufaktura
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Rodzinna
              <br />
              manufaktura
              <br />
              <span style={{ color: RED }}>flag.</span>
            </h1>
            <p className="mt-8 max-w-md text-base text-neutral-600">
              Produkujemy flagi firmowe, narodowe i klubowe — z poliestru premium,
              z gwarancją trwałości przy wietrze do 60 km/h.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#oferta"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Zobacz ofertę
              </a>
              <a
                href={company.phoneHref}
                className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium hover:bg-neutral-100"
              >
                {company.phone}
              </a>
            </div>
            <div
              className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full"
              style={{ background: RED, opacity: 0.05 }}
            />
          </StaggerItem>

          {/* Stat dark */}
          <StaggerItem
            variant="spring"
            className="col-span-1 row-span-1 rounded-3xl bg-neutral-900 p-6 text-white shadow-sm sm:col-span-3 lg:col-span-4"
          >
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              Doświadczenie
            </div>
            <div className="mt-4 text-6xl font-bold tracking-tight tabular-nums">
              <CountUp to={42} duration={1.8} />
            </div>
            <div className="mt-1 text-sm text-neutral-400">lata na rynku</div>
          </StaggerItem>

          {/* Stat red */}
          <StaggerItem
            variant="spring"
            className="col-span-1 row-span-1 rounded-3xl p-6 text-white shadow-sm sm:col-span-3 lg:col-span-4"
            style={{ background: RED }}
          >
            <div className="text-xs uppercase tracking-widest opacity-80">
              Realizacje dla
            </div>
            <div className="mt-4 text-2xl font-semibold leading-tight">
              Nissan · Yamaha
              <br />
              Prime Food · Pixel
            </div>
            <div className="mt-2 text-sm opacity-80">+ 7 marek</div>
          </StaggerItem>

          {/* Image card */}
          <StaggerItem
            variant="spring"
            className="col-span-1 row-span-1 overflow-hidden rounded-3xl bg-white shadow-sm sm:col-span-3 lg:col-span-4"
          >
            <div className="relative h-full min-h-[160px]">
              <Image
                src="https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png"
                alt="Linia premium"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-[10px] uppercase tracking-widest opacity-80">
                  Linia premium
                </div>
                <div className="text-lg font-semibold">Flagi gabinetowe SILVER</div>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
        </div>
      </section>

      {/* === SECTION: About === positioned (z=2) but not pinned (4/5 portrait image card pushes section past viewport) */}
      <Section z={2} sticky={false} eyebrow="01 · O firmie" title="Czterdzieści dwa lata. Jedna rodzina." background="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal y={28} duration={0.9} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="https://flagiosielsko.pl/wp-content/uploads/2026/03/urzad-wojewodzki-150x150.png"
                alt="Realizacja dla urzędu wojewódzkiego"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
          <Reveal y={20} duration={0.7} delay={0.15} className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-neutral-800">
              {aboutShort}
            </p>
            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              Produkujemy flagi dla klientów krajowych i zagranicznych — od
              koncernów motoryzacyjnych po samorządy. Każdą flagę mierzymy ręcznie
              przed wysyłką.
            </p>
            <Stagger
              stagger={0.08}
              className="mt-10 grid gap-6 sm:grid-cols-2"
            >
              {valueProps.slice(0, 4).map((v) => {
                const m = v.value.match(/^([\d,]+)(.*)$/);
                const isNum = m !== null;
                const num = isNum ? parseInt(m[1], 10) : 0;
                const suffix = isNum ? m[2] : "";
                return (
                  <StaggerItem
                    key={v.label}
                    className="border-l-2 pl-4"
                    style={{ borderColor: RED }}
                  >
                    <div className="text-xs uppercase tracking-widest text-neutral-500">
                      {v.label}
                    </div>
                    <div className="mt-2 text-3xl font-bold tabular-nums">
                      {isNum ? (
                        <>
                          <CountUp to={num} duration={1.6} />
                          {suffix}
                        </>
                      ) : (
                        v.value
                      )}
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">{v.detail}</div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>
        </div>
      </Section>

      {/* === SECTION: Products === positioned (z=3) but not pinned (8 cards exceed viewport) */}
      <Section z={3} sticky={false} id="oferta" eyebrow="02 · Oferta" title="Osiem kategorii produktów" background="muted">
        <Stagger
          stagger={0.06}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {productCategories.map((p) => (
            <StaggerItem key={p.slug} variant="spring">
              <HoverLift lift={-6}>
                <a
                  href="#"
                  className="group block overflow-hidden rounded-3xl bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500">{p.summary}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: RED }}>
                      Zobacz <span aria-hidden>→</span>
                    </div>
                  </div>
                </a>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* === SECTION: Techniques === */}
      <Section z={4} eyebrow="03 · Rzemiosło" title="Cztery techniki druku" background="white">
        <Stagger
          stagger={0.1}
          className="grid gap-6 lg:grid-cols-4"
        >
          {techniques.map((t, i) => (
            <StaggerItem
              key={t.name}
              variant="spring"
              className="rounded-3xl border border-neutral-200 bg-white p-6"
            >
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Technika {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-2xl font-bold">{t.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t.short}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* === SECTION: Realizations / Gallery === positioned (z=5) but not pinned (16 figures) */}
      <Section
        z={5}
        sticky={false}
        eyebrow="04 · Realizacje"
        title="Marki, które nam zaufały"
        background="muted"
      >
        <Stagger
          stagger={0.04}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6"
        >
          {gallery.map((g) => (
            <StaggerItem key={g.src}>
              <figure className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 16vw"
                />
                {g.client && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {g.client}
                  </figcaption>
                )}
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          y={16}
          duration={0.7}
          delay={0.2}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-neutral-700"
        >
          {clients.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </Reveal>
      </Section>

      {/* === SECTION: Pricing === */}
      <Section
        z={6}
        eyebrow="05 · Cennik"
        title="Ceny brutto za sztukę"
        kicker="Standardowe rozmiary · pozostałe — wycena indywidualna"
        background="white"
      >
        <Stagger stagger={0.12} className="grid gap-6 lg:grid-cols-3">
          {pricing.groups.map((g, idx) => (
            <StaggerItem
              key={g.title}
              variant="spring"
              className={`rounded-3xl p-6 ${idx === 0 ? "text-white" : "bg-white border border-neutral-200"}`}
              style={idx === 0 ? { background: INK } : undefined}
            >
              <div className="text-xs uppercase tracking-widest" style={{ color: idx === 0 ? RED : "#737373" }}>
                {g.title}
              </div>
              <ul className={`mt-6 divide-y ${idx === 0 ? "divide-white/10" : "divide-neutral-200"}`}>
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex justify-between gap-3 py-3 text-sm tabular-nums"
                  >
                    <span className={idx === 0 ? "text-neutral-400" : "text-neutral-600"}>
                      {it.name}
                    </span>
                    <span className={idx === 0 ? "font-medium" : "font-medium"}>
                      {it.price}
                    </span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* === SECTION: FAQ — bento cards === positioned (z=7) but not pinned (cards expand) */}
      <Section z={7} sticky={false} eyebrow="06 · FAQ" title="Najczęściej zadawane pytania" background="white">
        <Stagger
          stagger={0.05}
          className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {faqs.map((f, i) => (
            <StaggerItem key={f.q}>
              <MotionAccordion
                className="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md data-[open=true]:shadow-md"
                summary={
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest"
                        style={{
                          background: i % 2 === 0 ? RED : INK,
                          color: "white",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold leading-snug">
                        {f.q}
                      </span>
                    </div>
                    <span
                      className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-neutral-100 text-base transition-transform group-data-[open=true]:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </div>
                }
              >
                <p className="mt-4 border-t border-neutral-100 pt-4 text-sm leading-relaxed text-neutral-600">
                  {f.a}
                </p>
              </MotionAccordion>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* === SECTION: CTA === sticky-stack layer 8 (mobile: relative only) */}
      <section
        className="relative z-[8] border-t border-neutral-900 px-6 py-24 shadow-[0_-16px_50px_-12px_rgba(0,0,0,0.35)] lg:sticky lg:top-0"
        style={{ background: INK }}
      >
        <Reveal y={28} duration={0.8} className="mx-auto max-w-4xl text-center text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            07 · Kontakt
          </p>
          <h2 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl">
            Zaprojektujmy <span style={{ color: RED }}>Twoją flagę.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-300">
            Pierwszy projekt i wycena — w ciągu jednego dnia roboczego.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={company.phoneHref}
              className="rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.primaryEmail}`}
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white hover:bg-white/10"
            >
              {company.primaryEmail}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer — positioned above CTA z=8 (which stays pinned until main's bottom) */}
      <footer className="relative z-[9] px-6 py-12" style={{ background: "#0a0a0a", color: "#a1a1aa" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="text-base font-bold text-white">J-ART</div>
            <p className="mt-3 text-xs leading-relaxed">
              Manufaktura flag · Osielsko
              <br />
              Od 1984 roku
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white">Adres</div>
            <p className="mt-3 text-xs leading-relaxed">
              {company.address}
              <br />
              {company.postal} {company.city}
              <br />
              NIP {company.nip}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white">Kontakt</div>
            <p className="mt-3 text-xs leading-relaxed">
              {company.phone}
              <br />
              {company.primaryEmail}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white">Godziny</div>
            <p className="mt-3 text-xs leading-relaxed">
              {company.hours.weekdays}
              <br />
              {company.hours.saturday}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs">
          © 1984—{new Date().getFullYear()} {company.legalName}
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

function Section({
  id,
  eyebrow,
  title,
  kicker,
  background,
  z,
  sticky = true,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  background: "white" | "muted";
  /** When provided, the section joins the stacking ladder at this z-index.
   *  Combined with `sticky` (default true) it also pins at top:0. Use
   *  `sticky={false}` for sections taller than the viewport — they stay
   *  in the ladder but scroll naturally so their bottom content is visible. */
  z?: number;
  sticky?: boolean;
  children: React.ReactNode;
}) {
  const positioned = z !== undefined;
  const pinned = positioned && sticky;
  return (
    <section
      id={id}
      className={
        positioned
          ? `relative ${pinned ? "lg:sticky lg:top-0" : ""} border-t border-neutral-200 px-6 py-24 shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]`
          : "px-6 py-24"
      }
      style={{
        background: background === "white" ? "white" : BG,
        zIndex: z,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal y={20} duration={0.7}>
          <header className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-neutral-200 pb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {title}
              </h2>
              {kicker && (
                <p className="mt-3 text-sm text-neutral-600">{kicker}</p>
              )}
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

