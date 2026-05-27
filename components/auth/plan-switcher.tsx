"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { planOrder, signupPlans, type PlanId } from "@/lib/plans"

export function PlanSwitcher({ activePlan }: { activePlan: PlanId }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-white/[0.02] p-1">
      {planOrder.map((planId) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("plan", planId)
        const href = `${pathname}?${params.toString()}`
        const isActive = activePlan === planId

        return (
          <Link
            key={planId}
            href={href}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {signupPlans[planId].name}
          </Link>
        )
      })}
    </div>
  )
}
