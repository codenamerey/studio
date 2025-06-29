
import type { MenuItem } from '@/types'; // Order and OrderStatus removed as mockOrders are gone
import { Soup, PackageSearch, Blend, GlassWater, Egg, Leaf, CookingPot, Square, Circle } from 'lucide-react';

export const mockCategories = [
  { name: 'Base Noodles', icon: Soup },
  { name: 'Sides', icon: PackageSearch },
  { name: 'Sauces', icon: Blend },
  { name: 'Drinks', icon: GlassWater },
];

export const mockMenuItems: MenuItem[] = [
  // Base Noodles
  {
    id: 'bn1',
    name: 'Lucky Me! Pancit Canton Kalamansi',
    description: 'Classic Filipino stir-fried noodles with a zesty kalamansi flavor.',
    price: 6.99,
    category: 'Base Noodles',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Soup,
  },
  {
    id: 'bn2',
    name: 'Lucky Me! Pancit Canton Sweet and Spicy',
    description: 'Stir-fried noodles with a delightful blend of sweet and spicy notes.',
    price: 6.99,
    category: 'Base Noodles',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Soup,
  },
  {
    id: 'bn3',
    name: 'Samyang Buldak Carbonara Ramen',
    description: 'Spicy Korean chicken ramen with a creamy carbonara twist.',
    price: 8.99,
    category: 'Base Noodles',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: CookingPot,
  },

  // Sides (Add-ons)
  {
    id: 's1',
    name: 'Egg (fried or boiled)',
    description: 'A perfectly cooked egg, your choice of fried or boiled.',
    price: 1.50,
    category: 'Sides',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Egg,
  },
  {
    id: 's2',
    name: 'Spam',
    description: 'Slices of savory Spam, grilled to perfection.',
    price: 2.50,
    category: 'Sides',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Square, 
  },
  {
    id: 's3',
    name: 'Siomai',
    description: 'Steamed pork and shrimp dumplings (4 pcs).',
    price: 3.99,
    category: 'Sides',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Circle, 
  },
  {
    id: 's4',
    name: 'Nori Seaweed',
    description: 'Crispy sheets of roasted seaweed.',
    price: 1.00,
    category: 'Sides',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Leaf,
  },

  // Sauces (Add-ons)
  {
    id: 'sc1',
    name: 'Cheese Sauce',
    description: 'Rich and creamy cheese sauce, perfect for dipping or drizzling.',
    price: 1.25,
    category: 'Sauces',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: Blend,
  },

  // Drinks
  {
    id: 'd1',
    name: 'Pandan Choco',
    description: 'A unique and refreshing chocolate drink infused with pandan.',
    price: 3.50,
    category: 'Drinks',
    imageUrl: 'https://placehold.co/600x400.png',
    icon: GlassWater,
  },
];

// mockOrders has been removed as orders will now be fetched from Firestore.
