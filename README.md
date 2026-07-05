# Roast & Co. — Coffee Shop (React + Vite + TypeScript)

Proiect demo de vânzare cafea, produse vending și aparate, cu:
- Meniu cu dropdown la hover (Cafea / Produse Vending / Aparate), fiecare cu 20 de produse
- Pagină de comandă (`/order`) cu butoane de schimbare a categoriei
- Carduri de produs (`CarduriCafea.tsx`) cu selecție gramaj (250g/500g/1kg), câmp de cantitate și validare la Add to Cart

## Instalare

```bash
npm install
npm run dev
```

Deschide `http://localhost:5173`.

## Structură

```
src/
  components/   Header, DropdownMenu, CarduriCafea, Hero, Footer (fiecare cu .tsx + .css propriu)
  data/         listele de 20 produse pentru cafea / vending / aparate
  pages/        HomePage, OrderPage
  context/      CartContext (starea coșului de cumpărături)
  types/        tipuri TypeScript comune
```
