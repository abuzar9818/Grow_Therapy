"use client";

import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/data/Faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="grid md:grid-cols-2 px-12 py-28 items-center gap-16">

      <div className="flex justify-center">
        <div className="relative">
          <div className="rounded-[50%] overflow-hidden w-105 h-105 shadow-lg">
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

      <div>
        <h2 className="text-6xl mb-10">FAQs</h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-black pb-6"
            >
              <button
                className="w-full flex justify-between items-center text-left hover:text-(--primary) transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="text-2xl font-medium">{faq.question}</h3>
                <span className="text-3xl ml-4 transition-transform duration-200">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="mt-4">
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
