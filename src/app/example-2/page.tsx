import type { Metadata } from "next";
import Image from "next/image";
import {
  company,
  aboutShort,
  productCategories,
  clients,
  valueProps,
  gallery,
  pricing,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  Stagger,
  StaggerItem,
  TextReveal,
  CountUp,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-2 · Szwajcarski minimalizm" };

const RED = "#dc143c";

export default function Example2() {
  return (
    <MotionRoot>
    <main className="relative bg-white font-sans text-neutral-900">

      {/* Header — sticky, above everything */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-5">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold tracking-tight">J-ART</span>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Flagi Osielsko
            </span>
          </div>
          <nav className="hidden gap-10 text-sm md:flex">
            {["Oferta", "Realizacje", "O nas", "Cennik", "FAQ", "Kontakt"].map(
              (l) => (
                <a key={l} href="#" className="hover:text-neutral-500">
                  {l}
                </a>
              )
            )}
          </nav>
          <a
            href={company.phoneHref}
            className="text-sm font-medium"
            style={{ color: RED }}
          >
            {company.phone} →
          </a>
        </div>
      </header>

      {/*
        STICKY-STACK CONTAINER
        Each <section> is sticky top:0, with an opaque background.
        As you scroll, later sections rise up from the bottom and visually
        cover the previous one (which stays "pinned" beneath).
      */}
      <div className="relative">
        {/* 1. HERO */}
        <section className="sticky top-0 z-[1] min-h-screen border-b border-neutral-200 bg-white">
          <div className="mx-auto grid h-full min-h-screen max-w-[1400px] grid-cols-12 items-center gap-6 px-10 py-32">
            <div className="col-span-12 lg:col-span-1">
              <div
                className="text-xs uppercase tracking-[0.3em] text-neutral-500"
                style={{ writingMode: "vertical-rl" } as React.CSSProperties}
              >
                01 / Strona główna
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-2">
              <h1 className="text-[clamp(3rem,8vw,8rem)] font-light leading-[0.92] tracking-[-0.04em]">
                <TextReveal text="Flagi" stagger={0.1} duration={0.9} />
                <br />
                <span className="font-semibold">
                  <TextReveal
                    text="precyzyjnie"
                    delay={0.3}
                    stagger={0.1}
                    duration={0.9}
                  />
                </span>
                <br />
                <span style={{ color: RED }}>
                  <TextReveal
                    text="wykonane."
                    delay={0.7}
                    stagger={0.1}
                    duration={0.9}
                  />
                </span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
              <p className="text-base leading-relaxed text-neutral-700">
                J-ART. Producent flag firmowych, narodowych, klubowych i
                gabinetowych z Osielska. Działamy od 1984 roku.
              </p>
              <a
                href="#oferta"
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium hover:gap-3"
              >
                Zobacz ofertę
                <span aria-hidden>→</span>
              </a>
              <div className="mt-16 flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                <span>Scroll</span>
                <span
                  aria-hidden
                  className="inline-block h-px w-10 bg-current opacity-60"
                />
                <span aria-hidden className="animate-bounce">↓</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STAT STRIP — sticky */}
        <section className="sticky top-0 z-[2] flex min-h-screen flex-col justify-center border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]">
          <Stagger
            stagger={0.15}
            className="mx-auto grid w-full max-w-[1400px] grid-cols-2 divide-x divide-neutral-200 md:grid-cols-4"
          >
            {valueProps.map((v, i) => {
              const numericMatch = v.value.match(/^([\d,]+)(.*)$/);
              const isCountable = numericMatch !== null;
              const num = isCountable ? parseInt(numericMatch[1], 10) : 0;
              const suffix = isCountable ? numericMatch[2] : "";
              return (
                <StaggerItem
                  key={v.label}
                  className="px-10 py-12 first:pl-10 last:pr-10"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {v.label}
                  </div>
                  <div className="mt-6 text-5xl font-light tracking-tight tabular-nums">
                    {isCountable ? (
                      <>
                        <CountUp to={num} duration={1.6 + i * 0.15} />
                        {suffix}
                      </>
                    ) : (
                      v.value
                    )}
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">{v.detail}</div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </section>

        {/* 3. ABOUT — sticky */}
        <section className="sticky top-0 z-[3] flex min-h-screen items-center border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]">
          <div className="mx-auto w-full max-w-[1400px] px-10 py-32">
            <Reveal y={20} duration={0.7}>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-2">
                  <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    02
                  </div>
                  <div className="mt-2 text-sm">O nas</div>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                  <p className="text-3xl font-light leading-tight tracking-tight text-neutral-900">
                    {aboutShort}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. PRODUCTS — natural-flow but positioned (z=4) so it covers pinned About (z=3) */}
        <section
          id="oferta"
          className="relative z-[4] border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]"
        >
          <div className="mx-auto max-w-[1400px] px-10 py-20">
            <Reveal y={20} duration={0.7} className="grid grid-cols-12 gap-6 pb-12">
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  03
                </div>
                <div className="mt-2 text-sm">Oferta</div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                <h2 className="text-5xl font-light leading-tight tracking-tight">
                  Osiem kategorii.
                  <br />
                  <span style={{ color: RED }}>Jeden standard jakości.</span>
                </h2>
              </div>
            </Reveal>

            <Stagger
              stagger={0.06}
              className="grid grid-cols-1 divide-y divide-neutral-200"
            >
              {productCategories.map((p, i) => (
                <StaggerItem
                  key={p.slug}
                  className="group grid grid-cols-12 items-center gap-6 py-8 transition-opacity hover:opacity-60"
                >
                  <div className="col-span-2 text-xs tabular-nums text-neutral-500 lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-10 lg:col-span-3">
                    <div className="text-2xl font-medium tracking-tight">
                      {p.title}
                    </div>
                  </div>
                  <div className="col-span-12 text-sm text-neutral-600 lg:col-span-6">
                    {p.description}
                  </div>
                  <div className="col-span-12 hidden text-right text-sm lg:col-span-2 lg:block">
                    <span
                      className="inline-block transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* 5. GALLERY — natural-flow but positioned (z=5) so it covers Products (z=4) */}
        <section className="relative z-[5] border-t border-neutral-200 bg-neutral-50 shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.1)]">
          <div className="mx-auto max-w-[1400px] px-10 py-20">
            <Reveal y={20} duration={0.7} className="grid grid-cols-12 gap-6 pb-12">
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  04
                </div>
                <div className="mt-2 text-sm">Realizacje</div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                <h2 className="text-5xl font-light leading-tight tracking-tight">
                  Wybrane projekty.
                </h2>
              </div>
            </Reveal>

            <Stagger
              stagger={0.04}
              className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6"
            >
              {gallery.map((g) => (
                <StaggerItem key={g.src}>
                  <figure className="group relative aspect-square overflow-hidden bg-white">
                    <Image
                      src={g.src}
                      alt={g.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 16vw"
                    />
                    {g.client && (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-white/95 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-700 opacity-0 transition-opacity group-hover:opacity-100">
                        {g.client}
                      </figcaption>
                    )}
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* 6. CLIENTS — sticky */}
        <section className="sticky top-0 z-[6] flex min-h-screen flex-col justify-center border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]">
          <div className="mx-auto w-full max-w-[1400px] px-10 py-20">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Klienci
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {clients.map((c) => (
                <div key={c} className="text-lg font-light tracking-tight">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PROCESS — natural-flow but positioned (z=7) so it covers pinned Clients (z=6) */}
        <section className="relative z-[7] border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-[1400px] px-10 py-20">
            <Reveal y={20} duration={0.7} className="grid grid-cols-12 gap-6 pb-12">
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  04½
                </div>
                <div className="mt-2 text-sm">Proces</div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                <h2 className="text-5xl font-light leading-tight tracking-tight">
                  Sześć kroków
                  <br />
                  <span style={{ color: RED }}>od zapytania do wysyłki.</span>
                </h2>
              </div>
            </Reveal>

            <ol className="mt-12 grid grid-cols-1 divide-y divide-neutral-200">
              {[
                { num: "01", label: "Zapytanie", time: "0 h", desc: "Telefon, email lub osobiście. Załącz projekt lub opisz wymagania." },
                { num: "02", label: "Wycena + projekt", time: "≤ 24 h", desc: "Odpowiadamy mailowo z wyceną i wstępnym projektem." },
                { num: "03", label: "Akceptacja klienta", time: "elast.", desc: "Potwierdzenie projektu i wpłata zaliczki / proformy." },
                { num: "04", label: "Produkcja", time: "min. 4 dni", desc: "Sitodruk / sublimacja / wszywanie — w zależności od projektu." },
                { num: "05", label: "Kontrola jakości", time: "—", desc: "Ręczna weryfikacja każdej sztuki przed wysyłką." },
                { num: "06", label: "Wysyłka", time: "1–2 dni", desc: "DPD, Paczkomat InPost lub firma kurierska klienta." },
              ].map((s) => (
                <li
                  key={s.num}
                  className="grid grid-cols-12 items-baseline gap-6 py-6"
                >
                  <div className="col-span-2 text-xs tabular-nums text-neutral-500 lg:col-span-1">
                    {s.num}
                  </div>
                  <div className="col-span-10 lg:col-span-3">
                    <div className="text-2xl font-medium tracking-tight">
                      {s.label}
                    </div>
                  </div>
                  <div className="col-span-12 text-sm text-neutral-600 lg:col-span-6">
                    {s.desc}
                  </div>
                  <div
                    className="col-span-12 text-right text-xs tabular-nums uppercase tracking-widest lg:col-span-2"
                    style={{ color: RED }}
                  >
                    {s.time}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 8. PRICING — natural-flow but positioned (z=8) */}
        <section className="relative z-[8] border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-[1400px] px-10 py-20">
            <Reveal y={20} duration={0.7} className="grid grid-cols-12 gap-6 pb-12">
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  05
                </div>
                <div className="mt-2 text-sm">Cennik</div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                <h2 className="text-5xl font-light leading-tight tracking-tight">
                  Ceny brutto za sztukę.
                </h2>
                <p className="mt-4 text-sm text-neutral-600">
                  Standardowe rozmiary flag. Pozostałe produkty — wycena
                  indywidualna.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-12 lg:grid-cols-3">
              {pricing.groups.map((g) => (
                <div key={g.title}>
                  <div className="border-b border-neutral-900 pb-3 text-sm font-medium">
                    {g.title}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((it) => (
                      <li
                        key={it.name}
                        className="flex justify-between gap-4 text-sm tabular-nums"
                      >
                        <span className="text-neutral-700">{it.name}</span>
                        <span>{it.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ — natural-flow but positioned (z=9) so it covers Pricing (z=8) */}
        <section
          id="faq"
          className="relative z-[9] border-t border-neutral-200 bg-white shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.08)]"
        >
          <div className="mx-auto max-w-[1400px] px-10 py-20">
            <Reveal y={20} duration={0.7} className="grid grid-cols-12 gap-6 pb-12">
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  06
                </div>
                <div className="mt-2 text-sm">FAQ</div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                <h2 className="text-5xl font-light leading-tight tracking-tight">
                  Najczęściej
                  <br />
                  <span style={{ color: RED }}>zadawane pytania.</span>
                </h2>
              </div>
            </Reveal>

            <dl className="divide-y divide-neutral-200">
              {faqs.map((f, i) => (
                <div
                  key={f.q}
                  className="grid grid-cols-12 items-baseline gap-6 py-8"
                >
                  <dt className="col-span-2 text-xs tabular-nums text-neutral-500 lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </dt>
                  <dt className="col-span-10 text-2xl font-medium tracking-tight lg:col-span-4">
                    {f.q}
                  </dt>
                  <dd className="col-span-12 text-base leading-relaxed text-neutral-600 lg:col-span-7">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 10. CTA — sticky (dark, stronger shadow for contrast against white sections above) */}
        <section className="sticky top-0 z-[10] flex min-h-screen items-center border-t border-neutral-900 bg-neutral-900 text-white shadow-[0_-16px_50px_-12px_rgba(0,0,0,0.35)]">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 px-10 py-32">
            <div className="col-span-12 lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                07
              </div>
              <div className="mt-2 text-sm">Kontakt</div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-4">
              <h2 className="text-5xl font-light leading-tight tracking-tight">
                Porozmawiajmy
                <br />
                <span style={{ color: RED }}>o Twoim projekcie.</span>
              </h2>
              <div className="mt-12 grid grid-cols-2 gap-8 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Telefon
                  </div>
                  <a
                    href={company.phoneHref}
                    className="mt-2 block text-xl font-light"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Email
                  </div>
                  <a
                    href={`mailto:${company.primaryEmail}`}
                    className="mt-2 block text-xl font-light"
                  >
                    {company.primaryEmail}
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Adres
                  </div>
                  <div className="mt-2 text-base font-light">
                    {company.address}
                    <br />
                    {company.postal} {company.city}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Godziny
                  </div>
                  <div className="mt-2 text-base font-light">
                    {company.hours.weekdays}
                    <br />
                    {company.hours.saturday}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer — outside sticky stack, normal flow */}
      <footer className="relative z-20 bg-neutral-950 text-neutral-300">
        <div className="mx-auto max-w-[1400px] px-10">
          {/* Top — brand statement */}
          <div className="grid grid-cols-12 gap-6 border-b border-neutral-800 py-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Manufaktura · od 1984
              </div>
              <p className="mt-6 text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl">
                Cztery dekady produkcji flag w&nbsp;jednej pracowni.
                <span className="text-neutral-500">
                  {" "}
                  Bez outsourcingu, bez pośredników, bez kompromisów.
                </span>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Newsletter
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                Nowe realizacje, promocje sezonowe i porady konserwacyjne — raz
                na kwartał.
              </p>
              <form className="mt-6 flex gap-2">
                <input
                  type="email"
                  placeholder="twoj@email.pl"
                  className="flex-1 border-0 border-b border-neutral-700 bg-transparent pb-2 text-sm text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"
                />
                <button
                  type="button"
                  className="border-b border-white pb-2 text-sm font-medium text-white"
                >
                  Zapisz się →
                </button>
              </form>
            </div>
          </div>

          {/* Middle — sitemap */}
          <div className="grid grid-cols-12 gap-6 border-b border-neutral-800 py-12">
            <div className="col-span-12 lg:col-span-3">
              <div className="text-base font-medium tracking-tight text-white">
                J-ART
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Flagi Osielsko · est. 1984
              </div>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-400">
                Producent flag, banerów, masztów i akcesoriów. Rodzinna
                manufaktura z Kujawsko-Pomorskiego.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
                NIP {company.nip}
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Oferta
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {productCategories.slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <a href="#" className="hover:text-white">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Firma
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">O nas</a></li>
                <li><a href="#" className="hover:text-white">Realizacje</a></li>
                <li><a href="#" className="hover:text-white">Cennik</a></li>
                <li><a href="#" className="hover:text-white">Proces</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Wsparcie
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Kontakt</a></li>
                <li><a href="#" className="hover:text-white">Zamów wycenę</a></li>
                <li><a href="#" className="hover:text-white">Konserwacja flag</a></li>
                <li><a href="#" className="hover:text-white">Wysyłka i zwroty</a></li>
                <li><a href="#" className="hover:text-white">Reklamacje</a></li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Kontakt bezpośredni
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={company.phoneHref}
                    className="block text-base font-light text-white hover:underline"
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.primaryEmail}`}
                    className="block hover:text-white"
                  >
                    {company.primaryEmail}
                  </a>
                </li>
                <li className="pt-3 text-neutral-400">
                  {company.address}
                  <br />
                  {company.postal} {company.city}
                </li>
                <li className="pt-3 text-neutral-400">
                  {company.hours.weekdays}
                  <br />
                  {company.hours.saturday}
                </li>
              </ul>
            </div>
          </div>

          {/* Payments & shipping strip */}
          <div className="grid grid-cols-12 gap-6 border-b border-neutral-800 py-8">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Płatności
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Przelew", "Proforma", "Karta", "BLIK", "Faktura VAT"].map(
                  (p) => (
                    <span
                      key={p}
                      className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                    >
                      {p}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Wysyłka
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "DPD",
                  "Paczkomat InPost",
                  "Odbiór osobisty",
                  "Kurier klienta",
                ].map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom — legal */}
          <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
            <div>
              © 1984—{new Date().getFullYear()} {company.legalName} · Wszelkie
              prawa zastrzeżone
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                Regulamin
              </a>
              <a href="#" className="hover:text-white">
                RODO
              </a>
              <a href="#" className="hover:text-white">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </MotionRoot>
  );
}

