'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { CldImage } from "next-cloudinary";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <header
      className={`w-full bg-white shadow-lg z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} sticky top-0`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <CldImage
          src="https://res.cloudinary.com/doqmcufwf/image/upload/v1734062817/logo.png"
          alt="Logo"
          width={35}
          height={30}
        />

        {/* Navbar links for desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Beranda</Link>
          <Link href="/tentangKami" className="text-gray-700 hover:text-blue-600">Tentang Kami</Link>
          <Link href="/layanan" className="text-gray-700 hover:text-blue-600">Layanan</Link>
          <Link href="/projek" className="text-gray-700 hover:text-blue-600">Projek</Link>
          {/* <Link href="/galeri" className="text-gray-700 hover:text-blue-600">Galeri</Link> */}
          <Link href="/kontak" className="text-gray-700 hover:text-blue-600">Kontak</Link>
        </nav>

        {/* Burger Icon for Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes size={30} />
          ) : (
            <FaBars size={30} />
          )}
        </button>
      </div>

      {/* Dropdown Menu (Mobile View) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md fixed w-full top-14 left-0 space-y-4 py-4 px-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 block">Beranda</Link>
          <Link href="/tentangKami" className="text-gray-700 hover:text-blue-600 block">Tentang Kami</Link>
          <Link href="/layanan" className="text-gray-700 hover:text-blue-600 block">Layanan</Link>
          <Link href="/projek" className="text-gray-700 hover:text-blue-600 block">Projek</Link>
          {/* <Link href="/galeri" className="text-gray-700 hover:text-blue-600 block">Galeri</Link> */}
          <Link href="/kontak" className="text-gray-700 hover:text-blue-600 block">Kontak</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
