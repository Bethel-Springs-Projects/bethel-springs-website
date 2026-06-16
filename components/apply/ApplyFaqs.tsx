import { Phone, Mail, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "Who can apply?",
    a: "Adults aged 18 and over with autism, learning disabilities or other needs requiring personalised care. Applications can be made by the individual, a family member, social worker or healthcare professional.",
  },
  {
    q: "Is there a cost to apply?",
    a: "No. Applying and the initial assessment are completely free. Funding for placements is usually arranged through your local authority or NHS commissioner.",
  },
  {
    q: "How long does the process take?",
    a: "It depends on each person's circumstances, but most placements are arranged within a few weeks of the initial assessment.",
  },
  {
    q: "What if I need help filling in the form?",
    a: "Just call or email us — a member of our team will be happy to walk through it with you at your own pace.",
  },
];

const ApplyFaqs = () => {
  return (
    <section className="padding-x padding-y">
      <div className="grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="sub-title">Need a hand?</p>
          <h2 className="title">
            We&apos;re here to help you through every part of the application.
          </h2>
          <p className="sec-intro">
            If anything feels unclear, please get in touch. Our team is happy to
            talk things through — no question is too small.
          </p>

          <div className="mt-4 md:mt-8 space-y-3">
            <a
              href="tel:+447974369854"
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white px-5 py-4 text-sm transition-colors hover:border-primary/40"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">Call us</span>
              <span className="text-foreground/65">+44 7974 369 854</span>
            </a>
            <a
              href="mailto:contact@bethelspringsgroup.com"
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white px-5 py-4 text-sm transition-colors hover:border-primary/40"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">Email us</span>
              <span className="text-foreground/65">contact@bethelspringsgroup.com</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 mt-8 md:mt-10">
          <Accordion
            type="single"
            collapsible
            className="md:hidden max-w-[775px]"
          >
            {faqs.map((faq, idx) => (
              <>
                <AccordionItem value={faq.q} className="border-b-0!" key={idx}>
                  <AccordionTrigger className="text-lg font-medium max-md:tracking-tight text-foreground md:text-xl leading-8 p-0 [&>svg]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 py-2 sm:pt-4 text-foreground/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
                <div
                  className={`${
                    idx !== faqs.length - 1 ? "" : "hidden"
                  } h-px w-full bg-neutral-300 my-3 md:my-4`}
                />
              </>
            ))}
          </Accordion>

          <ul className="max-md:hidden">
            {faqs.map((faq, idx) => (
              <li
                key={faq.q}
                className={`${idx !== faqs.length - 1 && "border-b"} py-7 `}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HelpCircle className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplyFaqs;
