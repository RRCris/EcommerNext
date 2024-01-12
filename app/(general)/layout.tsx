import Navbar from "@/01-components/navbar/Navbar";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center gap-7 p-24">
        <h1 className="text-2xl">Hello Root Layout General</h1>
        {children}
      </main>
    </div>
  );
}
