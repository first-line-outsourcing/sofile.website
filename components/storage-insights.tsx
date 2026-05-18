"use client"

import {
  Copy,
  ExternalLink,
  HardDrive,
  Info,
  Layers3,
  RefreshCw,
  Shield,
  Snowflake,
} from "lucide-react"
import Image from "next/image"

const opportunities = [
  {
    icon: Layers3,
    title: "Storage Class Optimization",
    description: "Move infrequently accessed files to lower-cost storage classes.",
    affectedSize: "8.7 TB",
    files: "45,678",
    savings: 76,
    share: "36% of total",
    action: "Review files",
    iconColor: "text-emerald-300",
  },
  {
    icon: Copy,
    title: "Duplicates",
    description: "Remove duplicate files and keep a single version.",
    affectedSize: "2.1 TB",
    files: "12,394",
    savings: 28,
    share: "13% of total",
    action: "Review Duplicates",
    iconColor: "text-orange-300",
  },
  {
    icon: Snowflake,
    title: "Cold Data",
    description: "Move rarely accessed files into cheaper tiers.",
    affectedSize: "1.3 TB",
    files: "8,912",
    savings: 12,
    share: "6% of total",
    action: "Review Cleanup",
    iconColor: "text-teal-300",
  },
  {
    icon: HardDrive,
    title: "Large Files",
    description: "Review large files that can be archived or moved to colder storage.",
    affectedSize: "15.2 TB",
    files: "1,245",
    savings: 8,
    share: "4% of total",
    action: "Review Large Files",
    iconColor: "text-blue-300",
  },
]

export function StorageInsights() {
  const currentMonthlyCost = 210
  const estimatedSavings = 124
  const estimatedMonthlyAfter = currentMonthlyCost - estimatedSavings
  const savingsRate = Math.round((estimatedSavings / currentMonthlyCost) * 100)
  const yearlySavings = estimatedSavings * 12

  return (
    <section id="insights" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            Storage Insights
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Find storage waste before it becomes a bill.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-base">
            Sofile analyzes your indexed buckets to surface duplicate files, large assets, old media, and storage class opportunities where supported.
          </p>
        </div>

        <Image
            src="/images/storage-insights.png"
            alt="Cloud providers flow into editing workflow"
            width={976}
            height={588}
            className="h-auto w-full object-cover"
            priority={false}
          />
      </div>
    </section>
  )
}