import ApplyFaqs from "@/components/apply/ApplyFaqs";
import ApplyHero from "@/components/apply/ApplyHero";
import DownloadForm from "@/components/apply/DownloadForm";

export default function ApplyPage() {
  return (
    <div>
      <ApplyHero />
      <DownloadForm />

      {/* Help Section */}
      <ApplyFaqs />
    </div>
  );
}
