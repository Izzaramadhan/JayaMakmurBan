import { business, branches, navItems } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

const NAVBAR_OFFSET = 100;

export default function Footer() {
  const whatsappLink = createWhatsAppLink(
    business.phoneWa,
    `Halo Admin ${business.shortName}, saya ingin bertanya tentang stok, ukuran, dan harga ban.`
  );

  function handleFooterNavClick(event, href) {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const sectionElement = document.getElementById(sectionId);

    if (!sectionElement) return;

    const targetPosition =
      sectionElement.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_OFFSET;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  return (
    <footer id="kontak" className="bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-black">
            <span className="text-yellow-400">Jaya Makmur</span> Ban
          </h2>

          <p className="mt-4 max-w-md leading-7 text-slate-300">
            {business.name} merupakan toko ban di Klaten yang membantu
            pelanggan mendapatkan informasi produk, stok, ukuran ban, dan lokasi
            cabang yang dapat dikunjungi.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Hubungi WhatsApp
            </a>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-5 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              Instagram {business.instagram}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-yellow-400">
            Menu Website
          </h3>

          <ul className="mt-5 space-y-3 text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleFooterNavClick(event, item.href)}
                  className="inline-block transition duration-300 hover:translate-x-1 hover:text-yellow-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-bold text-yellow-400">Kontak Utama</p>

            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              <p>
                <span className="font-semibold text-white">WhatsApp:</span>{" "}
                {business.phoneDisplay}
              </p>

              <p>
                <span className="font-semibold text-white">Instagram:</span>{" "}
                {business.instagram}
              </p>

              <p>
                <span className="font-semibold text-white">Wilayah:</span>{" "}
                {business.address}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Jam Operasional:
                </span>{" "}
                {business.hours}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-yellow-400">
            Cabang Jaya Makmur Ban
          </h3>

          <div className="mt-5 space-y-4">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-yellow-400/40 hover:bg-white/10"
              >
                <p className="font-bold text-white">{branch.name}</p>

                <p className="mt-1 text-sm text-slate-300">
                  {branch.location}
                </p>

                {branch.mapsUrl && (
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex rounded-full border border-yellow-400/40 px-4 py-2 text-sm font-bold text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  >
                    Lihat di Google Maps
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} {business.name}. Landing page project UTS
          Digital Business.
        </p>
      </div>
    </footer>
  );
}