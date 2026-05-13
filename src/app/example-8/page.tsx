import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  aboutShort,
  productCategories,
  clients,
  gallery,
  valueProps,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  TextReveal,
  CountUp,
  Stagger,
  StaggerItem,
  MotionAccordion,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-8 · Patriotyczny hero" };

const PL_RED = "#dc143c";
const PL_RED_DEEP = "#b1102f";

export default function Example8() {
  return (
    <MotionRoot>
    <main className="min-h-screen bg-white font-sans text-neutral-900">

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-baseline gap-3 text-neutral-900">
            <span className="text-xl font-bold">J-ART</span>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Flagi Polski · od 1984
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-neutral-700 md:flex">
            {["Oferta", "Realizacje", "O nas", "Cennik", "FAQ", "Kontakt"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:text-neutral-900"
                  style={
                    l === "Cennik"
                      ? { color: PL_RED_DEEP }
                      : undefined
                  }
                >
                  {l}
                </a>
              )
            )}
          </nav>
          <a
            href={company.phoneHref}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: PL_RED_DEEP }}
          >
            Zamów wycenę
          </a>
        </div>
      </header>

      {/* Hero with Polish-flag bands */}
      <section className="relative isolate overflow-hidden bg-white pt-16 pb-0">
        <div className="relative mx-auto max-w-7xl px-8 pb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-700">
            Producent flag polskich · Osielsko
          </p>
          <h1 className="mt-8 text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.98] tracking-tight">
            <span className="block text-neutral-900">
              <TextReveal text="Biało-czerwona," stagger={0.08} duration={0.8} />
            </span>
            <span className="block" style={{ color: PL_RED_DEEP }}>
              <TextReveal
                text="szyta w Polsce."
                delay={0.5}
                stagger={0.08}
                duration={0.8}
              />
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-700">
            Flagi Polski, UE, miast i samorządów — z certyfikowanej tkaniny
            poliestrowej, z godłem RP lub bez. Wytrzymałość do 60 km/h wiatru.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cennik-pl"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-sm"
              style={{ background: PL_RED_DEEP }}
            >
              Zobacz cennik flag PL →
            </a>
            <a
              href={company.phoneHref}
              className="rounded-full border-2 border-neutral-900 px-7 py-3.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              {company.phone}
            </a>
          </div>
        </div>

        {/* Red band with flowing-flag SVG underneath */}
        <div className="relative h-44 sm:h-56" style={{ background: PL_RED }}>
          <FlowingFlag />
          <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl items-end justify-between gap-6 px-8 pb-8 text-white">
            <div className="font-display text-xl italic sm:text-2xl">
              „Każdy znak — szyty z dbałością o symbol."
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.3em] opacity-80 sm:block">
              — Pracownia J-ART, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-200 bg-white">
        <Stagger
          stagger={0.12}
          className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-neutral-200 px-8 md:grid-cols-4"
        >
          {valueProps.map((v, i) => {
            const numericMatch = v.value.match(/^([\d,]+)(.*)$/);
            const isCountable = numericMatch !== null;
            const num = isCountable ? parseInt(numericMatch[1], 10) : 0;
            const suffix = isCountable ? numericMatch[2] : "";
            return (
              <StaggerItem
                key={v.label}
                className="px-6 py-10 text-center first:pl-0 last:pr-0"
              >
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  {v.label}
                </div>
                <div
                  className="mt-4 text-5xl font-bold tracking-tight tabular-nums"
                  style={{ color: PL_RED_DEEP }}
                >
                  {isCountable ? (
                    <>
                      <CountUp to={num} duration={1.5 + i * 0.15} />
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
      </section>

      {/* About */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-12">
          <Reveal y={20} duration={0.7} className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              O firmie J-ART
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Rodzina,
              <br />
              <span style={{ color: PL_RED_DEEP }}>która zna swój fach.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-neutral-700">
              {aboutShort}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              Produkujemy flagi państwowe dla urzędów wojewódzkich, samorządów i
              instytucji publicznych — z dbałością o detal, jakiej wymaga symbol
              Rzeczypospolitej.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: PL_RED }}
                />
                <span>Certyfikowana tkanina poliester 110–120 g/m²</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: PL_RED }}
                />
                <span>Godło RP — z dokładnym odwzorowaniem proporcji</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: PL_RED }}
                />
                <span>Trwałość przy wietrze do 60 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dla instytucji */}
      <section className="border-y border-neutral-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: PL_RED_DEEP }}>
                  Dla instytucji publicznych
                </div>
                <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                  Urzędy, samorządy
                  <br />
                  i szkoły publiczne.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg leading-relaxed text-neutral-700">
                  Realizujemy zamówienia publiczne dla urzędów wojewódzkich,
                  gmin, instytucji państwowych i placówek oświatowych — z
                  wystawieniem faktury VAT, na podstawie zamówienia z trybu
                  bezprzetargowego lub przetargu.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Urzędy wojewódzkie",
                desc: "Flagi RP i UE z godłem na maszt, flagi miast wojewódzkich.",
                ref: "Urząd Wojewódzki Kujawsko-Pomorski",
              },
              {
                title: "Gminy i samorządy",
                desc: "Flagi gminne z herbem, flagi okolicznościowe, sztandary.",
                ref: "Gmina Osielsko",
              },
              {
                title: "Placówki oświatowe",
                desc: "Sztandary szkolne, flagi szkolne, proporczyki.",
                ref: "Szkoły podstawowe i średnie",
              },
              {
                title: "Instytucje państwowe",
                desc: "Flagi gabinetowe na stojaki, godła w ramach, sztandary.",
                ref: "Sądy, prokuratura, ZUS",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: PL_RED, color: "white" }}>
                  <span aria-hidden>★</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
                <div className="mt-4 border-t border-neutral-200 pt-3 text-xs uppercase tracking-widest text-neutral-500">
                  Przykład: {b.ref}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-neutral-50 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold">Procedura zamówienia publicznego</h3>
              <p className="mt-2 max-w-md text-sm text-neutral-600">
                Wystawiamy fakturę VAT, dokumentację techniczną i ofertę spełniającą
                wymogi zamówień publicznych do 130 000 zł netto.
              </p>
            </div>
            <a
              href={`mailto:${company.primaryEmail}?subject=Zapytanie%20instytucjonalne`}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ background: PL_RED_DEEP }}
            >
              Złóż zapytanie urzędowe →
            </a>
          </div>
        </div>
      </section>

      {/* PL flags pricing highlight */}
      <section id="cennik-pl" className="py-24" style={{ background: PL_RED }}>
        <div className="mx-auto max-w-7xl px-8 text-white">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal y={20} duration={0.7} className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] opacity-80">
                Flagi Polski · cennik
              </div>
              <h2 className="mt-4 text-5xl font-bold leading-tight">
                Cena, która nie udaje.
              </h2>
              <p className="mt-6 max-w-md text-lg opacity-90">
                Pełna transparentność — ceny brutto za 1 szt. Każda flaga z
                profesjonalnym obszyciem i taśmami wzmacniającymi.
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-8 text-neutral-900 shadow-2xl">
                <table className="w-full">
                  <tbody className="divide-y divide-neutral-200">
                    {[
                      ["Banderka 32 × 20 cm", "18,45 zł"],
                      ["110 × 70 cm na drzewiec", "24,60 zł"],
                      ["110 × 70 cm na maszt", "30,75 zł"],
                      ["110 × 70 z godłem na maszt", "55,35 zł"],
                      ["150 × 94 cm na maszt", "55,35 zł"],
                      ["200 × 125 cm na maszt", "88,56 zł"],
                      ["240 × 150 cm z godłem na maszt", "166,05 zł"],
                    ].map(([name, price]) => (
                      <tr key={name}>
                        <td className="py-3 text-sm">{name}</td>
                        <td
                          className="py-3 text-right text-sm font-semibold tabular-nums"
                          style={{ color: PL_RED_DEEP }}
                        >
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a
                  href="#"
                  className="mt-6 block rounded-full px-6 py-3 text-center text-sm font-semibold text-white"
                  style={{ background: PL_RED_DEEP }}
                >
                  Zobacz pełny cennik →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="oferta" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Pełna oferta
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Nie tylko flagi państw.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((p) => (
              <a
                key={p.slug}
                href="#"
                className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-neutral-50">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="border-t border-neutral-200 p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{p.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Clients + Gallery */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Realizacje dla instytucji i firm
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Pracujemy dla najbardziej wymagających klientów.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-xl font-semibold text-neutral-700">
            {clients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {gallery.slice(0, 12).map((g) => (
              <div
                key={g.src}
                className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal y={20} duration={0.7}>
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: PL_RED_DEEP }}
                >
                  Najczęściej zadawane pytania
                </div>
                <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                  Pytania, które
                  <br />
                  <span style={{ color: PL_RED_DEEP }}>słyszymy najczęściej.</span>
                </h2>
              </div>
              <p className="text-base text-neutral-700 lg:col-span-5 lg:col-start-8">
                Sześć tematów, które porusza większość naszych klientów — od
                osób prywatnych po urzędy. Nie znalazłeś odpowiedzi? Zadzwoń.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid items-start gap-4 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <MotionAccordion
                key={f.q}
                className="rounded-2xl border border-neutral-200 bg-white p-6 data-[open=true]:border-neutral-300 data-[open=true]:shadow-md"
                summary={
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums text-white"
                        style={{ background: PL_RED }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-base font-semibold leading-snug">
                        {f.q}
                      </span>
                    </div>
                    <span
                      className="text-xl text-neutral-400 transition-transform group-data-[open=true]:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </div>
                }
              >
                <p className="mt-4 border-t border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-700">
                  {f.a}
                </p>
              </MotionAccordion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: PL_RED_DEEP }}
      >
        <div className="mx-auto max-w-7xl px-8 text-center text-white">
          <Reveal y={20} duration={0.7}>
            <h2 className="text-5xl font-bold leading-tight sm:text-6xl">
              Zamów flagę Polski.
              <br />
              <span className="text-white/80">Lub jakąkolwiek inną.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
              Pierwszy projekt i wycena w ciągu jednego dnia roboczego. Wysyłka
              DPD i Paczkomat InPost.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={company.phoneHref}
              className="rounded-full bg-white px-8 py-4 text-base font-semibold"
              style={{ color: PL_RED_DEEP }}
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.primaryEmail}`}
              className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              {company.primaryEmail}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-8 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <div>© 1984—{new Date().getFullYear()} {company.legalName}</div>
          <div>
            {company.address}, {company.postal} {company.city} · NIP{" "}
            {company.nip}
          </div>
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

function FlowingFlag() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 Q300,20 600,80 T1200,80 L1200,400 L0,400 Z"
        fill="url(#wave)"
      />
      <path
        d="M0,180 Q300,120 600,180 T1200,180 L1200,400 L0,400 Z"
        fill="url(#wave)"
        opacity="0.6"
      />
    </svg>
  );
}

