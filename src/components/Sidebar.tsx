export default function Sidebar() {
  const categories = ["All Products (124)", "Outerwear (42)", "Footwear (18)", "Accessories (64)"];

  return (
    <aside className="self-start lg:col-span-3 lg:sticky lg:top-20">
      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
        <h2 className="text-sm font-bold text-slate-900">Categories</h2>

        <div className="mt-4 space-y-3">
          {categories.map((category, index) => (
            <label key={category} className="flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" defaultChecked={index === 0} className="accent-blue-600" />
              {category}
            </label>
          ))}
        </div>

        <div className="my-5 h-px bg-slate-100" />

        <h2 className="text-sm font-bold text-slate-900">Price Range</h2>
        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>0 kr</span>
          <span>1800 kr</span>
        </div>
        <input type="range" min="0" max="1800" defaultValue="900" className="w-full accent-blue-500" />

        <div className="my-5 h-px bg-slate-100" />

        <h2 className="text-sm font-bold text-slate-900">Availability</h2>
        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input type="checkbox" className="accent-blue-600" /> In Stock
          </label>
          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input type="checkbox" className="accent-blue-600" /> On Sale
          </label>
        </div>

        <div className="mt-6 rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-amber-500 p-6 text-white">
          <h3 className="text-lg font-bold">Summer Sale</h3>
          <p className="mt-2 text-sm">Get up to 50% off on all summer collections.</p>
          <button className="mt-6 w-full rounded-xl bg-white py-2.5 font-semibold text-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </aside>
  );
}