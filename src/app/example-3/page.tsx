import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  productCategories,
  clients,
  valueProps,
  gallery,
  faqs,
} from "@/data/content";
import {
  MotionRoot,
  Reveal,
  SnapIn,
  Stagger,
  StaggerItem,
  CountUp,
} from "@/components/motion";

export const metadata: Metadata = { title: "example-3 · Statement / typografia" };

const RED = "#e30613";

export default function Example3() {
  return (
    <MotionRoot>
    <main className="min-h-screen bg-white font-grotesk text-black">

      {/* Header */}
      <header className="sticky top-0 z-30 border-b-2 border-black bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-black tracking-tight">
            J-ART<span style={{ color: RED }}>.</span>
          </Link>
          <nav className="hidden gap-6 text-xs font-bold uppercase tracking-widest md:flex">
            <a href="#oferta">Oferta</a>
            <a href="#realizacje">Realizacje</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a
            href={company.phoneHref}
            className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white"
          >
            Zadzwoń
          </a>
        </div>
      </header>

      {/* Hero — oversize statement */}
      <section className="border-b-2 border-black px-6 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em]">
              Manufaktura flag · od 1984
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.3em]">
              Osielsko · PL
            </p>
          </div>

          <h1
            className="font-black uppercase leading-[0.82] tracking-[-0.06em]"
            style={{ fontSize: "clamp(4rem, 18vw, 18rem)" }}
          >
            <SnapIn as="span" from="y">FLAGI</SnapIn>
            <br />
            <SnapIn as="span" from="y" delay={0.15}>
              <span style={{ color: RED }}>OSIELSKO</span>
            </SnapIn>
          </h1>

          <div className="mt-12 grid gap-8 border-t-2 border-black pt-8 md:grid-cols-12">
            <p className="text-2xl font-medium leading-tight md:col-span-7">
              Sitodruk. Sublimacja. Technika mieszana. Wszywane aplikacje.
              <br />
              <span className="text-neutral-500">
                Cztery techniki. Jedna jakość.
              </span>
            </p>
            <div className="md:col-span-5 md:text-right">
              <div className="font-mono text-xs uppercase tracking-widest">
                Założenie firmy
              </div>
              <div className="text-7xl font-black leading-none tabular-nums">
                1984
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee-like clients */}
      <section
        className="overflow-hidden border-b-2 border-black py-6"
        style={{ background: RED, color: "white" }}
      >
        <div className="flex animate-marquee gap-12 whitespace-nowrap text-2xl font-bold uppercase tracking-tight">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="flex items-center gap-12">
              {c}
              <span aria-hidden>★</span>
            </span>
          ))}
        </div>
      </section>

      {/* Big stats */}
      <section className="border-b-2 border-black">
        <Stagger
          stagger={0.08}
          className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x-2 divide-black md:grid-cols-4"
        >
          {valueProps.map((v, i) => {
            const numericMatch = v.value.match(/^([\d,]+)(.*)$/);
            const isCountable = numericMatch !== null;
            const num = isCountable ? parseInt(numericMatch[1], 10) : 0;
            const suffix = isCountable ? numericMatch[2] : "";
            return (
              <StaggerItem key={v.label} className="p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                  {v.label}
                </div>
                <div className="mt-6 text-6xl font-black tracking-tighter tabular-nums">
                  {isCountable ? (
                    <>
                      <CountUp to={num} duration={1.4 + i * 0.1} />
                      {suffix}
                    </>
                  ) : (
                    v.value
                  )}
                </div>
                <div className="mt-2 text-sm">{v.detail}</div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* MANIFEST — statement block */}
      <section className="border-b-2 border-black px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: RED }}>
              // MANIFEST
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              §01—§04 / 2026
            </p>
          </div>
          <Stagger stagger={0.18} className="mt-10 space-y-10">
            {[
              <>
                FLAGA NIE JEST OZDOBĄ.
                <br />
                <span style={{ color: RED }}>JEST PODPISEM.</span>
              </>,
              <>
                NIE SZYJEMY NA MAGAZYN.
                <br />
                <span className="text-neutral-500">SZYJEMY DLA CIEBIE.</span>
              </>,
              <>
                MIERZYMY RĘCZNIE
                <br />
                KAŻDĄ <span style={{ color: RED }}>SZTUKĘ.</span>
              </>,
              <>
                42 LATA W TEJ SAMEJ
                <br />
                <span style={{ color: RED }}>PRACOWNI.</span>
              </>,
            ].map((node, i) => (
              <StaggerItem
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8"
              >
                <div className="md:col-span-1">
                  <div
                    className="font-mono text-2xl font-black"
                    style={{ color: RED }}
                  >
                    §
                  </div>
                </div>
                <div className="md:col-span-11">
                  <p
                    className="font-black uppercase leading-[0.92] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
                  >
                    {node}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Products */}
      <section id="oferta" className="border-b-2 border-black px-6 py-20">
        <div className="mx-auto max-w-[1600px]">
          <Reveal y={28} duration={0.7}>
            <h2 className="text-7xl font-black uppercase tracking-tighter sm:text-9xl">
              OFERTA<span style={{ color: RED }}>/</span>
            </h2>
            <p className="mt-6 max-w-2xl text-xl">
              Osiem kategorii. Każda dopasowywana do projektu, miejsca i materiału.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-0 border-t-2 border-black md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((p, i) => (
              <a
                key={p.slug}
                href="#"
                className="group relative border-b-2 border-r-2 border-black p-8 transition-colors hover:bg-black hover:text-white"
              >
                <div className="font-mono text-xs uppercase tracking-widest">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-8 text-4xl font-black uppercase leading-none tracking-tighter">
                  {p.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed">{p.summary}</p>
                <div
                  className="mt-12 text-2xl group-hover:text-white"
                  style={{ color: RED }}
                  aria-hidden
                >
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="realizacje"
        className="border-b-2 border-black"
        style={{ background: "#fafafa" }}
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <Reveal y={28} duration={0.7}>
            <div className="flex items-end justify-between">
              <h2 className="text-7xl font-black uppercase tracking-tighter sm:text-9xl">
                WORK
              </h2>
              <p className="hidden font-mono text-xs uppercase tracking-widest md:block">
                30+ lat · 1000+ projektów
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className="group relative overflow-hidden border-2 border-black"
              >
                <div className="relative aspect-square">
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <figcaption
                  className="absolute inset-x-0 bottom-0 p-3 text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "rgba(0,0,0,0.85)" }}
                >
                  {String(i + 1).padStart(2, "0")} · {g.client ?? g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — statement scale */}
      <section className="border-b-2 border-black px-6 py-20">
        <div className="mx-auto max-w-[1600px]">
          <Reveal y={28} duration={0.7}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-8">
              <h2
                className="font-black uppercase leading-[0.85] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
              >
                FAQ<span style={{ color: RED }}>.</span>
              </h2>
              <p className="max-w-md font-mono text-xs uppercase tracking-[0.3em]">
                Sześć najczęściej zadawanych pytań · zero ściemy
              </p>
            </div>
          </Reveal>

          <div className="mt-0 divide-y-2 divide-black">
            {faqs.map((f, i) => (
              <details key={f.q} className="group py-10">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <div className="flex flex-1 flex-wrap items-baseline gap-6">
                    <span
                      className="font-mono text-base tabular-nums"
                      style={{ color: RED }}
                    >
                      Q.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-black uppercase leading-[0.9] tracking-[-0.03em]"
                      style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
                    >
                      {f.q}
                    </span>
                  </div>
                  <span
                    className="mt-3 grid h-12 w-12 flex-shrink-0 place-items-center border-2 border-black text-2xl font-black transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-6 max-w-3xl pl-0 text-lg leading-relaxed sm:pl-24">
                  <span className="font-mono text-base mr-3" style={{ color: RED }}>A.</span>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="kontakt" className="px-6 py-32 text-white" style={{ background: "black" }}>
        <div className="mx-auto max-w-[1600px]">
          <Reveal y={28} duration={0.7}>
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: RED }}>
              // KONTAKT
            </p>
            <h2
              className="mt-6 font-black uppercase leading-[0.85] tracking-[-0.05em]"
              style={{ fontSize: "clamp(3rem, 14vw, 14rem)" }}
            >
              ZRÓB
              <br />
              <span style={{ color: RED }}>FLAGĘ.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 border-t-2 border-white pt-8 md:grid-cols-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Telefon
              </div>
              <a
                href={company.phoneHref}
                className="mt-2 block text-3xl font-bold hover:underline"
              >
                {company.phone}
              </a>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Email
              </div>
              <a
                href={`mailto:${company.primaryEmail}`}
                className="mt-2 block text-3xl font-bold hover:underline"
              >
                {company.primaryEmail}
              </a>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Warsztat
              </div>
              <div className="mt-2 text-xl font-bold">
                {company.address}
                <br />
                {company.postal} {company.city}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-white bg-black py-6 text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-6 font-mono text-xs uppercase tracking-widest sm:flex-row sm:justify-between">
          <div>
            © 1984—{new Date().getFullYear()} · {company.legalName}
          </div>
          <div>NIP {company.nip}</div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </main>
    </MotionRoot>
  );
}

