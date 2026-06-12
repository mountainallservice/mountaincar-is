"use client";

import { useT } from "@/lib/i18n";

export default function Hero() {
  const { t } = useT();
  return (
    <header
      className="relative min-h-[100svh] md:h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(30,41,59,0.6), rgba(30,41,59,0.5)), url("https://d1yei2z3i6k35z.cloudfront.net/16287944/698b710f2a12a_IMG-20250608-WA0036.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-24 pb-12 md:py-0">
        {/* Left: Hero copy */}
        <div className="text-white">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-4">
            {t("hero.kicker")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t("hero.title1")}{" "}
            <span className="text-brand-accent">{t("hero.title2")}</span>
          </h1>
          <p className="text-white/85 text-lg mb-8 max-w-lg">{t("hero.sub")}</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#fleet"
              className="bg-brand-accent text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              {t("hero.ctaChoose")}
            </a>
            <a
              href="#services"
              className="border border-white text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {t("hero.ctaServices")}
            </a>
          </div>
          <div className="flex gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> {t("hero.feat1")}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> {t("hero.feat2")}
            </div>
          </div>
        </div>

        {/* Right: Quick booking card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-8 text-white">
          <h2 className="font-heading text-xl font-bold mb-1">{t("hero.cardTitle")}</h2>
          <p className="text-brand-accent font-semibold text-sm mb-4">{t("hero.cardSub")}</p>
          <p className="text-white/80 text-sm mb-6">{t("hero.cardText")}</p>
          <a
            href="#quote"
            className="block text-center bg-brand-accent text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full"
          >
            {t("hero.cardCta")}
          </a>
          <p className="text-white/50 text-xs text-center mt-3">{t("hero.cardNote")}</p>
        </div>
      </div>
    </header>
  );
}
