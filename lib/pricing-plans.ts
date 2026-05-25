import type { PlanId } from "@/lib/signup-plans"
import type { LucideIcon } from "lucide-react"
import {
  ArrowUpDown,
  BarChart3,
  Eye,
  FileStack,
  FolderOpen,
  Grid3x3,
  HardDrive,
  History,
  ImageIcon,
  Infinity,
  Layers3,
  Link2,
  Search,
  Tags,
  Users,
  Zap,
} from "lucide-react"

export type PricingFeature = {
  name: string
  icon: LucideIcon
  badge?: string
}

export type PricingPlanConfig = {
  planId: PlanId
  name: string
  subtitle: string
  price: string
  period?: string
  priceSuffix?: string
  badge?: string
  badgeStyle?: "popular" | "teams"
  highlighted?: boolean
  ctaLabel: string
  ctaHref: string
  note?: string
  features: PricingFeature[]
}

/** Free tier — base workflow features. */
const freeFeatures: PricingFeature[] = [
  { name: "1 storage provider", icon: HardDrive },
  { name: "Reliable transfers", icon: Zap },
  { name: "List & Grid browsing", icon: Grid3x3 },
  { name: "Preview & metadata", icon: Eye },
  { name: "Import / export from bins", icon: ArrowUpDown },
  { name: "Versions", icon: History },
  { name: "5 timeline exports", icon: FileStack },
]

/** Pro = Free (upgraded where noted) + professional workflow features. */
const proFeatures: PricingFeature[] = [
  { name: "Up to 3 storage providers", icon: HardDrive },
  { name: "Reliable transfers", icon: Zap },
  { name: "List & Grid browsing", icon: Grid3x3 },
  { name: "Preview & metadata", icon: Eye },
  { name: "Import / export from bins", icon: ArrowUpDown },
  { name: "Versions", icon: History },
  { name: "Unlimited timeline exports", icon: FileStack },
  { name: "Search", icon: Search },
  { name: "Thumbnail previews", icon: ImageIcon },
  {
    name: "Presentation links",
    icon: Link2,
    badge: "Client-ready sharing",
  },
  { name: "Shared Projects", icon: Users },
  { name: "Bulk Rename", icon: Layers3 },
]

/** Studio = Pro (upgraded) + team & storage operations features. */
const studioFeatures: PricingFeature[] = [
  { name: "Unlimited storage providers", icon: Infinity },
  { name: "Reliable transfers", icon: Zap },
  { name: "List & Grid browsing", icon: Grid3x3 },
  { name: "Preview & metadata", icon: Eye },
  { name: "Import / export from bins", icon: ArrowUpDown },
  { name: "Versions", icon: History },
  { name: "Unlimited timeline exports", icon: FileStack },
  { name: "Search", icon: Search },
  { name: "Thumbnail previews", icon: ImageIcon },
  {
    name: "Presentation links",
    icon: Link2,
    badge: "Client-ready sharing",
  },
  { name: "Shared Projects", icon: Users },
  { name: "Bulk Rename", icon: Layers3 },
  { name: "Storage Insights", icon: BarChart3 },
  { name: "Custom metadata", icon: Tags },
  { name: "Advanced shared workflows", icon: Users },
  { name: "Team media context", icon: FolderOpen },
]

export const pricingPlans: PricingPlanConfig[] = [
  {
    planId: "free",
    name: "Free",
    subtitle: "Try Sofile with your personal cloud workflow.",
    price: "$0",
    priceSuffix: "forever",
    ctaLabel: "Start Free",
    ctaHref: "/signup?plan=free",
    features: freeFeatures,
  },
  {
    planId: "pro",
    name: "Pro",
    subtitle: "For solo editors and freelancers.",
    price: "$25",
    period: "/month",
    badge: "Most Popular",
    badgeStyle: "popular",
    highlighted: true,
    ctaLabel: "Start Pro Trial",
    ctaHref: "/signup?plan=pro",
    features: proFeatures,
  },
  {
    planId: "studio",
    name: "Studio",
    subtitle: "For teams managing cloud media and storage costs.",
    price: "$99",
    period: "/month",
    badge: "Best for teams",
    badgeStyle: "teams",
    ctaLabel: "Start Studio Trial",
    ctaHref: "/signup?plan=studio",
    note: "Advanced optimization and metadata features depend on provider support.",
    features: studioFeatures,
  },
]
