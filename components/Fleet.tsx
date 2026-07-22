"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { cars } from "@/lib/fleet-data";

const TRANSLATABLE = ["Manual", "Rooftop", "Free"];

export default function Fleet() {
  const { t } = useT();
  const tv = (v: string) => (TRANSLATABLE.includes(v) ? t("val." + v) : v);
  return (
    <section id="fleet" className="py-16 md:py-24 bg-brand-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            {t("fleet.kicker")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{t("fleet.title")}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.name}
              className="flex flex-col h-full bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
            >
              <div className="relative h-52 shrink-0">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-heading font-bold text-xl mb-2">{car.name}</h3>
                <p className="text-white/70 text-sm mb-5">{t(car.dk)}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {car.specs.map((s) => (
                    <div key={s.lk} className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                      <span className="text-white/50 block text-xs">{t(s.lk)}</span>
                      <span className="font-semibold">{tv(s.value)}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#quote"
                  className="mt-auto block text-center bg-brand-accent text-white px-5 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full"
                >
                  {t("fleet.requestQuote")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
