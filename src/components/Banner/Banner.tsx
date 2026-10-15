import bannerImg from '../../assets/banner.svg'
import './Banner.scss'


export function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
      aria-label="Promoções"
    >
      <div className="banner__content">
        <h1 className="banner__title">
          Venha conhecer nossas
          <br />
          promoções
        </h1>
        <p className="banner__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#" className="banner__button">
          Ver produto
        </a>
      </div>
    </section>
  )
}