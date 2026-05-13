import Link from "next/link";
import { examples, company } from "@/data/content";

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Eksploracja designu · {company.fullName}
          </p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl font-bold leading-[0.95] tracking-tight">
            10 kierunków
            <br />
            <span className="text-neutral-500">dla nowej strony</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-neutral-400">
            Każdy przykład to osobna strona główna w innej stylistyce. Treść
            identyczna — różni się tylko wizualny język, layout i typografia.
            Wybierz kierunek, który pasuje do tożsamości firmy.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <Link
              key={ex.slug}
              href={`/${ex.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:bg-neutral-800"
            >
              <div
                className="absolute right-6 top-6 h-3 w-3 rounded-full"
                style={{ background: ex.accent }}
              />
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                example-{String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold">
                {ex.name}
              </h2>
              <p className="mt-3 text-sm text-neutral-400">{ex.note}</p>
              <div className="mt-10 flex items-center justify-between text-sm">
                <span className="text-neutral-500">Otwórz preview</span>
                <span
                  className="font-mono text-base transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-24 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div>
              Treść scrapowana z{" "}
              <a
                href="https://flagiosielsko.pl"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 underline-offset-4 hover:underline"
              >
                flagiosielsko.pl
              </a>{" "}
              · zachowano oryginalną polską kopię
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.2em]">
              wer. 0.1 · burza mózgów
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
