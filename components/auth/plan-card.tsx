import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SignupPlan } from "@/lib/signup-plans"

export function PlanCard({
  plan,
  className,
}: {
  plan: SignupPlan
  className?: string
}) {
  const isStudio = plan.id === "studio"
  const isPro = plan.id === "pro"

  return (
    <aside
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl md:p-6",
        isPro && "border-primary/40 bg-card/40",
        isStudio && "border-chart-2/25 bg-gradient-to-b from-white/[0.03] to-transparent",
        className
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Selected plan
      </p>
      <h2 className="mt-2 text-xl font-semibold text-foreground">{plan.name}</h2>
      <div className="mt-2 flex items-baseline gap-0.5">
        <span className="text-3xl font-bold tracking-tight text-foreground">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm text-muted-foreground">{plan.period}</span>
        )}
      </div>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">
        {plan.description}
      </p>

      {plan.includesIntro && (
        <p className="mt-4 text-xs font-medium text-muted-foreground">
          {plan.includesIntro}
        </p>
      )}

      <ul className={cn("space-y-2", plan.includesIntro ? "mt-2" : "mt-4")}>
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
            <Check
              className={cn(
                "mt-0.5 h-3.5 w-3.5 shrink-0",
                isStudio ? "text-chart-2" : "text-primary"
              )}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {plan.note && (
        <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
          {plan.note}
        </p>
      )}
    </aside>
  )
}
