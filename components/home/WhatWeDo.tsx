"use client";

import { nursePatient } from "@/assets/images";
import { Compass, HeartHandshake, House, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Supported Living Accommodation",
    description:
      "Dedicated support delivered in the individual’s own home, assisting with everyday living tasks and wellbeing",
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
    <section id="what" className="padding-x padding-y">
      <div>
        <p className="sub-title">
          What We Do
        </p>
        <h2 className="title">
          Care that fits around the person
        </h2>
        <p className="sec-intro">
          A full range of supported living services delivered with patience,
          respect and consistency.
        </p>
      </div>

      {/* Services for large screens */}
      <div className="max-md:hidden mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true, // makes dots clickable
          dynamicBullets: false, // optional: set true for smaller dots that expand
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="md:hidden! mt-6 flex flex-col pb-10! "
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div
              key={idx}
              className="h-52 p-4 md:p-6 rounded-[16px] bg-primary/10"
            >
              <div className="bg-primary w-fit rounded-xl p-3">
                <service.icon className="size-6 text-white" />
              </div>
              <h3 className="mt-4 md:mt-6 text-base md:text-lg font-satoshi font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-txt-black/70 leading-5.5 ">
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatWeDo;
