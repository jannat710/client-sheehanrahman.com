"use client";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import NavItems from "./NavItems";
import Navbar from "./Navbar";

export default function NavToggle() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div
        className=" text-white absolute top-16 right-24 z-10"
        onClick={toggleMenu}
      >
        <Navbar />
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center">
          <div className="absolute top-16 right-24">
            <IoCloseSharp
              className="text-white h-11 w-11"
              onClick={toggleMenu}
            />
          </div>
          <NavItems closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
}
