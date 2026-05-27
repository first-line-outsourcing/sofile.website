import Image from "next/image"
import { Shield, Lock, Eye, Key, Fingerprint } from "lucide-react"

const providers = [
  { name: "AWS S3", src: "/images/icons/icon_awss3.svg" },
  { name: "Backblaze", src: "/images/icons/icon_backblaze.svg" },
  { name: "Wasabi", src: "/images/icons/icon_wasabi.svg" },
  { name: "Google Cloud", src: "/images/icons/icon_googlecloud.svg" },
  { name: "Dropbox", src: "/images/icons/icon_dropbox.svg" },
]

const securityPoints = [
  { icon: Lock, text: "AES-256 encryption" },
  { icon: Fingerprint, text: "OAuth2-powered authentication. Your identity stays yours." },
  { icon: Key, text: "Direct API access — your data never passes through us" },
]

const testimonials = [
  {
    quote: "Finally, I can actually find my footage without downloading everything first.",
    author: "Sarah M.",
    role: "Freelance Editor",
  },
  {
    quote: "The Share Project feature alone saved us hours of 'Media Offline' troubleshooting.",
    author: "James K.",
    role: "Post-Production Lead",
  },
  {
    quote: "Switched from a $500/mo MAM to Sofile. Does 80% of what I need at a fraction of the cost.",
    author: "Mike R.",
    role: "Studio Owner",
  },
]

export function TrustLogos() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-chart-2/30 bg-chart-2/10 px-4 py-2 text-sm text-chart-2">
            <Shield className="h-4 w-4" />
              Secure by Design
          </div>
          <h3 className="text-xl font-semibold tracking-wide text-foreground md:text-2xl">
            Direct connection via official APIs. <span className="text-muted-foreground">We don't store your files — we just make them visible.</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Files stay in your cloud. Credentials are encrypted. We only provide the interface.
          </p>
        </div>

        {/* Security block */}
        <div className="mx-auto max-w-4xl px-6 mb-20" style={{ animationDelay: "0.06s" }}>
          <div className="grid gap-4 sm:grid-cols-3">
            {securityPoints.map((point, i) => (
              <div
                key={i}
                className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-4 py-3 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-white/20"
              >
                <div className="flex flex-col pt-3 pb-5 items-center text-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                    <point.icon className="h-5 w-5 text-chart-2 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-[12px] text-muted-foreground leading-relaxed">
                    {point.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials intentionally hidden for now. */}

        {/* Storage provider logos intentionally hidden for now. */}
      </div>
    </section>
  )
}
