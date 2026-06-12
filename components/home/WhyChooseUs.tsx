import { nurseIllustration } from "@/assets/images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const Subtitle = "Why Choose Us";

  const secTitle = "Care you can trust to be there.";
  const title = "Round-the-clock professional care";
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
        <p className="text-xs text-primary tracking-[0.22em] uppercase">
          05 - Why Choose Us
        </p>
        <h2 className="mt-3 md:mt-4 text-[32px] md:text-5xl font-medium leading-tight tracking-tight">
          {secTitle}
        </h2>
        {/* <p className="mt-4 md:mt-3 text-base md:leading-relaxed text-foreground/70">
          A full range of supported living services delivered with patience,
          respect and consistency.
        </p> */}
      </div>

      <div className="mt-6 px-4 md:px-6 flex gap-2 bg-primary/8 rounded-[16px] justify-between">
        <div className="flex-1 py-4 md:py-6 shrink">
          <h3 className="text-2xl md:text-4xl max-w-lg font-medium leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-4 md:mt-3 text-sm md:text-base max-w-lg max-md:leading-5.5">
            {paragraph}
          </p>

          <div className="mt-4 md:mt-6 grid md:grid-cols-2 gap-y-4 md:gap-y-6 max-w-lg">
            {points.map((point, idx) => (
              <ul key={idx} className="">
                <li className="flex items-center gap-2">
                  <div className="size-6 flex items-center justify-center bg-primary rounded-full">
                    <CheckCircle className="size-3.5 text-white" />
                  </div>
                  {point}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="max-lg:hidden shrink-0 h-full self-end">
          <Image src={nurseIllustration} alt="nurse illustration" className="min-w-[340px] max-w-[376px]  w-fit object-contain" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
