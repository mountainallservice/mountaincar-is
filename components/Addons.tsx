const addons = [
  { icon: "🗺️", name: "GPS Navigation" },
  { icon: "📶", name: "Wi-Fi Hotspots" },
  { icon: "⛺", name: "Tent & Camping Gear" },
  { icon: "🧊", name: "Portable Coolers" },
  { icon: "🛏️", name: "Heated Blankets" },
  { icon: "🪑", name: "Child Seats" },
  { icon: "🔧", name: "Roof Racks" },
  { icon: "🔥", name: "Gas Bottles" },
];

export default function Addons() {
  return (
    <section className="py-16 md:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            Enhance Your Trip
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">
            Essential Add-Ons
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {addons.map((a) => (
            <div
              key={a.name}
              className="bg-white rounded-xl p-5 text-center shadow-sm border border-slate-200 hover:border-brand-accent hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <p className="font-heading font-semibold text-brand-primary text-sm">{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
