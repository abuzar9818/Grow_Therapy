import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-12 py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-6xl font-semibold mb-8">
            Hi, I’m Dr. Maya Reynolds, PsyD.
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, trauma, or burnout.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
          Many of the clients I work with are thoughtful, high-achieving, and self-aware—but internally feel stuck in worry, emotionally on edge, or disconnected after years of pushing through pressure.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
          My approach is warm, structured, and grounded, integrating CBT, EMDR, mindfulness, and body-based techniques to support both emotional and nervous system healing.
          </p>

          <button className="mt-10 border border-black px-8 py-3 uppercase tracking-wide hover:bg-black hover:text-white transition">
            Let’s Chat →
          </button>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center">

          {/* Main Circle */}
          <div className="rounded-[50%] overflow-hidden w-105 h-105">
            <Image
              src="/images/maya.jpg"
              alt="Dr. Maya Reynolds"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Small Overlapping Circle */}
          <div className="absolute -bottom-14 -right-10 w-55 h-55 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/images/about-extra.jpg"
              alt="Therapy office"
              width={250}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
