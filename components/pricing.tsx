import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Minus, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { signupHref, type PlanId } from "@/lib/signup-plans"

const FEATURE_LABELS = [
  "Cloud providers",
  "File browsing",
  "Search",
  "Previews",
  "Timeline import",
  "Share Project",
  "Reliable transfers",
  "Storage Insights",
  "Duplicate cleanup",
  "Metadata indexing",
  "Bulk actions",
] as const

type PlanFeature = {
  value: string
  included: boolean
}

type PricingPlan = {
  planId: PlanId
  name: string
  subtitle: string
  price: string
  period?: string
  badge?: string
  badgeStyle?: "popular" | "teams"
  highlighted?: boolean
  ctaLabel: string
  features: PlanFeature[]
  note?: string
}

const plans: PricingPlan[] = [
  {
    planId: "free",
    name: "Free",
    subtitle: "For trying Sofile with one cloud connection.",
    price: "$0",
    ctaLabel: "Start Free",
    features: [
      { value: "1 provider", included: true },
      { value: "Basic", included: true },
      { value: "Basic", included: true },
      { value: "Thumbnails", included: true },
      { value: "Included", included: true },
      { value: "", included: false },
      { value: "", included: false },
      { value: "", included: false },
      { value: "", included: false },
      { value: "", included: false },
      { value: "", included: false },
    ],
  },
  {
    planId: "pro",
    name: "Pro",
    subtitle: "For solo editors and freelancers.",
    price: "$25",
    period: "/month",
    badge: "Popular",
    badgeStyle: "popular",
    highlighted: true,
    ctaLabel: "Start Pro Trial",
    features: [
      { value: "Unlimited", included: true },
      { value: "Advanced", included: true },
      { value: "Advanced", included: true },
      { value: "Video, audio, metadata", included: true },
      { value: "Included", included: true },
      { value: "Included", included: true },
      { value: "Reliable queue", included: true },
      { value: "", included: false },
      { value: "", included: false },
      { value: "Basic", included: true },
      { value: "Basic", included: true },
    ],
  },
  {
    planId: "studio",
    name: "Studio",
    subtitle: "For studios managing cloud media and storage costs.",
    price: "$99",
    period: "/month",
    badge: "Best for teams",
    badgeStyle: "teams",
    ctaLabel: "Start Studio Trial",
    note: "Optimization features depend on provider capabilities.",
    features: [
      { value: "Unlimited", included: true },
      { value: "Advanced", included: true },
      { value: "Advanced", included: true },
      { value: "Video, audio, metadata", included: true },
      { value: "Included", included: true },
      { value: "Team-ready", included: true },
      { value: "Reliable queue", included: true },
      { value: "Included", included: true },
      { value: "Included", included: true },
      { value: "Advanced", included: true },
      { value: "Advanced", included: true },
    ],
  },
]

function FeatureRow({
  label,
  value,
  included,
}: {
  label: string
  value: string
  included: boolean
}) {
  return (
    <div className="grid min-h-[44px] grid-cols-[1fr_auto] items-center gap-3 border-b border-white/[0.06] px-4 py-2.5 last:border-b-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex items-center justify-end gap-1.5 text-right">
        {included ? (
          <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
        ) : (
          <Minus className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" aria-hidden />
        )}
        <span
          className={cn(
            "text-xs leading-snug",
            included ? "text-foreground/90" : "text-muted-foreground"
          )}
        >
          {value}
        </span>
      </div>
    </div>
  )
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isPopular = plan.highlighted
  const isStudio = plan.badgeStyle === "teams"

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors",
        isPopular &&
          "border-primary/50 bg-card/50 shadow-lg shadow-primary/10",
        isStudio &&
          !isPopular &&
          "border-chart-2/25 bg-gradient-to-b from-white/[0.03] to-transparent",
        !isPopular && !isStudio && "border-white/10 bg-white/[0.02]"
      )}
    >
      {plan.badge && (
        <div
          className={cn(
            "absolute right-0 top-0 rounded-bl-xl px-3 py-1 text-xs font-medium",
            plan.badgeStyle === "popular" &&
              "bg-primary text-primary-foreground",
            plan.badgeStyle === "teams" &&
              "border-l border-b border-chart-2/20 bg-chart-2/10 text-chart-2"
          )}
        >
          {plan.badge}
        </div>
      )}

      <div className="border-b border-white/[0.06] p-5 pt-6">
        <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1 min-h-[40px] text-sm leading-snug text-muted-foreground">
          {plan.subtitle}
        </p>
        <div className="mt-4 flex items-baseline gap-0.5">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm text-muted-foreground">{plan.period}</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex-1 py-1">
          {plan.features.map((feature, index) => (
            <FeatureRow
              key={FEATURE_LABELS[index]}
              label={FEATURE_LABELS[index]}
              value={feature.value}
              included={feature.included}
            />
          ))}
        </div>

        {plan.note && (
          <p className="border-t border-white/[0.06] px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
            {plan.note}
          </p>
        )}

        <div className="mt-auto border-t border-white/[0.06] p-4">
          <Button
            className={cn(
              "w-full",
              isPopular && "bg-primary text-primary-foreground hover:bg-primary/90",
              isStudio &&
                !isPopular &&
                "border border-chart-2/30 bg-chart-2/10 text-chart-2 hover:bg-chart-2/15",
              !isPopular &&
                !isStudio &&
                "bg-secondary text-foreground hover:bg-secondary/80"
            )}
            variant={isStudio && !isPopular ? "outline" : "default"}
            asChild
          >
            <Link href={signupHref(plan.planId)}>{plan.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function EnterpriseContactRow() {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="font-semibold text-foreground">
            Enterprise & Partners
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            For larger teams, vendors, and storage providers. <br/>
            SSO, white-label panels, custom integrations, and dedicated support.
          </p>
        </div>
        <Button
          variant="outline"
          className="shrink-0 border-white/15 bg-transparent hover:bg-white/[0.04]"
          asChild
        >
          <Link href="/contact-sales">
            Contact Sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            Pricing
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Start free, scale when ready.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-base">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <EnterpriseContactRow />
      </div>
    </section>
  )
}
