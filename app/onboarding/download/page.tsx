import Link from "next/link"
import { AuthShell } from "@/components/auth/auth-shell"
import { Button } from "@/components/ui/button"
import { Download, MonitorPlay, LogIn, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Download Sofile panel",
    description: "Install the Sofile extension for your Adobe application.",
  },
  {
    icon: MonitorPlay,
    title: "Open Adobe Premiere Pro",
    description: "Or any supported Adobe creative app.",
  },
  {
    icon: LogIn,
    title: "Sign in and start",
    description:
      "Open the Sofile panel, sign in, and start browsing your connected storage.",
  },
]

export default function OnboardingDownloadPage() {
  return (
    <AuthShell>
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Open Sofile in Adobe
        </h1>
        <p className="mt-3 text-muted-foreground">
          Install or open the Sofile panel to start browsing your cloud media.
        </p>

        <ol className="mt-10 space-y-4 text-left">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li
                key={step.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{step.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* TODO: replace href with production download URL */}
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#" download>
              <Download className="h-4 w-4" />
              Download Sofile
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
            asChild
          >
            <Link href="/">Back to home</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          You can also manage providers and plan settings inside the Sofile panel.
        </p>
      </div>
    </AuthShell>
  )
}
