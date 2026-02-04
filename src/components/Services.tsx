import Image from "next/image";
import { services } from "@/data/Services";

export default function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-12 lg:mb-16">
        My Specialties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="border border-black p-6 sm:p-8 flex flex-col items-start"
          >
            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">{s.title}</h3>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">{s.desc}</p>

            <div className="rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto">
              <Image
                src={s.image}
                alt={s.title}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
