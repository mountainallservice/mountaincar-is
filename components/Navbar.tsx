"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-primary shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top bar */}
      {!scrolled && (
        <div className="hidden md:flex justify-center gap-8 text-white/80 text-xs bg-brand-primary/60 py-2 absolute top-0 left-0 right-0">
          <a href="mailto:rental@mountaincar.is" className="hover:text-white transition-colors">
            rental@mountaincar.is
          </a>
          <a href="tel:+3548888005" className="hover:text-white transition-colors">
            +354 888 8005
          </a>
          <span>Mon - Sat: 10:00 - 18:00</span>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-4 flex items-center justify-between ${!scrolled ? "md:mt-9" : ""}`}>
        <a href="#" className="flex-shrink-0">
          <Image
            src="https://d1yei2z3i6k35z.cloudfront.net/16287944/69835cace7623_Asset-3288x.webp"
            alt="Mountain Car"
            width={180}
            height={48}
            className="h-10 w-auto"
            unoptimized
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white font-medium text-sm hover:text-brand-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-brand-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-primary px-4 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white font-medium hover:text-brand-accent"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-brand-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-orange-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Request Quote
          </a>
        </div>
      )}
    </nav>
  );
}
