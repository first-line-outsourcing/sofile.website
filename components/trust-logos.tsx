import Image from "next/image"
import { Shield, Lock, Eye, Key } from "lucide-react"

const providers = [
  { name: "AWS S3", src: "/images/icons/icon_awss3.svg" },
  { name: "Backblaze", src: "/images/icons/icon_backblaze.svg" },
  { name: "Wasabi", src: "/images/icons/icon_wasabi.svg" },
  { name: "Google Cloud", src: "/images/icons/icon_googlecloud.svg" },
  { name: "Dropbox", src: "/images/icons/icon_dropbox.svg" },
]

const securityPoints = [
  { icon: Lock, text: "Credentials stay on your machine" },
  { icon: Eye, text: "Read-only mode prevents accidental changes" },
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
            Files stay in your cloud. Credentials stay on your machine. We only provide the interface.
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

        {/* Testimonials */}
        <div className="space-y-6">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by editors & studios worldwide
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="group relative rounded-2xl border border-white/[0.06] bg-card/40 p-5 backdrop-blur-xl transition-colors duration-300 ease-out hover:bg-white/[0.03]"
              >
                <p className="relative text-sm leading-relaxed text-foreground/90 md:text-[0.9rem]">
                  <span className="pointer-events-none absolute -left-1 -top-3 text-3xl text-primary/40">
                    “
                  </span>
                  <span className="pl-3">{t.quote}</span>
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      {t.author}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Storage provider logos — Adobe apps covered in #adobe-creative-cloud */}
        <div className="text-center space-y-6">
          <p className="text-sm text-muted-foreground">
            Connects to your cloud storage providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {providers.map((provider, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-1.5 text-muted-foreground transition-all duration-300 ease-out hover:text-foreground"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                  <Image
                    src={provider.src}
                    alt={provider.name}
                    width={22}
                    height={22}
                    className="h-5 w-5 opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]"
                  />
                </div>
                <span className="text-[10px]">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
