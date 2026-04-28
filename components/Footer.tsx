import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Navegação': [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Categorias', href: '/categorias' },
      { label: 'Sobre', href: '/sobre' },
    ],
    'Categorias': [
      { label: 'Ferramentas', href: '/categorias/ferramentas' },
      { label: 'Irrigação', href: '/categorias/irrigacao' },
      { label: 'Plantas', href: '/categorias/plantas' },
      { label: 'DIY', href: '/categorias/diy' },
    ],
    'Legal': [
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termos de Uso', href: '/termos' },
      { label: 'Contato', href: '/contato' },
    ],
  }

  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo-dark.svg" alt="Jardim Inteligente" className="h-12 w-auto" />
            </div>
            <p className="text-sm">
              Guias práticos de jardinagem DIY. Tudo testado, nada de teoria.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} Jardim Inteligente. Todos os direitos reservados.
            </p>
            <p className="mt-2 md:mt-0 text-sm text-gray-400">
              Desenvolvido com ❤️ para jardineiros de verdade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}