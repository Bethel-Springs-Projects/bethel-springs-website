import Faqs from "@/components/home/Faqs";
import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
import HowWeSupport from "@/components/home/HowWeSupport";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoWeSupport from "@/components/home/WhoWeSupport";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <WhoWeSupport />
      <HowWeSupport />
      <WhyChooseUs />
      <Testimonials />
      <Faqs />
      <GetInTouch />
    </div>
  );
}
