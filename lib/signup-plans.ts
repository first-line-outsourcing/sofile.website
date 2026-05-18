export type PlanId = "free" | "pro" | "studio"

export type SignupPlan = {
  id: PlanId
  name: string
  price: string
  period?: string
  description: string
  includes: string[]
  ctaLabel: string
  note?: string
  billingNote?: string
}

export const signupPlans: Record<PlanId, SignupPlan> = {
  free: {
    id: "free",
    name: "Free",
    price: "$0",
    description: "For trying Sofile with one cloud connection.",
    includes: [
      "1 cloud provider",
      "Basic file browsing",
      "Basic file search",
      "Thumbnail preview",
    ],
    ctaLabel: "Create Free Account",
    billingNote: "No credit card required.",
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: "$25",
    period: "/month",
    description: "For solo editors and freelancers.",
    includes: [
      "Unlimited cloud providers",
      "Advanced search",
      "Video, audio, and metadata previews",
      "Share Project",
      "Reliable transfers",
    ],
    ctaLabel: "Start Pro Trial",
    billingNote: "Trial billing can be added later. No charge today.",
  },
  studio: {
    id: "studio",
    name: "Studio",
    price: "$99",
    period: "/month",
    description: "For studios managing cloud media and storage costs.",
    includes: [
      "Everything in Pro",
      "Storage Insights & Optimization",
      "Duplicate cleanup",
      "Storage waste reports",
      "Metadata & tags",
    ],
    ctaLabel: "Start Studio Trial",
    note: "Optimization features depend on provider capabilities.",
    billingNote: "Trial billing can be added later. No charge today.",
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
