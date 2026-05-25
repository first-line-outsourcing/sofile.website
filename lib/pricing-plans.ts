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
  id: PricingFeatureId
  name: string
  icon: LucideIcon
  badge?: string
}

export type PricingFeatureId =
  | "connectedProviders"
  | "reliableTransfers"
  | "listGridBrowsing"
  | "previewMetadata"
  | "importExportBins"
  | "versions"
  | "timelineExports"
  | "search"
  | "thumbnailPreviews"
  | "presentationLinks"
  | "sharedProjects"
  | "bulkRename"
  | "storageInsights"
  | "customMetadata"
  | "advancedSharedWorkflows"
  | "teamMediaContext"

type PricingFeatureDefinition = {
  icon: LucideIcon
  defaultName: string
  badge?: string
  planLabels?: Partial<Record<PlanId, string>>
  planIcons?: Partial<Record<PlanId, LucideIcon>>
}

export const pricingFeatureCatalog: Record<
  PricingFeatureId,
  PricingFeatureDefinition
> = {
  connectedProviders: {
    icon: HardDrive,
    defaultName: "Storage providers",
    planLabels: {
      free: "1 storage provider",
      pro: "Up to 3 storage providers",
      studio: "Unlimited storage providers",
    },
    planIcons: { studio: Infinity },
  },
  reliableTransfers: { icon: Zap, defaultName: "Reliable transfers" },
  listGridBrowsing: { icon: Grid3x3, defaultName: "List & Grid browsing" },
  previewMetadata: { icon: Eye, defaultName: "Preview & metadata" },
  importExportBins: {
    icon: ArrowUpDown,
    defaultName: "Import / export from bins",
  },
  versions: { icon: History, defaultName: "Versions" },
  timelineExports: {
    icon: FileStack,
    defaultName: "Timeline exports",
    planLabels: {
      free: "5 timeline exports",
      pro: "Unlimited timeline exports",
      studio: "Unlimited timeline exports",
    },
  },
  search: { icon: Search, defaultName: "Search" },
  thumbnailPreviews: {
    icon: ImageIcon,
    defaultName: "Thumbnail previews",
  },
  presentationLinks: {
    icon: Link2,
    defaultName: "Presentation links",
    badge: "Client-ready sharing",
  },
  sharedProjects: { icon: Users, defaultName: "Shared Projects" },
  bulkRename: { icon: Layers3, defaultName: "Bulk Rename" },
  storageInsights: { icon: BarChart3, defaultName: "Storage Insights" },
  customMetadata: { icon: Tags, defaultName: "Custom metadata" },
  advancedSharedWorkflows: {
    icon: Users,
    defaultName: "Advanced shared workflows",
  },
  teamMediaContext: { icon: FolderOpen, defaultName: "Team media context" },
}

/** Free card — full base list */
export const freePlanFeatureIds: PricingFeatureId[] = [
  "connectedProviders",
  "reliableTransfers",
  "listGridBrowsing",
  "previewMetadata",
  "importExportBins",
  "versions",
  "timelineExports",
]

/** Pro card — upgrades & Pro-only (not repeating other Free rows) */
export const proAddonFeatureIds: PricingFeatureId[] = [
  "connectedProviders",
  "timelineExports",
  "search",
  "thumbnailPreviews",
  "presentationLinks",
  "sharedProjects",
  "bulkRename",
]

/** Studio card — upgrades & Studio-only */
export const studioAddonFeatureIds: PricingFeatureId[] = [
  "connectedProviders",
  "storageInsights",
  "customMetadata",
  "advancedSharedWorkflows",
  "teamMediaContext",
]

/**
 * Toggle visibility per plan list.
 * `false` hides a row; delete key or `true` to show again.
 */
export const planFeatureVisibility: Partial<
  Record<PlanId, Partial<Record<PricingFeatureId, boolean>>>
> = {
  free: {},
  pro: {},
  studio: {},
}

function isFeatureVisible(featureId: PricingFeatureId, planId: PlanId): boolean {
  const override = planFeatureVisibility[planId]?.[featureId]
  if (override !== undefined) return override
  return true
}

function resolveFeature(
  featureId: PricingFeatureId,
  planId: PlanId
): PricingFeature {
  const def = pricingFeatureCatalog[featureId]
  return {
    id: featureId,
    name: def.planLabels?.[planId] ?? def.defaultName,
    icon: def.planIcons?.[planId] ?? def.icon,
    badge: def.badge,
  }
}

function buildFeaturesFromIds(
  ids: PricingFeatureId[],
  planId: PlanId
): PricingFeature[] {
  return ids
    .filter((id) => isFeatureVisible(id, planId))
    .map((id) => resolveFeature(id, planId))
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
  /** e.g. "Includes Free" — optional pill above feature list */
  includesPill?: string
  /** e.g. "Everything in Free, plus:" — shown before addon features */
  featuresIntro?: string
  features: PricingFeature[]
}

export const pricingPlans: PricingPlanConfig[] = [
  {
    planId: "free",
    name: "Free",
    subtitle: "Try Sofile with your personal cloud workflow.",
    price: "$0",
    priceSuffix: "forever",
    ctaLabel: "Start Free",
    ctaHref: "/signup?plan=free",
    features: buildFeaturesFromIds(freePlanFeatureIds, "free"),
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
    includesPill: "Includes Free",
    featuresIntro: "Everything in Free, plus:",
    features: buildFeaturesFromIds(proAddonFeatureIds, "pro"),
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
    includesPill: "Includes Pro",
    featuresIntro: "Everything in Pro, plus:",
    note: "Advanced optimization and metadata features depend on provider support.",
    features: buildFeaturesFromIds(studioAddonFeatureIds, "studio"),
  },
]
