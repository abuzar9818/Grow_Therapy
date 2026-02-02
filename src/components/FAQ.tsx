"use client";

import { useState } from "react";
import { faqs } from "@/data/Faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="grid md:grid-cols-2 px-12 py-28 items-center">

      {/* Left Image */}
      <div className="rounded-[50%] overflow-hidden w-105 h-105 mx-auto">
        <img
          src="/images/faq.jpg"
          alt="FAQ"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-6xl mb-10">FAQs</h2>

        <div className="border-t border-black">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-black py-6 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl">{faq.question}</h3>
                <span className="text-3xl">
                  {open === i ? "−" : "+"}
                </span>
              </div>

              {open === i && (
                <p className="mt-4 text-gray-700 text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
