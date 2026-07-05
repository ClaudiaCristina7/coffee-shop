import { useState } from "react";
import type { Product, Weight } from "../../types/product";
import { WEIGHT_OPTIONS } from "../../types/product";
import { useCart } from "../../context/CartContext";
import "./CarduriCafea.css";

interface CarduriCafeaProps {
  product: Product;
  highlighted?: boolean;
}

export default function CarduriCafea({
  product,
  highlighted,
}: CarduriCafeaProps) {
  const [selectedWeight, setSelectedWeight] = useState<Weight | "">("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { addToCart } = useCart();

  const handleWeightChange = (value: string) => {
    setSelectedWeight(value as Weight);
    setError("");
    setSuccess(false);
  };

  const handleQuantityChange = (value: string) => {
    setQuantity(value);
    setError("");
    setSuccess(false);
  };

  const handleAddToCart = () => {
    setSuccess(false);

    if (!selectedWeight) {
      setError("Trebuie să selectezi gramajul.");
      return;
    }

    const parsedQuantity = Number(quantity);
    if (!quantity || Number.isNaN(parsedQuantity) || parsedQuantity <= 0) {
      setError("Trebuie să selectezi o cantitate.");
      return;
    }

    addToCart(
      product.id,
      product.name,
      selectedWeight,
      parsedQuantity,
      product.price,
      product.emoji,
    );
  };

  return (
    <article
      className={`coffee-card${highlighted ? " coffee-card--highlighted" : ""}`}
    >
      <div className="coffee-card__image" aria-hidden="true">
        {product.emoji}
      </div>

      <h3 className="coffee-card__title">{product.name}</h3>
      <p className="coffee-card__description">{product.description}</p>
      <p className="coffee-card__price">{product.price} RON</p>

      <label className="coffee-card__label" htmlFor={`weight-${product.id}`}>
        Gramaj
      </label>
      <select
        id={`weight-${product.id}`}
        className="coffee-card__select"
        value={selectedWeight}
        onChange={(e) => handleWeightChange(e.target.value)}
      >
        <option value="">Selectează gramajul</option>
        {WEIGHT_OPTIONS.map((weight) => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </select>

      {selectedWeight && (
        <>
          <label
            className="coffee-card__label"
            htmlFor={`quantity-${product.id}`}
          >
            Cantitate comandată
          </label>
          <input
            id={`quantity-${product.id}`}
            className="coffee-card__input"
            type="number"
            min={1}
            placeholder="ex: 2"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </>
      )}

      {error && <p className="coffee-card__error">{error}</p>}
      {success && <p className="coffee-card__success">Adăugat în coș!</p>}

      <button
        type="button"
        className="coffee-card__add-btn"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    </article>
  );
}
