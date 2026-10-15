import { useState } from 'react'
import tecnologia from '../../assets/categories/tecnologia.svg'
import supermercado from '../../assets/categories/supermercado.svg'
import bebidas from '../../assets/categories/bebidas.svg'
import ferramentas from '../../assets/categories/ferramentas.svg'
import saude from '../../assets/categories/saude.svg'
import esportes from '../../assets/categories/esportes.svg'
import moda from '../../assets/categories/moda.svg'
import './Categories.scss'

const CATEGORIES = [
  { name: 'Tecnologia', icon: tecnologia },
  { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas },
  { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude },
  { name: 'Esportes e Fitness', icon: esportes },
  { name: 'Moda', icon: moda },
]

export function Categories() {
  const [active, setActive] = useState(0)

  return (
    <nav className="categories" aria-label="Categorias">
      <ul className="categories__list">
        {CATEGORIES.map((cat, index) => (
          <li key={cat.name}>
            <button
              type="button"
              className={`categories__item ${index === active ? 'categories__item--active' : ''}`}
              onClick={() => setActive(index)}
            >
              <span className="categories__icon">
                <img src={cat.icon} alt="" />
              </span>
              <span className="categories__name">{cat.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}