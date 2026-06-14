"use client";

import { testimonial1, testimonial2, testimonial3 } from "@/assets/images";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Janet K.",
    title: "Working Mother",
    image: testimonial1,
    text: "Balancing work and caring for my brother used to be overwhelming. Now I’m no longer constantly worried.",
  },
  //   {
  //     name: "Ibrahim S.",
  //     title: "Support Recipient",
  //     image: testimonial2,
  //     text: "I’ve become more independent since I started. Simple things like managing my routine and getting out more feel easier now.",
  //   },
  {
    name: "Ngozi A.",
    title: "Guardian",
    image: testimonial3,
    text: "What stood out for me was the consistency. Same level of care every time, no surprises, and clear communication.",
  },
  {
    name: "Daniel O.",
    title: "Relative",
    image: testimonial2,
    text: "We needed something stable and trustworthy. Their service gave us peace of mind without making things complicated.",
  },
  {
    name: "Fatima B.",
    title: "Full-time Caregiver",
    image: testimonial3,
    text: "It’s taken a lot of pressure off me. I’m not doing everything alone anymore, and that’s made a huge difference.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const swiperRef = useRef<SwiperType>(null);

  const nextBtn = () => swiperRef.current?.slideNext();
  const prevBtn = () => swiperRef.current?.slidePrev();

  const length = testimonials.length;
  const prevIndex = (activeIndex - 1 + length) % length;
  const nextIndex = (activeIndex + 1) % length;

  const prev = testimonials[prevIndex];
  const next = testimonials[nextIndex];
  const current = testimonials[activeIndex];

  const slideVariants = {
    next: {
      initial: { opacity: 0, x: 100, scale: 0.9 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -100, scale: 0.9 },
    },
    prev: {
      initial: { opacity: 0, x: -100, scale: 0.9 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 100, scale: 0.9 },
    },
  };

  const currentVariants = slideVariants[direction];

  return (
    <section className="padding-x padding-y">
      <div>
        <p className="sub-title">05 - Testimonials</p>
        <h2 className="title">
          What families say about <br className="xs:hidden" /> our care
        </h2>
        <p className="sec-intro">
          Real experiences from people who have trusted us to provide
          consistent, reliable support
        </p>
      </div>

      <div className="max-md:hidden mt-16 lg:mt-18 grid grid-cols-3 gap-4 lg:gap-5">
        {prev && (
          <div className="relative h-full max-md:hidden p-4 lg:p-6 group border border-primary/40 rounded-lg lg:rounded-xl duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md transition-all flex flex-col justify-between">
            {/* blurred overlay */}
            <div className="absolute -inset-1 z-5  backdrop-blur-[2px] bg-white/40" />

            <p className="text-sm sm:text-base max-w-xs">{prev.text}</p>

            <div className="flex gap-4 mt-2 sm:mt-4 md:mt-6 items-center">
              <div className="w-12 sm:w-14 sm:h-14 h-12 rounded-full overflow-hidden ">
                <Image
                  src={prev.image}
                  className="w-full h-full object-cover"
                  alt={prev.title}
                />
              </div>
              <div className="bg-a">
                <p className="font-montserrat sm:text-lg font-semibold">
                  {prev.name}
                </p>
                <p className="max-sm:text-sm max-w-sm">{prev.title}</p>
              </div>
            </div>
          </div>
        )}

        <div className=" relative h-full">
          {/*  Carousels navigation button */}
          <div>
            <Button
              onClick={prevBtn}
              className="max-md:hidden z-20 size-10 lg:size-13 absolute -left-16 lg:-left-22 top-1/2 -translate-y-1/2 active:-translate-y-5! active:scale-95  rounded-full"
            >
              <ArrowLeft className="size-4 lg:size-6" />
            </Button>

            <Button
              onClick={nextBtn}
              className="max-md:hidden z-20 size-10 lg:size-13 absolute -right-16 lg:-right-22 top-1/2 -translate-y-1/2 active:-translate-y-5! active:scale-95  rounded-full"
            >
              <ArrowRight className="size-4 lg:size-6" />
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={activeIndex}
                variants={currentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative -top-8 lg:-top-10 h-full p-4 lg:p-6 group border border-primary/40 rounded-lg lg:rounded-xl hover:-translate-y-2 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* background gradient */}
                <div className="absolute  transition-colors duration-200 inset-0 -z-10 rounded-lg brand-gradient opacity-10" />

                <p className="text-sm sm:text-base max-w-xs">{current.text}</p>
                <div className="flex gap-4 mt-2 sm:mt-4 md:mt-6 items-center">
                  <div className="w-12 sm:w-14 sm:h-14 h-12 rounded-full overflow-hidden ">
                    <Image
                      src={current.image}
                      className="w-full h-full object-cover"
                      alt={current.title}
                    />
                  </div>
                  <div className="bg-a">
                    <p className="font-montserrat sm:text-lg font-semibold">
                      {current.name}
                    </p>
                    <p className="max-sm:text-sm max-w-sm">{current.title}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {next && (
          <div className="max-md:hidden p-4 g:p-6 h-full group border border-primary/40 rounded-lg lg:rounded-xl duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md transition-all flex relative flex-col justify-between">
            {/* blurred overlay */}
            <div className="absolute -inset-1 z-5  backdrop-blur-[2px] bg-white/40" />

            <p className="text-sm sm:text-base max-w-xs">{next.text}</p>

            <div className="flex gap-4 mt-2 sm:mt-4 md:mt-6 items-center">
              <div className="w-12 sm:w-14 sm:h-14 h-12 rounded-full overflow-hidden ">
                <Image
                  src={next.image}
                  className="w-full h-full object-cover"
                  alt={next.title}
                />
              </div>
              <div className="bg-a">
                <p className="font-montserrat sm:text-lg font-semibold">
                  {next.name}
                </p>
                <p className="max-sm:text-sm max-w-sm">{next.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tracking swiper for large screens */}
      <Swiper
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay, Pagination]}
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex;
          setDirection(newIndex > activeIndex ? "next" : "prev");
          setActiveIndex(newIndex);
        }}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        className=""
      >
        {testimonials.map((_, idx) => (
          <SwiperSlide key={idx} />
        ))}
      </Swiper>

      {/* Swiper for mobile screens carousel */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        spaceBetween={16}
        slidesPerView={1.3}
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
        }}
        className="md:hidden! flex flex-col pb-10! md:[&_.swiper-pagination]:hidden"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex-1 mt-8 p-4 max-sm:h-[165px] h-[224px] flex flex-col justify-between group border border-primary/40 rounded-lg duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md transition-all relative ">
              {/* background gradient */}
              <div className="absolute hidden transition-colors duration-200 group-hover:block inset-0 -z-10 rounded-lg brand-gradient opacity-10" />

              <p className="text-sm sm:text-base max-w-xs">
                {testimonial.text}
              </p>

              <div className="flex gap-4 mt-2 sm:mt-4 items-center">
                <div className="w-12 sm:w-14 sm:h-14 h-12 rounded-full overflow-hidden ">
                  <Image
                    src={testimonial.image}
                    className="w-full h-full object-cover"
                    alt={testimonial.title}
                  />
                </div>
                <div className="bg-a">
                  <p className="font-montserrat sm:text-lg font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="max-sm:text-sm max-w-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex"></div>
    </section>
  );
};

export default Testimonials;
