import contactImg from "../assets/images/developer.jpg";
import { useState } from "react";
import { useLang } from "../LanguageProvider";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="relative h-48">
          <img
            src={contactImg}
            alt="Contact"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-slate-950" />
          <div className="absolute bottom-6 left-6">
            <h1 className="text-3xl font-extrabold">{t.contact.title}</h1>
            <p className="mt-1 text-white/70">{t.contact.subtitle}</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Demo form. We will connect it to a real email/API later.");
            setForm({ name: "", email: "", message: "" });
          }}
          className="p-6 grid gap-4 max-w-xl"
        >
          <input
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 outline-none"
            placeholder={t.contact.name}
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            required
          />
          <input
            type="email"
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 outline-none"
            placeholder={t.contact.email}
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            required
          />
          <textarea
            className="min-h-[130px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
            placeholder={t.contact.message}
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
            required
          />
          <button className="h-12 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-white/90">
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
