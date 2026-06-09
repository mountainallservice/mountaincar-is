const values = [
  {
    icon: "🤝",
    title: "Honesty & Transparency",
    desc: "We believe in clear communication. No hidden fees, no surprises. The price quoted is the price you pay.",
  },
  {
    icon: "❤️",
    title: "Customer-Focused",
    desc: "Friendly approach and 24/7 support. We are here to assist you every step of the way with a smile.",
  },
  {
    icon: "💰",
    title: "Value for Money",
    desc: "Competitive prices and we don't charge for minor damages. We focus on your experience, not expenses.",
  },
  {
    icon: "🗺️",
    title: "Local Insights",
    desc: "Get the best out of your trip with our expert tips. Tap into our wealth of knowledge to find hidden gems.",
  },
];

export default function Values() {
  return (
    <section className="py-16 md:py-24 bg-brand-light border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Actually, it&apos;s never about us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At Mountain Car, It&apos;s All About You. We understand that a trip to Iceland is more
            than just a vacation—it&apos;s a journey into the heart of some of the world&apos;s most
            breathtaking landscapes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-heading font-bold text-brand-primary mb-2">{v.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
