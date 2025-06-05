import About from "@/components/About";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
