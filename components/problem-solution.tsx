"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const cloudConsoleBullets = [
  "Cryptic object keys and folder paths",
  "No visual previews before download",
  "Browser tabs outside your editing workflow",
  "Manual downloads and relinking",
  "Hard to know what a file actually is",
]

const sofileBullets = [
  "Search cloud buckets from inside Adobe",
  "Preview thumbnails, video, audio, and metadata",
  "Drag assets directly to your timeline",
  'Share projects without "Media Offline" errors',
  "Keep files in your own cloud storage.",
]

export function ProblemSolution() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const [selected, setSelected] = useState<string[]>([])

  const toggleSelect = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    )
  }

  const heights = [30, 42, 55, 38, 60, 47, 52, 35, 58, 44, 50, 33, 57, 40, 48, 36]

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX)
    const timer = setTimeout(() => setLoaded(true), 1000)
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleMouseUp)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
      clearTimeout(timer)
    }
  }, [])

  type PanelItem = {
    name: string
    type: "video" | "audio" | "image" | "pdf"
    duration?: string
    thumb?: string
    size?: string
    date?: string
  }
  const items: PanelItem[] = [
    { name: "12841230_9.mp4", duration: "01:45", type: "video", thumb: "/images/panel/video-1.jpg", size: "8.89 MB", date: "03/18/2025 15:04" },
    { name: "Interview_raw.mp4", duration: "08:12", type: "video", thumb: "/images/panel/video-2.jpg", size: "8.89 MB", date: "03/18/2025 15:04" },
    { name: "sound.wav", type: "audio", size: "8.89 MB", date: "03/18/2025 15:04" },
    { name: "Nature.jpg", type: "image", thumb: "/images/panel/image-1.jpg", size: "8.89 MB", date: "03/18/2025 15:04" },
    { name: "City.jpg", type: "image", thumb: "/images/panel/image-2.jpg", size: "8.89 MB", date: "03/18/2025 15:04" },
    { name: "document_543.pdf", type: "pdf", size: "8.89 MB", date: "03/18/2025 15:04" }
  ]

  return (
    <section className={`
      relative py-16 md:py-24
      transition-all duration-700 ease-out
      ${loaded ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4"}
    `}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            Built for editors
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for editors, not storage admins.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-base">
            Cloud storage consoles are made for infrastructure. <br/>Sofile turns the same buckets into a visual media workspace inside Adobe.
          </p>
        </div>

        {/* Interactive before/after slider */}
        <div className="mt-12">
          <div 
            ref={containerRef}
            className="relative
              mx-auto
              max-w-3xl
              sm:max-w-0.5xl
              md:max-w-xl
              lg:max-w-3xl
              h-[420px]
              sm:h-[280px]
              md:h-[440px]
              lg:h-[530px]
              cursor-ew-resize
              overflow-hidden
              rounded-xl
              border border-border/50
              border border-white/20
              select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Before (S3 Console) - Full width background */}
            <div className="relative bg-[#232f3e] p-4 md:p-6 md:pb-7">
              <div className="mb-3 flex items-center gap-2 text-xs text-orange-400/80">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-orange-400/20 text-[10px] font-bold">S3</div>
                AWS S3 Console
              </div>
              <div className="space-y-1">
                {[
                  "C001_V1_001.mp4",
                  "C001_V1_002.mp4", 
                  "C001_V1_003_FINAL.mp4",
                  "C001_V1_003_FINAL_v2.mp4",
                  "interview_raw_01.mov",
                  "interview_raw_02.mov",
                  "broll_drone_sunset.mp4",
                  "broll_drone_sunset_graded.mp4",
                  "C001_V1_003_FINAL_v3.mp4",
                  "C001_V1_003_FINAL_v33.mp4",
                  "C001_V1_003_FINAL_v333.mp4",
                  "C001_V1_003_FINAL_v4.mp4",
                ].map((file, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between rounded border border-neutral-600/30 bg-neutral-800/50 px-3 py-2 ${
                      i > 8 ? "hidden lg:flex" : ""
                    }`}
                  >
                    <span className="font-mono text-xs text-neutral-400">{file}</span>
                    <span className="text-[10px] text-neutral-500">
                      320 MB
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* After (Sofile) - Overlay with clip */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              {/* PANEL SHELL */}
              <div className="h-full w-full bg-[#232323] backdrop-blur-sm p-4 md:p-6">
              {/* Panel header */}
              <div className="mb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Providers</span>
                    <span>/</span>
                    <span>Dropbox</span>
                    <span>/</span>
                    <span className="text-primary">Video Samples</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="rounded-md bg-secondary px-2 py-1 text-xs">List</button>
                    <button className="rounded-md bg-primary/20 px-2 py-1 text-xs text-primary">Grid</button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 flex-1 items-center rounded-md bg-secondary px-3 text-xs text-muted-foreground">
                    Global search by name
                  </div>
                  <div className="rounded-md bg-secondary px-3 py-2 text-xs">
                    Name A–Z
                  </div>
                </div>
              </div>
              <div className="h-full">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => toggleSelect(item.name)}
                      className="group relative overflow-hidden rounded-xl bg-secondary transition hover:bg-secondary/80 cursor-pointer"
                    >
                      <div className="relative aspect-video">
                        {item.thumb ? (
                          <>
                            <img
                              src={item.thumb}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-transparent pointer-events-none" />

                            {item.type === "video" && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                                <img
                                  src="/images/panel/icon-play.svg"
                                  alt="Play"
                                  className="h-12 w-12 scale-90 opacity-50 transition-all duration-300 group-hover:opacity-90 group-hover:scale-100 cursor-pointer"
                                />
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted/20 to-transparent">
                            {item.type === "audio" && (
                              <img
                                src="/images/panel/icon-audio.svg"
                                alt="Audio file"
                                className="h-8 w-7 opacity-80"
                              />
                            )}

                            {item.type === "pdf" && (
                              <img
                                src="/images/panel/icon-pdf.svg"
                                alt="PDF file"
                                className="h-9 w-7 opacity-80"
                              />
                            )}
                          </div>
                        )}

                        {/* Duration */}
                        {item.duration && (
                          <div className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
                            {item.duration}
                          </div>
                        )}

                        {/* Checkbox */}
                        <div
                          className={`
                            absolute right-2 top-2
                            h-5 w-5 rounded
                            border-[2px] border-white/10
                            flex items-center justify-center
                            transition cursor-pointer
                            ${selected.includes(item.name)
                              ? "bg-primary border-primary text-white"
                              : "bg-black/20 border-white/50 backdrop-blur-[3px]"}
                          `}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelected(prev =>
                              prev.includes(item.name)
                                ? prev.filter(n => n !== item.name)
                                : [...prev, item.name]
                            )
                          }}
                        >
                          {selected.includes(item.name) && (
                            <svg
                              className="h-3.5 w-3.5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        {/* File name */}
                        <p className="truncate text-[14px] font-medium text-foreground">
                          {item.name}
                        </p>

                        {/* Meta row */}
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          {item.size && <span>{item.size}</span>}
                          {item.date && (
                            <>
                              <span> </span>
                              <span>{item.date}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>

            {/* Slider handle */}
            <div 
              className="absolute top-0 bottom-0 z-10 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-orange-400/20 px-2.5 py-1 text-[10px] font-medium text-orange-400">
              Before
            </div>
            <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-medium text-primary">
              After
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl sm:max-w-0.5xl md:mt-16 md:max-w-xl lg:max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-foreground">Cloud Console</h3>
            <ul className="mt-5 space-y-3">
              {cloudConsoleBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-primary/25 bg-gradient-to-b from-white/[0.05] to-transparent p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-foreground">Sofile</h3>
            <ul className="mt-5 space-y-3">
              {sofileBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              See how Sofile works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
