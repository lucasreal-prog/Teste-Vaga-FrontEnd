import { useEffect } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import './ProductModal.scss'

interface Props {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>
        <img className="modal__image" src={product.photo} alt={product.productName} />
        <div className="modal__info">
          <h2 className="modal__title">{product.productName}</h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <button type="button" className="modal__buy">Comprar</button>
        </div>
      </div>
    </div>
  )
}