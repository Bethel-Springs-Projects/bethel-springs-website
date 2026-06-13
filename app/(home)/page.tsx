import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
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
      <WhyChooseUs />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
