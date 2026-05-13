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
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  TextReveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-9 · Rzemiosło / artisan" };

const TERRACOTTA = "#b85c38";
const SAGE = "#7d8471";
const INK = "#2a221c";
const IVORY = "#f6f0e4";
const PAPER = "#fdfaf3";

export default function Example9() {
  return (
    <MotionRoot>
    <main
      style={{ background: PAPER, color: INK }}
      className="min-h-screen font-warm"
    >
      <BackLink />

      {/* Header */}
      <header
        className="border-b"
        style={{ borderColor: "rgba(42,34,28,0.12)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-warm text-2xl italic" style={{ color: INK }}>
              J<span style={{ color: TERRACOTTA }}>·</span>ART
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-600">
              Rzemiosło · od 1984
            </span>
          </Link>
          <nav className="hidden gap-8 font-warm text-sm md:flex">
            {["Pracownia", "Rzemiosło", "Katalog", "Galeria", "Kontakt"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="border-b border-transparent hover:border-current"
                >
                  {l}
                </a>
              )
            )}
          </nav>
          <a
            href={company.phoneHref}
            className="rounded-full px-5 py-2 font-sans text-sm font-medium text-white"
            style={{ background: TERRACOTTA }}
          >
            Zamów wycenę
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-8 pt-20 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p
                className="font-sans text-xs uppercase tracking-[0.4em]"
                style={{ color: TERRACOTTA }}
              >
                Rodzinna manufaktura · Osielsko
              </p>
              <h1 className="mt-8 font-warm text-[clamp(2.8rem,6vw,5.5rem)] italic font-medium leading-[1.05] tracking-tight">
                <TextReveal text="Flagi szyte" stagger={0.09} duration={0.9} />
                <br />
                <span className="font-bold not-italic">
                  <TextReveal
                    text="ręcznie,"
                    delay={0.4}
                    stagger={0.09}
                    duration={0.9}
                  />
                </span>
                <br />
                <TextReveal
                  text="z miłością do"
                  delay={0.8}
                  stagger={0.09}
                  duration={0.9}
                />
                <br />
                <span style={{ color: TERRACOTTA }}>
                  <TextReveal
                    text="materiału."
                    delay={1.2}
                    stagger={0.09}
                    duration={0.9}
                  />
                </span>
              </h1>
              <p className="mt-10 max-w-xl font-warm text-lg leading-relaxed text-neutral-800">
                W naszej pracowni w Osielsku każda flaga przechodzi przez te same
                ręce, które szyły pierwsze zamówienia w 1984 roku. To nie jest
                produkcja taśmowa. To rzemiosło, które chcemy zachować.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="#oferta"
                  className="rounded-full px-7 py-3.5 font-sans text-sm font-medium text-white"
                  style={{ background: INK }}
                >
                  Zobacz katalog
                </a>
                <a
                  href={company.phoneHref}
                  className="rounded-full border-2 px-7 py-3.5 font-sans text-sm font-medium"
                  style={{ borderColor: INK }}
                >
                  Porozmawiajmy · {company.phone}
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div
                className="absolute -inset-4 -z-10 rounded-full opacity-50 blur-2xl"
                style={{ background: TERRACOTTA }}
              />
              <div
                className="relative overflow-hidden rounded-[2rem] shadow-2xl"
                style={{ aspectRatio: "4/5", background: IVORY }}
              >
                <Image
                  src="https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png"
                  alt="Flagi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div
                  className="absolute -bottom-2 -right-2 rotate-[6deg] rounded-2xl px-4 py-2 font-warm italic shadow-xl"
                  style={{ background: IVORY, color: INK }}
                >
                  <span style={{ color: TERRACOTTA }}>♥</span> est. 1984
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        className="relative px-8 py-24"
        style={{ background: IVORY }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: TERRACOTTA }}
            >
              O pracowni
            </div>
            <h2 className="mt-4 font-warm text-4xl italic leading-tight">
              Cztery dekady.
              <br />
              <span className="font-bold not-italic">Jedna pracownia.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-warm text-xl leading-relaxed text-neutral-800">
              {aboutShort}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div
                className="border-l-2 pl-4"
                style={{ borderColor: TERRACOTTA }}
              >
                <div className="font-warm text-3xl italic font-bold">
                  42 lata
                </div>
                <div className="font-sans text-sm text-neutral-700">
                  ciągłej produkcji od 1984
                </div>
              </div>
              <div
                className="border-l-2 pl-4"
                style={{ borderColor: SAGE }}
              >
                <div className="font-warm text-3xl italic font-bold">
                  100%
                </div>
                <div className="font-sans text-sm text-neutral-700">
                  wykonanie w Osielsku, ręczna kontrola
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques — process */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal y={20} duration={0.7}>
            <div
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: TERRACOTTA }}
            >
              Rzemiosło · cztery techniki
            </div>
            <h2 className="mt-4 font-warm text-5xl italic leading-tight">
              Od projektu do
              <span className="font-bold not-italic"> trwałej barwy.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-4">
            {techniques.map((t, i) => (
              <div key={t.name} className="relative">
                <div
                  className="font-warm text-7xl italic font-bold opacity-15"
                  style={{ color: TERRACOTTA }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="-mt-8 font-warm text-2xl font-bold">
                  {t.name}
                </h3>
                <p className="mt-3 font-warm text-base leading-relaxed text-neutral-700">
                  {t.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="oferta"
        className="px-8 py-24"
        style={{ background: IVORY }}
      >
        <div className="mx-auto max-w-6xl">
          <Reveal y={20} duration={0.7}>
            <div className="flex items-end justify-between">
              <div>
                <div
                  className="font-sans text-xs uppercase tracking-[0.4em]"
                  style={{ color: TERRACOTTA }}
                >
                  Katalog
                </div>
                <h2 className="mt-4 font-warm text-5xl italic leading-tight">
                  Każdy produkt
                  <br />
                  <span className="font-bold not-italic">z naszych rąk.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p, i) => {
              const techBadges = [
                ["Sitodruk", "Sublimacja"],
                ["Druk cyfrowy"],
                ["Frontlit", "Mesh"],
                ["Sitodruk", "Satyna"],
                ["Sitodruk"],
                ["Aluminium", "Włókno szkl."],
                ["6–20 kg"],
                ["Drewno", "Metal"],
              ];
              return (
                <article
                  key={p.slug}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    boxShadow: "0 4px 24px -8px rgba(42,34,28,0.1)",
                  }}
                >
                  {/* Number badge */}
                  <div
                    className="absolute left-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full font-warm text-base font-bold italic shadow-md"
                    style={{ background: IVORY, color: TERRACOTTA }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{ background: IVORY }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {techBadges[i % techBadges.length].map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-2.5 py-1 font-sans text-[10px] uppercase tracking-widest backdrop-blur"
                          style={{
                            background: "rgba(255,255,255,0.9)",
                            color: INK,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-warm text-2xl font-bold">{p.title}</h3>
                      <span
                        className="font-sans text-[10px] uppercase tracking-widest"
                        style={{ color: SAGE }}
                      >
                        {techBadges[i % techBadges.length][0]}
                      </span>
                    </div>
                    <p className="mt-3 font-warm text-base leading-relaxed text-neutral-700">
                      {p.description}
                    </p>
                    <div
                      className="mt-5 flex items-center justify-between border-t pt-4 font-sans text-sm font-medium"
                      style={{ borderColor: "rgba(42,34,28,0.1)" }}
                    >
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 hover:gap-3"
                        style={{ color: TERRACOTTA }}
                      >
                        Karta produktu
                        <span aria-hidden>→</span>
                      </a>
                      <a
                        href={company.phoneHref}
                        className="text-neutral-500 hover:text-neutral-900"
                      >
                        wycena
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery with warm tones */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal y={20} duration={0.7}>
            <div
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: TERRACOTTA }}
            >
              Z naszej pracowni
            </div>
            <h2 className="mt-4 font-warm text-5xl italic leading-tight">
              Galeria realizacji.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g) => (
              <figure
                key={g.src}
                className="group relative aspect-square overflow-hidden rounded-2xl"
                style={{ background: IVORY }}
              >
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover sepia-[0.1] transition-all duration-500 group-hover:sepia-0 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {g.client && (
                  <figcaption
                    className="absolute inset-x-0 bottom-0 px-3 py-2 font-warm text-xs italic text-white"
                    style={{
                      background: "linear-gradient(to top, rgba(42,34,28,0.85), transparent)",
                    }}
                  >
                    {g.client}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Z pracowni — letter from the founder */}
      <section className="relative overflow-hidden px-8 py-24" style={{ background: PAPER }}>
        <div
          className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: TERRACOTTA }}
        />
        <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div
              className="font-sans text-xs uppercase tracking-[0.4em]"
              style={{ color: TERRACOTTA }}
            >
              List z pracowni
            </div>
            <h2 className="mt-4 font-warm text-4xl italic leading-tight">
              Słowo od
              <br />
              <span className="font-bold not-italic">założyciela.</span>
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div
                className="grid h-14 w-14 place-items-center rounded-full font-warm text-2xl italic font-bold"
                style={{ background: IVORY, color: TERRACOTTA }}
              >
                JW
              </div>
              <div>
                <div className="font-warm text-base font-bold">Janusz Wlekliński</div>
                <div className="font-sans text-xs uppercase tracking-widest text-neutral-600">
                  Założyciel · od 1984
                </div>
              </div>
            </div>
          </div>
          <Reveal y={32} duration={1.1} className="lg:col-span-7 lg:col-start-6">
            <div
              className="relative rounded-3xl p-10 shadow-lg"
              style={{ background: IVORY, borderLeft: `4px solid ${TERRACOTTA}` }}
            >
              <p className="font-warm text-2xl italic leading-relaxed text-neutral-800">
                „Zaczynaliśmy w 1984 roku, kiedy szyło się ręcznie i mierzyło
                metrówką. Wiele się od tego czasu zmieniło, ale jedna rzecz
                pozostała — każdą flagę widzimy zanim pójdzie do klienta.
              </p>
              <p className="mt-6 font-warm text-2xl italic leading-relaxed text-neutral-800">
                Jeżeli zastanawiasz się, czy nasza pracownia podoła Twojemu
                projektowi — po prostu zadzwoń. Najczęściej odbieram osobiście."
              </p>
              <div className="mt-8 flex items-baseline justify-between border-t pt-6" style={{ borderColor: "rgba(42,34,28,0.15)" }}>
                <div
                  className="font-warm text-3xl italic"
                  style={{ color: TERRACOTTA }}
                >
                  J. Wlekliński
                </div>
                <a
                  href={company.phoneHref}
                  className="font-sans text-sm font-medium hover:underline"
                  style={{ color: INK }}
                >
                  {company.phone} →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      <section
        className="px-8 py-24"
        style={{ background: INK, color: IVORY }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="font-sans text-xs uppercase tracking-[0.4em]" style={{ color: TERRACOTTA }}>
            Marki, które wybrały rzemiosło
          </div>
          <div className="mt-10 columns-2 gap-12 font-warm text-3xl italic md:columns-3 lg:columns-4">
            {clients.map((c) => (
              <div key={c} className="break-inside-avoid py-2">
                {c}
                <span className="text-neutral-500"> ·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — warm craft style */}
      <section className="px-8 py-24" style={{ background: IVORY }}>
        <div className="mx-auto max-w-6xl">
          <Reveal y={20} duration={0.7}>
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div
                  className="font-sans text-xs uppercase tracking-[0.4em]"
                  style={{ color: TERRACOTTA }}
                >
                  Listy z pracowni
                </div>
                <h2 className="mt-4 font-warm text-5xl italic leading-tight">
                  Częste pytania
                  <br />
                  <span className="font-bold not-italic">naszych klientów.</span>
                </h2>
              </div>
              <p
                className="font-warm text-lg italic text-neutral-700 lg:col-span-6 lg:col-start-7"
              >
                Wybór pytań, które wracają najczęściej. Nadal masz wątpliwości —
                napisz albo zajrzyj do warsztatu.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid items-start gap-6 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-3xl bg-white p-8 shadow-sm"
                style={{ borderLeft: `4px solid ${TERRACOTTA}` }}
              >
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 list-none">
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-warm text-3xl italic font-bold leading-none"
                      style={{ color: TERRACOTTA }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-warm text-xl font-bold">{f.q}</span>
                  </div>
                  <span
                    className="text-2xl text-neutral-400 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-5 border-t pt-5 font-warm text-base leading-relaxed text-neutral-700"
                  style={{ borderColor: "rgba(42,34,28,0.12)" }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 border-b-2 pb-1 font-warm text-base italic"
              style={{ borderColor: TERRACOTTA, color: TERRACOTTA }}
            >
              Nie znalazłeś odpowiedzi? Zadzwoń — {company.phone}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24" style={{ background: PAPER }}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={20} duration={0.7}>
            <div
              className="mx-auto h-px w-24"
              style={{ background: TERRACOTTA }}
            />
            <h2 className="mt-8 font-warm text-5xl italic leading-tight sm:text-6xl">
              Porozmawiajmy
              <br />
              <span className="font-bold not-italic" style={{ color: TERRACOTTA }}>
                o Twoim projekcie.
              </span>
            </h2>
          </Reveal>
          <p className="mx-auto mt-6 max-w-xl font-warm text-xl text-neutral-700">
            Przyjedź do pracowni w Osielsku, zadzwoń lub napisz. Pierwsza
            wycena i projekt — bezpłatnie.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={company.phoneHref}
              className="rounded-full px-8 py-4 font-sans text-sm font-medium text-white"
              style={{ background: TERRACOTTA }}
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.primaryEmail}`}
              className="rounded-full border-2 px-8 py-4 font-sans text-sm font-medium"
              style={{ borderColor: INK }}
            >
              {company.primaryEmail}
            </a>
          </div>
          <p className="mt-8 font-warm italic text-neutral-600">
            {company.address}, {company.postal} {company.city}
          </p>
        </div>
      </section>

      <footer style={{ background: INK, color: IVORY }} className="px-8 pt-16 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-warm text-3xl italic">
                J<span style={{ color: TERRACOTTA }}>·</span>ART
              </div>
              <p className="mt-3 font-sans text-xs uppercase tracking-[0.3em] opacity-60">
                Manufaktura flag · Osielsko · od 1984
              </p>
              <p className="mt-6 font-warm text-base leading-relaxed text-neutral-300">
                Rodzinny warsztat. Cztery techniki druku, jeden standard
                staranności. Zapraszamy do pracowni.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
                Katalog
              </div>
              <ul className="mt-4 space-y-2 font-warm text-sm">
                {productCategories.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <a href="#" className="hover:underline">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
                Pracownia
              </div>
              <ul className="mt-4 space-y-2 font-warm text-sm">
                <li><a href="#" className="hover:underline">O nas</a></li>
                <li><a href="#" className="hover:underline">Rzemiosło</a></li>
                <li><a href="#" className="hover:underline">Realizacje</a></li>
                <li><a href="#" className="hover:underline">Cennik</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
                Kontakt
              </div>
              <div className="mt-4 space-y-3 font-warm text-sm">
                <div>
                  <a href={company.phoneHref} className="hover:underline">
                    {company.phone}
                  </a>
                </div>
                <div>
                  {company.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:underline">
                      {e}
                    </a>
                  ))}
                </div>
                <div className="text-neutral-400">
                  {company.address}
                  <br />
                  {company.postal} {company.city}
                </div>
                <div className="text-neutral-400">
                  {company.hours.weekdays}
                  <br />
                  {company.hours.saturday}{" "}
                  <span className="text-neutral-500">({company.hours.note})</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 font-sans text-xs text-neutral-400 sm:flex-row sm:justify-between">
            <div>
              © 1984—{new Date().getFullYear()} {company.legalName} · NIP{" "}
              {company.nip}
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Regulamin</a>
              <a href="#" className="hover:underline">RODO</a>
              <a href="#" className="hover:underline">Polityka prywatności</a>
            </div>
          </div>
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
      className="fixed left-4 top-4 z-50 rounded-full bg-white/95 px-4 py-2 font-mono text-xs uppercase tracking-widest text-neutral-800 shadow-md ring-1 ring-black/10 hover:bg-white"
    >
      ← galeria
    </Link>
  );
}
