import ApplicationSteps from "@/components/apply/ApplicationSteps";
import ApplyFaqs from "@/components/apply/ApplyFaqs";
import ApplyHero from "@/components/apply/ApplyHero";
import DownloadForm from "@/components/apply/DownloadForm";

export const metadata = {
  title: "Apply for Care",
  description:
    "Start your application for care services. Download the form, follow simple steps, and let us guide you through the process.",
  keywords: [
    "apply for care services",
    "care application UK",
    "supported living application",
    "home care registration",
  ],
  openGraph: {
    title: "Apply for Care | Start Your Journey",
    description:
      "Begin your care application and take the first step toward the support you need.",
  },
};

export default function ApplyPage() {
  return (
    <div>
      <ApplyHero />
      <ApplicationSteps />
      <DownloadForm />

      {/* Help Section */}
      <ApplyFaqs />
    </div>
  );
}
