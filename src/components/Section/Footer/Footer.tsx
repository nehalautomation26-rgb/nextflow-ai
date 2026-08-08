"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Mail } from "lucide-react";

import { Container } from "@/components/ui/Container";

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#030712] border-t border-[#334155]/60 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#334155]/40">
          {/* Brand Column */}
          <div className="space-y-4 max-w-sm">
            <Link
              href="#hero"
              onClick={(e) => handleScrollTo(e, "#hero")}
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg w-fit"
              aria-label="NextFlow AI Homepage"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white shadow-md shadow-[#2563EB]/30 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F8FAFC]">
                NextFlow <span className="text-[#2563EB]">AI</span>
              </span>
            </Link>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Autonomous AI agent architectures and custom enterprise workflow automations engineered for hyper-growth teams.
            </p>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <a
              href="mailto:hello@nextflowai.co"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#2563EB] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#2563EB]" />
              <span>hello@nextflowai.co</span>
            </a>

            <div className="flex items-center gap-6 text-xs text-[#94A3B8]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F8FAFC] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F8FAFC] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© 2026 NextFlow AI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#F8FAFC] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#F8FAFC] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}