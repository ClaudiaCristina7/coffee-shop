import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./CheckoutSummary.css";

const FREE_SHIPPING_THRESHOLD = 100;
const DELIVERY_COST = 25;
const WHATSAPP_NUMBER = "916574267"; // fără +, prefixe sau spații — format cerut de wa.me

export default function CheckoutSummary() {
  const { totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const deliveryCost =
    totalPrice >= FREE_SHIPPING_THRESHOLD || totalPrice === 0
      ? 0
      : DELIVERY_COST;
  const isFreeDelivery = deliveryCost === 0;
  const grandTotal = totalPrice + deliveryCost;

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      setPromoMessage("Introdu un cod promoțional.");
      return;
    }
    setPromoMessage("Codul va fi validat la finalizarea comenzii.");
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bună! Aș avea o întrebare despre comanda mea de la Cafeteria.",
  )}`;

  return (
    <div className="checkout-summary">
      <h2 className="checkout-summary__title">Sumar comandă</h2>

      <div className="checkout-summary__row">
        <span>Subtotal</span>
        <strong>{totalPrice.toFixed(2)} lei</strong>
      </div>

      <div className="checkout-summary__row">
        <span>Livrare</span>
        <strong className={isFreeDelivery ? "checkout-summary__free" : ""}>
          {isFreeDelivery
            ? "Livrare gratuită"
            : `${DELIVERY_COST.toFixed(2)} lei`}
        </strong>
      </div>

      {!isFreeDelivery && (
        <p className="checkout-summary__hint">
          Mai adaugă produse de{" "}
          {(FREE_SHIPPING_THRESHOLD - totalPrice).toFixed(2)} lei pentru livrare
          gratuită.
        </p>
      )}

      <div className="checkout-summary__promo">
        <label className="checkout-summary__label" htmlFor="promo-code">
          Cod promoțional
        </label>
        <div className="checkout-summary__promo-row">
          <input
            id="promo-code"
            type="text"
            className="checkout-summary__promo-input"
            placeholder="Introdu codul"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value);
              setPromoMessage("");
            }}
          />
          <button
            type="button"
            className="checkout-summary__promo-btn"
            onClick={handleApplyPromo}
          >
            Aplică
          </button>
        </div>
        {promoMessage && (
          <p className="checkout-summary__promo-message">{promoMessage}</p>
        )}
      </div>

      <div className="checkout-summary__row checkout-summary__row--total">
        <span>Total (cu TVA)</span>
        <strong>{grandTotal.toFixed(2)} lei</strong>
      </div>

      <button type="button" className="checkout-summary__place-order">
        Plasează comanda
      </button>

      <div className="checkout-summary__contact">
        <p className="checkout-summary__contact-label">
          Ai o întrebare despre comandă?
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="checkout-summary__whatsapp"
        >
          💬 Scrie-ne pe WhatsApp · +91 657 4267
        </a>
      </div>
    </div>
  );
}
