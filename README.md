# Teste Front-End Econverse

Página desenvolvida em React + TypeScript com **Sass, seguindo o layout do Figma, com vitrine de produtos consumindo JSON e modal de detalhes.

## Tecnologias

- React + TypeScript
- Vite
- Sass (SCSS)
- Sem bibliotecas ou Bootstrap

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Como rodar

```bash
# Para instalar e acessar

npm install

# iniciar em modo desenvolvimento
npm run dev
```

Abra o endereço que aparecerá no terminal (normalmente `http://localhost:5173` ou `http://localhost:5174`).

## Como compilar

```bash
npm run build      # gera a pasta dist
npm run preview    # visualiza o build
```

## Estrutura

```
src/
  components/   : Header, Banner, Categories, ProductShowcase, ProductCard,
                : ProductModal, Partners, Brands, Newsletter, Footer
  hooks/        : useProducts (busca o JSON de produtos)
  types/        : tipos TypeScript
  utils/        : formatação de preço
  styles/       : CSS inteiro
  assets/       : Imagens

```

## Observações

- O preço antigo e o parcelamento exibidos nos cards são calculados no front apenas para reproduzir o layout, pois o JSON não os fornece.
- Clicar em um produto abre um modal (fecha com o X, a tecla ESC ou clicando fora).
- Foram usados HTML semântico e meta tags básicas de SEO.