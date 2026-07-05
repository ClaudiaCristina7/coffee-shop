export type Category = "cafea" | "vending" | "aparate";

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number; // preț de referință (RON) pentru varianta de 250g / bucată
  description: string;
  emoji: string; // folosit ca imagine placeholder pentru card
}

export const CATEGORY_LABELS: Record<Category, string> = {
  cafea: "Cafea",
  vending: "Produse Vending",
  aparate: "Aparate",
};

export type Weight = "250g" | "500g" | "1kg";

export const WEIGHT_OPTIONS: Weight[] = ["250g", "500g", "1kg"];

export interface CartItem {
  productId: string;
  name: string;
  weight: Weight;
  quantity: number;
  unitPrice: number;
  emoji: string;
}
