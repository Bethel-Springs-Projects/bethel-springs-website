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
import { Button } from "../ui/button";

const homeLinks = [
  {
    title: "What we do",
    href: "#what",
  },
  {
    title: "Who we support",
    href: "#who",
  },
  {
    title: "Why us",
    href: "#how",
  },
  {
    title: "About us",
    href: "#",
  },
];

const Header = () => {
  return (
    <header className="py-2 md:py-4 padding-x">
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative w-16 md:w-19 h-10 md:h-12 shrink-0">
          <Image
            src={bsLogo.src}
            alt="bethel springs logo"
            className="size-full object-contain"
            fill
          />
        </Link>

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

        <Button className="max-md:hidden text-sm h-[38px] px-3 rounded-full ">
          Get Support
        </Button>

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
                  {idx === 1 ? "We support" : link.title}
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
