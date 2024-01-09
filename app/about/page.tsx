import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <>
      <span>About Page</span>
    </>
  );
}

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About Page", "about", "information", "mision", "vision"],
};
