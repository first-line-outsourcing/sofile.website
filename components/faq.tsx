"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Does Sofile store my files?",
    answer: "No. Sofile connects directly to your existing cloud storage via official APIs. Your files stay where they are — we just make them searchable and visible inside Adobe apps. We never copy, cache, or store your media on our servers.",
  },
  {
    question: "How does Sofile work with Premiere Pro?",
    answer: "Sofile runs as a panel inside Premiere Pro and Audition. You can search your cloud buckets, preview thumbnails and waveforms, and drag assets directly onto your timeline. Assets are streamed or downloaded on-demand as you edit.",
  },
  {
    question: "Which cloud providers are supported?",
    answer: "We support AWS S3, Backblaze B2, Wasabi, Google Cloud Storage, Dropbox, and OneDrive. The Free plan connects 1 provider; Pro and Business support unlimited connections.",
  },
  {
    question: "What is the \"Share Project\" feature?",
    answer: "Share Project lets you export a Premiere or Audition project file with all cloud asset references intact. When a collaborator opens it with Sofile, assets sync automatically from the cloud — no more \"Media Offline\" errors or manual relinking.",
  },
  {
    question: "Is my data secure?",
    answer: "Your cloud credentials are stored locally on your machine with encryption. We use official APIs with read-only mode available for extra safety. Sofile never has direct access to your files — we only generate indexes and thumbnails on your local machine.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-card/50"
              >
                <span className="text-sm font-medium text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
