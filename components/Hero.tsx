export default function Hero() {
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
            Your Nordic Experience
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Not Just A Rental.{" "}
            <span className="text-brand-accent">Your Guide To Iceland&apos;s Wonders.</span>
          </h1>
          <p className="text-white/85 text-lg mb-8 max-w-lg">
            Looking for a straightforward, no-nonsense car rental? You&apos;ve come to the right
            place. Embrace the spirit of adventure with Mountain Car.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#fleet"
              className="bg-brand-accent text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Choose Your Car
            </a>
            <a
              href="#services"
              className="border border-white text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
          <div className="flex gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> No Hidden Fees
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-accent text-lg">✓</span> Free Minor Damages
            </div>
          </div>
        </div>

        {/* Right: Quick booking card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-8 text-white">
          <h2 className="font-heading text-xl font-bold mb-1">Start Your Adventure</h2>
          <p className="text-brand-accent font-semibold text-sm mb-4">Simple & Direct Booking</p>
          <p className="text-white/80 text-sm mb-6">
            We skip the complicated booking engines to give you the best personal service and rates.
            Fill out our simple request form and we&apos;ll get back to you instantly.
          </p>
          <a
            href="#quote"
            className="block text-center bg-brand-accent text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full"
          >
            Request a Quote Now
          </a>
          <p className="text-white/50 text-xs text-center mt-3">*Drivers must be 20+ years old</p>
        </div>
      </div>
    </header>
  );
}
