import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import distributionImage from "../assets/c3.jpg";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".about-image",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="d-flex align-items-center justify-content-center py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-6 col-xl-7 animate-on-scroll order-1 order-lg-2">
            <h2
              className="mb-4 fw-bold heading fs-48 Recoleta"
              style={{ letterSpacing: "2px" }}
            >
              About Us
            </h2>
            <p
              className="mb-5"
              style={{
                fontSize: "18px",
                color: "#555",
                fontFamily: "Raleway",
              }}
            >
              We are a professional building cleaning company committed to
              delivering high-quality, reliable, and eco-friendly cleaning
              solutions. With a team of trained experts and modern equipment, we
              ensure that every building we service is spotless, sanitized, and
              well-maintained. Our goal is to create clean and healthy
              environments for our clients, whether it’s a residential property,
              commercial space, or industrial site. We take pride in our
              attention to detail, customer satisfaction, and dedication to
              excellence in every project we undertake.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 animate-on-scroll order-2 order-lg-1 d-flex justify-content-center">
            <img
              src={distributionImage}
              alt="Serene Distribution"
              className="img-fluid rounded-4 shadow-lg about-image"
              style={{
                marginBottom: "-7px",
                height: "600px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
