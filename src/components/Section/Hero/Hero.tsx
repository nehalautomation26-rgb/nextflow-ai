"use client";

import * as React from "react";
import { Sparkles, ArrowRight, Bot, Cpu, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const stats = [
  { label: "Processes Automated", value: "500+" },
  { label: "Hours Saved / Month", value: "10,000+" },
  { label: "Client ROI Increase", value: "3.5x" },
  { label: "System Uptime SLA", value: "99.9%" },
];

export function Hero() {
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
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#030712] overflow-hidden"
    >
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#1D4ED8]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase shadow-lg mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Enterprise Automation</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15]"
          >
            Scale Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]">
              Autonomous AI Workflows
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed"
          >
            NextFlow AI designs, deploys, and manages custom AI voice agents, neural chatbots, and enterprise CRM automation to eliminate operational bottlenecks.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F8FAFC] font-semibold text-sm shadow-xl shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "#services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111827] hover:bg-[#1E293B] border border-[#334155]/80 text-[#F8FAFC] font-semibold text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#334155]"
            >
              <span>Learn More</span>
            </a>
          </motion.div>

          {/* Value Props / Features bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs md:text-sm text-[#94A3B8]"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#2563EB]" />
              <span>Custom Voice & Chat AI</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#2563EB]" />
              <span>End-to-End Integrations</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#2563EB]" />
              <span>Instant Lead Response</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>SOC2 Compliant Security</span>
            </div>
          </motion.div>
        </div>

        {/* Statistics Grid Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#111827]/60 backdrop-blur-md border border-[#334155]/60 rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-2 border-r last:border-r-0 border-[#334155]/40"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-[#94A3B8]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}