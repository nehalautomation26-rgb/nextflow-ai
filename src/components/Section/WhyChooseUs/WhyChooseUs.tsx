"use client";

import * as React from "react";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Clock,
  Code2,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const reasons = [
  {
    icon: Zap,
    title: "Sub-Second Execution & Latency",
    description:
      "Engineered for high-throughput operational demands. Our custom voice and workflow architectures process events with near-zero latency.",
    metric: "< 800ms",
    metricLabel: "Average Voice Response Time",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Compliance",
    description:
      "Bank-grade encryption, SOC2 readiness, and strict GDPR/HIPAA compliance standards ensure your business and customer data remains pristine.",
    metric: "99.99%",
    metricLabel: "Uptime & System Reliability",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI from Day 1",
    description:
      "We build systems designed to reduce payroll costs, reclaim thousands of lost administrative hours, and capture previously missed sales leads.",
    metric: "10x+",
    metricLabel: "Average Operational Efficiency",
  },
  {
    icon: Clock,
    title: "Rapid 14-Day Deployment",
    description:
      "Skip months of expensive R&D. Our modular AI component ecosystem enables complete custom deployment within two weeks.",
    metric: "14 Days",
    metricLabel: "Idea to Live Production",
  },
  {
    icon: Code2,
    title: "Bespoke Code, Zero Vendor Lock-In",
    description:
      "You maintain 100% IP ownership. We write clean, documented code and build on scalable open-source tools like n8n alongside robust cloud infrastructure.",
    metric: "100%",
    metricLabel: "IP Ownership to You",
  },
  {
    icon: Headphones,
    title: "Dedicated Engineering Support",
    description:
      "We don't just hand off code—we provide ongoing monitoring, prompt optimization, model fine-tuning, and active system maintenance.",
    metric: "24/7",
    metricLabel: "System Health Monitoring",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/5 blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            The Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Why High-Growth Teams Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              NexAutomate
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            We bridge the gap between cutting-edge artificial intelligence and practical enterprise execution.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-[#111827]/70 border border-[#334155]/60 hover:border-[#2563EB]/80 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#334155] group-hover:text-[#2563EB] transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#60A5FA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-[#334155]/40 pt-4">
                  <div className="text-2xl font-black text-[#F8FAFC] tracking-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">
                    {item.metricLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}