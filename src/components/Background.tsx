"use client";

import { useState } from "react";

const items = [
  {
    title: "Education",
    content: "PsyD in Clinical Psychology, specialized in trauma-informed care.",
  },
  {
    title: "Licensure",
    content: "Licensed Clinical Psychologist in California.",
  },
  {
    title: "Therapy Approach",
    content:
      "Integrative, compassionate therapy blending anxiety treatment and trauma recovery.",
  },
];

export default function Background() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-(--bg-background) px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12">My Professional Background</h2>

        <div className="border-t border-black">
          {items.map((item, i) => (
            <div key={i} className="border-b border-black py-4 sm:py-6 text-left">
              <button
                className="w-full flex justify-between items-center text-xl sm:text-2xl hover:text-(--primary) transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.title}
                <span className="text-2xl sm:text-3xl transition-transform duration-200">{open === i ? "−" : "+"}</span>
              </button>

              {open === i && (
                <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
