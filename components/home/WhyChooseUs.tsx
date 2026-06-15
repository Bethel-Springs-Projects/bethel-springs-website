import { nurseIllustration } from "@/assets/images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const title = "Round the clock care";
  const paragraph =
    "You provide the home; we provide the dedicated professional care to ensure comfort, saftey, and well-being. Our live-in carers adapt completely to your personal routines, delivering reliable, round-the-clock support so you can remain exactly where you are most comfortable.";

  const points = [
    "dedicated live-in support",
    "Highly trained professionals.",
    "Adaptable to your needs.",
    "Transparent family updates.",
    "Regular quality checks.",
    "Respect for your privacy.",
  ];

  return (
    <section className="padding-x padding-y">
      <div>
        <p className="sub-title">05 - Why Choose Us</p>
        <h2 className="title">Care you can trust to be there.</h2>
        {/* <p className="mt-4 md:mt-3 text-base md:leading-relaxed text-foreground/70">
          A full range of supported living services delivered with patience,
          respect and consistency.
        </p> */}
      </div>

      <div className="mt-6 px-4 md:px-6 flex gap-2 bg-primary/3 rounded-[16px] justify-between">
        <div className="flex-1 py-4 md:py-6 shrink-0">
          <h3 className="text-2xl md:text-4xl max-w-lg font-medium leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-4 md:mt-3 text-sm md:text-base max-w-lg max-md:leading-5.5">
            {paragraph}
          </p>

          <div className="mt-4 md:mt-6 grid sm:grid-cols-2 gap-y-4 md:gap-y-6 max-w-lg">
            {points.map((point, idx) => (
              <ul key={idx} className="">
                <li className="flex items-center gap-2">
                  <div className="shrink-0 size-6 flex items-center justify-center bg-primary/30 rounded-full">
                    <CheckCircle className="size-3.5 text-white" />
                  </div>
                  {point}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="max-md:hidden flex justify-end items-end">
          <Image
            src={nurseIllustration}
            alt="nurse illustration"
            className="max-w-[376px] max-lg:w-[320px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
