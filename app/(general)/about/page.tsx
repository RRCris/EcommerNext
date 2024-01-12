import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}

export const metadata: Metadata = {
  title: "About Page",
  description: "SEO Description",
  keywords: ["About Page", "about", "information", "mision", "vision"],
};
