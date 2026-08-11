import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import FocusAreas from "./sections/FocusAreas";
import WhyUs from "./sections/WhyUs";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <FocusAreas />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}