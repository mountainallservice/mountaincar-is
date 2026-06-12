"use client";

import { useT } from "@/lib/i18n";

const steps = [
  { num: "1", tk: "how.s1t", dk: "how.s1d" },
  { num: "2", tk: "how.s2t", dk: "how.s2d" },
  { num: "3", tk: "how.s3t", dk: "how.s3d" },
];

export default function HowItWorks() {
  const { t } = useT();
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            {t("how.kicker")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">
            {t("how.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center mx-auto mb-5 font-heading text-2xl font-bold">
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-brand-primary text-xl mb-3">{t(s.tk)}</h3>
              <p className="text-slate-600 leading-relaxed">{t(s.dk)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
