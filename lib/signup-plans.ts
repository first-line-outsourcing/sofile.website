export type PlanId = "free" | "pro" | "studio"

export type SignupPlan = {
  id: PlanId
  name: string
  price: string
  period?: string
  description: string
  /** Features shown in the plan card on the signup page. */
  includes: string[]
  /** Short intro shown above addon features (Pro/Studio only). */
  includesIntro?: string
  ctaLabel: string
  note?: string
}

export const signupPlans: Record<PlanId, SignupPlan> = {
  free: {
    id: "free",
    name: "Free",
    price: "$0",
    description: "For trying Sofile with one cloud connection.",
    includes: [
      "1 storage provider",
      "Reliable transfers",
      "List & Grid browsing",
      "Preview & metadata",
      "Import / export from bins",
      "Versions",
      "5 timeline exports",
    ],
    ctaLabel: "Create Free Account",
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: "$25",
    period: "/month",
    description: "For solo editors and freelancers.",
    includesIntro: "Everything in Free, plus:",
    includes: [
      "Up to 3 storage providers",
      "Unlimited timeline exports",
      "Search",
      "Thumbnail previews",
      "Presentation links",
      "Shared Projects",
      "Bulk Rename",
    ],
    ctaLabel: "Create Account & Start Pro Trial",
  },
  studio: {
    id: "studio",
    name: "Studio",
    price: "$99",
    period: "/month",
    description: "For teams managing cloud media and storage costs.",
    includesIntro: "Everything in Pro, plus:",
    includes: [
      "Unlimited storage providers",
      "Storage Insights",
      "Custom metadata",
      "Advanced shared workflows",
      "Team media context",
    ],
    ctaLabel: "Create Account & Start Studio Trial",
    note: "Advanced optimization and metadata features depend on provider support.",
  },
}

export const planOrder: PlanId[] = ["free", "pro", "studio"]

export function isPlanId(value: string | null | undefined): value is PlanId {
  return value === "free" || value === "pro" || value === "studio"
}

export function getPlanFromQuery(value: string | null | undefined): PlanId {
  return isPlanId(value) ? value : "free"
}

export function signupHref(plan: PlanId = "free"): string {
  return `/signup?plan=${plan}`
}
