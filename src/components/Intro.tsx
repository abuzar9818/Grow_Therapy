import Image from "next/image";

export default function Intro() {
    return (
        <section className="grid md:grid-cols-2">

            {/* Left Text */}
            <div className="bg-(--bg-intro) px-14 py-20 flex flex-col justify-center">
                <h2 className="text-5xl font-semibold mb-6">
                    Find calm, clarity, and emotional balance again.
                </h2>

                <p className="text-lg leading-relaxed text-gray-700">
                    Life can look “fine” on the outside while internally you feel anxious, stuck in overthinking, or constantly on edge.
                    Therapy can be a space to slow down, feel supported, and begin healing—both emotionally and physically—so you can move through life with more ease and steadiness.
                </p>

                <button className="mt-10 underline uppercase tracking-wide">
                    Get in Touch →
                </button>
            </div>

            {/* Right Image */}
            <div>
                <Image
          src="/images/intro.jpg"
          alt="calm lifestyle"
          width={900}
          height={700}
          className="w-full h-full object-cover"
        />
            </div>
        </section>
    );
}
