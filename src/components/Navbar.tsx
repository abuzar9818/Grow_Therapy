export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-8">

      <a href="#home" className="text-2xl font-semibold">
        Dr. Maya Reynolds
      </a>

      <div className="flex gap-10 text-lg">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#office">Office</a>
        <a href="#faq">FAQs</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
