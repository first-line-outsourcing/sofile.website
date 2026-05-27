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

export type PlanId = "free" | "pro" | "expert"

const LEGACY_PLAN_ALIASES: Record<string, PlanId> = {
  studio: "expert",
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

export type PricingFeature = {
  id: PricingFeatureId
  name: string
  icon: LucideIcon
  badge?: string
}

type PricingFeatureDefinition = {
  icon: LucideIcon
  defaultName: string
  badge?: string
  planLabels?: Partial<Record<PlanId, string>>
  planIcons?: Partial<Record<PlanId, LucideIcon>>
}

const pricingFeatureCatalog: Record<PricingFeatureId, PricingFeatureDefinition> = {
  connectedProviders: {
    icon: HardDrive,
    defaultName: "Storage providers",
    planLabels: {
      free: "1 storage provider",
      pro: "Up to 3 storage providers",
      expert: "Unlimited storage providers",
    },
    planIcons: { expert: Infinity },
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
      expert: "Unlimited timeline exports",
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

const freePlanFeatureIds: PricingFeatureId[] = [
  "connectedProviders",
  "reliableTransfers",
  "listGridBrowsing",
  "previewMetadata",
  "importExportBins",
  "versions",
  "timelineExports",
]

const proAddonFeatureIds: PricingFeatureId[] = [
  "connectedProviders",
  "timelineExports",
  "search",
  "thumbnailPreviews",
  "presentationLinks",
  "sharedProjects",
  "bulkRename",
]

const expertAddonFeatureIds: PricingFeatureId[] = [
  "connectedProviders",
  "storageInsights",
  "customMetadata",
  "advancedSharedWorkflows",
  "teamMediaContext",
]

const planFeatureVisibility: Partial<
  Record<PlanId, Partial<Record<PricingFeatureId, boolean>>>
> = {
  free: {},
  pro: {},
  expert: {},
}

type PlanCore = {
  name: string
  price: string
  period?: string
  priceSuffix?: string
  description: string
  note?: string
  featureIds: PricingFeatureId[]
  ctaLabel: string
  /** Pro/Expert: intro before addon features (pricing + signup). */
  tierIntro?: string
  /** Pricing card only. */
  badge?: string
  badgeStyle?: "popular" | "teams"
  highlighted?: boolean
  includesPill?: string
}

const planCore: Record<PlanId, PlanCore> = {
  free: {
    name: "Free",
    price: "$0",
    priceSuffix: "forever",
    description: "Try Sofile with your personal cloud workflow.",
    featureIds: freePlanFeatureIds,
    ctaLabel: "Install Free",
  },
  pro: {
    name: "Pro",
    price: "$25",
    period: "/month + VAT",
    description: "For solo editors and freelancers.",
    featureIds: proAddonFeatureIds,
    ctaLabel: "Install & Try Pro",
    tierIntro: "Everything in Free, plus:",
    badge: "Most Popular",
    badgeStyle: "popular",
    highlighted: true,
    includesPill: "Includes Free",
  },
  expert: {
    name: "Expert",
    price: "$65",
    period: "/month + VAT",
    description: "For those who need complete visibility and control.",
    note: "Advanced optimization and metadata features depend on provider support.",
    featureIds: expertAddonFeatureIds,
    ctaLabel: "Install & Get Expert",
    tierIntro: "Everything in Pro, plus:",
    badge: "For power users",
    badgeStyle: "teams",
    includesPill: "Includes Pro",
  },
}

function isFeatureVisible(featureId: PricingFeatureId, planId: PlanId): boolean {
  const override = planFeatureVisibility[planId]?.[featureId]
  if (override !== undefined) return override
  return true
}

function resolveFeature(featureId: PricingFeatureId, planId: PlanId): PricingFeature {
  const def = pricingFeatureCatalog[featureId]
  return {
    id: featureId,
    name: def.planLabels?.[planId] ?? def.defaultName,
    icon: def.planIcons?.[planId] ?? def.icon,
    badge: def.badge,
  }
}

function buildFeatures(planId: PlanId): PricingFeature[] {
  return planCore[planId].featureIds
    .filter((id) => isFeatureVisible(id, planId))
    .map((id) => resolveFeature(id, planId))
}

function featureNames(planId: PlanId): string[] {
  return buildFeatures(planId).map((f) => f.name)
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
  includesPill?: string
  featuresIntro?: string
  features: PricingFeature[]
}

export type SignupPlan = {
  id: PlanId
  name: string
  price: string
  period?: string
  description: string
  includes: string[]
  includesIntro?: string
  ctaLabel: string
  note?: string
}

export const planOrder: PlanId[] = ["free", "pro", "expert"]

export function isPlanId(value: string | null | undefined): value is PlanId {
  if (value === "free" || value === "pro" || value === "expert") return true
  return value !== undefined && value !== null && value in LEGACY_PLAN_ALIASES
}

export function getPlanFromQuery(value: string | null | undefined): PlanId {
  if (value === "free" || value === "pro" || value === "expert") return value
  if (value && value in LEGACY_PLAN_ALIASES) {
    return LEGACY_PLAN_ALIASES[value]
  }
  return "free"
}

export const ADOBE_EXCHANGE_URL =
  "https://adobe.com/go/cc_plugins_discover_plugin?pluginId=108392&workflow=share"

/** All CTA buttons point to the Adobe Exchange plugin page. */
export function signupHref(_plan?: PlanId): string {
  return ADOBE_EXCHANGE_URL
}

function buildPricingPlan(planId: PlanId): PricingPlanConfig {
  const core = planCore[planId]
  return {
    planId,
    name: core.name,
    subtitle: core.description,
    price: core.price,
    period: core.period,
    priceSuffix: core.priceSuffix,
    badge: core.badge,
    badgeStyle: core.badgeStyle,
    highlighted: core.highlighted,
    ctaLabel: core.ctaLabel,
    ctaHref: signupHref(planId),
    note: core.note,
    includesPill: core.includesPill,
    featuresIntro: core.tierIntro,
    features: buildFeatures(planId),
  }
}

function buildSignupPlan(planId: PlanId): SignupPlan {
  const core = planCore[planId]
  return {
    id: planId,
    name: core.name,
    price: core.price,
    period: core.period,
    description: core.description,
    includes: featureNames(planId),
    includesIntro: core.tierIntro,
    ctaLabel: core.ctaLabel,
    note: core.note,
  }
}

export const pricingPlans: PricingPlanConfig[] = planOrder.map(buildPricingPlan)

export const signupPlans: Record<PlanId, SignupPlan> = {
  free: buildSignupPlan("free"),
  pro: buildSignupPlan("pro"),
  expert: buildSignupPlan("expert"),
}
