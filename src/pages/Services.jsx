import { useLang } from "../LanguageProvider";

// şəkillər
import dataAnalyst from "../assets/images/data-analyst.jpg";
import dataScience from "../assets/images/data_science.jpg";
import fullstack from "../assets/images/fullstack-developer.jpg";
import frontend from "../assets/images/front-end.jpg";
import backend from "../assets/images/backend.jpg";
import uiux from "../assets/images/UI-and-UX.jpg";

export default function Services() {
  const { t } = useLang();

  const services = [
    { key: "dataAnalysis", img: dataAnalyst },
    { key: "dataScience", img: dataScience },
    { key: "fullstack", img: fullstack },
    { key: "frontend", img: frontend },
    { key: "backend", img: backend },
    { key: "uiux", img: uiux },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        {t.services.title}
      </h1>
      <p className="mt-3 max-w-2xl text-white/70">{t.services.subtitle}</p>

      {/* Services Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard
            key={s.key}
            title={t.servicesList[s.key].title}
            desc={t.servicesList[s.key].desc}
            img={s.img}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- Card Component ---------- */

function ServiceCard({ title, desc, img }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
      {/* Image */}
      <div className="relative h-44">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover opacity-85 transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}
