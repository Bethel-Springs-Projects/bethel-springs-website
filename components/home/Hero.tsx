import Image from "next/image";
import { Button } from "../ui/button";
import { bsIllustration } from "@/assets/images";

const Hero = () => {
  return (
    <section className="padding-x padding-y sm:h-[calc(100vh-56px)] md:h-[calc(100vh-80px)]">
      <div className="flex max-md:flex-col h-full justify-between">
        <div className="flex-1 flex flex-col justify-center h-full ">
          <h1 className=" text-3xl md:text-[38px] lg:text-[56px] leading-10 md:leading-tight lg:leading-tight font-bold max-w-[580px]">
            Supported Living <br className="max-md:hidden" /> For Adults
            <br className="max-xs:hidden md:hidden" /> With
            <br className="max-md:hidden" /> Special Needs
          </h1>
          <p className="mt-4 md:mt-4 text-sm md:text-base leading-5.5 md: text-neutral-500 max-w-[450px] md:max-w-[500px]">
            We provide dedicated carers and personalised support to help
            individuals with special needs live their daily lives more
            independently and confidently
          </p>

          <div className="mt-6 flex gap-4 ">
            <Button className=" py-5 px-3 md:px-6 rounded-full ">
              Get Support
            </Button>
            <Button
              variant="outline"
              className="text- py-5 px-3 md:px-6 border-primary text-primary hover:text-primary hover:bg-primary/5 rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="max-md:mt-6 flex-1 flex flex-col justify-center">
          <div className="flex items-center">
            <Image
              src={bsIllustration}
              alt="bethel springs hero illustration"
              className="max-md:max-h-[350px] lg:max-h-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
