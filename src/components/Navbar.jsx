import { useEffect, useState } from "react";
import { business, navItems } from "../data/siteData";
import { createWhatsAppLink } from "../utils";

const NAVBAR_OFFSET = 100;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#beranda");

  const whatsappLink = createWhatsAppLink(
    business.phoneWa,
    `Halo Admin ${business.shortName}, saya ingin bertanya tentang stok, ukuran, dan harga ban. Apakah bisa dibantu?`
  );

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollY > 10);

      const isNearBottom = scrollY + viewportHeight >= documentHeight - 80;

      if (isNearBottom) {
        setActiveSection("#kontak");
        return;
      }

      let currentSection = "#beranda";

      navItems.forEach((item) => {
        const sectionId = item.href.replace("#", "");
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) return;

        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;

        if (scrollY + NAVBAR_OFFSET >= sectionTop) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNavClick(event, href) {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const sectionElement = document.getElementById(sectionId);

    if (!sectionElement) return;

    const targetPosition =
      sectionElement.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActiveSection(href);
    setIsOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b text-white backdrop-blur transition-all duration-300 ${
        isScrolled
          ? "border-slate-800 bg-slate-950/95 shadow-lg shadow-slate-950/30"
          : "border-slate-800/60 bg-slate-950/90"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#beranda"
          onClick={(event) => handleNavClick(event, "#beranda")}
          className="group text-lg font-extrabold tracking-wide transition duration-300 hover:scale-[1.02] sm:text-2xl"
        >
          <span className="text-yellow-400 transition duration-300 group-hover:text-yellow-300">
            JAYA MAKMUR
          </span>{" "}
          BAN
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`group relative inline-block py-2 transition duration-300 ${
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-yellow-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}

          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-lg shadow-yellow-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-yellow-500/30 active:scale-95"
            >
              Tanya Stok
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg transition duration-300 hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-800 bg-slate-900 transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[520px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-center font-medium">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`rounded-xl py-3 transition duration-300 active:scale-95 ${
                  isActive
                    ? "bg-yellow-400 text-slate-950"
                    : "hover:bg-slate-800 hover:text-yellow-400"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition duration-300 hover:bg-yellow-300 active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            Tanya Stok
          </a>
        </div>
      </div>
    </header>
  );
}