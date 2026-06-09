import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Addons from "@/components/Addons";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import Location from "@/components/Location";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <HowItWorks />
      <Fleet />
      <Addons />
      <Reviews />
      <QuoteForm />
      <Location />
      <CtaBanner />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
