"use client";

import { useT } from "@/lib/i18n";

export default function CtaBanner() {
  const { t } = useT();
  return (
    <section className="py-16 bg-brand-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
          Þetta Reddast!
        </h2>
        <p className="text-white/90 text-lg mb-2">{t("cta.subQuote")}</p>
        <p className="text-white/70 font-semibold">{t("cta.sign")}</p>
      </div>
    </section>
  );
}
