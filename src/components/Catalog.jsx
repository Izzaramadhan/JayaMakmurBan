import { business, products } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

export default function Catalog() {
  const generalStockLink = createWhatsAppLink(
    business.phoneWa,
    `Halo Admin ${business.shortName}, saya ingin bertanya tentang stok, ukuran, dan harga ban yang tersedia.`
  );

  return (
    <section id="katalog" className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-600">
              Katalog Ban
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              Pilihan ban yang bisa ditanyakan stok dan harganya sebelum datang.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Pelanggan dapat melihat kategori ban yang tersedia, lalu
              menghubungi admin Jaya Makmur Ban Klaten untuk menanyakan stok,
              ukuran, dan harga terbaru.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-600">
              Butuh info cepat?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tanyakan langsung stok dan rekomendasi ban melalui WhatsApp admin.
            </p>

            <a
              href={generalStockLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
            >
              Tanya Stok Ban
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const productLink = createWhatsAppLink(
              business.phoneWa,
              `Halo Admin ${business.shortName}, saya ingin bertanya tentang ${product.name}. Apakah stok, ukuran, dan harganya tersedia?`
            );

            return (
              <article
                key={product.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-contain p-6"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                      {product.type}
                    </span>

                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                      {product.stock}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-950">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>

                  <p className="mt-4 text-xl font-black text-yellow-600">
                    {product.price}
                  </p>

                  <a
                    href={productLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block rounded-2xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
                  >
                    Tanya Produk via WhatsApp
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