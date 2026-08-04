import {
  Download,
  ArrowDownToLine,
  FileText,
  Send,
  Clock,
  Mail,
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the Form",
    desc: "Download the application form using the link below.",
    action: "Download Application Form (PDF)",
  },
  {
    number: "02",
    icon: FileText,
    title: "Complete the Form",
    desc: "Fill in all required sections of the form, including personal details and support needs.",
    hint: "Fillable in your browser or Adobe Acrobat (recommended for signatures).",
  },
  {
    number: "03",
    icon: Send,
    title: "Submit Your Application",
    desc: "Once completed, send the form to our team via email.",
    email: "contact@bethelspringsgroup.com",
  },
  {
    number: "04",
    icon: Clock,
    title: "Review & Response",
    desc: "Our team will review your application and contact you to discuss the next steps.",
  },
];

const ApplicationSteps = () => {
  return (
    <section className="padding-x padding-y">
      <div className="mx-auto max-w-3xl">
        <ol className="relative ">
          {steps.map((step, index) => (
            <li
              key={index}
              className="relative flex-1 pb-6 md:pb-8 flex gap-4 md:gap-8 w-full"
            >
              <div className="reltive flex justify-center">
                {/* Step Count */}
                <div className="z-10 flex flex-col items-center justify-center shrink-0 size-11 md:size-14 rounded-full bg-primary">
                  <span className="text-sm font-semibold md:text-base text-white">
                    {step.number}
                  </span>
                </div>

                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute h-full w-px bg-border " />
                )}
              </div>

              <div className="rounded-xl border border-border/70 bg-card p-4 md:p-6 shadow-xs w-full">
                <div className="flex items-center gap-3">
                  <step.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm md:leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>

                {step.hint && (
                  <p className="mt-2 flex gap-2 text-sm text-primary">
                    <Lightbulb className="h-4 w-4 shrink-0 mt-0.5" /> {step.hint}
                  </p>
                )}

                {step.email && (
                  <a
                    href={`mailto:${step.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline break-all"
                  >
                    <Mail className="h-4 w-4" /> {step.email}
                  </a>
                )}

                {step.action && (
                  <a
                    href="/form/bethel-springs-application.pdf"
                    download
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs md:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ArrowDownToLine className="h-4 w-4" />
                    {step.action}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ApplicationSteps;
