"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Volume2, Github, Linkedin, Globe, Sparkles, Compass } from "lucide-react"

type DictionaryDefinition = {
  text: string
  example?: string
}

type SocialLink = {
  platform: string
  href: string
  icon: "Github" | "Linkedin" | "Globe" | "Mail"
}

type DictionaryHeroProps = {
  label?: string
  name?: string
  phonetic?: string
  partOfSpeech?: string
  imageSrc?: string
  imageAlt?: string
  audioSrc?: string
  contactHref?: string
  contactLabel?: string
  definitions?: DictionaryDefinition[]
  synonyms?: string[]
  antonyms?: string[]
  origin?: string
  techStack?: string[]
  socials?: SocialLink[]
  className?: string
}

const defaultDefinitions: DictionaryDefinition[] = [
  {
    text: "A software engineer building at the intersection of AI and web technologies.",
    example: "He solved the bug in minutes, what a Piyush!",
  },
  {
    text: "An AI engineer who architects personalized voice agents and memory structures.",
    example: "Let's consult Piyush for our agentic memory architecture.",
  },
]

const defaultSynonyms = [
  "AI Engineer",
  "Full Stack Creator",
  "Voice Agent Architect",
  "UX Designer",
  "Problem Solver",
]

const defaultAntonyms = [
  "Legacy Code Maintainer",
  "Static Page Developer",
  "Manual Process Enthusiast",
  "Waterfall Devotee",
]

const defaultOrigin =
  "Circa 1999 • Varanasi, India. Derived from Sanskrit 'piyusha' meaning nectar or immortal drink. In modern engineering contexts, represents clean, highly performant code and agentic AI execution."

const defaultTechStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Motion",
  "TailwindCSS",
  "Node.js",
  "Python",
  "OpenAI API",
]

const defaultSocials: SocialLink[] = [
  { platform: "GitHub", href: "https://github.com/PiyushAryan", icon: "Github" },
  { platform: "LinkedIn", href: "https://linkedin.com/in/piyush-aryan", icon: "Linkedin" },
  { platform: "Portfolio", href: "https://piyusharyan.online", icon: "Globe" },
]

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const socialIcons = {
  Github: Github,
  Linkedin: Linkedin,
  Globe: Globe,
  Mail: Mail,
}

export function DictionaryHero({
  label = "Dictionary Entry",
  name = "Piyush Aryan",
  phonetic = "pee-yoosh aa-ry-an",
  partOfSpeech = "noun",
  imageSrc = "/Piyush-3.jpeg",
  imageAlt = "Portrait",
  audioSrc = "/v3.mp3",
  contactHref = "mailto:piyusharyan81@gmail.com",
  contactLabel = "Contact",
  definitions = defaultDefinitions,
  synonyms = defaultSynonyms,
  antonyms = defaultAntonyms,
  origin = defaultOrigin,
  techStack = defaultTechStack,
  socials = defaultSocials,
  className,
}: DictionaryHeroProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [activeTab, setActiveTab] = useState<"definitions" | "thesaurus" | "etymology">("definitions")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const handleSpeak = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    if (isSpeaking) {
      audioRef.current?.pause()
      if (audioRef.current) audioRef.current.currentTime = 0
      setIsSpeaking(false)
      return
    }

    if (typeof window === "undefined" || !audioSrc) return

    if (!audioRef.current) {
      const audio = new Audio(audioSrc)
      audio.onplay = () => setIsSpeaking(true)
      audio.onended = () => setIsSpeaking(false)
      audio.onpause = () => setIsSpeaking(false)
      audio.onerror = () => setIsSpeaking(false)
      audioRef.current = audio
    }

    audioRef.current.currentTime = 0
    audioRef.current.play().catch(() => setIsSpeaking(false))
  }

  const tabs = [
    { id: "definitions" as const, label: "Definitions" },
    { id: "thesaurus" as const, label: "Thesaurus" },
    { id: "etymology" as const, label: "Origin & Tech" },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "dictionary-hero-grid group/dictionary-hero relative w-full overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-50/40 p-4 shadow-2xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/20 sm:p-6",
        className
      )}
    >
      {/* Styles for dynamic fonts and animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        .dictionary-hero-grid {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-image: radial-gradient(circle, rgba(24, 24, 27, 0.04) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .dictionary-hero-grid {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
        
        @keyframes dictionary-hero-visualizer-wave {
          0%, 100% { transform: scaleY(0.2); }
          50% { transform: scaleY(1); }
        }
        .dictionary-hero-bar {
          animation: dictionary-hero-visualizer-wave 0.8s ease-in-out infinite;
        }
      `}</style>

      {/* Aesthetic glowing blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl">
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover/dictionary-hero:bg-emerald-500/15" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-700 group-hover/dictionary-hero:bg-indigo-500/15" />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {/* Left Column: Portrait and Media */}
        <div className="relative md:col-span-4 flex flex-col">
          <div className="group/portrait relative w-full flex-1 min-h-[320px] md:min-h-0 overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-100 shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900">
            <img
              src={imageSrc}
              alt={imageAlt}
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_25%] transition-transform duration-700 ease-out group-hover/portrait:scale-[1.03]"
            />

            {/* Dark vignette overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

            {/* Top glassmorphic tag */}
            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-md">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-md sm:text-[10px]">
                {label}
              </span>
            </div>

            {/* Bottom Signature & Phonetic Details */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
              <div className="flex flex-col gap-0.5">
                <span
                  className="select-none text-3xl font-bold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-4xl"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  @{name.toLowerCase().replace(/\s+/g, "")}
                </span>
                <span className="font-mono text-[10px] tracking-wide text-white/70 drop-shadow-md sm:text-xs">
                  • ({phonetic})
                </span>
              </div>

              {/* Glassmorphic Pronunciation button inside image container */}
              <button
                type="button"
                onClick={handleSpeak}
                className={cn(
                  "relative flex size-11 cursor-pointer items-center justify-center rounded-full border shadow-lg transition-all duration-300 active:scale-90 backdrop-blur-md",
                  isSpeaking
                    ? "border-emerald-400 bg-emerald-500/25 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105"
                    : "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20 hover:scale-105"
                )}
                aria-label="Listen to pronunciation"
              >
                {isSpeaking ? (
                  <span className="flex h-5 items-center justify-center gap-[2.5px]">
                    <span className="dictionary-hero-bar h-2.5 w-[2px] rounded-full bg-emerald-400" style={{ animationDelay: "0.1s" }} />
                    <span className="dictionary-hero-bar h-4 w-[2px] rounded-full bg-emerald-400" style={{ animationDelay: "0.3s" }} />
                    <span className="dictionary-hero-bar h-3.5 w-[2px] rounded-full bg-emerald-400" style={{ animationDelay: "0.0s" }} />
                    <span className="dictionary-hero-bar h-5 w-[2px] rounded-full bg-emerald-400" style={{ animationDelay: "0.4s" }} />
                    <span className="dictionary-hero-bar h-3.5 w-[2px] rounded-full bg-emerald-400" style={{ animationDelay: "0.2s" }} />
                  </span>
                ) : (
                  <Volume2 className="size-5 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Typographic Dictionary Details */}
        <div className="flex flex-col justify-between md:col-span-8">
          <div className="space-y-5">
            {/* Header info */}
            <div className="flex items-baseline gap-2.5 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
              <h2
                className="font-serif text-4xl italic tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {name}
              </h2>
              <span className="font-serif text-sm italic text-zinc-400 dark:text-zinc-500">
                {partOfSpeech}
              </span>
              <span className="ml-auto font-mono text-[9px] font-medium tracking-[0.1em] text-zinc-400 dark:text-zinc-500 sm:text-[10px]">
                [ip/ˈpiː.juːʃ/]
              </span>
            </div>

            {/* Glassmorphic Tabs Navigation */}
            <div className="flex items-center gap-1 rounded-lg bg-zinc-200/30 p-1 dark:bg-zinc-900/40">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative w-full py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200",
                    activeTab === tab.id
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                  )}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="dictionary-hero-active-tab"
                      className="absolute inset-0 rounded-md bg-white shadow-sm dark:bg-zinc-800/80"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content Display Panels with Animated Stagger */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  {/* TAB 1: DEFINITIONS */}
                  {activeTab === "definitions" && (
                    <div className="space-y-4">
                      {definitions.map((def, idx) => (
                        <div key={idx} className="group/def relative pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-emerald-400 dark:hover:border-emerald-500">
                          <p className="text-sm font-normal leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
                            <span className="mr-1.5 font-bold text-zinc-900 dark:text-zinc-50">
                              {idx + 1}.
                            </span>
                            {def.text}
                          </p>
                          {def.example && (
                            <p className="mt-1 text-xs italic leading-relaxed text-zinc-400 dark:text-zinc-500 sm:text-sm">
                              &ldquo;{def.example}&rdquo;
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 2: THESAURUS */}
                  {activeTab === "thesaurus" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          Synonyms
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {synonyms.map((syn, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-emerald-400"
                            >
                              <Sparkles className="size-3" />
                              {syn}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          Antonyms
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {antonyms.map((ant, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 rounded-full border border-rose-500/10 bg-rose-500/5 px-3 py-1 text-xs font-medium text-rose-600 dark:border-rose-400/10 dark:bg-rose-400/5 dark:text-rose-400"
                            >
                              {ant}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: ETYMOLOGY / TECH */}
                  {activeTab === "etymology" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          Origin / Etymology
                        </span>
                        <p className="pl-3 border-l-2 border-indigo-400/30 text-xs italic leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                          {origin}
                        </p>
                      </div>

                      <div className="space-y-2 pt-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          Primary Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Socials & Call-to-action bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
            {/* Social Dock Links */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const IconComponent = socialIcons[social.icon] || Compass
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200"
                    title={social.platform}
                  >
                    <IconComponent className="size-4" />
                  </a>
                )
              })}
            </div>

            {/* Elegant glowing email action button */}
            <a
              href={contactHref}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-bold text-emerald-600 transition-all duration-300 hover:bg-emerald-500/25 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400 dark:hover:bg-emerald-400/15"
            >
              <Mail className="size-3.5" />
              <span>{contactLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default DictionaryHero
