import { nursePatient } from "@/assets/images";
import Image from "next/image";

const whoWeSupport = [
  "Adults aged 18 and over",
  "Individuals with autism",
  "Individuals with learning disabilities",
  "Adults needing support with daily living and independence",
];

const WhoWeSupport = () => {
  return (
    <section id="who" className="border-b border-border/60 bg-white">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
        <div className="relative md:min-h-screen max-h-120 md:max-h-167.5 w-full overflow-hidden bg-muted lg:aspect-auto">
          <Image
            src={nursePatient}
            alt="A carer helping an adult prepare food together in a warm sunlit kitchen"
            width={1600}
            height={1280}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>

        <div className="flex flex-col pt-10 md:pt-8 pb-12 md:py-6 justify-center px-6 lg:px-16">
          <p className="sub-title">
            02 — Who we support
          </p>
          <h2 className="title">
            Care designed for every individual.
          </h2>
          <p className="sec-intro">
            We work across England, supporting people with a
            wide range of needs and circumstances.
          </p>
          <ul className="mt-6 md:mt-8 max-md:grid divide-y divide-border border-y border-border">
            {whoWeSupport.map((label) => (
              <li
                key={label}
                className="flex items-baseline gap-4 py-4 md:py-5 text-lg text-foreground/85"
              >
                <span className="size-1.5 shrink-0 translate-y-[-3px] rounded-full bg-primary" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupport;
