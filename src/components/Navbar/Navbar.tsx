"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrolled(scrollPercentage > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-center fixed w-full  -z-20 bg-base-100 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className=" p-5 lg:p-4 lg:my-3 w-3/7 flex justify-between">
        <div className="flex items-center">
          <Image src="/logo.svg" width={100} height={100} alt="" />
        </div>

        <div className="drawer drawer-end lg:hidden w-16">
          <div className="drawer drawer-end flex justify-end ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className="drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay "
              ></label>
              <ul className=" p-4 w-3/4 border-red-700 min-h-full bg-white text-base-content">
                <div className="flex justify-end">X</div>
                {/* Sidebar content here */}
                <li>
                  <Link href="/">What We Do</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/service">Our Service</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <a>Careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-7 text-sm hidden font-semibold">
          <div className="cursor-pointer">
            <Link href="/">What We Do</Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/about">About Us</Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/service">Our Service</Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="cursor-pointer">Careers</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
