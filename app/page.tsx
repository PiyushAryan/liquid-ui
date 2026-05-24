"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DictionaryHero } from "@/components/dictionary-hero"
import { LiquidButton } from "@/components/liquid-button"
import { MagneticCard } from "@/components/magnetic-card"
import {
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

const pmLogos = {
  bun: "https://bun.com/logo.svg",
  npm: "https://raw.githubusercontent.com/npm/logos/refs/heads/master/npm%20square/n-64.png",
  pnpm: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSI3Ni41ODk4NzI0NDg5Nzk1OCA0NCAxNjQuMDA3NzU1MTAyMDQwNjggMTY0IiB3aWR0aD0iMTYwLjAxIiBoZWlnaHQ9IjE2MCI+PGRlZnM+PHBhdGggZD0iTTIzNy42IDk1TDE4Ny42IDk1TDE4Ny42IDQ1TDIzNy42IDQ1TDIzNy42IDk1WiIgaWQ9ImI0NXZkVEQ4aHMiPjwvcGF0aD48cGF0aCBkPSJNMTgyLjU5IDk1TDEzMi41OSA5NUwxMzIuNTkgNDVMMTgyLjU5IDQ1TDE4Mi41OSA5NVoiIGlkPSJhNDBXdHhJbDhkIj48L3BhdGg+PHBhdGggZD0iTTEyNy41OSA5NUw3Ny41OSA5NUw3Ny41OSA0NUwxMjcuNTkgNDVMMTI3LjU5IDk1WiIgaWQ9ImgyQ045QUVFcGUiPjwvcGF0aD48cGF0aCBkPSJNMjM3LjYgMTUwTDE4Ny42IDE1MEwxODcuNiAxMDBMMzNyLjYgMTAwTDIzNy42IDE1MFoiIGlkPSJkcXY1MTMzRzgiPjwvcGF0aD48cGF0aCBkPSJNMTgyLjU5IDE1MEwxMzIuNTkgMTUwTDEzMi41OSAxMDBMMTgyLjU5IDEwMEwxODIuNTkgMTUwWiIgaWQ9ImIxTHY3OXlwdm0iPjwvcGF0aD48cGF0aCBkPSJNMTgyLjU5IDIwNUwxMzIuNTkgMjA1TDEzMi41OSAxNTVMMTgyLjU5IDE1NUwxODIuNTkgMjA1WiIgaWQ9Imh5MUlaV3dMWCI+PC9wYXRoPjxwYXRoIGQ9Ik0yMy42IDIwNUwxODcuNiAyMDVMMTg3LjYgMTU1TDIzNy42IDE1NUwyMzcuNiAyMDVaIiBpZD0iYWtRZmp4UWVzIj48L3BhdGg+PHBhdGggZD0iTTEyNy41OSAyMDVMNzcuNTkgMjA1TDc3LjU5IDE1NUwxMjcuNTkgMTU1TDEyNy41OSAyMDVaIiBpZD0iYmRTcndFNwayI+PC9wYXRoPjwvZGVmcz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiNDV2ZFREOGhzIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhNDBXdHhJbDhkIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNoMkNOOUFFRXBlIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNkcXY1MTMzRzgiIG9wYWNpdHk9IjEiIGZpbGw9IiNmOWFkMDAiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2IxTHY3OXlwdm0iIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2h5MUlaV3dMWCIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYWtRZmp4UWVzIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiJiZFNyd0U1cGsiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjwvZz48L3N2Zz4=",
  yarn: "/yarn.png"
}

function getPackageManagerLogo(packageManager: keyof typeof pmLogos) {
  if (packageManager === "pnpm") return "/pnpm.png"
  return pmLogos[packageManager]
}

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
      {/* Import Google Fonts for Silkscreen, Instrument Serif, and Plus Jakarta Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital,wght@0,400;1,400&family=Silkscreen:wght@400;700&display=swap');
      `}</style>

      {/* Modern, Clean, Boxy Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/40 bg-white/80 backdrop-blur-md dark:border-zinc-900/60 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2.5">
            {/* Liquid Logo Icon - Sleek Square Box */}
            <div className="relative flex size-9 items-center justify-center rounded-none border border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
              <Layers className="size-4.5" />
            </div>
            <div className="flex items-baseline gap-1.5 select-none">
              <span className="font-bold tracking-wider text-base uppercase text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "'Silkscreen', monospace" }}>LIQUID</span>
              <span className="font-serif italic text-zinc-500 dark:text-zinc-400 text-sm">UI</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="flex size-9 cursor-pointer items-center justify-center rounded-none border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
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
                  {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Portfolio Link */}
            <a
              href="https://piyusharyan.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-none border border-zinc-200 bg-white px-4 text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
            >
              <span>Portfolio</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container - Full Width */}
      <main className="mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-6 md:px-8 space-y-10">

        {/* Widescreen Hero Section with public/hero.png Background Theme - Minimalist & Boxy */}
        <section
          className="relative w-full rounded-none border border-zinc-200/40 dark:border-zinc-800/45 overflow-hidden bg-cover bg-center py-20 px-6 sm:px-12 md:px-16 text-left shadow-sm"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          {/* Subtle horizontal dark gradient overlay to ensure readability while leaving the background image fully crisp & vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent z-0" />

          {/* Content layer */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-[1600px] mx-auto">
            <div className="md:col-span-8 space-y-5">
              <div className="inline-flex items-center" style={{ perspective: "1000px" }}>
                {/* Left Panel - Hinged on Right */}
                <motion.div
                  initial={{ rotateY: -110, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
                  className="border border-r-0 border-white/20 bg-black/40 pl-2 pr-0.5 py-1 flex items-center gap-1 select-none text-[10px] font-medium tracking-wide text-zinc-200"
                  style={{ originX: 1, transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <Sparkles className="size-3 text-[#bcf62c]" />
                  <span>Interactive</span>
                </motion.div>

                {/* Center Panel - Scales Out */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: "easeInOut" }}
                  className="border-t border-b border-white/20 bg-black/40 px-0.5 py-1 flex items-center select-none text-[10px] font-medium tracking-wide text-zinc-200"
                  style={{ originX: 0.5 }}
                >
                  <span>Component</span>
                </motion.div>

                {/* Right Panel - Hinged on Left */}
                <motion.div
                  initial={{ rotateY: 110, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
                  className="border border-l-0 border-white/20 bg-black/40 pl-0.5 pr-2 py-1 flex items-center select-none text-[10px] font-medium tracking-wide text-zinc-200"
                  style={{ originX: 0, transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <span>Catalog</span>
                </motion.div>
              </div>

              {/* Atomix-Inspired Typographic Brand Logo */}
              <div className="relative block select-none">
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-bold tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ fontFamily: "'Silkscreen', monospace", color: "#bcf62c" }}>LIQUID</span>
                  <div className="h-[2px] w-24 sm:w-36 bg-[#bcf62c] opacity-60 hidden sm:block shadow-sm" />
                </div>
                <div className="text-left pl-14 sm:pl-28 mt-[-8px]">
                  <span className="text-4xl sm:text-5xl font-serif italic font-light text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">UI</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-100 font-normal max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                A curated collection of organic, tactile, and highly-interactive user interface components. Designed for React, Motion, and Tailwind CSS.
              </p>
            </div>
          </div>
        </section>

        {/* Component Navigation Tabs */}
        <section className="flex justify-center border-b border-zinc-200 dark:border-zinc-800/80 mb-8">
          <div className="flex gap-6">
            {(Object.keys(componentInfo) as ComponentType[]).map((compId) => (
              <button
                key={compId}
                onClick={() => {
                  setActiveComponent(compId)
                  setActiveShowcaseTab("preview")
                }}
                className={`relative pb-3 px-1 text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer ${activeComponent === compId
                  ? "text-zinc-900 dark:text-zinc-50"
                  : "text-zinc-450 hover:text-zinc-700 dark:text-zinc-550 dark:hover:text-zinc-305"
                  }`}
              >
                <span>{componentInfo[compId].title}</span>
                {activeComponent === compId && (
                  <motion.div
                    layoutId="active-component-indicator"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
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
            <div className="rounded-none border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3.5 dark:border-zinc-800/60">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-none bg-zinc-250 dark:bg-zinc-700" />
                  <span className="size-2 rounded-none bg-zinc-250 dark:bg-zinc-700" />
                  <span className="size-2 rounded-none bg-zinc-250 dark:bg-zinc-700" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 ml-1.5">
                    {currentComponent.title} Showcase
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex p-0.5 rounded-none bg-zinc-100 dark:bg-zinc-850">
                  <button
                    onClick={() => setActiveShowcaseTab("preview")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-none text-[10px] font-semibold tracking-wider transition-all duration-200 cursor-pointer ${activeShowcaseTab === "preview"
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                      : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                      }`}
                  >
                    <Zap className="size-3" />
                    <span>PREVIEW</span>
                  </button>
                  <button
                    onClick={() => setActiveShowcaseTab("code")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-none text-[10px] font-semibold tracking-wider transition-all duration-200 cursor-pointer ${activeShowcaseTab === "code"
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                      : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-305"
                      }`}
                  >
                    <FileCode className="size-3" />
                    <span>CODE</span>
                  </button>
                </div>
              </div>

              {/* Playground Stage */}
              <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-none border border-zinc-100 bg-zinc-50/30 p-6 dark:border-zinc-900/60 dark:bg-zinc-950/40 transition-colors duration-300 mt-4">
                {/* stage grid visualizer background */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <AnimatePresence mode="wait">
                  {activeShowcaseTab === "preview" ? (
                    <motion.div
                      key="preview-stage"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="w-full flex justify-center z-10"
                    >
                      {activeComponent === "dictionary-hero" && (
                        <DictionaryHero
                          name={dhName}
                          phonetic={dhPhonetic}
                          partOfSpeech={dhPartOfSpeech}
                          imageSrc={dhImageSrc}
                          label={dhLabel}
                          className="w-full max-w-3xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-none shadow-xl bg-zinc-50/40 dark:bg-zinc-950/20"
                        />
                      )}
                      {activeComponent === "liquid-button" && (
                        <LiquidButton
                          label={lbLabel}
                          variant={lbVariant}
                          gooSpeed={lbGooSpeed}
                          gooIntensity={lbGooIntensity}
                          className="rounded-none"
                        />
                      )}
                      {activeComponent === "magnetic-card" && (
                        <MagneticCard
                          title={mcTitle}
                          description={mcDescription}
                          accentColor={mcAccentColor}
                          tiltStrength={mcTiltStrength}
                          magneticStrength={mcMagneticStrength}
                          className="border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl bg-zinc-50/40 dark:bg-zinc-950/20 rounded-none"
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
                      className="w-full h-[420px] overflow-auto rounded-none bg-zinc-950 p-5 font-mono text-[12px] leading-relaxed text-zinc-300 border border-zinc-900 shadow-inner text-left relative"
                    >
                      <button
                        onClick={() => handleCopy(getComponentUsageCode(), "usage-code")}
                        className="absolute right-4 top-4 flex size-7 cursor-pointer items-center justify-center rounded-none border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-205 hover:bg-zinc-800 transition-colors"
                        title="Copy JSX Code"
                      >
                        {copiedText === "usage-code" ? <Check className="size-3.5 text-zinc-200" /> : <Copy className="size-3.5" />}
                      </button>
                      <pre>{getComponentUsageCode()}</pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CONFIGURE PROPS CONTROL PANEL */}
            <div className="rounded-none border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3.5 mb-5 dark:border-zinc-800/60 font-sans">
                <Compass className="size-4 text-zinc-450" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Configuration Settings
                </h3>
              </div>

              {/* Dynamic controls */}
              <div className="text-xs font-sans">
                {activeComponent === "dictionary-hero" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1: Core Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Core Details
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">DISPLAY NAME</label>
                        <input
                          type="text"
                          value={dhName}
                          onChange={(e) => setDhName(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">TOP RIBBON LABEL</label>
                        <input
                          type="text"
                          value={dhLabel}
                          onChange={(e) => setDhLabel(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                        />
                      </div>
                    </div>

                    {/* Column 2: Lexical Settings */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Lexical attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">PHONETIC NOTATION</label>
                        <input
                          type="text"
                          value={dhPhonetic}
                          onChange={(e) => setDhPhonetic(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">PART OF SPEECH</label>
                        <div className="relative">
                          <select
                            value={dhPartOfSpeech}
                            onChange={(e) => setDhPartOfSpeech(e.target.value)}
                            className="w-full appearance-none rounded-none border border-zinc-200 bg-zinc-50/50 pl-3 pr-8 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                          >
                            <option value="noun">noun</option>
                            <option value="verb">verb</option>
                            <option value="adjective">adjective</option>
                            <option value="creator">creator</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-zinc-400" />
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Portrait settings */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Portrait presets
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">PORTRAIT SOURCE URL</label>
                        <input
                          type="text"
                          value={dhImageSrc}
                          onChange={(e) => setDhImageSrc(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                          placeholder="/Piyush-3.jpeg"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <button
                          onClick={() => setDhImageSrc("/Piyush-3.jpeg")}
                          className="px-3 py-1 font-sans text-xs font-medium border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-none bg-white dark:bg-zinc-905 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-100 cursor-pointer"
                        >
                          Piyush
                        </button>
                        <button
                          onClick={() =>
                            setDhImageSrc(
                              "https://i.pinimg.com/736x/2c/1b/a1/2c1ba19c9202b78b1d8f32a13f058caa.jpg"
                            )
                          }
                          className="px-3 py-1 font-sans text-xs font-medium border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-none bg-white dark:bg-zinc-905 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-100 cursor-pointer"
                        >
                          Model A
                        </button>
                        <button
                          onClick={() =>
                            setDhImageSrc(
                              "http://i.pinimg.com/736x/b0/ee/58/b0ee586ba65bc29d42b9c399aa1f0b00.jpg"
                            )
                          }
                          className="px-3 py-1 font-sans text-xs font-medium border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-none bg-white dark:bg-zinc-905 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-100 cursor-pointer"
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
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Button Attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">BUTTON LABEL</label>
                        <input
                          type="text"
                          value={lbLabel}
                          onChange={(e) => setLbLabel(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">COLOR VARIANT</label>
                        <div className="relative">
                          <select
                            value={lbVariant}
                            onChange={(e) => setLbVariant(e.target.value as "default" | "emerald" | "violet" | "rose")}
                            className="w-full appearance-none rounded-none border border-zinc-200 bg-zinc-50/50 pl-3 pr-8 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                          >
                            <option value="default">zinc (monochrome)</option>
                            <option value="emerald">emerald (green)</option>
                            <option value="violet">violet (purple)</option>
                            <option value="rose">rose (pink)</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-zinc-400" />
                        </div>
                      </div>
                    </div>

                    {/* Col 2: Liquid Physics */}
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Liquid Physics Parameters
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                          <label className="font-medium text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">LIQUID MORPH SPEED</label>
                          <span className="font-semibold">{lbGooSpeed}s</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="0.5"
                          value={lbGooSpeed}
                          onChange={(e) => setLbGooSpeed(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-150 rounded-none appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-zinc-50"
                        />
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-normal">
                          Float animation loop speed. Lower is faster.
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                          <label className="font-medium text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">GOOEY INTENSITY</label>
                          <span className="font-semibold">{lbGooIntensity}px</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="18"
                          value={lbGooIntensity}
                          onChange={(e) => setLbGooIntensity(parseInt(e.target.value))}
                          className="w-full h-1 bg-zinc-150 rounded-none appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-zinc-50"
                        />
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-normal">
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
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Card Attributes
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">CARD TITLE</label>
                        <input
                          type="text"
                          value={mcTitle}
                          onChange={(e) => setMcTitle(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">CARD DESCRIPTION</label>
                        <textarea
                          rows={2}
                          value={mcDescription}
                          onChange={(e) => setMcDescription(e.target.value)}
                          className="w-full rounded-none border border-zinc-200 bg-zinc-50/50 px-3 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Col 2: Gravity Settings */}
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                        Spotlight & Gravity Settings
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">GLOW COLOR</label>
                          <div className="relative">
                            <select
                              value={mcAccentColor}
                              onChange={(e) => setMcAccentColor(e.target.value as "emerald" | "indigo" | "rose" | "violet")}
                              className="w-full appearance-none rounded-none border border-zinc-200 bg-zinc-50/50 pl-3 pr-8 py-2 outline-none focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200 dark:focus:border-zinc-705 transition-all"
                            >
                              <option value="emerald">emerald (green)</option>
                              <option value="indigo">indigo (blue)</option>
                              <option value="rose">rose (pink)</option>
                              <option value="violet">violet (purple)</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-zinc-400" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                            <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">3D ROTATION TILT</label>
                            <span className="font-semibold">{mcTiltStrength}°</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="30"
                            value={mcTiltStrength}
                            onChange={(e) => setMcTiltStrength(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-150 rounded-none appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-zinc-50"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                          <label className="text-zinc-500 dark:text-zinc-400 font-medium text-[10px] uppercase tracking-wider">PARALLAX DEPTH FACTOR</label>
                          <span className="font-semibold">{mcMagneticStrength}</span>
                        </div>
                        <input
                          type="range"
                          min="0.05"
                          max="0.4"
                          step="0.05"
                          value={mcMagneticStrength}
                          onChange={(e) => setMcMagneticStrength(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-150 rounded-none appearance-none cursor-pointer dark:bg-zinc-800 accent-zinc-900 dark:accent-zinc-50"
                        />
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-normal">
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

            {/* Install panel toggler */}
            <div className="rounded-none border border-zinc-200/80 bg-zinc-50 p-1 dark:border-zinc-850 dark:bg-zinc-900/60 flex gap-1 overflow-hidden font-sans">
              <button
                onClick={() => setInstallMode("command")}
                className={`w-full py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider rounded-none transition-all duration-200 cursor-pointer ${installMode === "command"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-450 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                  }`}
              >
                CLI Install
              </button>
              <button
                onClick={() => setInstallMode("manual")}
                className={`w-full py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider rounded-none transition-all duration-200 cursor-pointer ${installMode === "manual"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-450 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                  }`}
              >
                Copy Source
              </button>
            </div>

            {installMode === "command" ? (
              /* CLI card */
              <div className="rounded-none border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 shadow-sm backdrop-blur-md space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800/60 font-sans">
                  <div className="relative flex size-4 items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={packageManager}
                        src={getPackageManagerLogo(packageManager)}
                        alt={packageManager}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.12 }}
                        className="size-full object-contain"
                      />
                    </AnimatePresence>
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Shadcn CLI
                  </h3>
                </div>

                <p className="text-[11px] font-sans leading-relaxed text-zinc-400 dark:text-zinc-500">
                  Execute the installer script in your workspace:
                </p>

                {/* PM Tabs switcher */}
                <div className="flex items-center justify-between gap-1 rounded-none border border-zinc-200/85 p-1 bg-zinc-50 dark:bg-zinc-950/60 font-sans">
                  {(["bun", "pnpm", "npm", "yarn"] as const).map((pm) => (
                    <button
                      key={pm}
                      onClick={() => setPackageManager(pm)}
                      className={`w-full py-1 text-[10px] font-semibold rounded-none transition-all uppercase cursor-pointer ${packageManager === pm
                        ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                        : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                        }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>

                {/* command container */}
                <div className="relative rounded-none bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 border border-zinc-900 shadow-inner">
                  <button
                    onClick={() => handleCopy(installCommands[packageManager], "cli-command")}
                    className="absolute right-3 top-3 flex size-6 cursor-pointer items-center justify-center rounded-none border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors"
                    title="Copy command"
                  >
                    {copiedText === "cli-command" ? <Check className="size-3.5 text-zinc-200" /> : <Copy className="size-3.5" />}
                  </button>
                  <div className="pr-6 whitespace-pre-wrap break-all leading-normal">
                    {installCommands[packageManager]}
                  </div>
                </div>
              </div>
            ) : (
              /* Manual source card */
              <div className="rounded-none border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 shadow-sm backdrop-blur-md space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800/60 font-sans">
                  <FileCode className="size-4 text-zinc-450" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Source Code
                  </h3>
                </div>

                <div className="space-y-2 font-sans">
                  <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                    Required Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {currentComponent.deps.map((dep) => (
                      <span
                        key={dep}
                        className="rounded-none bg-zinc-100 dark:bg-zinc-850 px-2 py-0.5 font-mono text-[10px] text-zinc-600 dark:text-zinc-400"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-1 font-sans">
                  <h4 className="font-semibold text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider">
                    Component File
                  </h4>
                  <button
                    onClick={() => handleCopy(currentComponent.sourceCode, "raw-source")}
                    className="flex w-full items-center justify-center gap-1.5 rounded-none border border-zinc-205 bg-white py-2.5 font-sans text-xs font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer"
                  >
                    {copiedText === "raw-source" ? (
                      <>
                        <Check className="size-4 text-emerald-500" />
                        <span>Source Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-4" />
                        <span>Copy Code File</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Document Info Metadata Card */}
            <div className="rounded-none border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 shadow-sm backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800/60 font-sans">
                <Info className="size-4 text-zinc-450" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  System Details
                </h3>
              </div>
              <p className="text-xs font-sans leading-relaxed text-zinc-500 dark:text-zinc-400">
                {currentComponent.desc}
              </p>
              <div className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-relaxed pt-1 font-sans">
                <strong>REGISTRY SCHEMATIC:</strong> <br />
                <a
                  href={currentComponent.registryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-zinc-550 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 underline break-all"
                >
                  {currentComponent.registryUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Aesthetic Modern Footer */}
      <footer className="w-full border-t border-zinc-100 bg-white py-8 dark:border-zinc-900 dark:bg-zinc-950 mt-16 text-center text-xs text-zinc-400 dark:text-zinc-500 font-sans">
        <div className="mx-auto max-w-[1800px] px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 select-none">
            <span className="font-bold tracking-wider text-zinc-700 dark:text-zinc-300 uppercase" style={{ fontFamily: "'Silkscreen', monospace" }}>LIQUID</span>
            <span className="font-serif italic text-zinc-500 dark:text-zinc-400">UI</span>
            <span>• premium organic interface elements.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/PiyushAryan" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-855 dark:hover:text-zinc-300 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/piyush-aryan" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-855 dark:hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href="https://piyusharyan.online" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-855 dark:hover:text-zinc-300 transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
