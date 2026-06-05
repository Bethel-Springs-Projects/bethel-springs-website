import { nursePatient } from "@/assets/images";
import { Compass, HeartHandshake, House, ShieldCheck } from "lucide-react";
import Image from "next/image";

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
    <section id="what-we-do" className="padding-x padding-y">
      <div className="">
        <div>
          <p className="text-xs text-primary tracking-[0.22em] uppercase">
            01 - What We Do
          </p>
          <h2 className="mt-4 text-[32px] md:text-5xl font-medium leading-tight tracking-tight">
            Care that fits around <br className="xs:hidden" /> the person
          </h2>
          <p className="mt-4 md:mt-3 text-base md:leading-relaxed text-foreground/70">
            A full range of supported living services delivered with patience,
            respect and consistency.
          </p>
        </div>

        {/* Services for large screens */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="grid grid-rows-2 gap-4">
            {services.slice(0, 2).map((service, idx) => (
              <div
                key={idx}
                className="p-4 md:p-6 flex-1 rounded-[16px] bg-primary/10"
              >
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

          <div className="max-lg:hidden bg-neutral-200/20 rounded-[16px] overflow-hidden ">
            <Image
              src={nursePatient}
              alt="what we do image"
              className="size-full object-cover"
            />
          </div>

          <div className="grid grid-rows-2 gap-4">
            {services.slice(2, 4).map((service, idx) => (
              <div
                key={idx}
                className="p-4 md:p-6 flex-1 rounded-[16px] bg-primary/10"
              >
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

        {/* Services for small/medium screens */}
        {/* <div className="lg:hidden mt-8 grid md:grid-cols-2 gap-4 ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-4 md:p-6 flex-1 rounded-[16px] bg-primary/10"
            >
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
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
