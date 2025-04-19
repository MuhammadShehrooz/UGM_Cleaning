import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import carousel1 from "../assets/c1.jpg";
import carousel2 from "../assets/c2.jpg";
import carousel3 from "../assets/c5.jpg";

interface CarouselItem {
  image: string;
  title: string;
  subTitle: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    image: carousel1,
    title: "Cutting-edge",
    subTitle: "Cleaning Solutions",
    description:
      "Experience innovative cleaning solutions designed for maximum efficiency, hygiene, and sustainability across various industries.",
  },
  {
    image: carousel2,
    title: "Enhancing",
    subTitle: "Customer Satisfaction",
    description:
      "Our premium products and tailored services are crafted to exceed expectations and build lasting customer relationships.",
  },
  {
    image: carousel3,
    title: "Professional",
    subTitle: "Cleaning Services",
    description:
      "Delivering reliable and expert cleaning services with attention to detail, ensuring spotless results every time.",
  },
];

const Hero: React.FC = () => {
  const captionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animateCaptions = () => {
      captionsRef.current.forEach((caption) => {
        if (caption) {
          gsap.fromTo(
            caption.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            }
          );
        }
      });
    };

    animateCaptions();

    const carousel = document.getElementById("carouselExampleCaptions");
    carousel?.addEventListener("slid.bs.carousel", animateCaptions);

    return () => {
      carousel?.removeEventListener("slid.bs.carousel", animateCaptions);
    };
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.image}
              className="d-block w-100 carousel-img"
              alt={`carousel-${index}`}
            />
            <div
              className="carousel-caption d-none d-md-block"
              ref={(el) => {
                if (el) captionsRef.current[index] = el;
              }}
            >
              <h5 className="Recoleta">{item.title}</h5>
              <h5 className="Recoleta">{item.subTitle}</h5>
              <p className="Raleway">{item.description}</p>
              <a
                href="https://wa.me/0567301136?text=Hi%2C%20I%27m%20interested%20in%20your%20cleaning%20services"
                className="btn-book-now mt-3 fw-bold"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
