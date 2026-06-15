import {
  ShoppingBag,
  PoundSterling,
  CalendarClock,
  MessagesSquare,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const howWeSupport = [
  {
    icon: ShoppingBag,
    title: "Help with shopping",
    desc: "Planning meals, getting to the shops, and bringing the week's essentials home together.",
  },
  {
    icon: PoundSterling,
    title: "Financial guidance",
    desc: "Gentle help with budgeting, bills and managing money with confidence.",
  },
  {
    icon: CalendarClock,
    title: "Daily routines",
    desc: "Calm, predictable rhythms that bring structure and ease to each day.",
  },
  {
    icon: MessagesSquare,
    title: "Social interaction",
    desc: "Encouragement to connect with others, share interests and build friendships.",
  },
  {
    icon: GraduationCap,
    title: "Independent living skills",
    desc: "Practical skills built one step at a time, at a pace that feels right.",
  },
];

const HowWeSupport = () => {
  return (
    <section className="padding-x padding-y">
      <div>
        <p className="sub-title"> 04 — How we support</p>
        <h2 className="title"> Built around your needs</h2>
        <p className="sec-intro">
          Day to day, our carers are present for whatever&apos;s needed —
          practical, emotional, or simply a familiar face.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {howWeSupport.map((support, idx) => (
          <div
            key={idx}
            className="p-2 sm:p-5 lg:p-7 max-sm:flex flex-col justify-center items-center group rounded-xl md:rounded-3xl border border-border/70 bg-background transition duration-200 hover:shadow-md active:shadow-md hover:-translate-y-1 active:-translate-y-1 hover:border-primary/40 active:border-primary/40 hover:cursor-pointer"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <support.icon className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className=" mt-2 md:mt-5 text-base md:text-xl font-medium tracking-tight text-foreground max-sm:text-center">
              {support.title}
            </h3>
            <p className="max-sm:hidden mt-2 text-sm leading-relaxed text-foreground/70">
              {support.desc}
            </p>
          </div>
        ))}
        <div className="p-4 sm:p-5 lg:p-7 flex flex-col max-sm:items-center justify-between rounded-xl md:rounded-3xl bg-primary text-primary-foreground">
          <p className="text-sm sm:text-base md:text-lg md:font-medium leading-4 sm:leading-snug tracking-tight">
            Not sure where to start? We can help you take the {" "}
            <Link href="/apply" className="text-base font-medium underline underline-offset-2">next step</Link>.
          </p>
          <Link
            href="/apply"
            className="max-sm:hidden mt-6 flex items-center gap-2 w-fit rounded-full bg-background px-4 md:px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-background/90"
          >
            Apply for support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeSupport;
