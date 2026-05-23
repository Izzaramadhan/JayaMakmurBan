import { business } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

export default function Hero() {
  const whatsappLink = createWhatsAppLink(
    business.phoneWa,
    `Halo Admin ${business.shortName}, saya ingin bertanya tentang stok, ukuran, dan harga ban. Apakah bisa dibantu?`
  );

  const features = [
    "Katalog ban online",
    "Tanya stok dan harga via WhatsApp",
    "Konsultasi ukuran ban",
    "Informasi cabang Jaya Makmur Ban Klaten",
  ];

  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bengkel-hero.svg')" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />

      <div className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            ⭐ {business.tagline}
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Temukan Ban yang Tepat untuk Kendaraan Anda di Klaten.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {business.name} menyediakan berbagai pilihan ban berkualitas untuk
            kebutuhan harian. Pelanggan dapat melihat katalog, menanyakan stok,
            mengecek harga, dan menghubungi admin secara langsung melalui
            WhatsApp sebelum datang ke cabang terdekat.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 text-center text-lg font-extrabold text-slate-950 shadow-xl shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Tanya Stok via WhatsApp
            </a>

            <a
              href="#katalog"
              className="rounded-full border border-white/40 px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              Lihat Katalog Ban
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold text-yellow-300">
            Fitur Utama Website
          </p>

          <div className="mt-5 space-y-4">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-slate-950/50 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-black text-slate-950">
                  ✓
                </span>
                <span className="font-medium text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}