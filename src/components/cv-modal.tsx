"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Loader2 } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  fileName?: string;
}

export default function CvModal({
  isOpen,
  onClose,
  pdfUrl = "/aulia_luthfi_hakim_resume.pdf",
  fileName = "aulia_luthfi_hakim_resume.pdf",
}: CvModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Close on Escape key & Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Reset loading state when opened, with safety timeout fallback
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex h-[88vh] max-h-[920px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 bg-white/95 px-4 py-3.5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    id="cv-modal-title"
                    className="text-sm font-semibold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-base"
                  >
                    Curriculum Vitae
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Aulia Luthfi Hakim
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:text-sm"
                  title="Download Resume PDF"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:text-sm"
                  title="Buka PDF di tab baru"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Open</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  aria-label="Tutup overlay"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative h-full w-full flex-1 bg-neutral-100 dark:bg-neutral-950">
              {isLoading && (
                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-2 bg-neutral-50 text-neutral-500 dark:bg-neutral-900">
                  <Loader2 className="h-7 w-7 animate-spin text-neutral-600 dark:text-neutral-400" />
                  <p className="text-xs sm:text-sm">
                    Memuat Curriculum Vitae...
                  </p>
                </div>
              )}

              <iframe
                src={`${pdfUrl}#view=FitH`}
                title="Curriculum Vitae - Aulia Luthfi Hakim"
                className="relative z-10 h-full w-full border-none"
                onLoad={() => setIsLoading(false)}
              />
            </div>

            <div className="flex shrink-0 items-center justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-2 text-[11px] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-800/60 sm:hidden">
              <span>Tampilan PDF kurang optimal di HP?</span>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Buka Layar Penuh →
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
