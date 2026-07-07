import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductSection() {
  return (
    <section className="lg:col-span-9">
      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-bold text-slate-900">Recommended for you</h1>

          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="mt-5 h-px bg-slate-100" />

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}