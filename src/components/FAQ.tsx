"use client";

import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/data/Faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28 items-center gap-8 sm:gap-12 lg:gap-16">

      <div className="flex justify-center order-2 md:order-1">
        <div className="relative">
          <div className="rounded-[50%] overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-105 lg:h-105 shadow-lg">
            <Image
              src="/images/faq.jpg"
              alt="FAQ - Therapy Questions"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 lg:mb-10">FAQs</h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-black pb-4 sm:pb-6"
            >
              <button
                className="w-full flex justify-between items-center text-left hover:text-(--primary) transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="text-xl sm:text-2xl font-medium">{faq.question}</h3>
                <span className="text-2xl sm:text-3xl ml-2 sm:ml-4 transition-transform duration-200">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="mt-3 sm:mt-4">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
