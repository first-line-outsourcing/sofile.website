import { CheckCircle2 } from "lucide-react"

export function SignupSuccessCard() {
  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="sofile-gradient-border-card overflow-hidden rounded-2xl bg-white/[0.02] p-6 text-center backdrop-blur-xl md:p-8">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-chart-2/30 bg-chart-2/10 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
          <CheckCircle2 className="h-6 w-6 text-chart-2" aria-hidden />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Account created
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Your Sofile account is ready to go.
        </p>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          You can now sign in and start managing your cloud files in one place.
        </p>
      </div>
    </div>
  )
}
