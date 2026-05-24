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

  // Sync theme local state asynchronously to satisfy linter body checks
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    const systemTheme = isDark ? "dark" : "light"
    const handle = setTimeout(() => {
      setTheme(systemTheme)
    }, 0)
    return () => clearTimeout(handle)
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans">
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

      {/* Dynamic Header - Thin Border */}
      <header className="sticky top-0 z-40 w-full border-b border-[#241B15]/20 bg-[#FAF8F5]/90 backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#0A0F0D]/90">
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2.5">
            {/* Liquid Logo Icon - Thin Design */}
            <div className="relative flex size-8 items-center justify-center rounded border border-[#241B15]/30 bg-[#FAF8F5] text-[#241B15] dark:border-emerald-500/40 dark:bg-[#080C0A] dark:text-emerald-400">
              <Layers className="size-4" />
            </div>
            <div className="flex flex-col font-mono">
              <span className="font-bold tracking-tight text-base leading-tight uppercase">[ LIQUID_UI ]</span>
              <span className="text-[8px] font-semibold tracking-widest text-[#241B15]/50 dark:text-emerald-500/50 uppercase">registry v1.0 • thin spec</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Theme Switcher - Thin */}
            <button
              onClick={toggleTheme}
              className="flex size-8 cursor-pointer items-center justify-center rounded border border-[#241B15]/20 bg-[#FAF8F5] text-[#241B15] hover:bg-zinc-100 dark:border-emerald-500/30 dark:bg-[#080C0A] dark:text-emerald-400 dark:hover:bg-emerald-500/10 transition-colors"
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
                  {theme === "light" ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Portfolio Link - Thin */}
            <a
              href="https://piyusharyan.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-1 rounded border border-[#241B15]/20 bg-[#FAF8F5] px-3 font-mono text-[9px] font-bold uppercase tracking-wider text-[#241B15] hover:bg-zinc-100 dark:border-emerald-500/30 dark:bg-[#080C0A] dark:text-emerald-400 dark:hover:bg-emerald-500/10 transition-colors"
            >
              <span>Portfolio</span>
              <ExternalLink className="size-2.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container - Full Width */}
      <main className="mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-6 md:px-8 space-y-8">
        
        {/* Immersive Hero Section with public/hero.png as Background */}
        <section 
          className="relative w-full rounded-xl border border-[#241B15]/20 dark:border-emerald-500/30 overflow-hidden bg-cover bg-center py-16 px-4 sm:px-8 text-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          {/* Semi-transparent tint overlay for perfect legibility */}
          <div className="absolute inset-0 bg-[#F6F2E9]/92 dark:bg-[#0A0F0D]/92 z-0 backdrop-blur-[0.5px]" />
          
          {/* Content layer */}
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded border border-[#241B15]/20 bg-[#FAF8F5]/90 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#241B15] dark:border-emerald-500/30 dark:bg-[#080C0A]/90 dark:text-emerald-400 shadow-sm">
              <Sparkles className="size-3 text-current" />
              <span>Interactive Component Catalog</span>
            </div>
            
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl font-mono uppercase text-[#241B15] dark:text-emerald-400 dark:drop-shadow-[0_0_6px_rgba(52,211,153,0.2)]">
              Liquid UI
            </h1>
            
            <p className="text-xs sm:text-sm leading-relaxed text-[#241B15]/80 dark:text-emerald-500/70 font-mono">
              A curated collection of organic, tactile, and highly-interactive user interface components. Designed for React, Framer Motion, and Tailwind CSS.
            </p>
          </div>
        </section>

        {/* Dynamic Component Navigation Tabs - Thin Design */}
        <section className="flex justify-center border-b border-[#241B15]/10 dark:border-emerald-500/20 pb-0.5">
          <div className="flex gap-1 font-mono">
            {(Object.keys(componentInfo) as ComponentType[]).map((compId) => (
              <button
                key={compId}
                onClick={() => {
                  setActiveComponent(compId)
                  setActiveShowcaseTab("preview")
                }}
                className={`relative pb-2.5 px-3 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  activeComponent === compId
                    ? "text-[#241B15] dark:text-emerald-400"
                    : "text-zinc-400 dark:text-emerald-500/30 hover:text-[#241B15] dark:hover:text-emerald-500/60"
                }`}
              >
                <span>{componentInfo[compId].title}</span>
                {activeComponent === compId && (
                  <motion.div
                    layoutId="active-component-indicator"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-[#241B15] dark:bg-emerald-400"
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
            
            {/* Visualizer card - Thin Borders, No Shadows */}
            <div className="rounded-xl border border-[#241B15]/20 bg-[#FAF8F5]/60 p-4 dark:border-emerald-500/20 dark:bg-[#0D1310]/60">
              <div className="flex items-center justify-between border-b border-[#241B15]/10 pb-3 px-1 dark:border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-400/40" />
                  <span className="size-2 rounded-full bg-yellow-400/40" />
                  <span className="size-2 rounded-full bg-green-400/40" />
                  <span className="text-[10px] font-bold font-mono text-[#241B15]/80 dark:text-emerald-400/80 uppercase tracking-wider ml-1">
                    {currentComponent.title} Sandbox Terminal
                  </span>
                </div>

                {/* Tab Switcher - Thin Outline */}
                <div className="flex border border-[#241B15]/20 dark:border-emerald-500/30 overflow-hidden bg-white dark:bg-[#080C0A] rounded">
                  <button
                    onClick={() => setActiveShowcaseTab("preview")}
                    className={`flex items-center gap-1 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer ${
                      activeShowcaseTab === "preview"
                        ? "bg-[#241B15] text-[#F6F2E9] dark:bg-emerald-500 dark:text-zinc-950"
                        : "text-[#241B15] hover:bg-zinc-100 dark:text-emerald-400/80 dark:hover:bg-emerald-500/10"
                    }`}
                  >
                    <Zap className="size-2.5" />
                    <span>Live</span>
                  </button>
                  <button
                    onClick={() => setActiveShowcaseTab("code")}
                    className={`flex items-center gap-1 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer ${
                      activeShowcaseTab === "code"
                        ? "bg-[#241B15] text-[#F6F2E9] dark:bg-emerald-500 dark:text-zinc-950"
                        : "text-[#241B15] hover:bg-zinc-100 dark:text-emerald-400/80 dark:hover:bg-emerald-500/10"
                    }`}
                  >
                    <FileCode className="size-2.5" />
                    <span>JSX</span>
                  </button>
                </div>
              </div>

              {/* Playground Stage - Thin Border, Subtle CRT Scanline overlay */}
              <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden rounded border border-[#241B15]/15 bg-white p-6 dark:border-emerald-500/20 dark:bg-black/90 crt-effect transition-colors duration-300 mt-4 shadow-sm">
                {/* stage grid visualizer background */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <AnimatePresence mode="wait">
                  {activeShowcaseTab === "preview" ? (
                    <motion.div
                      key="preview-stage"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.15 }}
                      className="w-full flex justify-center z-10"
                    >
                      {activeComponent === "dictionary-hero" && (
                        <DictionaryHero
                          name={dhName}
                          phonetic={dhPhonetic}
                          partOfSpeech={dhPartOfSpeech}
                          imageSrc={dhImageSrc}
                          label={dhLabel}
                          className="w-full max-w-2xl border border-[#241B15]/20 dark:border-emerald-500/40 rounded-xl"
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
                          className="border border-[#241B15]/20 dark:border-emerald-500/40 rounded-xl"
                        />
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code-stage"
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 3 }}
                      transition={{ duration: 0.15 }}
                      className="w-full h-[380px] overflow-auto rounded bg-black p-4 font-mono text-[11px] leading-relaxed text-emerald-400 border border-emerald-500/20 shadow-inner text-left relative"
                    >
                      <button
                        onClick={() => handleCopy(getComponentUsageCode(), "usage-code")}
                        className="absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded border border-[#241B15]/20 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        title="Copy JSX Code"
                      >
                        {copiedText === "usage-code" ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                      </button>
                      <pre>{getComponentUsageCode()}</pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CONFIGURE PROPS CONTROL PANEL - Thin Border */}
            <div className="rounded-xl border border-[#241B15]/20 bg-[#FAF8F5]/60 p-5 dark:border-emerald-500/20 dark:bg-[#0D1310]/60">
              <div className="flex items-center gap-2 border-b border-[#241B15]/10 pb-3 mb-5 dark:border-emerald-500/20 font-mono">
                <Compass className="size-4 text-current opacity-70" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-current">
                  [ System Configuration ]
                </h3>
              </div>

              {/* Dynamic controls based on active selection */}
              <div className="text-xs font-mono">
                {activeComponent === "dictionary-hero" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1: Core Details */}
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Core Details
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">DISPLAY NAME</label>
                        <input
                          type="text"
                          value={dhName}
                          onChange={(e) => setDhName(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">TOP RIBBON LABEL</label>
                        <input
                          type="text"
                          value={dhLabel}
                          onChange={(e) => setDhLabel(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    {/* Column 2: Lexical Settings */}
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Lexical attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">PHONETIC NOTATION</label>
                        <input
                          type="text"
                          value={dhPhonetic}
                          onChange={(e) => setDhPhonetic(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">PART OF SPEECH</label>
                        <div className="relative">
                          <select
                            value={dhPartOfSpeech}
                            onChange={(e) => setDhPartOfSpeech(e.target.value)}
                            className="w-full appearance-none rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 pl-3 pr-8 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                          >
                            <option value="noun">noun</option>
                            <option value="verb">verb</option>
                            <option value="adjective">adjective</option>
                            <option value="creator">creator</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-current opacity-70" />
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Portrait settings */}
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Portrait presets
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">PORTRAIT SOURCE URL</label>
                        <input
                          type="text"
                          value={dhImageSrc}
                          onChange={(e) => setDhImageSrc(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                          placeholder="/Piyush-3.jpeg"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <button
                          onClick={() => setDhImageSrc("/Piyush-3.jpeg")}
                          className="px-2.5 py-1 font-mono uppercase font-bold text-[9px] border border-[#241B15]/30 rounded hover:bg-zinc-100 dark:border-emerald-500/30 dark:bg-[#080C0A] dark:hover:bg-emerald-500/10 cursor-pointer transition-colors"
                        >
                          Piyush
                        </button>
                        <button
                          onClick={() =>
                            setDhImageSrc(
                              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                            )
                          }
                          className="px-2.5 py-1 font-mono uppercase font-bold text-[9px] border border-[#241B15]/30 rounded hover:bg-zinc-100 dark:border-emerald-500/30 dark:bg-[#080C0A] dark:hover:bg-emerald-500/10 cursor-pointer transition-colors"
                        >
                          Model A
                        </button>
                        <button
                          onClick={() =>
                            setDhImageSrc(
                              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                            )
                          }
                          className="px-2.5 py-1 font-mono uppercase font-bold text-[9px] border border-[#241B15]/30 rounded hover:bg-zinc-100 dark:border-emerald-500/30 dark:bg-[#080C0A] dark:hover:bg-emerald-500/10 cursor-pointer transition-colors"
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
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Button Attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">BUTTON LABEL</label>
                        <input
                          type="text"
                          value={lbLabel}
                          onChange={(e) => setLbLabel(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">COLOR VARIANT</label>
                        <div className="relative">
                          <select
                            value={lbVariant}
                            onChange={(e) => setLbVariant(e.target.value as "default" | "emerald" | "violet" | "rose")}
                            className="w-full appearance-none rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 pl-3 pr-8 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                          >
                            <option value="default">zinc (monochrome)</option>
                            <option value="emerald">emerald (green)</option>
                            <option value="violet">violet (purple)</option>
                            <option value="rose">rose (pink)</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-current opacity-70" />
                        </div>
                      </div>
                    </div>

                    {/* Col 2: Liquid Physics */}
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Liquid Parameters
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-current">
                          <label className="font-semibold text-[10px]">LIQUID MORPH SPEED</label>
                          <span className="font-bold">{lbGooSpeed}s</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="0.5"
                          value={lbGooSpeed}
                          onChange={(e) => setLbGooSpeed(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded appearance-none cursor-pointer dark:bg-zinc-800 accent-[#241B15] dark:accent-emerald-400"
                        />
                        <div className="text-[9px] text-[#241B15]/50 dark:text-emerald-500/50 leading-normal">
                          Float animation loop speed. Lower is faster.
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-current">
                          <label className="font-semibold text-[10px]">GOOEY INTENSITY</label>
                          <span className="font-bold">{lbGooIntensity}px</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="18"
                          value={lbGooIntensity}
                          onChange={(e) => setLbGooIntensity(parseInt(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded appearance-none cursor-pointer dark:bg-zinc-800 accent-[#241B15] dark:accent-emerald-400"
                        />
                        <div className="text-[9px] text-[#241B15]/50 dark:text-emerald-500/50 leading-normal">
                          SVG Gaussian filter stdDeviation. Higher makes merges broader.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeComponent === "magnetic-card" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Col 1: Content details */}
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Card Attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">CARD TITLE</label>
                        <input
                          type="text"
                          value={mcTitle}
                          onChange={(e) => setMcTitle(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-current font-semibold text-[10px]">CARD DESCRIPTION</label>
                        <textarea
                          rows={2}
                          value={mcDescription}
                          onChange={(e) => setMcDescription(e.target.value)}
                          className="w-full rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 px-3 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500 resize-none"
                        />
                      </div>
                    </div>

                    {/* Col 2: Gravity Settings */}
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                        // Spotlight & Gravity Settings
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-current font-semibold text-[10px]">GLOW COLOR</label>
                          <div className="relative">
                            <select
                              value={mcAccentColor}
                              onChange={(e) => setMcAccentColor(e.target.value as "emerald" | "indigo" | "rose" | "violet")}
                              className="w-full appearance-none rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 pl-3 pr-8 py-1.5 outline-none focus:bg-white dark:border-emerald-500/30 dark:bg-[#080C0A] dark:focus:border-emerald-500"
                            >
                              <option value="emerald">emerald (green)</option>
                              <option value="indigo">indigo (blue)</option>
                              <option value="rose">rose (pink)</option>
                              <option value="violet">violet (purple)</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-current opacity-70" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-current">
                            <label className="font-semibold text-[10px]">3D ROTATION TILT</label>
                            <span className="font-bold">{mcTiltStrength}°</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="30"
                            value={mcTiltStrength}
                            onChange={(e) => setMcTiltStrength(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-200 rounded appearance-none cursor-pointer dark:bg-zinc-800 accent-[#241B15] dark:accent-emerald-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-current">
                          <label className="font-semibold text-[10px]">PARALLAX DEPTH FACTOR</label>
                          <span className="font-bold">{mcMagneticStrength}</span>
                        </div>
                        <input
                          type="range"
                          min="0.05"
                          max="0.4"
                          step="0.05"
                          value={mcMagneticStrength}
                          onChange={(e) => setMcMagneticStrength(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded appearance-none cursor-pointer dark:bg-zinc-800 accent-[#241B15] dark:accent-emerald-400"
                        />
                        <div className="text-[9px] text-[#241B15]/50 dark:text-emerald-500/50 leading-normal">
                          Translation multiplier for card content parallax.
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
            
            {/* Install panel toggler - Thin */}
            <div className="rounded border border-[#241B15]/20 bg-[#FAF8F5]/60 p-1 dark:border-emerald-500/20 dark:bg-[#0D1310]/60 flex gap-1 overflow-hidden font-mono">
              <button
                onClick={() => setInstallMode("command")}
                className={`w-full py-1.5 text-center text-[9px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                  installMode === "command"
                    ? "bg-[#241B15] text-[#F6F2E9] dark:bg-emerald-500 dark:text-zinc-950"
                    : "text-[#241B15] hover:bg-zinc-100 dark:text-emerald-400/80 dark:hover:bg-emerald-500/10"
                }`}
              >
                CLI Install
              </button>
              <button
                onClick={() => setInstallMode("manual")}
                className={`w-full py-1.5 text-center text-[9px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                  installMode === "manual"
                    ? "bg-[#241B15] text-[#F6F2E9] dark:bg-emerald-500 dark:text-zinc-950"
                    : "text-[#241B15] hover:bg-zinc-100 dark:text-emerald-400/80 dark:hover:bg-emerald-500/10"
                }`}
              >
                Copy Source
              </button>
            </div>

            {installMode === "command" ? (
              /* CLI card - Thin border */
              <div className="rounded-xl border border-[#241B15]/20 bg-[#FAF8F5]/60 p-5 dark:border-emerald-500/20 dark:bg-[#0D1310]/60 space-y-4">
                <div className="flex items-center gap-2 border-b border-[#241B15]/10 pb-3 dark:border-emerald-500/20 font-mono">
                  <Terminal className="size-4 text-current opacity-70" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-current">
                    [ Shadcn CLI ]
                  </h3>
                </div>

                <p className="text-[11px] font-mono leading-relaxed text-[#241B15]/75 dark:text-emerald-500/60">
                  Execute the installer script in your workspace:
                </p>

                {/* PM Tabs switcher - Thin */}
                <div className="flex items-center justify-between gap-1 rounded border border-[#241B15]/10 dark:border-emerald-500/25 p-1 bg-white dark:bg-[#080C0A] font-mono">
                  {(["bun", "pnpm", "npm", "yarn"] as const).map((pm) => (
                    <button
                      key={pm}
                      onClick={() => setPackageManager(pm)}
                      className={`w-full py-0.5 text-[9px] font-bold rounded transition-colors uppercase cursor-pointer ${
                        packageManager === pm
                          ? "bg-[#241B15] text-white dark:bg-emerald-500 dark:text-zinc-950"
                          : "text-zinc-400 dark:text-emerald-500/30 hover:text-zinc-600 dark:hover:text-emerald-500/50"
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>

                {/* command container */}
                <div className="relative rounded bg-black p-3 font-mono text-[10px] text-emerald-400 border border-emerald-500/20 shadow-inner">
                  <button
                    onClick={() => handleCopy(installCommands[packageManager], "cli-command")}
                    className="absolute right-2 top-2 flex size-6 cursor-pointer items-center justify-center rounded border border-[#241B15]/20 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    title="Copy command"
                  >
                    {copiedText === "cli-command" ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                  </button>
                  <div className="pr-6 whitespace-pre-wrap break-all leading-normal">
                    {installCommands[packageManager]}
                  </div>
                </div>
              </div>
            ) : (
              /* Manual source card - Thin border */
              <div className="rounded-xl border border-[#241B15]/20 bg-[#FAF8F5]/60 p-5 dark:border-emerald-500/20 dark:bg-[#0D1310]/60 space-y-4">
                <div className="flex items-center gap-2 border-b border-[#241B15]/10 pb-3 dark:border-emerald-500/20 font-mono">
                  <FileCode className="size-4 text-current opacity-70" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-current">
                    [ Source Code ]
                  </h3>
                </div>

                <div className="space-y-2 font-mono">
                  <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                    // Required Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {currentComponent.deps.map((dep) => (
                      <span
                        key={dep}
                        className="rounded bg-white dark:bg-[#080C0A] border border-[#241B15]/10 dark:border-emerald-500/20 px-2 py-0.5 font-mono text-[9px] text-current"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-1 font-mono">
                  <h4 className="font-bold uppercase tracking-wider text-[#241B15]/40 dark:text-emerald-500/40 text-[9px]">
                    // Component File
                  </h4>
                  <button
                    onClick={() => handleCopy(currentComponent.sourceCode, "raw-source")}
                    className="flex w-full items-center justify-center gap-1.5 rounded border border-[#241B15]/30 bg-[#FAF8F5] py-2 font-mono text-[10px] font-bold uppercase text-[#241B15] hover:bg-zinc-100 dark:border-emerald-500/30 dark:bg-[#080C0A] dark:text-emerald-400 dark:hover:bg-emerald-500/10 cursor-pointer transition-colors"
                  >
                    {copiedText === "raw-source" ? (
                      <>
                        <Check className="size-3 text-emerald-500" />
                        <span>Source Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy Code File</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Document Info Metadata Card - Thin border */}
            <div className="rounded-xl border border-[#241B15]/20 bg-[#FAF8F5]/60 p-5 dark:border-emerald-500/20 dark:bg-[#0D1310]/60 space-y-3">
              <div className="flex items-center gap-2 border-b border-[#241B15]/10 pb-3 dark:border-emerald-500/20 font-mono">
                <Info className="size-4 text-current opacity-70" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-current">
                  [ Details ]
                </h3>
              </div>
              <p className="text-xs font-mono leading-relaxed text-[#241B15]/75 dark:text-emerald-500/70">
                {currentComponent.desc}
              </p>
              <div className="text-[9px] text-[#241B15]/50 dark:text-emerald-500/40 leading-relaxed pt-1 font-mono">
                <strong>REGISTRY SCHEMATIC:</strong> <br />
                <a
                  href={currentComponent.registryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#241B15] hover:underline dark:text-emerald-400 break-all"
                >
                  {currentComponent.registryUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Aesthetic Footer - Thin Border */}
      <footer className="w-full border-t border-[#241B15]/20 bg-[#FAF8F5] py-8 dark:border-emerald-500/20 dark:bg-[#0A0F0D] mt-16 text-center text-xs text-[#241B15]/80 dark:text-emerald-400/80 font-mono">
        <div className="mx-auto max-w-[1800px] px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="font-bold">[ LIQUID UI ]</span>
            <span>• premium organic interface elements.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/PiyushAryan" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/piyush-aryan" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://piyusharyan.online" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
