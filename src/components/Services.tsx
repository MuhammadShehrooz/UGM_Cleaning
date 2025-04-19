import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      name: "House Cleaning",
      image: service1,
    },
    {
      name: "Office Cleaning",
      image: service2,
    },
    {
      name: "Deep Cleaning",
      image: service3,
    },
    {
      name: "Move In Cleaning",
      image: service4,
    },
    {
      name: "Move Out Cleaning",
      image: service5,
    },
    {
      name: "AC Services",
      image: service6,
    },
    {
      name: "AC Repairing",
      image: service7,
    },
  ];

  useEffect(() => {
    // GSAP animation for scroll trigger
    serviceRefs.current.forEach((service, index) => {
      if (service) {
        gsap.fromTo(
          service,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="services-section" className="section services-index py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex"
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
            >
              <div className="service-card position-relative overflow-hidden shadow-lg rounded-lg">
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="img-fluid rounded-3 service-img"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </div>
                <div className="service-content p-4">
                  <h4 className="service-title text-dark fw-bold mb-3">
                    {service.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
