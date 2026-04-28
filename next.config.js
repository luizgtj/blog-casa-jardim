/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilitar Turbopack para compatibilidade com Tailwind CSS v4
  // Em Next.js 16+, Turbopack é default. Para usar Webpack:
  // Rode: NEXT_PRIVATE_DISABLE_TURBOPACK=1 next build
  // Ou use o flag abaixo:
  experimental: {
    // Turbopack é obrigatório em Next.js 16, não há como desabilitar via config
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig