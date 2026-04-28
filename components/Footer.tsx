import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <img src="/logo-dark.svg" alt="Jardim Inteligente" className="h-10 w-auto" />
            <p className="text-sm text-gray-400">
              Guias práticos de jardinagem DIY. Tudo testado, nada de teoria.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categorias
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/blog?categoria=ferramentas" className="text-sm hover:text-emerald-400 transition-colors">Ferramentas</Link></li>
              <li><Link href="/blog?categoria=irrigacao" className="text-sm hover:text-emerald-400 transition-colors">Irrigação</Link></li>
              <li><Link href="/blog?categoria=plantas" className="text-sm hover:text-emerald-400 transition-colors">Plantas</Link></li>
              <li><Link href="/blog?categoria=diy" className="text-sm hover:text-emerald-400 transition-colors">DIY</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Jardim Inteligente
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Conteúdo prático de jardinagem para quem está começando.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-500">
            © {currentYear} Jardim Inteligente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}