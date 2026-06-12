"use client";

import { useT } from "@/lib/i18n";

const values = [
  { icon: "🤝", tk: "values.v1t", dk: "values.v1d" },
  { icon: "❤️", tk: "values.v2t", dk: "values.v2d" },
  { icon: "💰", tk: "values.v3t", dk: "values.v3d" },
  { icon: "🗺️", tk: "values.v4t", dk: "values.v4d" },
];

export default function Values() {
  const { t } = useT();
  return (
    <section className="py-16 md:py-24 bg-brand-light border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {t("values.title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t("values.sub")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.tk}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-heading font-bold text-brand-primary mb-2">{t(v.tk)}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t(v.dk)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
