import images from './images';

const wines = [
  {
    title: 'Tempura Temptations',
    price: '450/-',
    tags: 'Coastal Charms, Exotic Eats, Olive Oasis',
  },
  {
    title: 'Caprese Cloud Bites',
    price: '550/-',
    tags: 'Crispy Delights, Asian Fusion, Tempura Twist',
  },
  {
    title: 'Satay Skewer Symphony',
    price: '500/-',
    tags: 'Luxe Bites, Truffle Treasures, Crispy Elegance',
  },
  {
    title: 'Crispy Calamari Carnival',
    price: '400/-',
    tags: 'Tomato Tantalizers, Basil Bites, Italian Infusion',
  },
  {
    title: 'Mediterranean Mezze Platter', 
    price: '1050/-',
    tags: 'Culinary Crescendo, Flavor Fusion, Gourmet Delights',   
  },
];

const cocktails = [
  {
    title: 'Berry Bliss Refresher',
    price: '200/-',
    tags: 'Burst of Berries, Refreshing Delight, Antioxidant Boost',
  },
  {
    title: "Tropical Paradise Splash",
    price: '227/-',
    tags: 'Exotic Escape, Island Vibes, Tropical Temptation',
  },
  {
    title: 'Minty Mojito Sparkler',
    price: '180/-',
    tags: 'Cool and Crisp, Minty Freshness, Summer Sipper',
  },
  {
    title: 'Cucumber Melon Quencher ',
    price: '250/-',
    tags: 'Hydration Heaven, Cucumber Coolness, Melon Infusion',
  },
  {
    title: 'Ginger Zinger Fizz ',
    price: '230/-',
    tags: 'Spicy Elegance, Ginger Zing, Fizz Finesse',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: "Michelin's nod to exceptional, affordable dining experiences worldwide.",
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Celebrating emerging talent, the Rising Star Award shines brightly.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Honors excellence in culinary and service.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Recognizes culinary brilliance and innovation triumphs.',
  },
];

export default { wines, cocktails, awards };
