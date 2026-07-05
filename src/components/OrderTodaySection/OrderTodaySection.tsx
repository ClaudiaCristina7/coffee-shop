import { useNavigate } from "react-router-dom";
import coffeeCupPhoto from "../../assets/coffee-cup.png";
import "./OrderTodaySection.css";

//Prima pagina

export default function OrderTodaySection() {
  const navigate = useNavigate();

  return (
    <section className="order-today">
      <div className="order-today__content">
        <span className="order-today__eyebrow">Order Today...</span>
        <h1 className="order-today__title">
          "Brewing Happiness, One Cup at a Time"
        </h1>
        <p className="order-today__subtitle">
          Discover the Perfect Blend of Aroma, Flavor, and Comfort
        </p>
        <div className="order-today__cta-row">
          <button
            type="button"
            className="order-today__cta-primary"
            onClick={() => navigate("/order")}
          >
            Order now
          </button>
          <button
            type="button"
            className="order-today__cta-secondary"
            onClick={() => navigate("/about")}
          >
            Explore more
          </button>
        </div>
        <div className="order-today__stats">
          <div className="order-today__stat">
            <span className="order-today__stat-value">50+</span>
            <span className="order-today__stat-label">Item of Coffee</span>
          </div>
          <div className="order-today__stat">
            <span className="order-today__stat-value">300+</span>
            <span className="order-today__stat-label">Order Running</span>
          </div>
        </div>
      </div>
      <div className="order-today__visual">
        <div className="order-today__cup-wrapper">
          <img
            src={coffeeCupPhoto}
            alt="Cafea servită pe boabe de cafea"
            className="order-today__cup-photo"
          />
          <div className="order-today__steam" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
