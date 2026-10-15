import { useState } from 'react'
import { useProducts } from '../../hooks/useProducts'
import type { Product } from '../../types/product'
import { ProductCard } from '../ProductCard/ProductCard'
import { ProductModal } from '../ProductModal/ProductModal'
import './ProductShowcase.scss'

interface Props {
  title?: string
  showTabs?: boolean
}

const VISIBLE = 4
const GAP = 16 // igual ao gap do SCSS
const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export function ProductShowcase({
  title = 'Produtos relacionados',
  showTabs = true,
}: Props) {
  const { products, loading, error } = useProducts()
  const [start, setStart] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [selected, setSelected] = useState<Product | null>(null)

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  const canPrev = start > 0
  const canNext = start + VISIBLE < products.length

  const itemWidth = `calc((100% - ${(VISIBLE - 1) * GAP}px) / ${VISIBLE})`
  const offset = `calc(${start} * (${itemWidth} + ${GAP}px) * -1)`

  return (
    <section className="showcase">
      <h2 className={`showcase__title ${!showTabs ? 'showcase__title--lines' : ''}`}>
        {title}
      </h2>

      {showTabs && (
        <div className="showcase__tabs" role="tablist">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={index === activeTab}
              className={`showcase__tab ${index === activeTab ? 'showcase__tab--active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="showcase__carousel">
        <button
          type="button"
          className="showcase__arrow"
          aria-label="Anterior"
          disabled={!canPrev}
          onClick={() => setStart(start - 1)}
        >
          ‹
        </button>

        <div className="showcase__viewport">
          <div
            className="showcase__track"
            style={{ transform: `translateX(${offset})` }}
          >
            {products.map((p) => (
              <div
                key={p.productName}
                className="showcase__item"
                style={{ flex: `0 0 ${itemWidth}` }}
              >
                <ProductCard product={p} onSelect={setSelected} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="showcase__arrow"
          aria-label="Próximo"
          disabled={!canNext}
          onClick={() => setStart(start + 1)}
        >
          ›
        </button>
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}