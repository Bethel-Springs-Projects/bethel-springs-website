import { bsHero, nursePatient } from "@/assets/images";
import { Compass, HeartHandshake, House, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Supported Living Accommodation",
    description:
      "Dedicated support delivered in the individual’s own home, assisting with everyday living tasks to promote independence, wellbeing, and quality of life.",
    icon: House,
  },
  {
    title: "Personal Care",
    description:
      "Respectful, dignified assistance with everyday personal care — quietly, on the person's own terms.",
    icon: HeartHandshake,
  },
  {
    title: "Independence & Life Skills",
    description:
      "Building confidence and the skills needed to live more independently, at a comfortable pace.",
    icon: Compass,
  },
  {
    title: "Routine & Behavioural Support",
    description:
      "Consistent routines and positive behavioural support that encourage calm, structured, and stable overall wellbeing.",
    icon: ShieldCheck,
  },
];

const WhatWeDo = () => {
  return (
    <section className="padding-x padding-y">
      <div className="">
        <div className="max-w-[700px] mx-auto flex flex-col items-center">
          <p className="font-satoshi text-xs text-primary tracking-widest uppercase text-neutral-500">
            - What We Do
          </p>
          <h2 className="mt-1 text-2xl md:text-[32px] bg-amber- md:leading-9.5 text-center font-semibold">
            Care that fits around <br className="xs:hidden" /> the person
          </h2>
          <p className="mt-2 md:mt-4 text-center text-neutral-600">
            A full range of supported living services delivered with patience,
            respect and consistency.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            {services.slice(0, 2).map((service, idx) => (
              <div key={idx} className="p-4 md:p-6 flex-1 rounded-[16px] bg-primary/10">
                <div className="bg-primary w-fit rounded-xl p-3">
                  <service.icon className="size-6 text-white" />
                </div>
                <h3 className="mt-4 md:mt-6 text-sm md:text-lg font-satoshi font-semibold">
                  {service.title}
                </h3>
                <p className="mt-1 md:mt-2 text-txt-black/70 leading-5.5 ">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-lg:hidden bg-amber-100 rounded-[16px] overflow-hidden ">
            <Image
              src={nursePatient}
              alt="what we do image"
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
             {services.slice(2, 4).map((service, idx) => (
              <div key={idx} className="p-4 md:p-6 flex-1 rounded-[16px] bg-primary/10">
                <div className="bg-primary w-fit rounded-xl p-3">
                  <service.icon className="size-6 text-white" />
                </div>
                <h3 className="mt-4 md:mt-6 text-sm md:text-lg font-satoshi font-semibold">
                  {service.title}
                </h3>
                <p className="mt-1 md:mt-2 text-txt-black/70 leading-5.5 ">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
