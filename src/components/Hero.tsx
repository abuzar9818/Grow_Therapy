"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [isClicked, setIsClicked] = useState(false);

    const handleScheduleConsultation = () => {
        setIsClicked(true);

        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });


        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <section id="home" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-(--secondary)">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-150 lg:h-150 rounded-md shadow-md">
                        <Image
                            src="/images/HeroDoctor.png"
                            alt="Therapy support"
                            width={500}
                            height={500}
                            className="object-cover object-[50%_10%] w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700">
                        If you feel overwhelmed by constant worry, panic, or emotional exhaustion, you don’t have to keep carrying it alone. Dr. Maya Reynolds offers grounded, supportive therapy for adults navigating anxiety, trauma, and high-functioning burnout.
                    </p>

                    <button
                        onClick={handleScheduleConsultation}
                        className={`
    mt-6 sm:mt-8 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 rounded-full 
    bg-(--primary) text-white 
    uppercase tracking-wide text-sm
    transition-all duration-300 transform
    ${isClicked ? 'scale-95' : 'hover:scale-105 hover:bg-(--button-hover) hover:shadow-lg'}
  `}
                    >
                        Schedule a Consultation →
                    </button>

                </div>
            </div>
        </section>
    );
}
