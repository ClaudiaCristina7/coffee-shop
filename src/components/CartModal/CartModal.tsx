import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartModal.css";

export default function CartModal() {
  const navigate = useNavigate();
  const {
    items,
    totalPrice,
    isCartModalOpen,
    closeCartModal,
    removeItem,
    updateQuantity,
  } = useCart();

  if (!isCartModalOpen) return null;

  const handleContinueShopping = () => {
    closeCartModal();
    navigate("/order");
  };

  const handleCheckout = () => {
    closeCartModal();
    navigate("/checkout");
  };

  return (
    <div className="cart-modal__overlay" onClick={closeCartModal}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal__header">
          <h2 className="cart-modal__title">Coșul tău de cumpărături</h2>
          <button
            type="button"
            className="cart-modal__close"
            onClick={closeCartModal}
            aria-label="Închide"
          >
            ✕
          </button>
        </div>

        <div className="cart-modal__body">
          {items.length === 0 ? (
            <p className="cart-modal__empty">Coșul este gol momentan.</p>
          ) : (
            <ul className="cart-modal__list">
              {items.map((item, index) => (
                <li
                  key={`${item.productId}-${index}`}
                  className="cart-modal__item"
                >
                  <div className="cart-modal__item-image" aria-hidden="true">
                    {item.emoji}
                  </div>

                  <div className="cart-modal__item-info">
                    <p className="cart-modal__item-name">
                      {item.name} ({item.weight})
                    </p>
                    <p className="cart-modal__item-price">
                      {item.unitPrice} lei / bucată
                    </p>
                  </div>

                  <div className="cart-modal__item-qty">
                    <button
                      type="button"
                      className="cart-modal__qty-btn"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      aria-label="Scade cantitatea"
                    >
                      −
                    </button>
                    <span className="cart-modal__qty-value">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="cart-modal__qty-btn"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      aria-label="Crește cantitatea"
                    >
                      +
                    </button>
                  </div>

                  <span className="cart-modal__item-total">
                    {(item.quantity * item.unitPrice).toFixed(2)} lei
                  </span>

                  <button
                    type="button"
                    className="cart-modal__remove"
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

        {items.length > 0 && (
          <div className="cart-modal__footer">
            <div className="cart-modal__total-row">
              <span>Total (cu TVA)</span>
              <strong>{totalPrice.toFixed(2)} lei</strong>
            </div>

            <div className="cart-modal__actions">
              <button
                type="button"
                className="cart-modal__continue"
                onClick={handleContinueShopping}
              >
                Continuă cumpărăturile
              </button>
              <button
                type="button"
                className="cart-modal__checkout"
                onClick={handleCheckout}
              >
                Finalizează comanda
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
