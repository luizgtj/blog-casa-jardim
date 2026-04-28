'use client'

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-gray-900">Página não encontrada</h2>
      <p className="mt-2 text-gray-600">
        O artigo que você procura pode ter sido movido ou removido.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
      >
        ← Voltar para o início
      </Link>
    </div>
  )
}