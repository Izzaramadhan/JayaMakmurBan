import { business, products } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

export default function Catalog() {
  return (
    <section id="katalog" className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-600">Katalog Produk</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              Pilihan ban dan velg yang bisa dicek sebelum datang.
            </h2>
          </div>
          <a href="#booking" className="font-bold text-slate-950 underline decoration-yellow-400 decoration-4 underline-offset-4">
            Booking layanan sekarang →
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {products.map((product) => {
            const link = createWhatsAppLink(
              business.phoneWa,
              `Halo Admin ${business.shortName}, saya ingin tanya produk ${product.name}. Apakah stoknya tersedia?`
            );

            return (
              <article key={product.name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
                <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{product.type}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${product.stock === "Ready Stock" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {product.stock}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                  <p className="mt-4 text-2xl font-black text-yellow-600">{product.price}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block rounded-2xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
                  >
                    Tanya Produk
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
