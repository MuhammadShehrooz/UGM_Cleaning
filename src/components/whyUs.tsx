import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faUmbrella,
  faLeaf,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations when scrolling
    if (sectionRef.current) {
      // Animate the text and icons
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");

      gsap.fromTo(
        elements,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image scaling animation
      gsap.fromTo(
        ".why-choose-image",
        { scale: 0.8 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-choose-image",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="container py-5" id="whyus-section">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold text-uppercase animate-on-scroll heading fs-48 Recoleta">
            Why Choose Us
          </h2>
          <p className="text-muted animate-on-scroll">
            Our mission is to provide spotless, eco-conscious, and reliable
            cleaning services. We are more than just cleaners — we're your
            long-term hygiene and maintenance partners.
          </p>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <ul className="list-unstyled">
            <li className="mb-4 animate-on-scroll">
              <div className="mb-2">
                <FontAwesomeIcon icon={faGem} className="text-success fs-2" />
              </div>
              <h5 className="text-uppercase">Exceptional Quality</h5>
              <p className="text-muted">
                Our trained professionals ensure your buildings are cleaned to
                the highest standards, using modern tools and effective
                techniques.
              </p>
            </li>
            <li className="animate-on-scroll">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faUmbrella}
                  className="text-success fs-2"
                />
              </div>
              <h5 className="text-uppercase">Comprehensive Coverage</h5>
              <p className="text-muted">
                From residential apartments to commercial towers, we offer
                flexible cleaning plans tailored to your property needs.
              </p>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="https://kttcleaning.com/images/why-choose.jpg"
            alt="Why Choose Us"
            className="img-fluid rounded-circle border shadow why-choose-image"
            style={{
              maxHeight: "520px",
              width: "520px",
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
          />
        </div>

        {/* Right Features */}
        <div className="col-lg-3 col-md-6">
          <ul className="list-unstyled">
            <li className="mb-4 animate-on-scroll">
              <div className="mb-2">
                <FontAwesomeIcon icon={faLeaf} className="text-success fs-2" />
              </div>
              <h5 className="text-uppercase">Eco-Friendly Methods</h5>
              <p className="text-muted">
                We use non-toxic, biodegradable products that are safe for
                people, pets, and the environment.
              </p>
            </li>
            <li className="animate-on-scroll">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-success fs-2"
                />
              </div>
              <h5 className="text-uppercase">Trust & Reliability</h5>
              <p className="text-muted">
                Our team is punctual, background-verified, and trained to
                maintain the confidentiality and integrity of your space.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
