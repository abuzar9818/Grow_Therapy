import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Support from "@/components/Support";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Background from "@/components/Background";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Support />
      <About />
      <Office /> {/* ✅ Custom Required Section */}
      <FAQ />
      <Background />
      <CTA />
      <Footer />
    </>
  );
}
