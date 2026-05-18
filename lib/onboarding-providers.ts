export const onboardingProviders = [
  "Amazon S3",
  "Backblaze B2",
  "Google Cloud Storage",
  "Dropbox",
  "IBM Cloud",
] as const

export type OnboardingProvider = (typeof onboardingProviders)[number]
