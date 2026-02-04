"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [isClicked, setIsClicked] = useState(false);

  const handleLetsChat = () => {
    setIsClicked(true);

    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8">
            Hi, I’m Dr. Maya Reynolds, PsyD.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, trauma, or burnout.
          </p>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
          Many of the clients I work with are thoughtful, high-achieving, and self-aware—but internally feel stuck in worry, emotionally on edge, or disconnected after years of pushing through pressure.
          </p>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
          My approach is warm, structured, and grounded, integrating CBT, EMDR, mindfulness, and body-based techniques to support both emotional and nervous system healing.
          </p>

          <button 
            onClick={handleLetsChat}
            className={`mt-6 sm:mt-8 sm:mt-10 border border-black px-6 sm:px-8 py-2 sm:py-3 uppercase tracking-wide transition-all duration-300 transform ${isClicked ? 'scale-95 bg-black text-white' : 'hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg'}`}
          >
            Let’s Chat →
          </button>
        </div>

        <div className="relative flex justify-center">

          <div className="rounded-[50%] overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-105 lg:h-105">
            <Image
              src="/images/HeroDoctor.png"
              alt="Dr. Maya Reynolds"
              width={500}
              height={600}
              className="object-cover object-[50%_10%] w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
