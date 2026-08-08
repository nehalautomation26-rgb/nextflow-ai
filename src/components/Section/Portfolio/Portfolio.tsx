"use client";

import * as React from "react";
import { ArrowUpRight, TrendingUp, Clock, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const caseStudies = [
  {
    client: "Aura Logistics",
    industry: "E-Commerce & Freight",
    problem:
      "Manual order dispatching and customer shipment status tracking caused severe support delays and high operational payroll overhead.",
    solution:
      "Deployed an automated n8n pipeline integrated with WhatsApp Business API and custom OpenAI function calling for instant real-time shipment queries.",
    results: [
      { metric: "85%", label: "Support Tickets Automated" },
      { metric: "12,000+", label: "Hours Saved / Year" },
      { metric: "3.8x", label: "Operational Speed Increase" },
    ],
    tags: ["n8n", "OpenAI API", "WhatsApp Integration", "CRM Automation"],
  },
  {
    client: "Apex Health Network",
    industry: "Healthcare",
    problem:
      "High no-show rates for specialized clinical appointments and inefficient manual phone intake queues.",
    solution:
      "Engineered an inbound/outbound HIPAA-compliant AI voice agent using Retell AI and custom EHR calendar synchronization.",
    results: [
      { metric: "42%", label: "Reduction in No-Shows" },
      { metric: "< 1s", label: "Voice Response Latency" },
      { metric: "$140k", label: "Annual Cost Savings" },
    ],
    tags: ["AI Voice Agents", "EHR Integration", "Twilio", "Python"],
  },
  {
    client: "Velox Real Estate",
    industry: "Real Estate",
    problem:
      "Inability to qualify lead inquiries instantly during off-hours resulted in a 60% lead drop-off rate to competitors.",
    solution:
      "Built a multi-modal RAG AI Chatbot and automated CRM lead router connected to GoHighLevel and Make.com.",
    results: [
      { metric: "100%", label: "Instant Lead Response Rate" },
      { metric: "2.5x", label: "Increase in Booked Tours" },
      { metric: "< 30s", label: "Speed-to-Lead" },
    ],
    tags: ["RAG Architecture", "Make.com", "GoHighLevel", "Vector Database"],
  },
];

export function Portfolio() {
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
    <section id="portfolio" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#2563EB]/10 blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Proven AI Automation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Results
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Explore how our bespoke AI solutions drive measurable ROI, eliminate repetitive manual work, and scale operational efficiency.
          </p>
        </div>

        {/* Portfolio Cards Stack / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              className="bg-[#111827]/80 border border-[#334155]/70 hover:border-[#2563EB]/80 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full border border-[#2563EB]/20">
                    {study.industry}
                  </span>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    className="w-8 h-8 rounded-full bg-[#1E293B] border border-[#334155]/80 flex items-center justify-center text-[#94A3B8] group-hover:text-white group-hover:bg-[#2563EB] transition-all"
                    aria-label={`View case study for ${study.client}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#60A5FA] transition-colors">
                  {study.client}
                </h3>

                {/* Problem & Solution Block */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider block mb-1">
                      Problem:
                    </span>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                      Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#334155]/50 mb-6 bg-[#030712]/50 rounded-xl px-3 text-center">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex flex-col items-center">
                      <span className="text-base sm:text-lg font-black text-[#F8FAFC]">
                        {res.metric}
                      </span>
                      <span className="text-[10px] text-[#94A3B8] leading-tight mt-0.5">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-[#94A3B8] bg-[#1E293B]/60 px-2.5 py-1 rounded-md border border-[#334155]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}