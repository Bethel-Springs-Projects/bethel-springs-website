"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { bsIllustration } from "@/assets/images";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="padding-x padding-y md:h-[calc(100vh-80px)]">
      <div className="flex max-md:flex-col h-full justify-between">
        <div className="flex-1 flex flex-col justify-center h-full ">
          <p className="text-xs font-satoshi text-primary tracking-[0.22em] uppercase">
            - UK Supported Living
          </p>
          <h1 className="mt-2 md:mt-4 text-3xl md:text-[48px] lg:text-[56px] leading-10 md:leading-tight lg:leading-tight font-semi-bold max-w-[580px]">
            Supported Living <br className="max-md:hidden" /> For Adults
            <br className="max-xs:hidden md:hidden" /> With
            <br className="max-md:hidden" /> Special Needs
          </h1>
          <p className="mt-4 md:mt-6 text-base leading-relaxed md:leading-7 text-foreground/70 max-w-[450px] md:max-w-[500px]">
            We provide dedicated carers and personalised support to help
            individuals with special needs live their daily lives more
            independently and confidently
          </p>

          <div className="mt-6 flex gap-4 ">
            <Link
              href="/apply"
              className="flex items-center h-[41px] md:h-[45px] px-3.25 md:px-6 text-white bg-primary hover:bg-primary/90 rounded-full "
            >
              Get Support
            </Link>

            <Link
              href="/#contact"
              className="flex items-center h-[41px] md:h-[45px] px-3.25 md:px-6.25 border border-primary text-primary hover:text-primary hover:bg-primary/5 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="max-md:mt-6 flex-1 flex flex-col justify-center">
          <div className="flex items-center">
            <Image
              src={bsIllustration}
              alt="bethel springs hero illustration"
              className="max-md:max-h-[350px]  lg:max-h-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
