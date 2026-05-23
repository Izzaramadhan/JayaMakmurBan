import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="layanan" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-600">
            Layanan
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            Layanan praktis untuk membantu pelanggan menemukan ban yang sesuai.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Jaya Makmur Ban Klaten membantu pelanggan mendapatkan informasi
            produk, stok, ukuran ban, pemasangan, dan cabang yang dapat
            dikunjungi secara lebih mudah.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-4xl transition group-hover:bg-yellow-400">
                {service.icon}
              </div>

              <h3 className="text-lg font-extrabold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}