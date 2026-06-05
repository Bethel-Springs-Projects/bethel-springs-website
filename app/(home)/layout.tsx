import Header from "@/components/layout/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="text-txt-black">{children}</main>
    </>
  );
}
