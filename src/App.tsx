import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Categories } from './components/Categories/Categories'
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase'
import { Partners } from './components/Partners/Partners'
import { Brands } from './components/Brands/Brands'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Categories />
        <ProductShowcase showTabs={false} />
        <Partners />
        <Brands />
        <ProductShowcase showTabs={false} />
        <Newsletter />
        <Footer />  
      </main>
    </>
  )
}

export default App