import { benefits } from "../data/siteData";

export default function Features() {
  return (
    <section id="keunggulan" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-600">Keunggulan</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            Dibuat untuk pelanggan yang ingin cepat, jelas, dan praktis.
          </h2>
          <p className="mt-4 text-slate-600">
            Landing page ini menjawab masalah utama pelanggan bengkel: informasi stok belum jelas dan antre servis terlalu lama.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
