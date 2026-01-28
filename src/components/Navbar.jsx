import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { LANGS } from "../i18n";

const linkBase =
  "block px-3 py-2 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition";
const linkActive = "text-white bg-white/10";

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  const [menuOpen, setMenuOpen] = useState(false); // mobile nav
  const [langOpen, setLangOpen] = useState(false); // language dropdown

  const langRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  // Close mobile menu on route click
  const closeAll = () => {
    setMenuOpen(false);
    setLangOpen(false);
  };

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={closeAll}
          className="text-xl sm:text-2xl font-extrabold tracking-widest"
        >
          TA SOLUTIONS
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language dropdown (PRO) */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 h-10 px-3 rounded-xl
                         border border-white/10 bg-white/5
                         text-sm font-semibold text-white/90
                         hover:bg-white/10 transition"
              aria-label="Language"
            >
              {lang.toUpperCase()}
              <ChevronDown size={16} className="opacity-70" />
            </button>

            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden
                           border border-white/10 bg-slate-900/95 backdrop-blur
                           shadow-xl z-50"
              >
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition
                      ${
                        lang === l.code
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            onClick={closeAll}
            className="hidden sm:inline-flex h-10 items-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-white/90"
          >
            {t.nav.quote}
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl
                       border border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="block h-4 w-5 relative">
              <span className="absolute left-0 top-0 h-0.5 w-5 bg-white/80" />
              <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-white/80" />
              <span className="absolute left-0 top-3 h-0.5 w-5 bg-white/80" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                onClick={closeAll}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                {it.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeAll}
              className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-2xl
                         bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              {t.nav.quote}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
