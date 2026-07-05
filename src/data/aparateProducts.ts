import type { Product } from '../types/product';

const numeAparate: [string, string][] = [
  ['Aparat Espresso Automat', 'Aparat automat cu râșniță integrată, ideal pentru birou.'],
  ['Aparat Cafea cu Râșniță', 'Râșnește boabele proaspăt la fiecare preparare.'],
  ['Automat Vending Cafea', 'Automat de sine stătător pentru spații publice, 8 selecții.'],
  ['Aparat Cafea Capsule', 'Compatibil cu capsule standard, preparare rapidă.'],
  ['Aparat Cafea Filtru', 'Preparare clasică prin filtrare, capacitate 1.2L.'],
  ['Automat Vending Snack', 'Automat pentru gustări și băuturi reci, 40 selecții.'],
  ['Aparat Espresso Manual', 'Pârghie manuală, control total asupra extracției.'],
  ['Aparat Cafea Office', 'Compact, ideal pentru birouri mici, două prize simultan.'],
  ['Automat Vending Combo', 'Cafea caldă și băuturi reci în același automat.'],
  ['Aparat Cafea Profesional', 'Pentru cafenele, două grupuri de extracție.'],
  ['Aparat Cafea Birou Compact', 'Dimensiuni reduse, rezervor detașabil de 0.6L.'],
  ['Automat Cafea Stradal', 'Rezistent la exterior, plată card integrată.'],
  ['Aparat Cafea cu Lapte Integrat', 'Sistem automat de spumare a laptelui.'],
  ['Aparat Espresso Dublu', 'Două grupuri de preparare simultan, uz intens.'],
  ['Automat Vending Băuturi Reci', 'Automat răcit pentru sucuri și băuturi la doză.'],
  ['Aparat Cafea Smart WiFi', 'Control de la distanță prin aplicație mobilă.'],
  ['Aparat Cafea Industrial', 'Capacitate mare, pentru cantine și evenimente.'],
  ['Automat Vending Universal', 'Configurabil pentru cafea, snacks și băuturi.'],
  ['Aparat Espresso Compact', 'Design minimalist, potrivit pentru bucătării mici.'],
  ['Aparat Cafea Premium Inox', 'Carcasă din inox, display touch, funcții avansate.'],
];

const emojiAparate = '⚙️';

export const aparateProducts: Product[] = numeAparate.map(([name, description], index) => ({
  id: `aparate-${index + 1}`,
  category: 'aparate',
  name,
  description,
  price: 899 + (index % 5) * 300, // preț variabil, aparatele sunt mult mai scumpe
  emoji: emojiAparate,
}));
