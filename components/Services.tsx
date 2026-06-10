const services = [
  {
    icon: "🚙",
    title: "4x4 Car Rental",
    description:
      "Conquer Iceland's F-roads and highlands in our rugged Dacia Duster 4x4s. Perfect for the Ring Road, Golden Circle, and beyond.",
    highlight: "From Day 1",
  },
  {
    icon: "🏕️",
    title: "Camper Rental",
    description:
      "Hit the road and sleep under the midnight sun in our Renault Master Camper — fully equipped for self-sufficient adventures.",
    highlight: "Sleep-In Ready",
  },
  {
    icon: "✈️",
    title: "Airport Pickup",
    description:
      "Arrive at KEF and drive straight into your adventure. We're just 5 minutes from the airport — no shuttles, no waiting.",
    highlight: "5 min from KEF",
  },
  {
    icon: "📅",
    title: "Long-Term Rentals",
    description:
      "Staying for a month or more? Ask about our long-term rates. Special prices for extended adventures or work contracts.",
    highlight: "Best Rates",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            From a one-day adventure to a month-long road trip — we have the right vehicle and service for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-accent hover:bg-white/10 transition-all group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <span className="inline-block text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">
                {s.highlight}
              </span>
              <h3 className="font-heading text-white font-bold text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#fleet"
            className="inline-block bg-brand-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Browse Our Fleet
          </a>
        </div>
      </div>
    </section>
  );
}
