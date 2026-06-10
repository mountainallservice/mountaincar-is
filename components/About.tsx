import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-brand-accent text-sm font-semibold mb-3">
              Our Philosophy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Built on Trust, Not Policies
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We don&apos;t believe in the stiff, corporate way of doing things. At Mountain Car, we
              don&apos;t see you as a contract number or a risk factor—we see you as a{" "}
              <strong>friend</strong> visiting our home.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Our business is built entirely on <strong>trust</strong>. We hand you the keys with
              full confidence, believing that you will care for our cars as if they were your own.
              In return, we offer you a rental experience that is personal, flexible, and free from
              hidden traps.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We treat our customers the way we would like to be treated: with honesty, warmth, and
              a lot of heart.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src="https://d1yei2z3i6k35z.cloudfront.net/16287944/698b6e3f9c0ac_gosix.jpg"
                alt="Gosia — Owner & Founder"
                width={64}
                height={64}
                className="rounded-full object-cover w-16 h-16"
                unoptimized
              />
              <div>
                <p className="font-heading font-bold text-brand-primary">Gosia</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Owner &amp; Founder</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://d1yei2z3i6k35z.cloudfront.net/16287944/698b70653ba5c_Untitleddesign.jpg"
              alt="Iceland Adventure"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full h-[260px] md:h-[420px]"
              unoptimized
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-5 py-3 shadow-lg">
              <p className="text-xs text-slate-500 uppercase tracking-widest">Born in the Highlands</p>
              <p className="font-heading font-bold text-brand-primary">Est. 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
