import Image from "next/image";
import { services } from "@/data/Services";

export default function Services() {
  return (
    <section id="services"  className="px-12 py-24">
      <h2 className="text-6xl text-center mb-16">
        My Specialties
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="border border-black p-8 flex flex-col items-start"
          >
            <h3 className="text-2xl mb-4">{s.title}</h3>
            <p className="text-gray-700 mb-10">{s.desc}</p>

            <div className="rounded-full overflow-hidden w-56 h-56 mx-auto">
              <Image
                src={s.image}
                alt={s.title}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
