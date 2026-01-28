import { Link } from "react-router-dom";
import { useLang } from "../LanguageProvider";
import teamImg from "../assets/images/developer.jpg";
import figmaImg from "../assets/images/figma1.jpg";

export default function About() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t.about.badge}
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.about.title}
          </h1>

          <p className="mt-4 text-white/70 leading-relaxed">{t.about.text}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.about.pills.map((p) => (
              <Pill key={p.t} title={p.t} desc={p.d} />
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/services"
              className="inline-flex justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.about.ctaServices}
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              {t.about.ctaContact}
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <ImageCard img={teamImg} title={t.about.img1} />
          <ImageCard img={figmaImg} title={t.about.img2} />
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {t.about.valuesTitle}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.about.values.map((v) => (
            <ValueCard key={v.t} title={v.t} desc={v.d} />
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {t.about.processTitle}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {t.about.steps.map((s) => (
            <Step key={s.n} n={s.n} title={s.t} desc={s.d} />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/70 max-w-2xl">{t.about.finalLine}</p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center rounded-2xl bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-white/90"
          >
            {t.about.finalCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pill({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function ImageCard({ img, title }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative h-52">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
        <div className="absolute bottom-4 left-4 text-lg font-semibold">
          {title}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-white/70">{desc}</div>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
      <div className="text-xs font-bold tracking-widest text-white/50">{n}</div>
      <div className="mt-2 text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}
