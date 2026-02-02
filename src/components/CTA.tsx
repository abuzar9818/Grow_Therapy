export default function CTA() {
  return (
    <section className="bg-[var(--bg-cta)] text-white text-center px-12 py-32">
      <h2 className="text-6xl mb-6">Get started today.</h2>

      <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/80">
        If you’re ready to feel calmer, more grounded, and supported in your healing journey, I invite you to reach out.
      </p>
      <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/80">
        Therapy can help you move beyond anxiety, trauma, and burnout—and develop a stronger relationship with yourself over time.
      </p>

      <button className="mt-12 border border-white px-10 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition">
        Schedule a Consultation →
      </button>
    </section>
  );
}
