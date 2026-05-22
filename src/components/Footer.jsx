import { business } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

export default function Footer() {
  const whatsappLink = createWhatsAppLink(
    business.phoneWa,
    `Halo Admin ${business.shortName}, saya ingin bertanya tentang layanan bengkel.`
  );

  return (
    <footer id="kontak" className="bg-slate-900 px-4 py-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126485.49525647565!2d110.51817395000001!3d-7.6975252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a46ab41995871%3A0xc0fb13a0c647b018!2sKabupaten%20Klaten%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1716160000000!5m2!1sid!2sid"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Lokasi ${business.shortName}`}
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-400">Kontak</p>
          <h2 className="mt-3 text-3xl font-black text-white">{business.name}</h2>
          <div className="mt-6 space-y-3 text-slate-300">
            <p>📍 {business.address}</p>
            <p>🕒 {business.hours}</p>
            <p>📱 WhatsApp: {business.phoneDisplay}</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-fit rounded-full bg-yellow-400 px-6 py-3 font-black text-slate-950 transition hover:bg-yellow-300"
          >
            Hubungi Admin
          </a>
          <p className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-500">
            © 2026 {business.shortName}. Prototype landing page untuk project Digital Business UTS.
          </p>
        </div>
      </div>
    </footer>
  );
}
