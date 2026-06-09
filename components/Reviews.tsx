const reviews = [
  {
    initials: "JT",
    name: "Jake Trout",
    location: "Florida, USA",
    text: "Renting from Mountain Car was a breeze. They equipped me with the perfect 4×4 for the gravel roads.",
  },
  {
    initials: "CG",
    name: "Claudia Gahter",
    location: "Berlin, Germany",
    text: "Mountain Car made it easy. Their transparency about costs meant no unpleasant surprises.",
  },
  {
    initials: "RS",
    name: "Raj Suhdumi",
    location: "New Delhi, India",
    text: "The vehicle was superb and came with all the amenities. The free minor damage policy was a relief.",
  },
  {
    initials: "HA",
    name: "Hirobitu Akira",
    location: "Mie, Japan",
    text: "No hidden fees, and their loyalty program is a perk. The staff's friendliness was impressive. We'll be back!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">
            What Clients Say
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
              <p className="text-slate-600 text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
