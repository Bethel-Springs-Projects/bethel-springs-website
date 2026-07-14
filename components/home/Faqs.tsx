import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { nursePatient2 } from "@/assets/images";
import React from "react";

export const faqs = [
  {
    question: "Who do your services support?",
    answer:
      "We support adults with autism, learning disabilities, and additional support needs who require help with daily living and independence.",
  },
  {
    question: "What is supported living?",
    answer:
      "Supported living means individuals live in their own accommodation while receiving tailored support from trained staff to help with daily tasks, safety, and independence.",
  },
  {
    question: "Do you provide accommodation?",
    answer:
      "We don’t directly provide accommodation. We support individuals within their existing home or accommodation setting with structured care and assistance.",
  },
  //   {
  //     question: "Can support be provided overnight or full-time?",
  //     answer:
  //       "Yes. Support can be arranged based on individual needs, including daytime support, overnight care, or 24-hour assistance where required.",
  //   },
  {
    question: "How do I apply for support?",
    answer:
      "You can download the application form from the register page, complete it, and send it back via email. Our team will review and respond with next steps.",
  },
  {
    question: "Is support tailored to each person?",
    answer:
      "Yes. All support plans are built around the individual’s needs, routines, and goals to promote independence and stability.",
  },
  {
    question: "Who provides the support?",
    answer:
      "Support is provided by trained carers and support workers experienced in assisting individuals with complex needs in daily life and community settings.",
  },
];

const Faqs = () => {
  return (
    <section className=" bg-primary text-white">
      <div className="grid md:grid-cols-2">
        <div className="relative max-md:hidden md:max-h-[801px] lg:max-h-[770px] w-full overflow-hidden bg-muted lg:aspect-auto">
          <Image
            src={nursePatient2}
            alt="A carer helping an adult prepare food together in a warm sunlit kitchen"
            width={1600}
            height={1280}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-16 md:pt-8 py-16 md:py-6 ">
          <div>
            <p className="sub-title text-white!">06 - Need Clarity?</p>
            <h2 className="title">Frequently asked questions</h2>
            <p className="sec-intro">
              Simple answers about how we work, what to expect, and how support
              is arranged
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mt-8 md:mt-10 max-w-[775px]"
          >
            {faqs.map((faq, idx) => (
              <React.Fragment key={idx}>
                <AccordionItem value={faq.question} className="border-b-0!">
                  <AccordionTrigger className="font-medium text-lg md:text-xl leading-8 p-0 [&>svg]:text-white!">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-light leading-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                <div
                  className={`${
                    idx !== faqs.length - 1 ? "" : "hidden"
                  } h-px w-full bg-neutral-300 my-3 `}
                />
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
