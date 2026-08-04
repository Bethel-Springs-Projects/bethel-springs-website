import { bsLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Instagram, Youtube } from "../icons";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="padding-x pt-10 md:pt-12 pb-6 max-w-[1536px] mx-auto">
        {/* 3-column grid: brand | contact | social */}
        <div className="grid grid-cols-1 gap-8 grid-cols-2 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="max-sm:col-span-2">
            <Link
              href="/"
              className="relative block w-16 md:w-19 h-10 md:h-12 shrink-0"
            >
              <Image
                src={bsLogo.src}
                alt="bethel springs logo"
                className="size-full object-contain"
                fill
              />
            </Link>
            <p className="text-gray-500 text-sm mt-3 max-w-xs md:mx-0">
              We provide the best care. <br className="sm:hidden" /> Done
              properly, with time and attention.
            </p>
          </div>

          {/* Contact – only essential info, no extra links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <div>
                  <Mail className="size-4 text-primary" />
                </div>
                <a
                  href="mailto:info@bethelspringsgroup.com"
                  className="hover:text-primary transition wrap-anywhere"
                >
                  info@bethelspringsgroup.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Phone className="size-4 text-primary" />
                </div>
                <a
                  href="tel:+447974369854"
                  className="hover:text-primary transition"
                >
                  +44 7974 369 854
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <div>
                  <MapPin className="size-4 text-primary" />
                </div>
                <span>76 The Brent, Dartford</span>
              </li> */}
            </ul>
          </div>

          {/* Social – only icons, no extra text links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">
              Connect
            </h3>
            <div className="flex gap-5">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition transform hover:scale-110"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright – single line, no links */}
        <div className="mt-8 md:mt-10  border-t max-md:text-center text-gray-400 text-xs">
          <p>
            © {new Date().getFullYear()} Bethel Springs{" "}
            <br className="hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
