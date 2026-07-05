import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-section__image" aria-hidden="true">
        ☕
      </div>
      <div className="about-section__content">
        <h2 className="about-section__title">About our Coffee-Shop</h2>
        <p className="about-section__text">
          Welcome to Cafeteria, where every sip is crafted to delight your senses. Enjoy freshly
          brewed coffee, handcrafted beverages, and a cozy ambiance that feels like home.
        </p>
        <button type="button" className="about-section__cta" onClick={() => navigate('/order')}>
          View Products
        </button>
      </div>
    </section>
  );
}
