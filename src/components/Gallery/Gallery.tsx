import { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 'g1', emoji: '🍫' },
  { id: 'g2', emoji: '☕' },
  { id: 'g3', emoji: '🫖' },
  { id: 'g4', emoji: '🥛' },
  { id: 'g5', emoji: '🍮' },
  { id: 'g6', emoji: '🧋' },
  { id: 'g7', emoji: '🍰' },
  { id: 'g8', emoji: '🍪' },
];

const filters = [
  { id: 'f1', emoji: '⚫' },
  { id: 'f2', emoji: '🔘' },
  { id: 'f3', emoji: '❤️' },
  { id: 'f4', emoji: '🟠' },
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="gallery">
      <h2 className="gallery__title">Our Gallery</h2>

      <div className="gallery__grid">
        {galleryItems.slice(0, visibleCount).map((item) => (
          <div className="gallery__item" key={item.id} aria-hidden="true">
            {item.emoji}
          </div>
        ))}
      </div>

      <div className="gallery__filters">
        {filters.map((filter) => (
          <button type="button" className="gallery__filter" key={filter.id} aria-label="Filtru galerie">
            {filter.emoji}
          </button>
        ))}
      </div>

      {visibleCount < galleryItems.length && (
        <button
          type="button"
          className="gallery__show-more"
          onClick={() => setVisibleCount(galleryItems.length)}
        >
          Show more
        </button>
      )}
    </section>
  );
}
