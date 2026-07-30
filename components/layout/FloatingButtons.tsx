"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-green shadow-md ring-1 ring-gray-200 transition-transform hover:scale-105"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <a
        href={siteConfig.phoneHref}
        aria-label="Call now"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-[#1f2937] shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        <Phone size={20} />
      </a>

      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
