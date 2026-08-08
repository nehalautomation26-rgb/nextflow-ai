"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const companies = [
  {
    name: "Apex Global",
    logo: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 32" aria-hidden="true">
        <path d="M16 4L2 28h8l3.5-6h9l3.5 6h8L16 4zm-1.5 12l3-5.2 3 5.2h-6z" />
        <text x="36" y="22" className="text-sm font-bold tracking-wider uppercase font-sans">APEX GLOBAL</text>
      </svg>
    ),
  },
  {
    name: "Nexus Flow",
    logo: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 32" aria-hidden="true">
        <circle cx="12" cy="16" r="8" opacity="0.6" />
        <circle cx="20" cy="16" r="8" />
        <text x="36" y="22" className="text-sm font-bold tracking-wider uppercase font-sans">NEXUSFLOW</text>
      </svg>
    ),
  },
  {
    name: "Vanguard AI",
    logo: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 32" aria-hidden="true">
        <path d="M4 6h20v4H14v16h-4V10H4V6z" />
        <path d="M18 12l6 14h-4l-4-10z" />
        <text x="36" y="22" className="text-sm font-bold tracking-wider uppercase font-sans">VANGUARD</text>
      </svg>
    ),
  },
  {
    name: "Synthetix",
    logo: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 32" aria-hidden="true">
        <path d="M6 6h8l8 20h-8L6 6z" />
        <path d="M22 6h-8L6 26h8l8-20z" opacity="0.5" />
        <text x="36" y="22" className="text-sm font-bold tracking-wider uppercase font-sans">SYNTHETIX</text>
      </svg>
    ),
  },
  {
    name: "Kinetix Tech",
    logo: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 32" aria-hidden="true">
        <rect x="6" y="6" width="16" height="16" rx="3" />
        <text x="32" y="22" className="text-sm font-bold tracking-wider uppercase font-sans">KINETIX</text>
      </svg>
    ),
  },
  {
    name: "Elevate Systems",
    logo: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 150 32" aria-hidden="true">
        <path d="M12 4l10 20H2L12 4z" />
        <text x="30" y="22" className="text-sm font-bold tracking-wider uppercase font-sans">ELEVATE</text>
      </svg>
    ),
  },
];

export function TrustedCompanies() {
  return (
    <section className="py-12 bg-[#030712] border-y border-[#334155]/40 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-[#94A3B8] uppercase">
            Trusted by Forward-Thinking Enterprise Teams
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
                aria-label={company.name}
              >
                {company.logo}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}