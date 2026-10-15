import { useEffect, useState } from 'react'
import type { Product } from '../types/product'

const API_URL =
  '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Falha ao carregar produtos')
        return response.json()
      })
      .then((data) => setProducts(data.products ?? data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { products, loading, error }
}