export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  status: string;
  rating: number;
  badge: string;
  image: string;
  soldOut?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Technical Shell Jacket",
    category: "Outerwear",
    price: "890 kr",
    oldPrice: "1,450 kr",
    status: "In Stock • Ships in 2 days",
    rating: 4.9,
    badge: "Discount",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Speedster Running Shoes",
    category: "Footwear",
    price: "1,200 kr",
    status: "Only 4 items left",
    rating: 4.8,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Minimalist Quartz Watch",
    category: "Accessories",
    price: "1,850 kr",
    status: "Back in stock next week",
    rating: 4.7,
    badge: "Sold Out",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    soldOut: true,
  },
];