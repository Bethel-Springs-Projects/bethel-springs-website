"use client";

import { bsLogo } from "@/assets/images";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const homeLinks = [
  {
    title: "About us",
    href: "#",
  },
  {
    title: "What we do",
    href: "/#what",
  },
  {
    title: "Who we support",
    href: "/#who",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
  {
    title: "Apply",
    href: "/apply",
  },
];

const Header = () => {
  return (
    <header className="py-2 md:py-4 padding-x">
      <div className="flex items-center justify-between max-w-[1536px] mx-auto">
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
            {homeLinks
              .filter((link) => link.title !== "Contact us")
              .map((link, idx) => (
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-0 group md:hidden">
              <Menu className="hover:cursor-pointer block group-data-[state=open]:hidden" />
              <X className="hover:cursor-pointer hidden group-data-[state=open]:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onCloseAutoFocus={(e) => e.preventDefault()}
            align="end"
            className="p-2 md:hidden w-34.5"
          >
            {homeLinks.map((link, idx) => (
              <DropdownMenuItem
                key={idx}
                asChild
                className="text-sm leading-5 hover:bg-primary/5!"
              >
                <Link
                  href={link.href}
                  className="hover:text-primary! cursor-pointer"
                >
                  {link.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
