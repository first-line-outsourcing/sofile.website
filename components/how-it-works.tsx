"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Connect your storage",
    description:
      "Use your existing S3, Backblaze, or GCS buckets.",
    payoff: "Your files appear instantly",
  },
  {
    number: "02",
    title: "Search and preview media",
    description:
      "Find files, inspect metadata, and preview assets before downloading.",
    payoff: "Find what you need in seconds",
  },
  {
    number: "03",
    title: "Use files in Adobe",
    description:
      "Import, drag to timeline, or share projects without relinking chaos.",
    payoff: "Start editing immediately",
    featured: true,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            From cloud to timeline in seconds
          </p>
        </div>

        <div className="relative mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.12 }}
                className={`group relative rounded-2xl p-5 px-20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] ${
                  step.featured
                    ? ""
                    : ""
                }`}
              >
                <div className="mb-3 text-center">
                  <span
                    className={`inline-flex min-w-11 items-center justify-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] ${
                      step.featured
                        ? "border-primary/35 bg-primary/12 text-primary"
                        : "border-white/15 bg-white/[0.03] text-muted-foreground/85"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="text-center text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
                <p className="mt-2 text-center text-sm font-medium text-primary/90">
                  {step.payoff}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 overflow-hidden"
        >
          <Image
            src="/images/how-it-works-flow.png"
            alt="Cloud providers flow into editing workflow"
            width={976}
            height={588}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </motion.div>

        <p className="mt-6 text-xs text-muted-foreground md:text-sm">
          Works with S3, Backblaze, Dropbox — and more
        </p>
      </div>
    </section>
  )
}
