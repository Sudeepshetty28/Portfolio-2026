"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "internship",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 100; // Navbar height
          const bottom = top + element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo">Sudeep Shetty</div>

      <div className="nav-links">
        <Link href="#home" className={active === "home" ? "active" : ""}>
          Home
        </Link>

        <Link href="#about" className={active === "about" ? "active" : ""}>
          About
        </Link>

        <Link href="#education" className={active === "education" ? "active" : ""}>
          Education
        </Link>

        <Link href="#skills" className={active === "skills" ? "active" : ""}>
          Skills
        </Link>

        <Link href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </Link>

        <Link href="#internship" className={active === "internship" ? "active" : ""}>
          Internship
        </Link>

        <Link href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </Link>
      </div>
    </nav>
  );
}