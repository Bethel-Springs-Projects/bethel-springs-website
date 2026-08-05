import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="text-txt w-full max-w-[1530px] mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
