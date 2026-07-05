import type { Product } from '../types/product';

const numeVending: [string, string][] = [
  ['Pahare Vending 7oz', 'Pahare din carton pentru automate, capacitate 7oz, set de 100 buc.'],
  ['Pahare Vending 12oz', 'Pahare din carton pentru automate, capacitate 12oz, set de 100 buc.'],
  ['Zahăr Plicuri', 'Plicuri individuale de zahăr alb, cutie de 500 buc.'],
  ['Amestec Cappuccino', 'Praf instant pentru cappuccino, pungă de 1kg.'],
  ['Amestec Ciocolată Caldă', 'Praf instant de ciocolată, pungă de 1kg.'],
  ['Lapte Praf Vending', 'Lapte praf pentru automate de cafea, pungă de 1kg.'],
  ['Bețișoare pentru Amestecat', 'Bețișoare din lemn, cutie de 1000 buc.'],
  ['Capace Pahare Vending', 'Capace din plastic pentru pahare 7oz/12oz, set de 100 buc.'],
  ['Filtre Cafea Vending', 'Filtre de hârtie pentru automate profesionale, set de 200 buc.'],
  ['Amestec Latte', 'Praf instant pentru latte macchiato, pungă de 1kg.'],
  ['Zăhărel Stick-uri', 'Stick-uri individuale de zahăr brun, cutie de 500 buc.'],
  ['Cafea Solubilă Vending', 'Cafea instant granulată pentru automate, pungă de 1kg.'],
  ['Amestec Cafea cu Lapte', 'Praf 2în1 cafea și lapte, pungă de 1kg.'],
  ['Pahare Biodegradabile', 'Pahare eco-friendly din materiale biodegradabile, set de 100 buc.'],
  ['Șervețele Vending', 'Șervețele de hârtie pentru automate, pachet de 500 buc.'],
  ['Amestec Mocha', 'Praf instant cafea-ciocolată, pungă de 1kg.'],
  ['Suport Pahare Vending', 'Suport din plastic pentru transportul paharelor.'],
  ['Amestec Ceai Vending', 'Praf instant de ceai pentru automate, pungă de 1kg.'],
  ['Îndulcitor Praf', 'Îndulcitor artificial praf pentru automate, pungă de 1kg.'],
  ['Capsule Curățare Vending', 'Capsule de curățare pentru automatele de cafea, set de 10 buc.'],
];

const emojiVending = '🥤';

export const vendingProducts: Product[] = numeVending.map(([name, description], index) => ({
  id: `vending-${index + 1}`,
  category: 'vending',
  name,
  description,
  price: 15 + (index % 5) * 4, // preț variabil 15-31 RON
  emoji: emojiVending,
}));
