"use client";

import { useT } from "@/lib/i18n";

const services = [
  { icon: "🚙", tk: "services.s1t", dk: "services.s1d", hk: "services.s1h" },
  { icon: "🏕️", tk: "services.s2t", dk: "services.s2d", hk: "services.s2h" },
  { icon: "✈️", tk: "services.s3t", dk: "services.s3d", hk: "services.s3h" },
  { icon: "📅", tk: "services.s4t", dk: "services.s4d", hk: "services.s4h" },
];

export default function Services() {
  const { t } = useT();
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            {t("services.kicker")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            {t("services.title")}
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">{t("services.sub")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.tk}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-accent hover:bg-white/10 transition-all group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <span className="inline-block text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">
                {t(s.hk)}
              </span>
              <h3 className="font-heading text-white font-bold text-lg mb-3">{t(s.tk)}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t(s.dk)}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#fleet"
            className="inline-block bg-brand-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            {t("services.browse")}
          </a>
        </div>
      </div>
    </section>
  );
}
