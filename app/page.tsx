import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProblemSolution } from "@/components/problem-solution"
import { FeatureCards } from "@/components/feature-cards"
import { StorageInsights } from "@/components/storage-insights"
import { DailyOps } from "@/components/daily-ops"
import { TrustLogos } from "@/components/trust-logos"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function SofileLanding() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorks />
      <ProblemSolution />
      <FeatureCards />
      <StorageInsights />
      <DailyOps />
      <TrustLogos />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
