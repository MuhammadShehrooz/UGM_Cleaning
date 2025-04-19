import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

type CustomerReview = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
};

const testimonials: CustomerReview[] = [
  {
    name: "Anna Deynah",
    role: "UX Designer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    avatar:
      "https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg",
    rating: 5,
  },
  {
    name: "Ravi Kumar Patel",
    role: "Operations Manager",
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
    avatar:
      "https://media.istockphoto.com/id/1333001232/photo/portrait-of-indian-man-face-outdoors-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Ne-OChwAEFF5U7yxOwUUqA8ELrJ1WCYho4RkW9v360I=",
    rating: 4,
  },
  {
    name: "Maria Kate",
    role: "Photographer",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    rating: 3,
  },
  {
    name: "Sophia Green",
    role: "Product Manager",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp",
    rating: 4,
  },
  {
    name: "Saad Qureshi",
    role: "Software Engineer",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    avatar:
      "https://t4.ftcdn.net/jpg/06/54/65/25/360_F_654652516_kgbJSV288M8r3YHqowlmXBg42YLDhlwF.jpg",
    rating: 5,
  },
  {
    name: "Olivia Smith",
    role: "Content Writer",
    quote:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
    avatar:
      "https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg",
    rating: 3,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const maxIndex = testimonials.length - 3;

  const animateTestimonials = () => {
    testimonialRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
          }
        );
      }
    });
  };

  useEffect(() => {
    animateTestimonials();
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  return (
    <div className="my-5" id="reviews-section">
      <h2 className="text-center mb-4 heading fs-48 Recoleta fw-bold">
        What Our Customers Say
      </h2>
      <div className="carousel slide carousel-dark text-center position-relative">
        <div className="carousel-inner py-4 active">
          <div className="container">
            <div className="row">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 mb-4"
                  ref={(el: HTMLDivElement | null) => {
                    if (el) testimonialRefs.current[index] = el;
                  }}
                >
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="mb-3">{testimonial.name}</h5>
                  <p>{testimonial.role}</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    {testimonial.quote}
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i
                          className={`fas fa-star fa-sm ${
                            i < testimonial.rating
                              ? "text-success"
                              : "far text-success"
                          }`}
                        ></i>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
          type="button"
          onClick={prevSlide}
          style={{ left: "-50px" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
          type="button"
          onClick={nextSlide}
          style={{ right: "-50px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
