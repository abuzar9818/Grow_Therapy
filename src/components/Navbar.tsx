"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Office", id: "office" },
  { label: "FAQs", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Active section highlight on scroll
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // ✅ Shadow appears after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll
  const handleScrollTo = (id: string) => {
    setMobileOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full
      px-10 py-5 flex justify-between items-center
      backdrop-blur-md bg-white/70
      border-b border-black/10
      z-50 transition
      ${scrolled ? "shadow-md" : ""}
      `}
    >
      {/* Logo */}
      <button
        onClick={() => handleScrollTo("home")}
        className="text-2xl font-semibold tracking-wide"
      >
        Dr. Maya Reynolds
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-lg">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className={`transition hover:underline ${
              activeSection === link.id
                ? "font-semibold underline"
                : "text-gray-700"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className="
          absolute top-20 right-6
          backdrop-blur-xl bg-white/90
          shadow-xl rounded-2xl
          p-6 flex flex-col gap-5
          md:hidden z-50
        "
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`text-left text-lg ${
                activeSection === link.id
                  ? "font-semibold underline"
                  : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
