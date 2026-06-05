import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoWeSupport from "@/components/home/WhoWeSupport";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <WhoWeSupport />
      <GetInTouch />
    </div>
  );
}
