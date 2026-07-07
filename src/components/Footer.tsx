import { Box } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Box size={20} />
          </span>
          <span className="text-xl font-black uppercase">LITE.SHOP</span>
        </div>

        <p className="mt-4 max-w-md text-sm text-slate-500">
          Modern e-commerce experience built for speed and elegance.
        </p>

        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          © 2026 LITE.SHOP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}