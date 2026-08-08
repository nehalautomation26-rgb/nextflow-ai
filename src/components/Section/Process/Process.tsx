"use client";

import * as React from "react";
import {
  Search,
  Cpu,
  Workflow,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    title: "Discovery & Audit",
    icon: Search,
    description:
      "We analyze your current operations, identify bottleneck tasks, evaluate software stacks, and map out high-ROI automation opportunities.",
    deliverables: [
      "Process Bottleneck Map",
      "ROI Projection Model",
      "Architecture Blueprint",
    ],
  },
  {
    step: "02",
    title: "System Architecture",
    icon: Cpu,
    description:
      "Our engineers design bespoke LLM prompts, define API schema connections, choose vector databases, and establish strict safety guardrails.",
    deliverables: [
      "Custom Prompt Engineering",
      "API & Schema Specs",
      "Security & Compliance Plan",
    ],
  },
  {
    step: "03",
    title: "Build & Integration",
    icon: Workflow,
    description:
      "We build and test autonomous workflows on n8n/Make, integrate voice LLMs, and connect your existing CRM or internal databases.",
    deliverables: [
      "Live Sandbox Deployment",
      "End-to-End Testing",
      "Staff Training Docs",
    ],
  },
  {
    step: "04",
    title: "Launch & Optimization",
    icon: Rocket,
    description:
      "We deploy to production with continuous real-time monitoring, latency optimization, response refinement, and ongoing operational support.",
    deliverables: [
      "Production Handover",
      "24/7 Monitoring Setup",
      "Weekly Fine-Tuning",
    ],
  },
];

export function Process() {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
      id="process"
      className="relative py-24 overflow-hidden"
    >
      {/* Ambient background blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            Methodology
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Our 4-Step{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Deployment Process
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            From initial operational audit to live production in 14 days
            with zero friction to your ongoing business operations.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                className="bg-[#111827]/80 border border-[#334155]/60 hover:border-[#2563EB]/80 rounded-2xl p-6 flex flex-col justify-between relative group hover:bg-[#111827] transition-all duration-300"
              >
                <div>
                  {/* Top Step Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#334155] group-hover:text-[#2563EB] transition-colors">
                      {item.step}
                    </span>

                    <div className="w-10 h-10 rounded-lg bg-[#1E293B] border border-[#334155]/80 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#60A5FA] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="border-t border-[#334155]/40 pt-4">
                  <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>

                  <ul className="space-y-1.5">
                    {item.deliverables.map((del) => (
                      <li
                        key={del}
                        className="text-xs text-[#94A3B8] flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#111827] border border-[#334155]/80 rounded-2xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
              Ready to automate your operations?
            </h4>

            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              Book a free 30-minute discovery call with our system
              architects.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2563EB]/25 whitespace-nowrap"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}