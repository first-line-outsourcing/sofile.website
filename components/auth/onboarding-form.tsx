"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getPlanFromQuery } from "@/lib/signup-plans"
import {
  oauthProviders,
  credentialsProviders,
  type OnboardingProvider,
} from "@/lib/onboarding-providers"

export function OnboardingPageHeader() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Connect your first cloud provider
      </h1>
      <p className="mt-3 text-muted-foreground">
        Choose a provider to start using Sofile.
      </p>
    </div>
  )
}

function ProviderCard({
  provider,
  ctaLabel,
  onSelect,
}: {
  provider: OnboardingProvider
  ctaLabel: string
  onSelect: () => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
      <div className="flex items-center gap-3">
        {provider.logo ? (
          <Image
            src={provider.logo}
            alt={provider.name}
            width={24}
            height={24}
            className="h-6 w-6 shrink-0 opacity-80"
          />
        ) : (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[10px] font-bold text-muted-foreground">
            {provider.name[0]}
          </span>
        )}
        <span className="text-sm font-medium text-foreground/90">{provider.name}</span>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="shrink-0 border-white/15 bg-transparent text-foreground hover:bg-white/[0.06]"
        onClick={onSelect}
      >
        {ctaLabel}
      </Button>
    </div>
  )
}

function ProviderGroup({
  title,
  subtitle,
  providers,
  ctaLabel,
  onSelect,
}: {
  title: string
  subtitle: string
  providers: OnboardingProvider[]
  ctaLabel: string
  onSelect: (provider: OnboardingProvider) => void
}) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div className="space-y-2">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            ctaLabel={ctaLabel}
            onSelect={() => onSelect(provider)}
          />
        ))}
      </div>
    </section>
  )
}

export function OnboardingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = getPlanFromQuery(searchParams.get("plan"))

  function handleOAuth(provider: OnboardingProvider) {
    // TODO: initiate OAuth flow with provider.id
    // For now, route to download as a mock
    router.push(`/onboarding/download?plan=${planId}`)
  }

  function handleCredentials(provider: OnboardingProvider) {
    router.push(`/onboarding/provider/${provider.id}?plan=${planId}`)
  }

  return (
    <div className="mx-auto mt-10 max-w-xl space-y-8">
      <ProviderGroup
        title="OAuth"
        subtitle="Connect with secure sign-in"
        providers={oauthProviders}
        ctaLabel="Connect"
        onSelect={handleOAuth}
      />
      <ProviderGroup
        title="Object Storage"
        subtitle="Connect using access credentials"
        providers={credentialsProviders}
        ctaLabel="Set up"
        onSelect={handleCredentials}
      />
    </div>
  )
}
