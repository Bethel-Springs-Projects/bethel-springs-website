"use client";

import { bsLogo } from "@/assets/images";
import { Menu, UserCircleIcon, X } from "lucide-react";
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
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Apply for Support",
    href: "/apply",
  },
];

const Header = () => {
  return (
    <header className="py-2 md:py-4 padding-x bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative w-16 md:w-19 h-10 md:h-12 shrink-0">
          <Image
            src={bsLogo.src}
            alt="Cargoland Logo"
            className="size-full object-contain"
            fill
          />
        </Link>

        <nav className="max-md:hidden">
          <ul className="flex gap-3 lg:gap-4">
            {homeLinks.map((link, idx) => (
              <>
                <li
                  key={idx}
                  className="text-sm leading-5 flex items-center gap-1.5 hover:text-primary duration-200"
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
                {homeLinks.length - 1 !== idx && (
                  <div className=" w-px bg-black" />
                )}
              </>
            ))}
          </ul>
        </nav>

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
            className="p-2 md:hidden"
          >
            {homeLinks.map((link, idx) => (
              <DropdownMenuItem
                key={idx}
                asChild
                className="text-sm leading-5 hover:bg-primary/5!"
              >
                <Link href={link.href} className="hover:text-primary!">
                  {homeLinks.length - 1 !== idx ? link.title : "Apply"}
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
