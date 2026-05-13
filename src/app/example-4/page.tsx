import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  productCategories,
  clients,
  valueProps,
  gallery,
  aboutShort,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  Stagger,
  StaggerItem,
  TextReveal,
  Pulse,
  MotionAccordion,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-4 · Mroczne kino · premium" };

const RED = "#ef3b46";

export default function Example4() {
  return (
    <MotionRoot>
    <main className="relative min-h-screen bg-[#08080a] font-sans text-neutral-100">

      {/* Header — sticky, dark-glass blur */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08080a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">J-ART</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              EST · 1984
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm text-neutral-400 md:flex">
            {["Oferta", "Realizacje", "Klienci", "Kontakt"].map((l) => (
              <a key={l} href="#" className="hover:text-white">
                {l}
              </a>
            ))}
          </nav>
          <a
            href={company.phoneHref}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm backdrop-blur-md hover:bg-white/10"
          >
            Wycena →
          </a>
        </div>
      </header>

      {/* Content wrapper — overflow-hidden contains AmbientGlow blobs.
         Kept separate from <main> so the sticky header above isn't broken by overflow rules. */}
      <div className="relative overflow-hidden">
        <AmbientGlow />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 pt-24 pb-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal y={10} duration={0.6}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                <Pulse
                  className="h-1.5 w-1.5 rounded-full"
                  scale={[1, 1.6, 1]}
                  opacity={[0.8, 1, 0.8]}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{ background: RED, boxShadow: `0 0 12px ${RED}` }}
                  />
                </Pulse>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-300">
                  Nowe realizacje · Yamaha · 2026
                </span>
              </div>
            </Reveal>
            <h1 className="mt-10 text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              <TextReveal text="Premium flagi" stagger={0.08} duration={0.8} />
              <br />
              <TextReveal
                text="dla marek, które"
                delay={0.3}
                stagger={0.08}
                duration={0.8}
              />
              <br />
              <span style={{ color: RED }}>
                <TextReveal
                  text="nie wybaczają błędów."
                  delay={0.7}
                  stagger={0.08}
                  duration={0.8}
                />
              </span>
            </h1>
            <Reveal delay={1.4} y={20}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-neutral-400">
                Producent flag firmowych z 42-letnim doświadczeniem. Realizujemy
                projekty dla koncernów motoryzacyjnych, samorządów i marek
                sportowych — z pełną kontrolą jakości i dyskrecją.
              </p>
            </Reveal>
            <Reveal
              delay={1.6}
              y={12}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#oferta"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_40px_-10px_rgba(239,59,70,0.6)] transition-shadow hover:shadow-[0_0_60px_-10px_rgba(239,59,70,0.9)]"
                style={{ background: RED }}
              >
                Zobacz portfolio
              </a>
              <a
                href={company.phoneHref}
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10"
              >
                Bezpośredni kontakt
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.6} y={36} duration={1} className="relative lg:col-span-5">
            <div
              className="absolute -inset-8 rounded-full opacity-40 blur-3xl"
              style={{ background: `radial-gradient(circle, ${RED}, transparent 60%)` }}
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 backdrop-blur">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1618530242302-4c5a9094db4b?auto=format&fit=crop&w=1600&q=85"
                  alt="Flaga firmowa na maszcie — realizacja Yamaha"
                  fill
                  className="object-cover opacity-95"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    Realizacja · 09/2026
                  </div>
                  <div className="mt-2 text-lg font-medium">
                    Yamaha — sitodruk masztowy
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {gallery.slice(0, 3).map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                >
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    className="object-cover opacity-80 hover:opacity-100"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats glassmorphism */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 pb-32">
        <Stagger stagger={0.1} className="grid gap-4 md:grid-cols-4">
          {valueProps.map((v) => (
            <StaggerItem
              key={v.label}
              variant="spring"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                {v.label}
              </div>
              <div className="mt-4 text-4xl font-semibold tracking-tight">
                {v.value}
              </div>
              <div className="mt-1 text-sm text-neutral-400">{v.detail}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Products */}
      <section
        id="oferta"
        className="relative z-10 border-y border-white/5"
        style={{ background: "rgba(255,255,255,0.015)" }}
      >
        <div className="mx-auto max-w-7xl px-8 py-24">
          <Reveal y={20} duration={0.7}>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  — Oferta
                </div>
                <h2 className="mt-6 text-5xl font-semibold tracking-tight">
                  Osiem linii produktów
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((p) => (
              <article
                key={p.slug}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1 backdrop-blur"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="px-4 py-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-400">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case study deep-dive */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          — Studium przypadku · 2026·Q1
        </div>
        <div className="mt-6 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#10b981" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-300">
                Klient — Yamaha · Salony dealerskie · PL
              </span>
            </div>
            <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              50 flag masztowych
              <br />
              <span style={{ color: RED }}>w sieci 22 salonów.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-neutral-300">
              Sitodrukowane flagi z aktualną identyfikacją Yamaha Motor PL — od
              projektu graficznego po dostawę bezpośrednio do każdego salonu.
              Czas realizacji: 12 dni roboczych.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              {[
                { v: "50 szt.", l: "flag masztowych" },
                { v: "22", l: "salony w PL" },
                { v: "12 dni", l: "od briefu do dostawy" },
                { v: "100%", l: "akceptacja Q1" },
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <div className="text-2xl font-semibold tracking-tight" style={{ color: RED }}>
                    {m.v}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-white/10"
              >
                Zobacz pełną historię →
              </a>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500 self-center">
                NDA · niektóre dane utajnione
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div
              className="absolute -inset-8 -z-10 rounded-full opacity-30 blur-3xl"
              style={{ background: `radial-gradient(circle, ${RED}, transparent 60%)` }}
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=85"
                alt="Studium przypadku — Yamaha · sitodruk masztowy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-300">
                  Technika
                </div>
                <div className="mt-2 text-xl font-medium">Sitodruk masztowy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal y={20} duration={0.7} className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              — O firmie
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight leading-tight">
              Familia, która szyje flagi.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-xl leading-relaxed text-neutral-300">
              {aboutShort}
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="relative z-10 border-y border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            — Zaufali nam
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6 text-xl font-medium text-neutral-300">
            {clients.map((c, i) => (
              <span key={c} className={i === 0 ? "" : "text-neutral-500"}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — glassmorphism cards */}
      <section className="relative z-10 border-y border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal y={20} duration={0.7} className="lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                — Często pytane
              </div>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Pytania od
                <br />
                <span style={{ color: RED }}>klientów premium.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base text-neutral-400">
                Sześć tematów, które wracają najczęściej. Brakuje czegoś?
                Zadzwoń — pierwsza konsultacja techniczna bezpłatnie.
              </p>
              <a
                href={company.phoneHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm backdrop-blur hover:bg-white/10"
              >
                {company.phone}
                <span aria-hidden>→</span>
              </a>
            </Reveal>

            <div className="lg:col-span-8">
              <div className="grid items-start gap-3 sm:grid-cols-2">
                {faqs.map((f, i) => (
                  <MotionAccordion
                    key={f.q}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-colors data-[open=true]:bg-white/[0.07]"
                    summary={
                      <div className="flex items-baseline justify-between gap-3">
                        <div className="flex items-baseline gap-3">
                          <span
                            className="font-mono text-[10px] uppercase tracking-[0.25em]"
                            style={{ color: RED }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-base font-semibold leading-snug">
                            {f.q}
                          </span>
                        </div>
                        <span
                          className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-white/20 text-xs transition-transform group-data-[open=true]:rotate-45"
                          aria-hidden
                        >
                          +
                        </span>
                      </div>
                    }
                  >
                    <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-neutral-300">
                      {f.a}
                    </p>
                  </MotionAccordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 py-32 text-center">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-64 max-w-2xl -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: `radial-gradient(circle, ${RED}, transparent 60%)` }}
        />
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          — Kontakt
        </div>
        <h2 className="mt-8 text-5xl font-semibold tracking-tight leading-tight sm:text-7xl">
          Skontaktujmy się.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          Wycena projektu w ciągu jednego dnia roboczego. Pierwsza próba druku
          bezpłatnie dla zamówień powyżej 10 sztuk.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={company.phoneHref}
            className="rounded-full px-8 py-4 text-sm font-medium text-white shadow-[0_0_40px_-5px_rgba(239,59,70,0.6)]"
            style={{ background: RED }}
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.primaryEmail}`}
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium backdrop-blur hover:bg-white/10"
          >
            {company.primaryEmail}
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-8 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 sm:flex-row sm:justify-between">
          <div>
            © 1984—{new Date().getFullYear()} · {company.legalName} · NIP{" "}
            {company.nip}
          </div>
          <div>
            {company.city} · {company.region}
          </div>
        </div>
      </footer>
      </div>
    </main>
    </MotionRoot>
  );
}

function AmbientGlow() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-40 -right-40 -z-0 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ef3b46, transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute top-[60%] -left-40 -z-0 h-[36rem] w-[36rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #2b3aff, transparent 60%)" }}
      />
    </>
  );
}

