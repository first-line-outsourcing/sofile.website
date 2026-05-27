"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AlertCircle, ExternalLink } from "lucide-react"

const TRUST_TEXT =
  "Payments are securely processed by Paddle, our merchant of record. Taxes, invoices, refunds, and payment processing are handled by Paddle."

function useIsPreview(): boolean {
  const searchParams = useSearchParams()
  return searchParams.get("preview") === "true"
}

/** Read transaction id from any of the supported query param names. */
function useTransactionId(): string | null {
  const searchParams = useSearchParams()
  return (
    searchParams.get("transaction_id") ??
    searchParams.get("transactionId") ??
    searchParams.get("_ptxn") ??
    searchParams.get("txn") ??
    null
  )
}

function TrustBlock() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-left">
      <p className="text-xs leading-relaxed text-muted-foreground">{TRUST_TEXT}</p>
    </div>
  )
}

function CheckoutFooter() {
  return (
    <footer className="border-t border-border/50 py-6">
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <Link href="/terms" className="hover:text-foreground">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-foreground">
          Privacy Policy
        </Link>
        <a
          href="https://www.paddle.com/legal/buyer-terms"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          Paddle Buyer Terms
          <ExternalLink className="h-3 w-3" />
        </a>
        <Link href="#" className="hover:text-foreground">
          Refund Policy
        </Link>
      </nav>
    </footer>
  )
}

function CheckoutPreview() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-center text-xl font-semibold text-foreground">
        Sofile Checkout
      </h1>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Opening secure checkout…
      </p>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-left text-sm">
        <dl className="space-y-2">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Plan</dt>
            <dd className="font-medium text-foreground">Pro</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Price</dt>
            <dd className="font-medium text-foreground">$25/month</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Billing</dt>
            <dd className="font-medium text-foreground">Monthly subscription</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6">
        <TrustBlock />
      </div>

      <div
        className="mt-6 flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-8 text-sm text-muted-foreground"
        aria-hidden
      >
        Paddle checkout preview
      </div>

      <div className="mt-6 text-center">
        <Button
          variant="outline"
          disabled
          className="border-white/15 bg-transparent text-muted-foreground"
        >
          Reopen checkout
        </Button>
      </div>
    </div>
  )
}

function CheckoutInner() {
  const isPreview = useIsPreview()
  const transactionId = useTransactionId()
  const opened = useRef(false)

  useEffect(() => {
    if (isPreview) return
    if (!transactionId || opened.current) return
    opened.current = true

    // TODO: replace with your real Paddle client-side token
    // Reference: https://developer.paddle.com/paddlejs/overview
    // window.Paddle.Setup({ token: "live_xxx" })
    // window.Paddle.Checkout.open({
    //   transactionId,
    //   settings: {
    //     successUrl: `${window.location.origin}/checkout/success`,
    //   },
    // })
    console.info("[Checkout] would open Paddle overlay for transaction:", transactionId)
  }, [transactionId, isPreview])

  if (isPreview) {
    return <CheckoutPreview />
  }

  if (!transactionId) {
    return (
      <div className="mx-auto max-w-md text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-destructive/70" />
        <h1 className="mt-4 text-xl font-semibold text-foreground">
          Checkout link is invalid or expired
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please return to Sofile and try again.
        </p>
        <Button
          className="mt-6 border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
          variant="outline"
          asChild
        >
          <Link href="/">Return to Sofile</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
      <h1 className="mt-4 text-xl font-semibold text-foreground">
        Opening secure checkout…
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Your Paddle checkout window should appear shortly.
      </p>

      <Button
        className="mt-6 border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
        variant="outline"
        onClick={() => {
          opened.current = false
          window.location.reload()
        }}
      >
        Reopen checkout
      </Button>

      <div className="mt-10">
        <TrustBlock />
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/sofile-logo.svg"
              alt="Sofile"
              width={120}
              height={32}
              priority
            />
          </Link>
          <span className="text-sm text-muted-foreground">Sofile Checkout</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Suspense
          fallback={
            <div className="mx-auto h-48 max-w-md animate-pulse rounded-2xl bg-white/[0.02]" />
          }
        >
          <CheckoutInner />
        </Suspense>
      </main>

      <CheckoutFooter />
    </div>
  )
}
