import Image from "next/image";

export default function Intro() {
    return (
        <section className="grid md:grid-cols-2">

            {/* Left Text */}
            <div className="bg-(--bg-intro) px-14 py-20 flex flex-col">
                <h2 className="text-5xl font-semibold mb-6">
                    Find calm, clarity, and emotional balance again.
                </h2>
                
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                        Life can appear completely “fine” on the outside—you may be keeping up with responsibilities, showing up for work, caring for others, and doing what’s expected—yet internally feel overwhelmed by constant anxiety, racing thoughts, or an emotional heaviness you can’t quite explain.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-gray-700">
                        Overthinking can become exhausting, leaving you stuck in cycles of worry, self-doubt, or feeling like you’re never truly able to relax. Even in moments of quiet, your mind may stay on high alert, and your body may carry tension, stress, or fatigue without relief.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-gray-700">
                        Therapy offers a space where you don’t have to hold it all together or push through alone. It can be a place to slow down, feel deeply supported, and begin understanding what’s happening beneath the surface.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-gray-700">
                        Together, we can gently explore the patterns, experiences, and emotions that may be keeping you feeling on edge, while building tools that help you feel more grounded, connected, and steady.
                    </p>
                </div>

                <button className="mt-10 underline uppercase tracking-wide">
                    Get in Touch →
                </button>
            </div>

            {/* Right Image */}
            <div className="overflow-hidden">
                <Image
                    src="/images/intro.jpg"
                    alt="calm lifestyle"
                    width={900}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
        </section>
    );
}
