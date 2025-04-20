import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/whyUs";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyUs />
      <TestimonialCarousel />
      <Services />
      <Footer />
    </>
  );
}

export default App;
