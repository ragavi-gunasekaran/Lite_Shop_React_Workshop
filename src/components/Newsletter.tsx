export default function Newsletter() {
  return (
    <section className="mt-12 bg-slate-900 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="text-3xl font-black uppercase italic">Join the LITE.CLUB</h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Subscribe to our newsletter and get 15% off your first order.
          </p>
        </div>

        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl bg-white/5 px-5 py-4 text-sm"
          />
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-black uppercase">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}