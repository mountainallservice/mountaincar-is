"use client";

import { useT } from "@/lib/i18n";

const reviews = [
  { initials: "JT", name: "Jake Trout", location: "Florida, USA", k: "review.1" },
  { initials: "CG", name: "Claudia Gahter", location: "Berlin, Germany", k: "review.2" },
  { initials: "RS", name: "Raj Suhdumi", location: "New Delhi, India", k: "review.3" },
  { initials: "HA", name: "Hirobitu Akira", location: "Mie, Japan", k: "review.4" },
];

export default function Reviews() {
  const { t } = useT();
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">
            {t("reviews.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-brand-light rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-accent text-white rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-brand-primary text-sm">{r.name}</p>
                  <p className="text-slate-500 text-xs">{r.location}</p>
                </div>
              </div>
              <div className="text-brand-accent text-lg mb-2">★★★★★</div>
              <p className="text-slate-600 text-sm leading-relaxed italic">&ldquo;{t(r.k)}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
