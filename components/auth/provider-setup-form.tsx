"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getPlanFromQuery } from "@/lib/signup-plans"
import { credentialsProviders } from "@/lib/onboarding-providers"

const PROVIDER_TITLES: Record<string, string> = {
  "amazon-s3": "Amazon S3",
  "backblaze-b2": "Backblaze B2",
  "google-cloud-storage": "Google Cloud Storage",
  "ibm-cos": "IBM COS",
}

export function ProviderSetupForm({ providerId }: { providerId: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = getPlanFromQuery(searchParams.get("plan"))

  const providerName =
    PROVIDER_TITLES[providerId] ??
    credentialsProviders.find((p) => p.id === providerId)?.name ??
    providerId

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: submit credentials to backend / panel handshake
    router.push(`/onboarding/download?plan=${planId}`)
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Connect {providerName}
      </h1>
      <p className="mt-3 text-muted-foreground">
        Enter your storage credentials to connect this provider.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="accessKeyId">Access Key ID</Label>
          <Input
            id="accessKeyId"
            name="accessKeyId"
            autoComplete="off"
            placeholder="AKIA…"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="secretAccessKey">Secret Access Key</Label>
          <Input
            id="secretAccessKey"
            name="secretAccessKey"
            type="password"
            autoComplete="off"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="regionOrEndpoint">
            Region / Endpoint{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="regionOrEndpoint"
            name="regionOrEndpoint"
            autoComplete="off"
            placeholder="us-east-1 or https://…"
          />
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Your credentials are used to connect to your storage provider. Your media
          files stay in your cloud.
        </p>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Continue
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          <Link
            href={`/onboarding?plan=${planId}`}
            className="text-primary hover:underline"
          >
            ← Back to providers
          </Link>
        </p>
      </form>
    </div>
  )
}
