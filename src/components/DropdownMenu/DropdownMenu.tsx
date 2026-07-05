import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Category, Product } from '../../types/product';
import './DropdownMenu.css';

interface DropdownMenuProps {
  label: string;
  category: Category;
  products: Product[];
}

export default function DropdownMenu({ label, category, products }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectProduct = (productId: string) => {
    setIsOpen(false);
    navigate(`/order?category=${category}&product=${productId}`);
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="dropdown__trigger"
        aria-expanded={isOpen}
        onClick={() => navigate(`/order?category=${category}`)}
      >
        {label}
        <span className="dropdown__chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="dropdown__panel" role="menu">
          <ul className="dropdown__list">
            {products.map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  className="dropdown__item"
                  role="menuitem"
                  onClick={() => handleSelectProduct(product.id)}
                >
                  <span className="dropdown__item-emoji" aria-hidden="true">
                    {product.emoji}
                  </span>
                  {product.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
