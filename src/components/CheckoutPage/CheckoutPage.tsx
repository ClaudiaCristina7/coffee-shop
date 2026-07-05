import { useNavigate } from "react-router-dom";
import CheckoutItemsList from "../../components/CheckoutItemsList/CheckoutItemsList";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <main className="checkout-page">
      <div className="checkout-page__header">
        <h1 className="checkout-page__title">Finalizează comanda</h1>
        <button
          type="button"
          className="checkout-page__back-btn"
          onClick={() => navigate("/order")}
        >
          ← Înapoi la meniu
        </button>
      </div>

      <div className="checkout-page__grid">
        <CheckoutItemsList />
        <CheckoutSummary />
      </div>
    </main>
  );
}
