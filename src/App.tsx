import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/whyUs";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";

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
      {/* <Page404 /> */}
    </>
  );
}

export default App;
