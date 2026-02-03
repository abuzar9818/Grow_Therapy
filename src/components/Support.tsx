import Image from "next/image";

export default function Support() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 w-full">

      {/* Left Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-full md:min-h-[700px] overflow-hidden">
        <Image
          src="/images/support.jpg"
          alt="Support therapy"
          fill
          className="object-cover object-[center_20%] transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Right Content */}
      <div className="bg-[#cfcbd7] px-10 md:px-14 py-16 md:py-20 flex flex-col justify-center md:min-h-[700px]">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-snug">
          You don’t have to do this <br /> all alone.
        </h2>

        <p className="text-lg mb-6 text-gray-700">
          If you’ve been experiencing any of the following, therapy can help:
        </p>

        <ul className="space-y-3 text-gray-800 text-lg list-disc ml-6">
          <li>Constant anxiety or overthinking</li>
          <li>Feeling emotionally exhausted or burned out</li>
          <li>Panic symptoms or difficulty sleeping</li>
          <li>Trauma triggers or feeling unsafe in your body</li>
          <li>Struggles in relationships or self-trust</li>
          <li>Feeling stuck despite “doing well” outwardly</li>
        </ul>

        <p className="mt-8 text-lg text-gray-700">
          With warmth and collaboration, we’ll work together to help you feel
          more regulated, resilient, and connected to yourself.
        </p>

        <button className="mt-10 underline uppercase tracking-wide w-fit">
          Work With Dr. Reynolds →
        </button>
      </div>
    </section>
  );
}
