import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import type { CartItem, Weight } from '../types/product';

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  addToCart: (productId: string, name: string, weight: Weight, quantity: number, unitPrice: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string, name: string, weight: Weight, quantity: number, unitPrice: number) => {
    setItems((prev) => [...prev, { productId, name, weight, quantity, unitPrice }]);
  };

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, totalItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart trebuie folosit în interiorul unui CartProvider');
  }
  return ctx;
}
