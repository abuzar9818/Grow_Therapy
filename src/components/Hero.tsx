import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="px-12 py-20 bg-[var(--secondary)]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className=" overflow-hidden w-150 h-150 rounded-md shadow-md">
                        <Image
                            src="/images/HeroDoctor.png"
                            alt="Therapy support"
                            width={500}
                            height={500}
                            className="object-cover object-[50%_10%] w-full h-full"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <h1 className="text-6xl font-bold leading-tight">
                        Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA
                    </h1>

                    <p className="mt-6 text-xl text-gray-700">
                        If you feel overwhelmed by constant worry, panic, or emotional exhaustion, you don’t have to keep carrying it alone. Dr. Maya Reynolds offers grounded, supportive therapy for adults navigating anxiety, trauma, and high-functioning burnout.
                    </p>

                    <button
                        className="
    mt-8 px-10 py-3 rounded-full 
    bg-(--primary) text-white 
    uppercase tracking-wide text-sm
    hover:bg-black transition
  "
                    >
                        Schedule a Consultation →
                    </button>

                </div>
            </div>
        </section>
    );
}
