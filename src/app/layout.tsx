import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Luthfi Hakim | Personal",
  metadataBase: new URL("https://www.luthfyhakim.cloud"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Luthfi Hakim", url: "https://github.com/luthfyhakim" }],
  description: "Luthfi Hakim's personal portfolio website",
  openGraph: {
    title: "Luthfi Hakim | Personal",
    description: "Luthfi Hakim's personal portfolio website",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Luthfi Hakim photo",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
