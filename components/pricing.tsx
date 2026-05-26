import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Cloud, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  pricingPlans,
  type PricingFeature,
  type PricingPlanConfig,
} from "@/lib/pricing-plans"

type FeatureAccent = "primary" | "teams"

function FeatureTierIntro({
  pill,
  intro,
  accent = "primary",
}: {
  pill?: string
  intro?: string
  accent?: FeatureAccent
}) {
  const isTeams = accent === "teams"
  if (!pill && !intro) return null

  return (
    <li className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-white/[0.06] px-4 py-4 pt-3">
      {pill && (
        <span
          className={cn(
            "inline-flex shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-medium",
            isTeams
              ? "border-chart-2/25 bg-chart-2/10 text-chart-2"
              : "border-primary/25 bg-primary/10 text-primary/80"
          )}
        >
          {pill}
        </span>
      )}
      {intro && (
        <span className="text-xs font-medium text-muted-foreground">{intro}</span>
      )}
    </li>
  )
}

function FeatureItem({
  feature,
  accent = "primary",
}: {
  feature: PricingFeature
  accent?: FeatureAccent
}) {
  const Icon = feature.icon
  const isTeams = accent === "teams"

  return (
    <li className="flex min-h-[40px] items-center gap-3 px-4 py-2">
      <Icon
        className={cn("h-4 w-4 shrink-0", isTeams ? "text-chart-2" : "text-primary")}
        aria-hidden
      />
      <span className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
        <span className="text-sm leading-snug text-foreground/90">{feature.name}</span>
        {feature.badge && (
          <span
            className={cn(
              "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium leading-none",
              isTeams
                ? "bg-chart-2/15 text-chart-2"
                : "bg-primary/15 text-primary/75"
            )}
          >
            {feature.badge}
          </span>
        )}
      </span>
      <Check
        className={cn("h-3.5 w-3.5 shrink-0", isTeams ? "text-chart-2" : "text-primary")}
        aria-hidden
      />
    </li>
  )
}

function FloatingPlanBadge({
  label,
  variant,
}: {
  label: string
  variant: "popular" | "teams"
}) {
  return (
    <span
      className={cn(
        "whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium",
        variant === "popular" &&
          "bg-gradient-to-b from-primary to-primary/85 text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.5)]",
        variant === "teams" &&
          "border border-chart-2/35 bg-background text-chart-2 ring-background shadow-[0_0_16px_rgba(0,188,162,0.2)]"
      )}
    >
      {label}
    </span>
  )
}

function PricingCard({ plan }: { plan: PricingPlanConfig }) {
  const isPopular = plan.highlighted
  const isStudio = plan.badgeStyle === "teams"
  const featureAccent: FeatureAccent = isStudio ? "teams" : "primary"

  return (
    <article
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors",
        isPopular &&
          "border-primary/60 bg-card/50 shadow-[0_0_48px_rgba(59,130,246,0.22)] ring-1 ring-primary/30",
        isStudio &&
          "border-chart-2/30 bg-gradient-to-b from-white/[0.03] to-transparent",
        !isPopular && !isStudio && "border-white/10 bg-white/[0.02]"
      )}
    >
      {isPopular && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/[0.06]"
          aria-hidden
        />
      )}

      <div className="relative flex min-h-[220px] flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1 min-h-10 text-sm leading-snug text-muted-foreground">
          {plan.subtitle}
        </p>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm text-muted-foreground">{plan.period}</span>
          )}
          {plan.priceSuffix && (
            <span className="text-sm text-muted-foreground">{plan.priceSuffix}</span>
          )}
        </div>

        <div className="mt-5">
          <Button
            className={cn(
              "w-full",
              isPopular && "bg-primary text-primary-foreground hover:bg-primary/90",
              isStudio &&
                "border border-chart-2/35 bg-chart-2/10 text-chart-2 hover:bg-chart-2/15",
              !isPopular &&
                !isStudio &&
                "border border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
            )}
            variant={isPopular ? "default" : "outline"}
            asChild
          >
            <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
          </Button>
        </div>
      </div>

      <ul className="relative flex flex-1 flex-col border-t border-white/[0.06] py-1">
        {(plan.includesPill || plan.featuresIntro) && (
          <FeatureTierIntro
            pill={plan.includesPill}
            intro={plan.featuresIntro}
            accent={featureAccent}
          />
        )}
        {plan.features.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} accent={featureAccent} />
        ))}
      </ul>

      {plan.note && (
        <p className="flex gap-2 border-t border-white/[0.06] px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-chart-2/80" aria-hidden />
          <span>{plan.note}</span>
        </p>
      )}
    </article>
  )
}

function PricingCardSlot({ plan }: { plan: PricingPlanConfig }) {
  const hasFloatingBadge =
    plan.badge && (plan.highlighted || plan.badgeStyle === "teams")

  if (!hasFloatingBadge) {
    return (
      <div className="h-full">
        <PricingCard plan={plan} />
      </div>
    )
  }

  const badgeVariant = plan.badgeStyle === "teams" ? "teams" : "popular"

  return (
    <div className="relative h-full">
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <FloatingPlanBadge label={plan.badge!} variant={badgeVariant} />
      </div>
      <PricingCard plan={plan} />
    </div>
  )
}

function PricingProviderNote() {
  return (
    <div className="mt-8 flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left">
      <Cloud className="mx-auto h-4 w-4 shrink-0 text-muted-foreground sm:mx-0" aria-hidden />
      <p className="text-sm text-muted-foreground">
        Some advanced features are available only for supported S3-compatible storage providers.{" "}
        <Link
          href="#provider-capabilities"
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          See supported providers
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </p>
    </div>
  )
}

function EnterpriseContactRow() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="font-semibold text-foreground">Enterprise & Partners</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            For larger teams, vendors, and storage providers. SSO, white-label panels,
            custom integrations, and dedicated support.
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
            Choose your workflow
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-base">
            From personal editing workflows to studio-scale media operations.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-4 overflow-visible pt-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {pricingPlans.map((plan) => (
            <PricingCardSlot key={plan.planId} plan={plan} />
          ))}
        </div>

        <PricingProviderNote />
        <EnterpriseContactRow />
      </div>
    </section>
  )
}
