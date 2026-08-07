import ContactPageContent from "@/components/ContactPageContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team to discuss care options, ask questions, or request support. We're here to help you every step of the way.",
  keywords: [
    "contact care services",
    "home care enquiries",
    "contact domiciliary care services",
    "care support UK",
  ],
  openGraph: {
    title: "Contact Us | Get the Support You Need",
    description:
      "Reach out to our team for guidance, care enquiries, or immediate support.",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
