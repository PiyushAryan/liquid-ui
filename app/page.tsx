"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DictionaryHero } from "@/components/dictionary-hero"
import { LiquidButton } from "@/components/liquid-button"
import { MagneticCard } from "@/components/magnetic-card"
import {
  Terminal,
  FileCode,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Sun,
  Moon,
  ChevronDown,
  Layers,
  Zap,
  Info,
  Compass,
} from "lucide-react"

import {
  dictionaryHeroSourceCode,
  liquidButtonSourceCode,
  magneticCardSourceCode,
} from "./source-codes"

type ComponentType = "dictionary-hero" | "liquid-button" | "magnetic-card"

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>("dictionary-hero")
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<"preview" | "code">("preview")
  const [installMode, setInstallMode] = useState<"command" | "manual">("command")
  const [packageManager, setPackageManager] = useState<"pnpm" | "yarn" | "npm" | "bun">("bun")
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // --- COMPONENT STATES ---
  // Dictionary Hero
  const [dhName, setDhName] = useState("Piyush Aryan")
  const [dhPhonetic, setDhPhonetic] = useState("pee-yoosh aa-ry-an")
  const [dhPartOfSpeech, setDhPartOfSpeech] = useState("noun")
  const [dhImageSrc, setDhImageSrc] = useState("/Piyush-3.jpeg")
  const [dhLabel, setDhLabel] = useState("Dictionary Entry")

  // Liquid Button
  const [lbLabel, setLbLabel] = useState("Liquid Morph")
  const [lbVariant, setLbVariant] = useState<"default" | "emerald" | "violet" | "rose">("default")
  const [lbGooSpeed, setLbGooSpeed] = useState(4)
  const [lbGooIntensity, setLbGooIntensity] = useState(10)

  // Magnetic Card
  const [mcTitle, setMcTitle] = useState("Magnetic Gravity")
  const [mcDescription, setMcDescription] = useState("A glassmorphic card reacting to cursor gravity.")
  const [mcAccentColor, setMcAccentColor] = useState<"emerald" | "indigo" | "rose" | "violet">("emerald")
  const [mcTiltStrength, setMcTiltStrength] = useState(15)
  const [mcMagneticStrength, setMcMagneticStrength] = useState(0.2)

  // Sync theme local state with document element
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

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(id)
      setTimeout(() => setCopiedText(null), 2000)
    })
  }

  // --- DYNAMIC CODE STRING GENERATION ---
  const getComponentUsageCode = () => {
    if (activeComponent === "dictionary-hero") {
      const props = []
      if (dhLabel !== "Dictionary Entry") props.push(`      label="${dhLabel}"`)
      if (dhName !== "Piyush Aryan") props.push(`      name="${dhName}"`)
      if (dhPhonetic !== "pee-yoosh aa-ry-an") props.push(`      phonetic="${dhPhonetic}"`)
      if (dhPartOfSpeech !== "noun") props.push(`      partOfSpeech="${dhPartOfSpeech}"`)
      if (dhImageSrc !== "/Piyush-3.jpeg") props.push(`      imageSrc="${dhImageSrc}"`)

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
    />
  )
}`
    } else if (activeComponent === "liquid-button") {
      const props = []
      if (lbLabel !== "Liquid Morph") props.push(`      label="${lbLabel}"`)
      if (lbVariant !== "default") props.push(`      variant="${lbVariant}"`)
      if (lbGooSpeed !== 4) props.push(`      gooSpeed={${lbGooSpeed}}`)
      if (lbGooIntensity !== 10) props.push(`      gooIntensity={${lbGooIntensity}}`)

      const propsStr = props.length > 0 ? `\n${props.join("\n")}` : ""

      return `import { LiquidButton } from "@/components/liquid-button"

export default function Page() {
  return (
    <LiquidButton${propsStr}
      onClick={() => console.log("Liquid Button clicked!")}
    />
  )
}`
    } else {
      const props = []
      if (mcTitle !== "Magnetic Gravity") props.push(`      title="${mcTitle}"`)
      if (mcDescription !== "A glassmorphic card reacting to cursor gravity.")
        props.push(`      description="${mcDescription}"`)
      if (mcAccentColor !== "emerald") props.push(`      accentColor="${mcAccentColor}"`)
      if (mcTiltStrength !== 15) props.push(`      tiltStrength={${mcTiltStrength}}`)
      if (mcMagneticStrength !== 0.2) props.push(`      magneticStrength={${mcMagneticStrength}}`)

      const propsStr = props.length > 0 ? `\n${props.join("\n")}` : ""

      return `import { MagneticCard } from "@/components/magnetic-card"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <MagneticCard${propsStr} />
    </div>
  )
}`
    }
  }

  // Registry JSON info
  const componentInfo = {
    "dictionary-hero": {
      title: "Dictionary Hero",
      desc: "A portfolio hero card styled like a dictionary entry page, complete with pronunciation audio.",
      registryUrl: "https://design.piyusharyan.online/r/dictionary-hero.json",
      deps: ["framer-motion", "lucide-react"],
      sourceCode: dictionaryHeroSourceCode,
    },
    "liquid-button": {
      title: "Liquid Button",
      desc: "A button featuring an organic gooey liquid-puddle hover morph effect using SVG Gaussian blur filters.",
      registryUrl: "https://design.piyusharyan.online/r/liquid-button.json",
      deps: ["framer-motion"],
      sourceCode: liquidButtonSourceCode,
    },
    "magnetic-card": {
      title: "Magnetic Card",
      desc: "A 3D perspective magnetic card reacting to cursor gravity with parallax content translation shifts.",
      registryUrl: "https://design.piyusharyan.online/r/magnetic-card.json",
      deps: ["framer-motion"],
      sourceCode: magneticCardSourceCode,
    },
  }

  const currentComponent = componentInfo[activeComponent]

  const installCommands = {
    npm: `npx shadcn@latest add ${currentComponent.registryUrl}`,
    pnpm: `pnpm dlx shadcn@latest add ${currentComponent.registryUrl}`,
    yarn: `yarn dlx shadcn@latest add ${currentComponent.registryUrl}`,
    bun: `bunx --bun shadcn@latest add ${currentComponent.registryUrl}`,
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-[#09090b] dark:text-zinc-50 font-sans">
      {/* Import Google Fonts for Geist Sans override */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
        :root {
          --font-sans: 'Geist', sans-serif;
        }
        body {
          font-family: var(--font-sans);
        }
      `}</style>

      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#09090b]/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            {/* Liquid Logo Icon */}
            <div className="relative flex size-9 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md">
              <Layers className="size-4 relative z-10" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg leading-tight">Liquid UI</span>
              <span className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">Registry</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="flex size-9 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "light" ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Portfolio Link */}
            <a
              href="https://piyusharyan.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <span>Portfolio</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Hero Section */}
        <section className="text-center space-y-4 pb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-3 py-1 text-xs font-semibold text-emerald-600 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-emerald-400 shadow-sm">
            <Sparkles className="size-3.5" />
            <span>Interactive Component Catalog</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-100 dark:to-zinc-500">
            Liquid UI
          </h1>
          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            A curated collection of organic, tactile, and highly-interactive user interface components. Designed for React, Framer Motion, and Tailwind CSS.
          </p>
          <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-xl dark:border-zinc-800/85 dark:bg-[#0c0c0e] transition-colors duration-300">
            <img
              src="/hero.png"
              alt="Liquid UI Hero"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Dynamic Component Navigation Tabs */}
        <section className="flex justify-center border-b border-zinc-200 dark:border-zinc-800/80 mb-10 pb-1">
          <div className="flex gap-4">
            {(Object.keys(componentInfo) as ComponentType[]).map((compId) => (
              <button
                key={compId}
                onClick={() => {
                  setActiveComponent(compId)
                  setActiveShowcaseTab("preview")
                }}
                className={`relative pb-3 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeComponent === compId
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                }`}
              >
                <span>{componentInfo[compId].title}</span>
                {activeComponent === compId && (
                  <motion.div
                    layoutId="active-component-indicator"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-zinc-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Component Showcase Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: PREVIEW/PLAYGROUND & CUSTOMIZER */}
          <div className="lg:col-span-8 space-y-6">
            {/* Visualizer card */}
            <div className="rounded-3xl border border-zinc-200/80 bg-zinc-100/50 p-3 dark:border-zinc-800/80 dark:bg-zinc-950/20">
              <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3.5 px-2 dark:border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-400" />
                  <span className="size-2 rounded-full bg-yellow-400" />
                  <span className="size-2 rounded-full bg-green-400" />
                  <span className="text-[11px] font-semibold font-mono text-zinc-400 uppercase tracking-widest ml-1.5">
                    {currentComponent.title} Playground
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex rounded-lg bg-zinc-200/60 p-0.5 dark:bg-zinc-900/60">
                  <button
                    onClick={() => setActiveShowcaseTab("preview")}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                      activeShowcaseTab === "preview"
                        ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                        : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                    }`}
                  >
                    <Zap className="size-3" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => setActiveShowcaseTab("code")}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                      activeShowcaseTab === "code"
                        ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                        : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                    }`}
                  >
                    <FileCode className="size-3" />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Playground Stage */}
              <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-[#0c0c0e] shadow-inner transition-colors duration-300">
                {/* stage grid visualizer background */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[radial-gradient(#000_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
                
                <AnimatePresence mode="wait">
                  {activeShowcaseTab === "preview" ? (
                    <motion.div
                      key="preview-stage"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full flex justify-center z-10"
                    >
                      {activeComponent === "dictionary-hero" && (
                        <DictionaryHero
                          name={dhName}
                          phonetic={dhPhonetic}
                          partOfSpeech={dhPartOfSpeech}
                          imageSrc={dhImageSrc}
                          label={dhLabel}
                          className="w-full max-w-2xl"
                        />
                      )}
                      {activeComponent === "liquid-button" && (
                        <LiquidButton
                          label={lbLabel}
                          variant={lbVariant}
                          gooSpeed={lbGooSpeed}
                          gooIntensity={lbGooIntensity}
                        />
                      )}
                      {activeComponent === "magnetic-card" && (
                        <MagneticCard
                          title={mcTitle}
                          description={mcDescription}
                          accentColor={mcAccentColor}
                          tiltStrength={mcTiltStrength}
                          magneticStrength={mcMagneticStrength}
                        />
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code-stage"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.18 }}
                      className="w-full h-[380px] overflow-auto rounded-xl bg-zinc-950 p-4 font-mono text-[11px] leading-relaxed text-zinc-300 dark:bg-black border border-zinc-800/80 shadow-md text-left relative"
                    >
                      <button
                        onClick={() => handleCopy(getComponentUsageCode(), "usage-code")}
                        className="absolute right-3 top-3 flex size-8 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        title="Copy JSX Code"
                      >
                        {copiedText === "usage-code" ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
                      </button>
                      <pre>{getComponentUsageCode()}</pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CONFIGURE PROPS CONTROL PANEL */}
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-950/20 shadow-sm">
              <div className="flex items-center gap-2 border-b border-zinc-200/60 pb-3 mb-5 dark:border-zinc-800/60">
                <Compass className="size-4 text-zinc-500" />
                <h3 className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                  Configure Props
                </h3>
              </div>

              {/* Dynamic controls based on active selection */}
              <div className="text-xs">
                {activeComponent === "dictionary-hero" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1: Core Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Core Info
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Display Name</label>
                        <input
                          type="text"
                          value={dhName}
                          onChange={(e) => setDhName(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Top Ribbon Label</label>
                        <input
                          type="text"
                          value={dhLabel}
                          onChange={(e) => setDhLabel(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                        />
                      </div>
                    </div>

                    {/* Column 2: Lexical Settings */}
                    <div className="space-y-4">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Lexical attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Phonetic Notation</label>
                        <input
                          type="text"
                          value={dhPhonetic}
                          onChange={(e) => setDhPhonetic(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Part of Speech</label>
                        <div className="relative">
                          <select
                            value={dhPartOfSpeech}
                            onChange={(e) => setDhPartOfSpeech(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-50/50 pl-3 pr-8 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                          >
                            <option value="noun">noun</option>
                            <option value="verb">verb</option>
                            <option value="adjective">adjective</option>
                            <option value="creator">creator</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-zinc-500" />
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Portrait settings */}
                    <div className="space-y-4">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Portrait Presets
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Portrait Source URL</label>
                        <input
                          type="text"
                          value={dhImageSrc}
                          onChange={(e) => setDhImageSrc(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                          placeholder="/Piyush-3.jpeg"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <button
                          onClick={() => setDhImageSrc("/Piyush-3.jpeg")}
                          className="rounded-md border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 px-2 py-1 text-[10px] font-semibold dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        >
                          Piyush
                        </button>
                        <button
                          onClick={() =>
                            setDhImageSrc(
                              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                            )
                          }
                          className="rounded-md border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 px-2 py-1 text-[10px] font-semibold dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        >
                          Model A
                        </button>
                        <button
                          onClick={() =>
                            setDhImageSrc(
                              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                            )
                          }
                          className="rounded-md border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 px-2 py-1 text-[10px] font-semibold dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        >
                          Model B
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeComponent === "liquid-button" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Col 1: Label and Theme */}
                    <div className="space-y-4">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Button Styling
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Button Label</label>
                        <input
                          type="text"
                          value={lbLabel}
                          onChange={(e) => setLbLabel(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Color Variant</label>
                        <div className="relative">
                          <select
                            value={lbVariant}
                            onChange={(e) => setLbVariant(e.target.value as any)}
                            className="w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-50/50 pl-3 pr-8 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                          >
                            <option value="default">zinc (monochrome)</option>
                            <option value="emerald">emerald (green)</option>
                            <option value="violet">violet (purple)</option>
                            <option value="rose">rose (pink)</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-zinc-500" />
                        </div>
                      </div>
                    </div>

                    {/* Col 2: Liquid Physics */}
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Liquid Parameters
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                          <label className="font-medium">Liquid Morph Speed</label>
                          <span className="font-mono font-bold">{lbGooSpeed}s</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="0.5"
                          value={lbGooSpeed}
                          onChange={(e) => setLbGooSpeed(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-white"
                        />
                        <div className="text-[10px] text-zinc-400 leading-normal">
                          Configures the animation cycle duration of the float. Lower is faster/more volatile.
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                          <label className="font-medium">Goo Blur Intensity (stdDeviation)</label>
                          <span className="font-mono font-bold">{lbGooIntensity}px</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="18"
                          value={lbGooIntensity}
                          onChange={(e) => setLbGooIntensity(parseInt(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-white"
                        />
                        <div className="text-[10px] text-zinc-400 leading-normal">
                          SVG Gaussian standard deviation blur threshold. Higher values merge shapes more organically but blur the borders further.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeComponent === "magnetic-card" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Col 1: Content details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Card details
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Card Title</label>
                        <input
                          type="text"
                          value={mcTitle}
                          onChange={(e) => setMcTitle(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium">Description</label>
                        <textarea
                          rows={2}
                          value={mcDescription}
                          onChange={(e) => setMcDescription(e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700 resize-none"
                        />
                      </div>
                    </div>

                    {/* Col 2: Gravity Settings */}
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                        Gravity & Glow Parameters
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-zinc-500 dark:text-zinc-400 font-medium">Glow Accent Color</label>
                          <div className="relative">
                            <select
                              value={mcAccentColor}
                              onChange={(e) => setMcAccentColor(e.target.value as any)}
                              className="w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-50/50 pl-3 pr-8 py-2 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:focus:border-zinc-700"
                            >
                              <option value="emerald">emerald (green)</option>
                              <option value="indigo">indigo (blue)</option>
                              <option value="rose">rose (pink)</option>
                              <option value="violet">violet (purple)</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-zinc-500" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                            <label className="font-medium">3D Tilt Angle</label>
                            <span className="font-mono font-bold">{mcTiltStrength}°</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="30"
                            value={mcTiltStrength}
                            onChange={(e) => setMcTiltStrength(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                          <label className="font-medium">Parallax Shift Factor</label>
                          <span className="font-mono font-bold">{mcMagneticStrength}</span>
                        </div>
                        <input
                          type="range"
                          min="0.05"
                          max="0.4"
                          step="0.05"
                          value={mcMagneticStrength}
                          onChange={(e) => setMcMagneticStrength(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-white"
                        />
                        <div className="text-[10px] text-zinc-400 leading-normal">
                          Configures how far the internal titles and details translate in physical direction relative to the cursor rotation offset.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CLI & SOURCE INSTALLATION CARDS */}
          <div className="lg:col-span-4 space-y-6">
            {/* Install panel toggler */}
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-100/50 p-1.5 dark:border-zinc-800/80 dark:bg-zinc-900/30 flex gap-1">
              <button
                onClick={() => setInstallMode("command")}
                className={`w-full py-1.5 text-center text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  installMode === "command"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                }`}
              >
                CLI Install
              </button>
              <button
                onClick={() => setInstallMode("manual")}
                className={`w-full py-1.5 text-center text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  installMode === "manual"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                }`}
              >
                Copy Source
              </button>
            </div>

            {installMode === "command" ? (
              /* CLI card */
              <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-950/20 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60">
                  <Terminal className="size-4 text-zinc-500" />
                  <h3 className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                    Shadcn Installer
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  You can add the component to your project instantly using the shadcn registry. Choose your package manager:
                </p>

                {/* PM Tabs switcher */}
                <div className="flex items-center justify-between gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-900/60">
                  {(["bun", "pnpm", "npm", "yarn"] as const).map((pm) => (
                    <button
                      key={pm}
                      onClick={() => setPackageManager(pm)}
                      className={`w-full py-1 text-[10px] font-bold rounded transition-colors uppercase cursor-pointer ${
                        packageManager === pm
                          ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                          : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-400"
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>

                {/* command container */}
                <div className="relative rounded-xl bg-zinc-950 p-3 font-mono text-[10px] text-zinc-300 dark:bg-black border border-zinc-800/80 shadow-md">
                  <button
                    onClick={() => handleCopy(installCommands[packageManager], "cli-command")}
                    className="absolute right-2 top-2 flex size-6 cursor-pointer items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    title="Copy command"
                  >
                    {copiedText === "cli-command" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  </button>
                  <div className="pr-6 whitespace-pre-wrap break-all leading-normal">
                    {installCommands[packageManager]}
                  </div>
                </div>
              </div>
            ) : (
              /* Manual source card */
              <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-950/20 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60">
                  <FileCode className="size-4 text-zinc-500" />
                  <h3 className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                    Source Code
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                    Required Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {currentComponent.deps.map((dep) => (
                      <span
                        key={dep}
                        className="rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-600 dark:text-zinc-400"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <h4 className="font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-[10px]">
                    Implementation Code
                  </h4>
                  <button
                    onClick={() => handleCopy(currentComponent.sourceCode, "raw-source")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-2.5 text-xs font-bold text-white shadow-md hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    {copiedText === "raw-source" ? (
                      <>
                        <Check className="size-3.5 text-emerald-500" />
                        <span>Source Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        <span>Copy Component File</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Document Info Metadata Card */}
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-950/20 shadow-sm space-y-3">
              <div className="flex items-center gap-2 border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60">
                <Info className="size-4 text-zinc-500" />
                <h3 className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                  About {currentComponent.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {currentComponent.desc}
              </p>
              <div className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-relaxed pt-1">
                <strong>Registry URL:</strong> <br />
                <a
                  href={currentComponent.registryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 break-all underline"
                >
                  {currentComponent.registryUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Aesthetic Footer */}
      <footer className="w-full border-t border-zinc-200/80 bg-zinc-50/50 py-8 dark:border-zinc-800/80 dark:bg-[#09090b]/50 mt-16 text-center text-xs text-zinc-400 dark:text-zinc-500">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-zinc-700 dark:text-zinc-300">Liquid UI</span>
            <span>• premium organic interface elements.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/PiyushAryan" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300">GitHub</a>
            <a href="https://linkedin.com/in/piyush-aryan" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300">LinkedIn</a>
            <a href="https://piyusharyan.online" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
