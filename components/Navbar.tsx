"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Our Story", href: "#story" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
        backgroundColor: isScrolled ? "rgba(17, 17, 17, 0.72)" : "transparent",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        boxShadow: isScrolled ? "0 12px 32px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <nav className="nav-container">
        <Link href="#hero" className="nav-brand">
          H&amp;H Fragrances
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <button aria-label="Search" className="nav-search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="nav-mobile">
          <button
            aria-label="Toggle menu"
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}>
        <button
          aria-label="Close menu"
          className="mobile-close"
          onClick={() => setIsMenuOpen(false)}
        >
          ×
        </button>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="mobile-link"
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
          <button aria-label="Search" className="mobile-search">
            Search Maison
          </button>
        </nav>
      </div>
    </header>
  );
}
