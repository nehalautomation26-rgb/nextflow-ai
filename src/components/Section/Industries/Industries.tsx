"use client";

import * as React from "react";
import {
  Stethoscope,
  Building2,
  ShoppingCart,
  Landmark,
  GraduationCap,
  Cloud,
  Factory,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description:
      "HIPAA-compliant AI voice assistants for patient triage, automated appointment scheduling, and instant intake record synchronization.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description:
      "Instant 24/7 buyer lead qualification, automated property tour booking, and dynamic CRM pipeline updates.",
  },
  {
    icon: ShoppingCart,
    name: "Ecommerce",
    description:
      "Automated order tracking, customer support chatbots, cart abandonment recovery, and AI inventory forecasting.",
  },
  {
    icon: Landmark,
    name: "Finance",
    description:
      "Automated loan application processing, document verification workflows, risk modeling, and compliance reporting.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Student onboarding bots, automated assignment grading workflows, administrative ticketing, and personalized learning assistants.",
  },
  {
    icon: Cloud,
    name: "SaaS",
    description:
      "Automated user onboarding sequences, in-app support bots, churn prediction triggers, and feature adoption tracking.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Supply chain anomaly detection, vendor communication automation, purchase order parsing, and maintenance dispatching.",
  },
  {
    icon: Headphones,
    name: "Customer Support",
    description:
      "Omnichannel AI agent routing, zero-latency query resolution, transcript summarization, and ticket escalation systems.",
  },
];

export function Industries() {
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
    <section id="industries" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Transform
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Tailored automation architecture engineered for the distinct compliance, workflow, and customer experience demands of specialized verticals.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-[#111827]/60 border border-[#334155]/60 hover:border-[#2563EB]/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:bg-[#111827]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155]/80 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2563EB] hover:text-[#60A5FA] transition-colors group/link"
                >
                  <span>Explore Use Case</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}