"use client";

import { useState } from "react";

const vehicles = [
  "Dacia Duster 4x4",
  "Duster + Roof Tent",
  "Renault Master Camper",
  "Other / Unsure",
];

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      pickup_date: (form.elements.namedItem("pickup_date") as HTMLInputElement).value,
      return_date: (form.elements.namedItem("return_date") as HTMLInputElement).value,
      vehicle: (form.elements.namedItem("vehicle") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email us directly at rental@mountaincar.is");
    }
  }

  return (
    <section id="quote" className="py-16 md:py-24 bg-brand-primary relative">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Request a Quote
          </h2>
          <p className="text-white/70">
            Tell us your dates and preferred vehicle, and we&apos;ll send you a personalized offer.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-500/20 border border-green-400 text-white rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-heading font-bold text-xl mb-2">Quote Request Sent!</h3>
            <p className="text-white/80">
              We&apos;ll get back to you as soon as possible with a personalized offer.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-8 grid gap-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-white/80 text-sm font-medium block mb-1.5">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="text-white/80 text-sm font-medium block mb-1.5">Phone Number *</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent"
                  placeholder="+48 123 456 789"
                />
              </div>
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium block mb-1.5">Email Address *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-white/80 text-sm font-medium block mb-1.5">Pick-up Date *</label>
                <input
                  name="pickup_date"
                  type="date"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="text-white/80 text-sm font-medium block mb-1.5">Return Date *</label>
                <input
                  name="return_date"
                  type="date"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium block mb-1.5">Preferred Vehicle</label>
              <select
                name="vehicle"
                className="w-full bg-brand-primary border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
              >
                {vehicles.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium block mb-1.5">Message (Optional)</label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-60 w-full"
            >
              {status === "sending" ? "Sending..." : "Send Request"}
            </button>
            <p className="text-white/40 text-xs text-center">🔒 SSL Secure</p>
          </form>
        )}
      </div>
    </section>
  );
}
