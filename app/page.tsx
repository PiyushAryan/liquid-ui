import { DictionaryHero } from "@/components/dictionary-hero"

const installCommand =
  "npx shadcn@latest add https://dictionary-hero.vercel.app/r/dictionary-hero.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              shadcn registry component
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Dictionary Hero
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              A portfolio hero presented as a dictionary entry, with portrait
              media, pronunciation audio, definitions, examples, and contact
              action.
            </p>
          </div>

          <a
            href="/r/dictionary-hero.json"
            className="inline-flex h-10 items-center justify-center border border-zinc-700 px-4 text-sm font-medium text-zinc-100 transition-colors hover:border-emerald-400 hover:text-emerald-300"
          >
            View JSON
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <DictionaryHero />

          <aside className="space-y-4 border border-zinc-800 bg-zinc-900/60 p-4">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-white">Install</h2>
              <pre className="overflow-x-auto border border-zinc-800 bg-black p-3 text-xs leading-5 text-zinc-300">
                <code>{installCommand}</code>
              </pre>
            </div>

            <div className="space-y-2 text-sm text-zinc-400">
              <p>
                Registry catalog:
                <br />
                <a className="text-emerald-300 hover:text-emerald-200" href="/r/registry.json">
                  /r/registry.json
                </a>
              </p>
              <p>
                Registry item:
                <br />
                <a className="text-emerald-300 hover:text-emerald-200" href="/r/dictionary-hero.json">
                  /r/dictionary-hero.json
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
