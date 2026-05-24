"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DictionaryHero } from "@/components/dictionary-hero"
import { Terminal, FileCode, Sparkles, ExternalLink, Copy, Check, Sun, Moon, ChevronDown } from "lucide-react"
import pnpmLogo from "./pnpm.png"

export default function Home() {
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<"preview" | "code">("preview")
  const [installMode, setInstallMode] = useState<"command" | "manual">("command")
  const [packageManager, setPackageManager] = useState<"pnpm" | "yarn" | "npm" | "bun">("bun")
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [name, setName] = useState("Piyush Aryan")
  const [phonetic, setPhonetic] = useState("pee-yoosh aa-ry-an")
  const [partOfSpeech, setPartOfSpeech] = useState("noun")
  const [imageSrc, setImageSrc] = useState("/Piyush-3.jpeg")
  const [label, setLabel] = useState("Dictionary Entry")
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    localStorage.setItem("theme", nextTheme)
  }

  const pmLogos = {
    npm: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
        className="h-3 w-auto select-none"
        alt="npm"
        draggable={false}
      />
    ),
    pnpm: (
      <img
        src={pnpmLogo.src}
        className="size-4 select-none"
        alt="pnpm"
        draggable={false}
      />
    ),
    yarn: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-yarn-icon-svg-download-png-1174974.png?f=webp"
        className="size-4 select-none"
        alt="yarn"
        draggable={false}
      />
    ),
    bun: (
      <img
        src="https://bun.com/logo.svg"
        className="size-4 select-none"
        alt="bun"
        draggable={false}
      />
    ),
  }

  const installCommands = {
    npm: "npx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
    pnpm: "pnpm dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
    yarn: "yarn dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
    bun: "bunx --bun shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json",
  }

  const getComponentCodeString = () => {
    const props = []
    if (label !== "Dictionary Entry") props.push(`      label="${label}"`)
    if (name !== "Piyush Aryan") props.push(`      name="${name}"`)
    if (phonetic !== "pee-yoosh aa-ry-an") props.push(`      phonetic="${phonetic}"`)
    if (partOfSpeech !== "noun") props.push(`      partOfSpeech="${partOfSpeech}"`)
    if (imageSrc !== "/Piyush-3.jpeg") props.push(`      imageSrc="${imageSrc}"`)

    const propsStr = props.length > 0 ? `\n${props.join("\n")}` : ""

    return `import { DictionaryHero } from "@/components/dictionary-hero"

export default function Page() {
  return (
    <DictionaryHero${propsStr}
      definitions={[
        {
          text: "A software engineer building at the intersection of AI and web technologies.",
          example: "He solved the bug in minutes, what a Piyush!"
        },
        {
          text: "An AI engineer who architects personalized voice agents and memory structures.",
          example: "Let's consult Piyush for our agentic memory architecture."
        }
      ]}
      synonyms={["AI Engineer", "Full Stack Creator", "UX Designer"]}
      techStack={["React", "Next.js", "TypeScript", "Motion", "TailwindCSS"]}
    />
  )
}`
  }

  const componentCodeString = getComponentCodeString()

  const handleCopyText = (text: string) => {
    if (typeof window === "undefined") return
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text)
      setTimeout(() => {
        setCopiedText(null)
      }, 2000)
    }).catch(() => { })
  }

  return (
    <main className="relative min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-50 dark:selection:bg-white dark:selection:text-zinc-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
        :root {
          --font-sans: 'Geist', sans-serif;
        }
        body {
          font-family: 'Geist', sans-serif;
        }
        .page-grid-overlay {
          background-image: radial-gradient(circle, rgba(24, 24, 27, 0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .dark .page-grid-overlay {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
        }
      `}</style>

      {/* Dotted border architecture */}
      <div className="pointer-events-none fixed inset-y-4 left-4 z-40 hidden border-l border-dotted border-zinc-200 dark:border-zinc-800 sm:block" />
      <div className="pointer-events-none fixed inset-y-4 right-4 z-40 hidden border-r border-dotted border-zinc-200 dark:border-zinc-800 sm:block" />
      <div className="pointer-events-none fixed inset-x-4 top-4 z-40 hidden border-t border-dotted border-zinc-200 dark:border-zinc-800 sm:block" />
      <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 hidden border-b border-dotted border-zinc-200 dark:border-zinc-800 sm:block" />

      {/* Main Wrapper */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-8 md:py-16">
        {/* Header Section */}
        <div className="space-y-4 border-b border-zinc-200/80 pb-6 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-400/5 dark:text-emerald-400">
              v0.1.0
            </span>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              shadcn-registry/component
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                Dictionary Hero
              </h1>
              <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                Display user traits, definitions, skills, origin details, and voice pronunciation in a beautiful interactive dictionary-entry card.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/10 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer overflow-hidden"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center shrink-0"
                  >
                    {theme === "light" ? (
                      <Moon className="size-4 text-zinc-800 dark:text-zinc-200" />
                    ) : (
                      <Sun className="size-4 text-zinc-800 dark:text-zinc-200" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* v0.app style icon button */}
              <a
                href="https://v0.app/chat/api/open?url=https://design.piyusharyan.online/r/dictionary-hero.json"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center gap-1 rounded-xl border border-zinc-200/10 bg-white px-3 text-xs font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                title="Open in v0"
              >
                <svg viewBox="0 0 40 20" fill="none" aria-hidden="true" className="size-5 text-zinc-900 dark:text-zinc-50">
                  <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z" fill="currentColor"></path>
                  <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>        {/* Tab Preview Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-900/60 w-fit">
            <button
              onClick={() => setActiveShowcaseTab("preview")}
              className={`relative flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer rounded-lg ${activeShowcaseTab === "preview" ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
                }`}
            >
              <Sparkles className="size-3.5" />
              <span>Preview</span>
              {activeShowcaseTab === "preview" && (
                <motion.div
                  layoutId="active-showcase-tab"
                  className="absolute inset-0 bg-white shadow-sm dark:bg-zinc-800/80 -z-10 rounded-lg"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveShowcaseTab("code")}
              className={`relative flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer rounded-lg ${activeShowcaseTab === "code" ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
                }`}
            >
              <FileCode className="size-3.5" />
              <span>Code</span>
              {activeShowcaseTab === "code" && (
                <motion.div
                  layoutId="active-showcase-tab"
                  className="absolute inset-0 bg-white shadow-sm dark:bg-zinc-800/80 -z-10 rounded-lg"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </button>
          </div>

          <div className="relative rounded-2xl border border-zinc-200/80 bg-zinc-50/20 p-2 dark:border-zinc-800/80 dark:bg-zinc-950/20">
            <AnimatePresence mode="wait">
              {activeShowcaseTab === "preview" ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="page-grid-overlay flex min-h-[500px] items-center justify-center p-4 rounded-xl border border-zinc-200/40 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-950/40 sm:p-6"
                >
                  <DictionaryHero
                    className="w-full max-w-3xl"
                    name={name}
                    phonetic={phonetic}
                    partOfSpeech={partOfSpeech}
                    imageSrc={imageSrc}
                    label={label}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative rounded-xl border border-zinc-200/40 bg-zinc-950 p-4 font-mono text-xs dark:border-zinc-850"
                >
                  <div className="absolute right-3 top-3">
                    <button
                      type="button"
                      onClick={() => handleCopyText(componentCodeString)}
                      className="relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-700 cursor-pointer active:scale-95"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={copiedText === componentCodeString ? "copied" : "idle"}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.12 }}
                          className="flex items-center gap-1"
                        >
                          {copiedText === componentCodeString ? (
                            <>
                              <Check className="size-3.5 text-emerald-400" />
                              <span className="text-[10px] text-emerald-400 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="size-3.5" />
                              <span className="text-[10px]">Copy</span>
                            </>
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                  <pre className="max-h-[480px] overflow-auto text-zinc-300 pr-12 pt-2 leading-relaxed">
                    <code>{componentCodeString}</code>
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col gap-2 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Configure Props
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Customize the component rendering live.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/20 p-5 dark:border-zinc-800/80 dark:bg-zinc-950/20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Column 1: Core details */}
              <div className="space-y-4">
                {/* Name field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200/80 bg-white px-3 py-2 text-xs text-zinc-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-100"
                    placeholder="e.g. Piyush Aryan"
                  />
                </div>

                {/* Phonetic guide */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Phonetic Guide
                  </label>
                  <input
                    type="text"
                    value={phonetic}
                    onChange={(e) => setPhonetic(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200/80 bg-white px-3 py-2 text-xs text-zinc-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-100"
                    placeholder="e.g. pee-yoosh aa-ry-an"
                  />
                </div>
              </div>

              {/* Column 2: Lexical attributes */}
              <div className="space-y-4">
                {/* Part of speech */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Part of Speech
                  </label>
                  <div className="relative flex items-center">
                    <select
                      value={partOfSpeech}
                      onChange={(e) => setPartOfSpeech(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-zinc-200/80 bg-white pl-3 pr-8 py-2 text-xs text-zinc-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-100 cursor-pointer"
                    >
                      <option value="noun">noun</option>
                      <option value="verb">verb</option>
                      <option value="adjective">adjective</option>
                      <option value="adverb">adverb</option>
                      <option value="pronoun">pronoun</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 size-3.5 text-zinc-400 dark:text-zinc-500" />
                  </div>
                </div>

                {/* Label */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Top Label Tag
                  </label>
                  <input
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200/80 bg-white px-3 py-2 text-xs text-zinc-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-100"
                    placeholder="e.g. Dictionary Entry"
                  />
                </div>
              </div>

              {/* Column 3: Portrait controls */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Image Source
                </label>

                {/* Presets */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setImageSrc("/Piyush-3.jpeg")}
                    className={`rounded-lg border py-1 text-[10px] font-semibold transition-all cursor-pointer ${imageSrc === "/Piyush-3.jpeg"
                      ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                      : "border-zinc-200/60 bg-white text-zinc-655 hover:bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      }`}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageSrc("https://i.pinimg.com/736x/47/67/92/4767926bab2b212e499c31c09ee3bfd5.jpg")}
                    className={`rounded-lg border py-1 text-[10px] font-semibold transition-all cursor-pointer ${imageSrc === "https://i.pinimg.com/736x/47/67/92/4767926bab2b212e499c31c09ee3bfd5.jpg"
                      ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                      : "border-zinc-200/60 bg-white text-zinc-655 hover:bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      }`}
                  >
                    Portrait 1
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageSrc("https://i.pinimg.com/1200x/e3/85/5a/e3855a6a1b759eaf82a413cee5e6e6df.jpg")}
                    className={`rounded-lg border py-1 text-[10px] font-semibold transition-all cursor-pointer ${imageSrc === "https://i.pinimg.com/1200x/e3/85/5a/e3855a6a1b759eaf82a413cee5e6e6df.jpg"
                      ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                      : "border-zinc-200/60 bg-white text-zinc-655 hover:bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      }`}
                  >
                    Portrait 2
                  </button>
                </div>

                {/* Custom URL */}
                <input
                  type="text"
                  value={imageSrc}
                  onChange={(e) => setImageSrc(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200/80 bg-white px-3 py-2 text-xs text-zinc-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-100"
                  placeholder="Or paste any custom image URL..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Installation Section */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col gap-2 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Installation
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Install the component using the shadcn CLI or place it manually in your project.
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-900/60 w-fit">
            <button
              onClick={() => setInstallMode("command")}
              className={`relative px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer rounded-lg ${installMode === "command" ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
                }`}
            >
              Command
              {installMode === "command" && (
                <motion.div
                  layoutId="install-mode-tab"
                  className="absolute inset-0 bg-white shadow-sm dark:bg-zinc-800/80 -z-10 rounded-lg"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setInstallMode("manual")}
              className={`relative px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer rounded-lg ${installMode === "manual" ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
                }`}
            >
              Manual
              {installMode === "manual" && (
                <motion.div
                  layoutId="install-mode-tab"
                  className="absolute inset-0 bg-white shadow-sm dark:bg-zinc-800/80 -z-10 rounded-lg"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {installMode === "command" ? (
              <motion.div
                key="command"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4 rounded-2xl border border-zinc-200/80 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/20"
              >
                {/* PM Switchers */}
                <div className="flex items-center gap-4 text-xs font-bold border-b border-zinc-100 pb-3 dark:border-zinc-900/60">
                  <span className="text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <span className="flex h-5 w-8 items-center justify-center shrink-0">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={packageManager}
                          initial={{ opacity: 0, scale: 0.8, y: 4 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -4 }}
                          transition={{ duration: 0.12 }}
                          className="flex items-center justify-center shrink-0"
                        >
                          {pmLogos[packageManager]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    CLI
                  </span>
                  <div className="flex gap-3">
                    {(["pnpm", "yarn", "npm", "bun"] as const).map((pm) => (
                      <button
                        key={pm}
                        onClick={() => setPackageManager(pm)}
                        className={`relative py-1 cursor-pointer transition-colors duration-250 ${packageManager === pm
                          ? "text-emerald-500 dark:text-emerald-400 font-bold"
                          : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                          }`}
                      >
                        <span>{pm}</span>
                        {packageManager === pm && (
                          <motion.div
                            layoutId="active-pm-indicator"
                            className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500 dark:bg-emerald-400"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Command Output Code Block */}
                <div className="relative flex items-center justify-between rounded-xl border border-zinc-200/60 bg-zinc-50/50 p-3.5 dark:border-zinc-900/60 dark:bg-zinc-900/40">
                  <code className="font-mono text-xs text-zinc-700 dark:text-zinc-300 break-all pr-24 select-all">
                    {installCommands[packageManager]}
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopyText(installCommands[packageManager])}
                    className="shrink-0 relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 cursor-pointer active:scale-95"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copiedText === installCommands[packageManager] ? "copied" : "idle"}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.12 }}
                        className="flex items-center gap-1"
                      >
                        {copiedText === installCommands[packageManager] ? (
                          <>
                            <Check className="size-3.5 text-emerald-500 dark:text-emerald-400" />
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span className="text-[10px]">Copy</span>
                          </>
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="manual"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4 rounded-2xl border border-zinc-200/80 p-5 dark:border-zinc-800/80 dark:bg-zinc-950/20 text-sm leading-relaxed"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">1</span>
                      Install Required Dependencies
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 pl-7 text-xs sm:text-sm">
                      Make sure your project has <code className="font-mono bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-xs text-emerald-600">framer-motion</code> and <code className="font-mono bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-xs text-emerald-600">lucide-react</code> installed.
                    </p>
                    <div className="relative flex items-center justify-between rounded-xl border border-zinc-200/60 bg-zinc-50/50 p-3 pl-10 dark:border-zinc-900/60 dark:bg-zinc-900/40">
                      <code className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                        npm install framer-motion lucide-react
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopyText("npm install framer-motion lucide-react")}
                        className="shrink-0 relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 cursor-pointer active:scale-95"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={copiedText === "npm install framer-motion lucide-react" ? "copied" : "idle"}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.12 }}
                            className="flex items-center gap-1"
                          >
                            {copiedText === "npm install framer-motion lucide-react" ? (
                              <>
                                <Check className="size-3.5 text-emerald-500 dark:text-emerald-400" />
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="size-3.5" />
                                <span className="text-[10px]">Copy</span>
                              </>
                            )}
                          </motion.span>
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">2</span>
                      Create Component File
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 pl-7 text-xs sm:text-sm">
                      Create <code className="font-mono bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-xs text-emerald-600">components/dictionary-hero.tsx</code> and copy the source code from the &quot;Code&quot; tab above.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Usage Guide Section */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col gap-2 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Usage
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Import and render the component. Customize the configuration parameters using props.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl border border-zinc-200/60 bg-zinc-50/20 p-4 font-mono text-xs dark:border-zinc-900/60 dark:bg-zinc-950/20 leading-relaxed text-zinc-700 dark:text-zinc-300">
              <div className="absolute right-3 top-3">
                <button
                  type="button"
                  onClick={() => handleCopyText('import { DictionaryHero } from "@/components/dictionary-hero"')}
                  className="relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 cursor-pointer active:scale-95"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copiedText === 'import { DictionaryHero } from "@/components/dictionary-hero"' ? "copied" : "idle"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.12 }}
                      className="flex items-center gap-1"
                    >
                      {copiedText === 'import { DictionaryHero } from "@/components/dictionary-hero"' ? (
                        <>
                          <Check className="size-3.5 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
              <pre className="pr-12">
                <code>
                  <span className="text-rose-500">import</span> {"{"} DictionaryHero {"}"} <span className="text-rose-500">from</span> <span className="text-emerald-600">&quot;@/components/dictionary-hero&quot;</span>
                </code>
              </pre>
            </div>

            <div className="relative rounded-2xl border border-zinc-200/60 bg-zinc-50/20 p-4 font-mono text-xs dark:border-zinc-900/60 dark:bg-zinc-950/20 leading-relaxed text-zinc-700 dark:text-zinc-300">
              <div className="absolute right-3 top-3">
                <button
                  type="button"
                  onClick={() => handleCopyText(`<DictionaryHero 
  name="Piyush Aryan"
  phonetic="pee-yoosh aa-ry-an"
  audioSrc="/v3.mp3"
/>`)}
                  className="relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 cursor-pointer active:scale-95"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copiedText === `<DictionaryHero \n  name="Piyush Aryan" \n  phonetic="pee-yoosh aa-ry-an" \n  audioSrc="/v3.mp3" \n/>` ? "copied" : "idle"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.12 }}
                      className="flex items-center gap-1"
                    >
                      {copiedText === `<DictionaryHero \n  name="Piyush Aryan" \n  phonetic="pee-yoosh aa-ry-an" \n  audioSrc="/v3.mp3" \n/>` ? (
                        <>
                          <Check className="size-3.5 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
              <pre className="pr-12 max-h-[300px] overflow-auto">
                <code>
                  {"<"}<span className="text-emerald-500">DictionaryHero</span><br />
                  {"  "}name=<span className="text-emerald-600">&quot;Piyush Aryan&quot;</span><br />
                  {"  "}phonetic=<span className="text-emerald-600">&quot;pee-yoosh aa-ry-an&quot;</span><br />
                  {"  "}audioSrc=<span className="text-emerald-600">&quot;/v3.mp3&quot;</span><br />
                  {"/"}{">"}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Composition Structure Section */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col gap-2 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Composition
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              The internal block composition layout of the dictionary structure tree.
            </p>
          </div>

          <div className="relative rounded-2xl border border-zinc-200/60 bg-zinc-50/20 p-5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-zinc-900/60 dark:bg-zinc-950/20 dark:text-zinc-400">
            <div className="absolute right-3 top-3">
              <button
                type="button"
                onClick={() => handleCopyText(`DictionaryHero
├── Image Frame (Left Column)
│   ├── Glassmorphic Tag (label)
│   ├── Signature Name (Caveat font)
│   ├── Phonetics guides
│   └── Pronounce Audio Button (Waveform visualizer)
└── Details Card (Right Column)
    ├── Lexical Header (name & partOfSpeech)
    ├── Interactive Tab Bar Switcher
    │   ├── Definitions Tab (Numbered list + examples)
    │   ├── Thesaurus Tab (Synonyms & Antonyms tags)
    │   └── Origin & Tech Tab (Etymology & Stacks)
    └── Footer Dock & CTAs`)}
                className="relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 cursor-pointer active:scale-95"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copiedText === `DictionaryHero\n├── Image Frame (Left Column)\n│   ├── Glassmorphic Tag (label)\n│   ├── Signature Name (Caveat font)\n│   ├── Phonetics guides\n│   └── Pronounce Audio Button (Waveform visualizer)\n└── Details Card (Right Column)\n    ├── Lexical Header (name & partOfSpeech)\n    ├── Interactive Tab Bar Switcher\n    │   ├── Definitions Tab (Numbered list + examples)\n    │   ├── Thesaurus Tab (Synonyms & Antonyms tags)\n    │   └── Origin & Tech Tab (Etymology & Stacks)\n    └── Footer Dock & CTAs` ? "copied" : "idle"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.12 }}
                    className="flex items-center gap-1"
                  >
                    {copiedText === `DictionaryHero\n├── Image Frame (Left Column)\n│   ├── Glassmorphic Tag (label)\n│   ├── Signature Name (Caveat font)\n│   ├── Phonetics guides\n│   └── Pronounce Audio Button (Waveform visualizer)\n└── Details Card (Right Column)\n    ├── Lexical Header (name & partOfSpeech)\n    ├── Interactive Tab Bar Switcher\n    │   ├── Definitions Tab (Numbered list + examples)\n    │   ├── Thesaurus Tab (Synonyms & Antonyms tags)\n    │   └── Origin & Tech Tab (Etymology & Stacks)\n    └── Footer Dock & CTAs` ? (
                      <>
                        <Check className="size-3.5 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
            <pre className="overflow-x-auto pr-12">
              <code>
                {`DictionaryHero
├── Image Frame (Left Column)
│   ├── Glassmorphic Tag (label)
│   ├── Signature Name (Caveat font)
│   ├── Phonetics guides
│   └── Pronounce Audio Button (Waveform visualizer)
└── Details Card (Right Column)
    ├── Lexical Header (name & partOfSpeech)
    ├── Interactive Tab Bar Switcher
    │   ├── Definitions Tab (Numbered list + examples)
    │   ├── Thesaurus Tab (Synonyms & Antonyms tags)
    │   └── Origin & Tech Tab (Etymology & Stacks)
    └── Footer Dock & CTAs`}
              </code>
            </pre>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 border-t border-zinc-200/80 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-800/80 dark:text-zinc-600">
          <p>© {new Date().getFullYear()} Piyush Aryan. Built with shadcn/ui registry schema.</p>
        </div>
      </div>
    </main>
  )
}
