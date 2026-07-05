import { useNavigate } from 'react-router-dom';
import './TaglineBanner.css';

export default function TaglineBanner() {
  const navigate = useNavigate();

  return (
    <section className="tagline-banner">
      <div className="tagline-banner__quote">
        <h2 className="tagline-banner__logo">Cafeteria</h2>
        <p className="tagline-banner__quote-text">"Brewing Happiness, One Cup at a Time"</p>
        <p className="tagline-banner__subtitle">Discover the Perfect Blend of Aroma, Flavor, and Comfort</p>
      </div>

      <div className="tagline-banner__order">
        <div className="tagline-banner__order-overlay" />
        <div className="tagline-banner__order-content">
          <h3 className="tagline-banner__order-title">Order Today...</h3>
          <button type="button" className="tagline-banner__order-btn" onClick={() => navigate('/order')}>
            Order now
          </button>
        </div>
        <div className="tagline-banner__cup" aria-hidden="true">
          ☕
        </div>
      </div>
    </section>
  );
}
