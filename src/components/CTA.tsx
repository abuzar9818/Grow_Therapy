"use client";

import { useState } from "react";

export default function CTA() {
  const [isClicked, setIsClicked] = useState(false);

  const handleScheduleConsultation = () => {
    setIsClicked(true);

    window.location.href = "/appointment";
    

    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <section id="contact" className="bg-(--bg-cta) text-white text-center px-12 py-20">
      <h2 className="text-6xl mb-6">Get started today.</h2>

      <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/80">
        If you’re ready to feel calmer, more grounded, and supported in your healing journey, I invite you to reach out.
      </p>
      <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/80">
        Therapy can help you move beyond anxiety, trauma, and burnout—and develop a stronger relationship with yourself over time.
      </p>

      <button 
        onClick={handleScheduleConsultation}
        className={`mt-12 border border-white px-10 py-3 uppercase tracking-wide transition-all duration-300 transform ${isClicked ? 'scale-95' : 'hover:scale-105 hover:bg-white hover:text-black hover:border-transparent'}`}
      >
        Schedule a Consultation →
      </button>
    </section>  
  );
}
