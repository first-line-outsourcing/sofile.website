import { Shield } from "lucide-react"

export function TrustBlock() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
      <div className="flex gap-3">
        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
        <div className="space-y-1 text-xs leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground/90">Your files stay in your cloud.</p>
          <p>
            Sofile does not store your media files. You connect your storage through
            official provider APIs.
          </p>
        </div>
      </div>
    </div>
  )
}
