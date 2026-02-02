export default function Footer() {
  return (
    <footer id="contact" className="bg-(--bg-footer) px-12 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left */}
        <div>
          <h3 className="text-3xl mb-4 font-semibold">
            Dr. Maya Reynolds, PsyD
          </h3>

          <p className="text-gray-700">Licensed Clinical Psychologist</p>

          <p className="text-gray-700">
            Santa Monica, CA 90401
          </p>

          <p className="text-gray-700">In-Person & Telehealth Sessions Available</p>

          <p className="mt-4 underline">maya@example.com</p>
          <p className="underline">(555) 555-5555</p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-2xl mb-4 font-semibold">Hours</h3>
          <p>Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-2xl mb-4 font-semibold">Find</h3>

          <ul className="space-y-2 underline">
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-20 text-center text-sm text-gray-500">
        All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.
      </div>
    </footer>
  );
}
