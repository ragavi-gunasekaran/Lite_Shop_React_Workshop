export type Product = {
  id: number;
  category: string;
  name: string;
  status: string;
  price: string;
  oldPrice?: string;
  rating: number;
  badge: string;
  image: string;
  buttonText: string;
  soldOut: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    category: "Outerwear",
    name: "Technical Shell Jacket",
    status: "In Stock • Ships in 2 days",
    price: "890 kr",
    oldPrice: "1,450 kr",
    rating: 4.9,
    badge: "Discount",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
    buttonText: "Add to cart",
    soldOut: false,
  },

  {
    id: 2,
    category: "Footwear",
    name: "Speedster Running Shoes",
    status: "Only 4 items left",
    price: "1,200 kr",
    rating: 4.8,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    buttonText: "Add to cart",
    soldOut: false,
  },

  {
    id: 3,
    category: "Accessories",
    name: "Minimalist Quartz Watch",
    status: "Back in stock next week",
    price: "1,850 kr",
    rating: 4.7,
    badge: "Sold Out",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    buttonText: "Notify Me",
    soldOut: true,
  },

  {
    id: 4,
    category: "Footwear",
    name: "Classic Canvas Sneakers",
    status: "In Stock • ships in 1 day",
    price: "550 kr",
    rating: 4.5,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    buttonText: "Add to cart",
    soldOut: false,
  },

  {
    id: 5,
    category: "Accessories",
    name: "Premium Wireless Headphones",
    status: "In Stock • Ships in 2 days",
    price: "1,690 kr",
    oldPrice: "2,200 kr",
    rating: 4.9,
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    buttonText: "Add to cart",
    soldOut: false,
  },

  {
    id: 6,
    category: "Accessories",
    name: "Tech Daypack",
    status: "In Stock • Ships in 1 day",
    price: "1,100 kr",
    rating: 4.6,
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    buttonText: "Add to cart",
    soldOut: false,
  },
];