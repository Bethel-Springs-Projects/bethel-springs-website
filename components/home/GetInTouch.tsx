import { ArrowRight, Phone } from "lucide-react";


const GetInTouch = () => {
  return (
    <section id="contact" className="padding-x padding-y">
      <div className="mx-auto max-w-[1400px] ">
        <div className="grid lg:grid-cols-12 lg:gap-16 ">
            
          <div className="lg:col-span-7">
            <p className="sub-title md:text-start!">
              — Get in touch
            </p>
            <h2 className="title md:text-start!">
              Speak to our team today.
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="sec-intro md:text-start! md:max-w-xl mx-0!">
              Whether you&apos;re arranging support for yourself, a family member or
              someone in your care, we&apos;re here to listen and help you take the
              next step.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@hearthcare.co.uk"
                className="h-[41px] md:h-[45px] px-3 md:px-6 inline-flex items-center gap-2 rounded-full bg-primary  text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+440000000000"
                className="h-[41px] md:h-[45px] px-3 md:px-6 inline-flex items-center gap-2 rounded-full border border-foreground/20 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" /> Call our team
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
