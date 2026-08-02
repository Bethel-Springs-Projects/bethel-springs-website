import { Download, FileText } from "lucide-react";

const DownloadForm = () => {
  return (
    <section
      id="download"
      className="padding-x padding-y border-b border-border/60 bg-primary text-primary-foreground"
    >
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="sub-title text-white!">Application form</p>
          <h2 className="title">
            Download the application form <br className="xxs:hidden xl:block" />{" "}
            and fill it in at your own pace.
          </h2>
          <p className="sec-intro">
            The form takes around 15 minutes to complete. You can return it by
            email or post, and someone from our team will be in touch within two
            working days.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl md:rounded-3xl bg-background p-4 md:p-7 text-foreground">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-lg font-medium tracking-tight">
                Hearthcare Application Form
              </p>
              <p className="mt-1 text-sm text-foreground/65">
                PDF · 313 KB · 4 pages
              </p>
            </div>
          </div>

          <div>
            <a
              href="/form/bethel-springs-application.pdf"
              download
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download PDF <Download className="h-4 w-4" />
            </a>
            <p className="mt-4 text-xs leading-relaxed text-foreground/60 w-full">
              Need a printed copy or an easy-read version? Email{" "}
              <a
                href="mailto:contact@bethelspringsgroup.com"
                className="text-primary hover:underline break-all"
              >
               contact@bethelspringsgroup.com
              </a>{" "}
              and we&apos;ll send one out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadForm;
