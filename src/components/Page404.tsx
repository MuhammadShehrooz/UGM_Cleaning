import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Page404: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: -50, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        delay: 1,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <div className="notfound-title fw-bold" ref={titleRef}>
          404
        </div>
        <div className="notfound-message" ref={messageRef}>
          Oops! The page you’re looking for doesn’t exist.
        </div>
      </div>
    </div>
  );
};

export default Page404;
