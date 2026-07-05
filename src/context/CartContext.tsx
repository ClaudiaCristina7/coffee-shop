import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import type { CartItem, Weight } from "../types/product";

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (
    productId: string,
    name: string,
    weight: Weight,
    quantity: number,
    unitPrice: number,
    emoji: string,
  ) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;

  // modalul mic, "Produsul a fost adăugat în coș"
  lastAddedItem: CartItem | null;
  isAddedModalOpen: boolean;
  closeAddedModal: () => void;

  // modalul mare, cu tot coșul
  isCartModalOpen: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);
  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const addToCart = (
    productId: string,
    name: string,
    weight: Weight,
    quantity: number,
    unitPrice: number,
    emoji: string,
  ) => {
    const newItem: CartItem = {
      productId,
      name,
      weight,
      quantity,
      unitPrice,
      emoji,
    };
    setItems((prev) => [...prev, newItem]);
    setLastAddedItem(newItem);
    setIsAddedModalOpen(true);
    setIsCartModalOpen(false);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item)),
    );
  };

  const closeAddedModal = () => setIsAddedModalOpen(false);

  const openCartModal = () => {
    setIsAddedModalOpen(false);
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => setIsCartModalOpen(false);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeItem,
        updateQuantity,
        lastAddedItem,
        isAddedModalOpen,
        closeAddedModal,
        isCartModalOpen,
        openCartModal,
        closeCartModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart trebuie folosit în interiorul unui CartProvider");
  }
  return ctx;
}
