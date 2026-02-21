import React from "react";

export default function Navbar({ onApplyClick }) {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-xl font-extrabold tracking-wide">
        <span className="text-white">Fit</span>
        <span className="text-lime-500">12</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="hover:text-lime-500 transition">
          Program
        </a>
        <a href="#" className="hover:text-lime-500 transition">
          Success
        </a>
        <a href="#" className="hover:text-lime-500 transition">
          About
        </a>
      </div>

      {/* CTA Button */}
      <button onClick={onApplyClick} className="bg-lime-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400 transition">
        Apply Now →
      </button>

    </nav>
  );
}