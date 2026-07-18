/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable webpack build cache to keep individual files under Cloudflare's 25 MiB limit
  webpack: (config) => {
    config.cache = false
    return config
  },
}

export default nextConfig