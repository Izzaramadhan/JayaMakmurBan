import { useState } from "react";
import { business, navItems } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = createWhatsAppLink(
    business.phoneWa,
    `Halo Admin ${business.shortName}, saya ingin booking servis.`
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#beranda" className="text-lg font-extrabold tracking-wide sm:text-2xl">
          <span className="text-yellow-400">JAYA MAKMUR</span> BAN
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-yellow-400">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-300"
            >
              Booking Sekarang
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-center font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg py-2 transition hover:bg-slate-800 hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Booking Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
