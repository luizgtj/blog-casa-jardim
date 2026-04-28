interface AdZoneProps {
  position: 'header' | 'in-article' | 'footer'
}

export default function AdZone({ position }: AdZoneProps) {
  const ads = {
    header: {
      title: 'Patrocinado',
      content: 'As melhores ferramentas para seu jardim com até 30% OFF',
      cta: 'Ver Ofertas'
    },
    'in-article': {
      title: 'Dica do Especialista',
      content: 'Investir em ferramentas de qualidade aumenta em 3x a vida útil do seu jardim.',
      cta: 'Saiba Mais'
    },
    footer: {
      title: 'Continue Aprendendo',
      content: 'Receba dicas semanais de jardinagem direto no seu email.',
      cta: 'Inscrever-se'
    }
  }

  const ad = ads[position]

  return (
    <div className={`my-8 p-6 rounded-2xl border border-gray-200 bg-gradient-to-r ${position === 'header' ? 'from-green-50 to-blue-50' : position === 'in-article' ? 'from-yellow-50 to-orange-50' : 'from-purple-50 to-pink-50'}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-gray-500 mb-1">{ad.title}</div>
          <div className="text-lg font-semibold text-gray-900 mb-3">{ad.content}</div>
          <button className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            {ad.cta} →
          </button>
        </div>
        <div className="text-gray-400 text-xs">
          {/* Espaço reservado para logo/ícone */}
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Ad</span>
          </div>
        </div>
      </div>
    </div>
  )
}