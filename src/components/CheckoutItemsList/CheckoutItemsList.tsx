import { useCart } from "../../context/CartContext";
import "./CheckoutItemsList.css";

export default function CheckoutItemsList() {
  const { items, removeItem, updateQuantity } = useCart();

  return (
    <div className="checkout-items">
      <h2 className="checkout-items__title">Coșul tău</h2>

      {items.length === 0 ? (
        <p className="checkout-items__empty">Coșul este gol momentan.</p>
      ) : (
        <ul className="checkout-items__list">
          {items.map((item, index) => (
            <li
              key={`${item.productId}-${index}`}
              className="checkout-items__item"
            >
              <div className="checkout-items__item-image" aria-hidden="true">
                {item.emoji}
              </div>

              <div className="checkout-items__item-info">
                <p className="checkout-items__item-name">
                  {item.name} ({item.weight})
                </p>
                <p className="checkout-items__item-price">
                  {item.unitPrice} lei / bucată
                </p>
              </div>

              <div className="checkout-items__item-qty">
                <button
                  type="button"
                  className="checkout-items__qty-btn"
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  aria-label="Scade cantitatea"
                >
                  −
                </button>
                <span className="checkout-items__qty-value">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className="checkout-items__qty-btn"
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  aria-label="Crește cantitatea"
                >
                  +
                </button>
              </div>

              <span className="checkout-items__item-total">
                {(item.quantity * item.unitPrice).toFixed(2)} lei
              </span>

              <button
                type="button"
                className="checkout-items__remove"
                onClick={() => removeItem(index)}
                aria-label="Șterge produsul"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
