"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Volume2 } from "lucide-react"

type DictionaryDefinition = {
  text: string
  example?: string
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

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export function DictionaryHero({
  label = "Dictionary",
  name = "@Piyush Aryan",
  phonetic = "Pee-yoosh Aa-ry-an",
  partOfSpeech = "noun",
  imageSrc = "/Piyush-3.jpeg",
  imageAlt = "Portrait",
  audioSrc = "/v3.mp3",
  contactHref = "mailto:piyusharyan81@gmail.com",
  contactLabel = "Contact",
  definitions = defaultDefinitions,
  className,
}: DictionaryHeroProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group/dictionary-hero relative w-full overflow-hidden border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900",
        className
      )}
    >
      <style>{`
        @keyframes dictionary-hero-wave {
          0%, 100% { transform: scaleY(0.25); }
          50% { transform: scaleY(1); }
        }
        .dictionary-hero-wave-1 { animation: dictionary-hero-wave 0.7s ease-in-out infinite; }
        .dictionary-hero-wave-2 { animation: dictionary-hero-wave 0.5s ease-in-out infinite; animation-delay: 0.15s; }
        .dictionary-hero-wave-3 { animation: dictionary-hero-wave 0.8s ease-in-out infinite; animation-delay: 0.3s; }
        .dictionary-hero-wave-4 { animation: dictionary-hero-wave 0.6s ease-in-out infinite; animation-delay: 0.45s; }
      `}</style>

      <div className="relative h-[390px] w-full select-none overflow-hidden sm:h-[450px] md:h-[480px]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/dictionary-hero:scale-105">
          <img
            src={imageSrc}
            alt={imageAlt}
            fetchPriority="high"
            className="h-full w-full object-cover object-[50%_25%]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

        <div className="absolute left-6 right-6 top-6 z-10 flex flex-col gap-1 text-white">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 drop-shadow-md sm:text-xs">
            {label}
          </span>

          <div className="mt-2 flex flex-wrap items-center gap-3 sm:mt-3">
            <button
              type="button"
              onClick={handleSpeak}
              className={cn(
                "relative flex size-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 active:scale-95 sm:size-12",
                isSpeaking
                  ? "scale-105 border-emerald-400 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
              )}
              aria-label="Listen to pronunciation"
            >
              {isSpeaking ? (
                <span className="flex h-4 items-center justify-center gap-0.5">
                  <span className="dictionary-hero-wave-1 h-full w-[3px] origin-center rounded-full bg-emerald-400" />
                  <span className="dictionary-hero-wave-2 h-full w-[3px] origin-center rounded-full bg-emerald-400" />
                  <span className="dictionary-hero-wave-3 h-full w-[3px] origin-center rounded-full bg-emerald-400" />
                  <span className="dictionary-hero-wave-4 h-full w-[3px] origin-center rounded-full bg-emerald-400" />
                </span>
              ) : (
                <Volume2 className="size-5 transition-transform duration-200 hover:scale-110 sm:size-6" />
              )}
            </button>

            <span
              className="select-none pl-1 text-4xl font-bold tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              {name}
            </span>

            <span className="mt-2 select-none font-mono text-sm tracking-normal text-white/80 drop-shadow-md sm:mt-4 sm:text-base md:text-lg">
              • ({phonetic})
            </span>
          </div>
        </div>

        <div className="absolute bottom-6 left-4 right-4 z-10 sm:left-6 sm:right-6">
          <div className="group/glass relative overflow-hidden rounded-2xl border border-white/18 bg-zinc-950/10 p-4 shadow-2xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-black/10 sm:p-5">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl transition-all duration-700 group-hover/glass:bg-emerald-500/20" />
              <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-indigo-500/10 blur-xl transition-all duration-700 group-hover/glass:bg-indigo-500/20" />
            </div>

            <div className="relative z-10 w-full space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="select-none font-serif text-sm italic text-zinc-300 dark:text-zinc-400">
                  {partOfSpeech}
                </span>

                <a
                  href={contactHref}
                  className="group/contact inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/28 px-3 py-1 text-xs font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20"
                >
                  <Mail className="size-3 transition-transform group-hover/contact:rotate-12" />
                  <span className="hidden sm:inline">{contactLabel}</span>
                </a>
              </div>

              <div className="space-y-3.5 text-zinc-100">
                {definitions.map((definition, index) => (
                  <div key={`${definition.text}-${index}`} className="space-y-1">
                    {index > 0 ? (
                      <div className="my-2 border-t border-white/5 dark:border-zinc-800/40" />
                    ) : null}
                    <p className="text-sm font-light leading-relaxed sm:text-base">
                      <span className="mr-1.5 font-semibold text-emerald-400">
                        {index + 1}.
                      </span>
                      {definition.text}
                    </p>
                    {definition.example ? (
                      <p className="pl-5 text-xs font-light italic leading-relaxed text-zinc-400 sm:text-sm">
                        &quot;{definition.example}&quot;
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default DictionaryHero
