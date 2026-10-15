import partnersImg from '../../assets/partners.svg'
import './Partners.scss'

const PARTNERS = [
  { id: 1, title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
  { id: 2, title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
]

export function Partners() {
  return (
    <section className="partners" aria-label="Parceiros">
      <ul className="partners__list">
        {PARTNERS.map((partner) => (
          <li
            key={partner.id}
            className="partners__card"
            style={{ backgroundImage: `url(${partnersImg})` }}
          >
            <div className="partners__content">
              <h2 className="partners__title">{partner.title}</h2>
              <p className="partners__text">{partner.text}</p>
              <a href="#" className="partners__button">
                Confira
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}