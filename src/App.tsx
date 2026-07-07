import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-100/30 text-slate-950">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Sidebar />
          <ProductSection />
        </div>
        </main>

    </div>
  );
}

export default App;