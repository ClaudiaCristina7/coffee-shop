import type { MenuPreviewItem } from '../../data/menuPreview';
import './MenuPreviewCard.css';

interface MenuPreviewCardProps {
  item: MenuPreviewItem;
}

export default function MenuPreviewCard({ item }: MenuPreviewCardProps) {
  return (
    <article className="menu-preview-card">
      <div className="menu-preview-card__image" aria-hidden="true">
        {item.emoji}
      </div>
      <h3 className="menu-preview-card__name">{item.name}</h3>
      <p className="menu-preview-card__price">{item.price}</p>
    </article>
  );
}
