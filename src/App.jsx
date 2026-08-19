import { Analytics } from '@vercel/analytics/react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";


import About from "./sections/About";
import Services from "./sections/Services";
import FocusAreas from "./sections/FocusAreas";
import WhyUs from "./sections/WhyUs";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
     
        <About />
        <Services />
        <FocusAreas />
        <WhyUs />
        <Contact />
           <Hero />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}