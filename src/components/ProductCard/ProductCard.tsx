import type { Product } from '../../types/product'
import { formatPrice, getInstallment, getOldPrice } from '../../utils/formatPrice'
import './ProductCard.scss'

interface Props {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: Props) {
  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
      />
      <h3 className="product-card__name">{product.descriptionShort}</h3>
      <p className="product-card__old-price">{formatPrice(getOldPrice(product.price))}</p>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installment">{getInstallment(product.price)}</p>
      <p className="product-card__shipping">Frete grátis</p>
      <button type="button" className="product-card__button">
        Comprar
      </button>
    </article>
  )
}