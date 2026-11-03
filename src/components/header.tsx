"use client";

import { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import CvModal from "@/components/cv-modal";

const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const links = ["about", "skills", "contact"];

  return (
    <>
      <nav className="flex w-full select-none justify-center py-2 pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0">
          <div
            className={cn(
              "text-5xl drop-shadow-2xl",
              goldenSignature.className,
            )}
          >
            <Link href="/">Luthfi Hakim</Link>
          </div>
          <div className="nav-links flex items-center gap-x-6 text-xs sm:gap-x-8 md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="cursor-pointer"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        pdfUrl="/aulia_luthfi_hakim_resume.pdf"
        fileName="aulia_luthfi_hakim_resume.pdf"
      />
    </>
  );
}
