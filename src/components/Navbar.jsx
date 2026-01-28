import { NavLink } from "react-router-dom";
import { useLang } from "../LanguageProvider";
import { LANGS } from "../i18n";

const linkBase =
  "text-sm font-semibold text-white/80 hover:text-white transition";
const linkActive = "text-white";

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-extrabold tracking-widest"
        >
          TA SOLUTIONS
        </NavLink>

        <nav className="hidden sm:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            {t.nav.home}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            {t.nav.services}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            {t.nav.about}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            {t.nav.contact}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="h-9 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white/90 outline-none"
            aria-label="Language"
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code} className="text-slate-900">
                {l.label}
              </option>
            ))}
          </select>

          <NavLink
            to="/contact"
            className="hidden sm:inline-flex h-9 items-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-white/90"
          >
            {t.nav.quote}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
