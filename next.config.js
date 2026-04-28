/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Desabilita Turbopack (problemas com Tailwind CSS v4)
  },
  images: {
    unoptimized: true, // Para Vercel, otimização automática
  },
}

module.exports = nextConfig