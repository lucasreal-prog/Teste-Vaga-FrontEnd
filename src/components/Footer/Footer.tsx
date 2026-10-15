import logo from '../../assets/Logo.svg'
import './Footer.scss'

const COLUMNS = [
  { title: 'Institucional', links: ['Quem somos', 'Trabalhe conosco', 'Política de privacidade'] },
  { title: 'Ajuda', links: ['Central de ajuda', 'Trocas e devoluções', 'Formas de pagamento'] },
  { title: 'Suporte', links: ['Fale conosco', 'Acompanhe seu pedido', 'Perguntas frequentes'] },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} className="footer__column" aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p className="footer__copy">Copyright © 2023 Econverse. Todos os direitos reservados.</p>
    </footer>
  )
}