"use client";

import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex w-full ${isScrolled ? "h-20" : "h-24"} ${
        isScrolled ? "bg-black" : "bg-transparent"
      } fixed items-center justify-between px-2 md:justify-around z-50 transition-all duration-300`}
    >
      <h1 className="font-cinzel text-winter-300 text-xl border border-winter-600 p-3">
        {" "}
        LULA DE ORO
      </h1>

      {/* MENU RESPONSIVE */}
      <button className={`text-3xl md:hidden ${isScrolled ? "text-winter-200" : "text-winter-400"}`} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu />
      </button>
      <div className={`${isOpen ? "block" : 'hidden'} z-30 ${isScrolled ? "top-20" : "top-24"} bg-black absolute  left-0 w-full h-screen`}>
        <ul className=" flex flex-col items-center justify-center mt-10 md:hidden gap-10 text-winter-300 text-lg font-cinzel tracking-widest  ">
          <li>
            <a href="">PAISAJES</a>
          </li>
          <li>
            <a href="">RETRATOS</a>
          </li>
          <li>
            <a href="">MARCAS</a>
          </li>
          <li>
            <a href="">GASTRONOMIA</a>
          </li>
          <li>
            <a href="#" className="text-winter-300">
              CONTACTO
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram className="text-winter-300 text-xl" />
            </a>
          </li>
        </ul>
      </div>

      {/* MENU ESCRITORIO */}
      <ul className="hidden md:flex gap-10 text-winter-300 text-lg font-cinzel tracking-widest  ">
        <li>
          <a href="">PAISAJES</a>
        </li>
        <li>
          <a href="">RETRATOS</a>
        </li>
        <li>
          <a href="">MARCAS</a>
        </li>
        <li>
          <a href="">GASTRONOMIA</a>
        </li>
      </ul>
      <ul className="hidden md:flex items-center gap-5">
        <li>
          <a href="#" className="text-winter-300">
            CONTACTO
          </a>
        </li>
        <li>
          <a href="">
            <BsInstagram className="text-winter-300 text-xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
