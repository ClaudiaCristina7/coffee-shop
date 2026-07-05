export interface MenuPreviewItem {
  id: string;
  name: string;
  price: string;
  emoji: string;
}

export const MENU_TABS = ['Coffee', 'Noncoffee', 'Signature', 'Iced Coffee', 'Expresso', 'American'];

export const menuPreviewItems: MenuPreviewItem[] = [
  { id: 'iced-coffee', name: 'Iced Coffee', price: '$10.13', emoji: '🧊' },
  { id: 'latte-coffee', name: 'Latte Coffee', price: '$10.13', emoji: '☕' },
  { id: 'dalgona-coffee', name: 'Dalgona Coffee', price: '$10.13', emoji: '🥤' },
  { id: 'hot-coffee', name: 'Hot Coffee', price: '$10.13', emoji: '☕' },
];
