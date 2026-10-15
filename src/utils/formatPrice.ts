export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function getOldPrice(value: number): number {
  return Math.round(value * 1.1 * 100) / 100 // Aumenta o preço em 10% e arredonda para duas casas decimais
}

export function getInstallment(value: number): string {
  return `ou 2x de ${formatPrice(value / 2)} sem juros`
}