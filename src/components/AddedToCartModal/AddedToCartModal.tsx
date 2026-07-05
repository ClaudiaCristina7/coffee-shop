import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./AddedToCartModal.css";

export default function AddedToCartModal() {
  const navigate = useNavigate();
  const {
    lastAddedItem,
    isAddedModalOpen,
    closeAddedModal,
    totalItems,
    totalPrice,
    openCartModal,
  } = useCart();

  if (!isAddedModalOpen || !lastAddedItem) return null;

  const handleContinueShopping = () => {
    closeAddedModal();
    navigate("/order");
  };

  const handleCheckout = () => {
    closeAddedModal();
    navigate("/checkout");
  };

  return (
    <div className="added-modal__overlay" onClick={closeAddedModal}>
      <div className="added-modal" onClick={(e) => e.stopPropagation()}>
        <div className="added-modal__header">
          <span className="added-modal__check" aria-hidden="true">
            ✓
          </span>
          <h2 className="added-modal__title">Produsul a fost adăugat în coș</h2>
          <button
            type="button"
            className="added-modal__close"
            onClick={closeAddedModal}
            aria-label="Închide"
          >
            ✕
          </button>
        </div>

        <div className="added-modal__body">
          <div className="added-modal__product">
            <div className="added-modal__product-image" aria-hidden="true">
              {lastAddedItem.emoji}
            </div>
            <div>
              <p className="added-modal__product-name">
                {lastAddedItem.name} ({lastAddedItem.weight})
              </p>
              <p className="added-modal__product-price">
                {lastAddedItem.unitPrice} lei
              </p>
              <p className="added-modal__product-qty">
                Cantitate: <strong>{lastAddedItem.quantity}</strong>
              </p>
            </div>
          </div>

          <div className="added-modal__summary">
            <p className="added-modal__summary-line">
              Sunt {totalItems} articole în coș.
            </p>
            <div className="added-modal__summary-row">
              <span>Subtotal:</span>
              <strong>{totalPrice.toFixed(2)} lei</strong>
            </div>
            <div className="added-modal__summary-row">
              <span>Livrare:</span>
              <strong>Gratuit</strong>
            </div>
            <div className="added-modal__summary-row added-modal__summary-row--total">
              <span>Total (cu TVA)</span>
              <strong>{totalPrice.toFixed(2)} lei</strong>
            </div>

            <button
              type="button"
              className="added-modal__view-cart"
              onClick={openCartModal}
            >
              Vezi cumpărăturile
            </button>
          </div>
        </div>

        <div className="added-modal__actions">
          <button
            type="button"
            className="added-modal__continue"
            onClick={handleContinueShopping}
          >
            Continuă cumpărăturile
          </button>
          <button
            type="button"
            className="added-modal__checkout"
            onClick={handleCheckout}
          >
            Finalizează comanda
          </button>
        </div>
      </div>
    </div>
  );
}
