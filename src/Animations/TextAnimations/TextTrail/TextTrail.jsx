import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import CodeBox from "../../../Components/CodeBox"; // optional if using inside this file

// -------------------------
// Main TextTrail Component
// -------------------------
const TextTrail = ({ text }) => {
  const [count, setCount] = useState(5);
  const containerRef = useRef(null);

  // Initial positioning
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const texts = container.querySelectorAll(".text");
      gsap.set(texts, {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2,
        xPercent: -50,
        yPercent: -50,
      });
    }
  }, []);

  // Mouse follow animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const texts = container.querySelectorAll(".text");

    const handleMouseMove = (e) => {
      const { left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      gsap.to(texts, {
        x,
        y,
        stagger: { each: -0.02, ease: "power2.inOut" },
      });
    };

    const handleMouseLeave = () => {
      gsap.to(texts, {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: { each: 0.03, ease: "power2.inOut" },
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-transparent"
    >
      <div className="cursor absolute inset-0">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="text pointer-events-none absolute text-[6em] font-bold text-[#161616] [-webkit-text-stroke:1px_white] -translate-x-1/2 -translate-y-1/2"
          >
            {i === count - 1 ? <span className="text-white">{text}</span> : text}
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------
// Code string for CodeBox
// -------------------------
export const TextRailString = `
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const TextTrail = ({ text }) => {
  const [count, setCount] = useState(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const texts = container.querySelectorAll(".text");
      gsap.set(texts, {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2,
        xPercent: -50,
        yPercent: -50,
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const texts = container.querySelectorAll(".text");

    const handleMouseMove = (e) => {
      const { left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      gsap.to(texts, {
        x,
        y,
        stagger: { each: -0.02, ease: "power2.inOut" },
      });
    };

    const handleMouseLeave = () => {
      gsap.to(texts, {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: { each: 0.03, ease: "power2.inOut" },
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-transparent"
    >
      <div className="cursor absolute inset-0">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="text pointer-events-none absolute text-[6em] font-bold text-[#161616] 
            [-webkit-text-stroke:1px_white] -translate-x-1/2 -translate-y-1/2"
          >
            {i === count - 1 ? <span className="text-white">{text}</span> : text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextTrail;
`;

// -------------------------
// Metadata
// -------------------------
export const TextTrailDependency = "npm install gsap";
export const TextTrailName = "Text Trail";

// -------------------------
// Default export
// -------------------------
export default TextTrail;
