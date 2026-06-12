"use client";

import { useT } from "@/lib/i18n";

export default function Location() {
  const { t } = useT();
  return (
    <section id="visit" className="bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-primary mb-2">
              {t("loc.title")}
            </h2>
            <p className="text-slate-600 flex items-center gap-2 mb-1">
              <span>📍</span> Njarðarbraut 3i, 260 Reykjanesbær
            </p>
            <p className="text-slate-500 text-sm mb-4">{t("loc.sub")}</p>
            <a
              href="https://maps.google.com/?q=Njarðarbraut+3i,+260+Reykjanesbær"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors"
            >
              {t("loc.directions")} →
            </a>
          </div>
        </div>
      </div>

      <div className="h-80 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.7!2d-22.5635!3d63.9939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjPCsDU5JzM4LjAiTiAyMsKwMzMnNTAuMiJX!5e0!3m2!1sen!2sis!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mountain Car Office Location"
        />
      </div>
    </section>
  );
}
