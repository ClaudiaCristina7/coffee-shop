import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CarduriCafea from '../../components/CarduriCafea/CarduriCafea';
import { productsByCategory } from '../../data';
import type { Category } from '../../types/product';
import { CATEGORY_LABELS } from '../../types/product';
import './OrderPage.css';

const CATEGORIES: Category[] = ['cafea', 'vending', 'aparate'];

export default function OrderPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = useMemo<Category>(() => {
    const fromUrl = searchParams.get('category');
    return CATEGORIES.includes(fromUrl as Category) ? (fromUrl as Category) : 'cafea';
  }, [searchParams]);

  const highlightedProductId = searchParams.get('product');
  const products = productsByCategory[activeCategory];

  const handleCategoryChange = (category: Category) => {
    setSearchParams({ category });
  };

  return (
    <main className="order-page">
      <div className="order-page__toolbar">
        <div className="order-page__switcher">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`order-page__switch-btn${
                category === activeCategory ? ' order-page__switch-btn--active' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>
        <h1 className="order-page__title">{CATEGORY_LABELS[activeCategory]}</h1>
      </div>

      <div className="order-page__grid">
        {products.map((product) => (
          <CarduriCafea
            key={product.id}
            product={product}
            highlighted={product.id === highlightedProductId}
          />
        ))}
      </div>
    </main>
  );
}
