import { Heart, Eye, Plus, Star } from "lucide-react";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl">
      <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${product.soldOut ? "grayscale opacity-80" : ""}`}>
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition group-hover:opacity-100">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
            <Eye size={20} />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
            <Plus size={20} />
          </button>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-bold text-blue-600">
          {product.badge}
        </span>

        <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-slate-600">
          <Heart size={20} />
        </button>
      </div>

      <div className="mt-4 space-y-1 px-1 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
            {product.category}
          </p>
          <div className="flex items-center gap-1">
            <Star size={10} fill="currentColor" className="text-amber-400" />
            <span className="text-[10px] font-bold text-slate-400">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
          {product.name}
        </h3>

        <p className={`text-[11px] font-medium ${product.soldOut ? "text-slate-400 italic" : "text-slate-500"}`}>
          {product.status}
        </p>

        <div className="flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-[10px] text-slate-400 line-through">{product.oldPrice}</span>
            )}
            <span className={`text-lg font-black ${product.soldOut ? "text-slate-400" : "text-slate-900"}`}>
              {product.price}
            </span>
          </div>

          <button
            disabled={product.soldOut}
            className={`h-10 rounded-xl px-5 text-xs font-bold ${
              product.soldOut
                ? "bg-slate-100 text-slate-400"
                : "bg-slate-900 text-white hover:bg-blue-600"
            }`}
          >
            {product.soldOut ? "Notify Me" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}