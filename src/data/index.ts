import type { Category, Product } from '../types/product';
import { cafeaProducts } from './cafeaProducts';
import { vendingProducts } from './vendingProducts';
import { aparateProducts } from './aparateProducts';

export { cafeaProducts, vendingProducts, aparateProducts };

export const productsByCategory: Record<Category, Product[]> = {
  cafea: cafeaProducts,
  vending: vendingProducts,
  aparate: aparateProducts,
};
