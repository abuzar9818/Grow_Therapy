import Image from "next/image";

export default function Office() {
  return (
    <section id="office" className="px-12 py-24 bg-[var(--bg-office)]">
      <h2 className="text-5xl text-center mb-6">
       A Calm Space for Healing in Santa Monica
      </h2>

      <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-12">
        Dr. Reynolds offers in-person therapy from a quiet, private office in Santa Monica designed to feel grounding, safe, and welcoming.
      </p>

      <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-12">
        With natural light, a comfortable uncluttered environment, and a sense of calm from the moment you arrive, the space supports deep reflection and meaningful healing.
      </p>

      <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-12">
        In-person and telehealth sessions are available for adults across California.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/office1.jpeg"
            alt="Office space"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/office2.jpeg"
            alt="Therapy room"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/office6.png"
            alt="Counseling space"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
