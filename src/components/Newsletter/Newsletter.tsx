import './Newsletter.scss'

export function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p>Assine a nossa newsletter e receba as novidades e promoções.</p>
        </div>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <div className="newsletter__fields">
            <input type="text" placeholder="Digite seu nome" aria-label="Nome" required />
            <input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" required />
            <button type="submit">Inscrever</button>
          </div>
          <label className="newsletter__check">
            <input type="checkbox" required />
            Aceito receber os e-mails e as políticas de privacidade
          </label>
        </form>
      </div>
    </section>
  )
}