const steps = [
  {
    num: "1",
    title: "Request a Quote",
    desc: "Fill out our simple form with your dates and preferred vehicle. No upfront payment required.",
  },
  {
    num: "2",
    title: "Receive Offer",
    desc: "We check availability and send you a personalized offer with the best possible price.",
  },
  {
    num: "3",
    title: "Start Driving",
    desc: "Confirm your booking, pick up your keys at our office (or airport), and explore Iceland!",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
            Simple Booking
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center mx-auto mb-5 font-heading text-2xl font-bold">
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-brand-primary text-xl mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
