import { DictionaryHero } from "@/components/dictionary-hero"

const installCommands = [
  {
    label: "npm",
    command:
      "npx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
  },
  {
    label: "pnpm",
    command:
      "pnpm dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
  },
  {
    label: "yarn",
    command:
      "yarn dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
  },
  {
    label: "bun",
    command:
      "bunx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
  },
] as const

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white transition-colors duration-500 ease-in-out dark:bg-zinc-950 dark:text-zinc-50 dark:selection:bg-white dark:selection:text-zinc-900">
      <div className="pointer-events-none fixed inset-y-4 left-4 z-50 hidden border-l border-dotted border-zinc-300 dark:border-zinc-700 sm:block" />
      <div className="pointer-events-none fixed inset-y-4 right-4 z-50 hidden border-r border-dotted border-zinc-300 dark:border-zinc-700 sm:block" />
      <div className="pointer-events-none fixed inset-x-4 top-4 z-50 hidden border-t border-dotted border-zinc-300 dark:border-zinc-700 sm:block" />
      <div className="pointer-events-none fixed inset-x-4 bottom-4 z-50 hidden border-b border-dotted border-zinc-300 dark:border-zinc-700 sm:block" />

      <div className="relative z-10 min-h-screen w-full overflow-auto">
        <section className="mx-auto min-h-screen w-full max-w-3xl border-x border-dotted border-zinc-200 dark:border-zinc-800/80">
          <div className="space-y-10 px-4 pb-20 pt-8 sm:space-y-14 sm:px-6 sm:pt-10">
            <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                  shadcn registry component
                </p>
                <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                  Dictionary Hero
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
                  A portfolio hero presented as a dictionary entry, with portrait
                  media, pronunciation audio, definitions, examples, and contact
                  action.
                </p>
              </div>

              <a
                href="/r/dictionary-hero.json"
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/5 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-black/20 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              >
                View JSON
              </a>
            </div>

            <DictionaryHero />

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <div className="space-y-5">
              <h2 className="text-xl font-semibold tracking-tight">Install</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {installCommands.map(({ label, command }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20 dark:hover:bg-zinc-900/40"
                  >
                    <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                      {label}
                    </p>
                    <pre className="overflow-x-auto rounded-md border border-zinc-100 bg-zinc-50 p-3 text-xs leading-5 text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300">
                      <code>{command}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <a
                className="rounded-xl border border-zinc-200 p-4 font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900/40 dark:hover:text-zinc-50"
                href="/r/registry.json"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                  Registry catalog
                </span>
                /r/registry.json
              </a>
              <a
                className="rounded-xl border border-zinc-200 p-4 font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900/40 dark:hover:text-zinc-50"
                href="/r/dictionary-hero.json"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                  Registry item
                </span>
                /r/dictionary-hero.json
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
