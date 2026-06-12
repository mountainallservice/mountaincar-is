import Image from "next/image";

const cars = [
  {
    name: "Dacia Duster 4x4",
    desc: "The classic choice. Reliable 4x4 capability for exploring the Highlands and Ring Road.",
    img: "https://d1yei2z3i6k35z.cloudfront.net/16287944/698b8715bd264_2.jpg",
    specs: [
      { label: "Seats", value: "5" },
      { label: "Doors", value: "5" },
      { label: "Fuel", value: "7.0 l/100km" },
      { label: "Gearbox", value: "Manual" },
    ],
  },
  {
    name: "Duster + Roof Tent",
    desc: "Adventure ready. The capability of a 4x4 Duster with a comfortable roof tent setup.",
    img: "https://d1yei2z3i6k35z.cloudfront.net/16287944/698b8715c1bb6_3.jpg",
    specs: [
      { label: "Seats", value: "4" },
      { label: "Doors", value: "5" },
      { label: "Fuel", value: "7.0 l/100km" },
      { label: "Gearbox", value: "Manual" },
    ],
  },
  {
    name: "Renault Master Camper",
    desc: "Spacious camper with manual transmission and all the essentials for your journey.",
    img: "https://d1yei2z3i6k35z.cloudfront.net/16287944/698b8715bd267_1.jpg",
    specs: [
      { label: "Seats", value: "5" },
      { label: "Doors", value: "4" },
      { label: "Fuel", value: "7.0 l/100km" },
      { label: "Cargo", value: "1000L" },
      { label: "Gearbox", value: "Manual" },
      { label: "A/C", value: "Manual" },
    ],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-brand-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            Our Fleet
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Find the Perfect Car</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
            >
              <div className="relative h-52">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2">{car.name}</h3>
                <p className="text-white/70 text-sm mb-5">{car.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {car.specs.map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                      <span className="text-white/50 block text-xs">{s.label}</span>
                      <span className="font-semibold">{s.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#quote"
                  className="block text-center bg-brand-accent text-white px-5 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
