/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/privacy", destination: "/legal/privacy.pdf" },
      { source: "/terms", destination: "/legal/terms.pdf" },
    ]
  },
}

export default nextConfig
