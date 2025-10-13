import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const TextTrail = ({ text }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const texts = document.querySelectorAll(".text");

    const handleMouseMove = (e) => {
      gsap.to(texts, {
        x: e.clientX,
        y: e.clientY,
        stagger: {
          each: -0.02,
          ease: "power2.inOut",
        },
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [count]);

  const increase = () => setCount((prev) => Math.min(prev + 1, 15));
  const decrease = () => setCount((prev) => Math.max(prev - 1, 1));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#161616]">

      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={decrease}
          className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200"
        >
          -
        </button>
        <span className="text-white font-bold text-xl">{count}</span>
        <button
          onClick={increase}
          className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200"
        >
          +
        </button>
      </div>


      <div className="cursor absolute inset-0">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="text pointer-events-none absolute text-[6em] font-bold text-[#161616] [-webkit-text-stroke:1px_white]"
          >
            {i === count - 1 ? (
              <span className="text-white">{text}</span>
            ) : (
              text
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextTrail;
