import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuPreviewCard from '../MenuPreviewCard/MenuPreviewCard';
import { MENU_TABS, menuPreviewItems } from '../../data/menuPreview';
import './BestMenus.css';

interface BestMenusProps {
  variant?: 'tan' | 'dark';
  tabs?: string[];
}

export default function BestMenus({ variant = 'tan', tabs = MENU_TABS }: BestMenusProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();

  return (
    <section className={`best-menus best-menus--${variant}`}>
      <div className="best-menus__inner">
        <h2 className="best-menus__title">Best Menus</h2>

        <div className="best-menus__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`best-menus__tab${tab === activeTab ? ' best-menus__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="best-menus__grid">
          {menuPreviewItems.map((item) => (
            <MenuPreviewCard key={item.id} item={item} />
          ))}
        </div>

        <button type="button" className="best-menus__see-all" onClick={() => navigate('/order')}>
          Vezi tot meniul →
        </button>
      </div>
    </section>
  );
}
