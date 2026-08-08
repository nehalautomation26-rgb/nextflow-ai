"use client";

import * as React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    name: "Marcus Vance",
    role: "VP of Operations",
    company: "Apex Freight Logistics",
    review:
      "NextFlow AI transformed our inbound dispatch workflows completely. Their custom n8n and LLM voice integration reduced our team's manual query load by 85% within the first month. Incredible speed to execution.",
    rating: 5,
    verified: true,
  },
  {
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Velox Real Estate Group",
    review:
      "The lead qualification voice bot NextFlow AI engineered for our CRM eliminated off-hours lead drop-off overnight. Instant < 30s response times and complete automated scheduling saved us hundreds of sales hours.",
    rating: 5,
    verified: true,
  },
  {
    name: "David Sterling",
    role: "Head of Digital Growth",
    company: "Kinetix Commerce",
    review:
      "Unlike generic AI consultancies, NextFlow AI built tailored production-ready pipelines directly inside our infrastructure. Our team holds 100% IP ownership and our ROI was positive within 2 weeks.",
    rating: 5,
    verified: true,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#2563EB]/10 blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Trusted by Leaders at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              High-Growth Enterprises
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Hear how our autonomous AI architectures drive measurable efficiency, operational scale, and real bottom-line results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              className="bg-[#111827]/80 border border-[#334155]/70 hover:border-[#2563EB]/80 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              <div className="relative z-10">
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, rIdx) => (
                      <Star
                        key={rIdx}
                        className="w-4 h-4 fill-[#2563EB] text-[#2563EB]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#334155] group-hover:text-[#2563EB]/40 transition-colors" />
                </div>

                {/* Review Body */}
                <p className="text-sm text-[#94A3B8] leading-relaxed italic mb-8">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-[#334155]/50 pt-6 flex items-center justify-between relative z-10">
                <div>
                  <h3 className="text-sm font-bold text-[#F8FAFC]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    {item.role} • <span className="text-[#F8FAFC]/80">{item.company}</span>
                  </p>
                </div>
                {item.verified && (
                  <div
                    className="flex items-center gap-1 text-[11px] font-medium text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full border border-[#2563EB]/20"
                    title="Verified Enterprise Client"
                  >
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}