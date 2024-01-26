import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-3xl">Hola mundo</span>
      <Link href="./about">About Page</Link>
    </main>
  );
}
