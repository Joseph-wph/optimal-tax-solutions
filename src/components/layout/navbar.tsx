"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "6281283807770";

  const message =
    "Hello Optimal Tax Solutions, I would like to ask about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">

    {/* Logo */}
    <img
      src="/assets/logo/ots.png"
      alt="Optimal Tax Solutions"
      className="w-44 md:w-52 xl:w-64 shrink-0"
    />

    {/* Desktop Menu */}
    <nav className="hidden xl:block">
      <ul className="flex items-center gap-10 text-primary font-semibold">

        <li>
          <a
            href="#home"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#services"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#testimonial"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Testimonial
          </a>
        </li>

      </ul>
    </nav>

    {/* Desktop Button */}
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden xl:inline-flex items-center justify-center bg-primary hover:bg-blue-700 transition-colors duration-300 text-white px-6 py-3 rounded-full font-medium"
    >
      Contact Us
    </a>

    {/* Mobile Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="xl:hidden text-primary"
    >
      {isOpen ? <X size={30} /> : <Menu size={30} />}
    </button>

  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="xl:hidden border-t bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <ul className="flex flex-col gap-6 text-primary font-semibold">

          <li>
            <a
              href="#home"
              className="block hover:text-blue-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="block hover:text-blue-500"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="block hover:text-blue-500"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#testimonial"
              className="block hover:text-blue-500"
            >
              Testimonial
            </a>
          </li>

        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex justify-center items-center bg-primary hover:bg-blue-700 transition-colors duration-300 text-white py-3 rounded-full font-medium"
        >
          Contact Us
        </a>

      </div>
    </div>
  )}
</header>
  );
}
