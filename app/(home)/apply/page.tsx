import ApplyFaqs from "@/components/apply/ApplyFaqs";
import DownloadForm from "@/components/apply/DownloadForm";

export default function ApplyPage() {
  return (
    <div>
      <DownloadForm />

      {/* Help Section */}
      <ApplyFaqs />
    </div>
  );
}
