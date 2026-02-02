export default function ContactPage() {
  return (
    <section className="px-12 py-32 text-center">
      <h1 className="text-6xl mb-6">Contact Dr. Maya Reynolds</h1>
      <p className="text-lg text-gray-700 mb-10">
        Reach out to schedule a consultation or ask any questions.
      </p>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow">
        <p className="text-xl font-semibold">Email</p>
        <p className="underline mb-6">maya@example.com</p>

        <p className="text-xl font-semibold">Office Location</p>
        <p>Santa Monica, CA 90401</p>
      </div>
    </section>
  );
}
