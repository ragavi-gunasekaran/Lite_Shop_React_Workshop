import { Box, Search, ShoppingBag, User, Menu } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-blue-600 shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600">
            <Box size={20} />
          </span>
          <span className="text-xl font-black uppercase">LITE.SHOP</span>
        </a>

        <nav className="hidden gap-8 text-sm font-bold text-blue-100 md:flex">
          <a href="#">New Arrival</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Sale</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <input
              placeholder="Search products..."
              className="h-10 w-48 rounded-xl bg-blue-500/30 pl-10 text-xs text-white placeholder:text-blue-200"
            />
            <Search className="absolute left-3 top-3 text-blue-200" size={16} />
          </div>

          <button className="rounded-xl bg-blue-500/30 p-2 text-white">
            <ShoppingBag size={20} />
          </button>
          <button className="rounded-xl bg-blue-500/30 p-2 text-white">
            <User size={20} />
          </button>
          <button className="rounded-xl bg-blue-500/30 p-2 text-white md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;