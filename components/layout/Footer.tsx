import { bsLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex  justify-between gap-3 px-6 py-10 text-sm text-muted-foreground items-center lg:px-10">
        <Link href="/" className="relative w-16 md:w-19 h-10 md:h-12 shrink-0">
          <Image
            src={bsLogo.src}
            alt="bethel springs logo"
            className="size-full object-contain"
            fill
          />
        </Link>
        <p>© {new Date().getFullYear()} Bethel Springs <br className="xs:hidden" /> care services.</p>
      </div>
    </footer>
  );
};

export default Footer;
