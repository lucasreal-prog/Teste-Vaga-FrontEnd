import brandLogo from '../../assets/Logo.svg'
import './Brands.scss'

const BRANDS = [
  { id: 1, name: 'Econverse', logo: brandLogo },
  { id: 2, name: 'Econverse', logo: brandLogo },
  { id: 3, name: 'Econverse', logo: brandLogo },
  { id: 4, name: 'Econverse', logo: brandLogo },
  { id: 5, name: 'Econverse', logo: brandLogo },
]

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>
      <ul className="brands__list">
        {BRANDS.map((brand) => (
          <li key={brand.id}>
            <a href="#" className="brands__item" aria-label={brand.name}>
              <img src={brand.logo} alt={brand.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}