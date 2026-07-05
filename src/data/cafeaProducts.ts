import type { Product } from '../types/product';

const numeCafea: [string, string][] = [
  ['Espresso Classico', 'Blend echilibrat, note de caramel și alune, perfect pentru espresso zilnic.'],
  ['Arabica Premium', '100% Arabica, aciditate fină, note florale și de citrice.'],
  ['Robusta Intensă', 'Corp puternic, cremă densă, ideal pentru cei care preferă cafea tare.'],
  ['Espresso Decaf', 'Aceeași aromă intensă, fără cafeină, prăjire medie.'],
  ['Cafea Boabe Brazilia', 'Note de ciocolată și nuci, prăjire medie-întunecată.'],
  ['Cafea Boabe Columbia', 'Aciditate vie, note de fructe roșii și caramel.'],
  ['Cafea Boabe Etiopia', 'Origine single, note florale și de afine, aromă complexă.'],
  ['Cafea Boabe Guatemala', 'Corp catifelat, note de cacao și piper negru.'],
  ['Cafea Măcinată Tradițională', 'Măcinare medie, potrivită pentru ibric și filtru clasic.'],
  ['Cafea Măcinată Turcească', 'Măcinare fină, prăjire intensă, gust tradițional.'],
  ['Espresso Blend Deluxe', 'Amestec de 5 origini, echilibrat, cremă persistentă.'],
  ['Cafea Boabe India Monsooned', 'Corp gros, aciditate joasă, note de mirodenii.'],
  ['Cafea Boabe Kenya AA', 'Aciditate strălucitoare, note de coacăză neagră.'],
  ['Cafea Boabe Honduras', 'Dulceață naturală, note de miere și mere.'],
  ['Cafea Boabe Vietnam Robusta', 'Corp foarte intens, ideal pentru cafea cu lapte condensat.'],
  ['Espresso Dark Roast', 'Prăjire întunecată, note de cacao amar și lemn afumat.'],
  ['Espresso Medium Roast', 'Echilibru între aciditate și dulceață, versatil.'],
  ['Cafea Bio Organic', 'Cultivată organic, fără pesticide, note curate de fructe.'],
  ['Cafea Aromată Vanilie', 'Boabe infuzate natural cu aromă de vanilie.'],
  ['Cafea Aromată Caramel', 'Boabe infuzate natural cu aromă dulce de caramel.'],
];

const emojiCafea = '☕';

export const cafeaProducts: Product[] = numeCafea.map(([name, description], index) => ({
  id: `cafea-${index + 1}`,
  category: 'cafea',
  name,
  description,
  price: 22 + (index % 6) * 3, // preț variabil 22-37 RON / 250g
  emoji: emojiCafea,
}));
