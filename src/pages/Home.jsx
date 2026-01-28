import { Link } from "react-router-dom";
import { useLang } from "../LanguageProvider";

// şəkillər (səndə var)
import heroImg from "../assets/images/fullstack-developer.jpg";
import uiuxImg from "../assets/images/UIUX-Designer.png";
import figmaImg from "../assets/images/figma2.png";

export default function Home() {
  const { t } = useLang();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="TA SOLUTIONS"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t.home.badge}
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            {t.home.title}
          </h1>

          <p className="mt-4 max-w-2xl text-white/70 text-base sm:text-lg">
            {t.home.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              {t.home.cta1}
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.home.cta2}
            </Link>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <MiniCard title={t.home.k1.t} desc={t.home.k1.d} />
            <MiniCard title={t.home.k2.t} desc={t.home.k2.d} />
            <MiniCard title={t.home.k3.t} desc={t.home.k3.d} />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {t.home.whyTitle}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <GlassCard title={t.home.why1.t} desc={t.home.why1.d} />
          <GlassCard title={t.home.why2.t} desc={t.home.why2.d} />
          <GlassCard title={t.home.why3.t} desc={t.home.why3.d} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ImageBlock img={uiuxImg} title={t.about?.img2 || "UI/UX"} />
          <ImageBlock img={figmaImg} title="Figma workflow" />
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {t.home.workTitle}
        </h2>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <ul className="grid gap-3 sm:grid-cols-2 text-white/80">
            <li>• {t.home.w1}</li>
            <li>• {t.home.w2}</li>
            <li>• {t.home.w3}</li>
            <li>• {t.home.w4}</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            {t.home.finalTitle}
          </h3>
          <p className="mt-2 text-white/70 max-w-2xl">{t.home.finalSubtitle}</p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center rounded-2xl bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              {t.home.finalCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* components */
function MiniCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function GlassCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-white/70">{desc}</div>
    </div>
  );
}

function ImageBlock({ img, title }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative h-56">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-lg font-semibold">
          {title}
        </div>
      </div>
    </div>
  );
}
