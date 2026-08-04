"use client";

import { bsLogo } from "@/assets/images";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const homeLinks = [
  // {
  //   title: "About us",
  //   href: "#",
  // },
  {
    title: "What we do",
    href: "/#what",
  },
  {
    title: "Who we support",
    href: "/#who",
  },
  // {
  //   title: "Contact us",
  //   href: "/contact",
  // },
  {
    title: "Apply",
    href: "/apply",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative">
      <div className="py-2 md:py-4 padding-x flex items-center justify-between max-w-[1536px] mx-auto">
        <Link href="/" className="relative w-16 md:w-19 h-10 md:h-12 shrink-0">
          <Image
            src={bsLogo.src}
            alt="bethel springs logo"
            className="size-full object-contain"
            fill
          />
        </Link>

        {/* Desktop navs */}
        <nav className="max-md:hidden">
          <ul className="flex gap-5 lg:gap-7">
            {homeLinks.map((link, idx) => (
              <li
                key={idx}
                className="text-sm leading-5 hover:text-primary duration-200"
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="max-md:hidden flex items-center text-sm h-[38px] px-3.25 rounded-full hover:bg-primary/90 bg-primary text-white"
        >
          Contact Us
        </Link>

        {/* Menu Trigger */}
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          variant="ghost"
          className="md:hidden p-0 h-auto hover:bg-transparent focus:ring-0"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>

        {/* Mobile navs */}
        <div
          className={`md:hidden absolute top-14 inset-x-0 px-4 py-6 flex flex-col items-center gap-4 sm:gap-6 bg-background transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {homeLinks.map((link, idx) => (
            <a
              onClick={() => setIsOpen(false)}
              key={idx}
              href={link.href}
              className="text-sm leading-5 hover:text-primary duration-200"
            >
              {link.title}
            </a>
          ))}

          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="flex items-center text-sm h-[32px] px-3.25 rounded-full hover:bg-primary/90 bg-primary text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
