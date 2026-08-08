"use client";

import * as React from "react";
import {
  PhoneCall,
  MessageSquareCode,
  Workflow,
  DatabaseZap,
  Boxes,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    description:
      "Deploy hyper-realistic human voice bots that autonomously handle inbound qualification, appointment booking, and customer support with zero latency.",
    features: [
      "Natural conversational flow",
      "Real-time CRM synchronization",
      "Multilingual support",
    ],
  },
  {
    icon: MessageSquareCode,
    title: "AI Chatbots & Assistants",
    description:
      "Intelligent web and messaging bots trained on your proprietary data to answer inquiries, guide visitors, and convert leads 24/7.",
    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Omnichannel deployment",
      "Instant context retention",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your fragmented software stack into unified autonomous pipelines using Make.com, n8n, and custom API bridges.",
    features: [
      "Zero human error execution",
      "Automated data parsing",
      "Instant event triggers",
    ],
  },
  {
    icon: DatabaseZap,
    title: "CRM & Sales Pipeline Automation",
    description:
      "Automate lead scoring, pipeline updates, follow-up sequences, and proposal generation inside HubSpot, Salesforce, or GoHighLevel.",
    features: [
      "Instant lead response under 60s",
      "Automated follow-up cadences",
      "Predictive deal scoring",
    ],
  },
  {
    icon: Boxes,
    title: "Custom AI Integrations",
    description:
      "Integrate OpenAI, Claude, and Gemini LLMs directly into your SaaS product or internal database via secure enterprise microservices.",
    features: [
      "Custom REST API wrappers",
      "Enterprise security compliance",
      "High-throughput scaling",
    ],
  },
  {
    icon: Cpu,
    title: "Custom AI Software Development",
    description:
      "Bespoke neural networks, automated video rendering pipelines, and custom agentic frameworks engineered for complex operations.",
    features: [
      "Autonomous agent swarms",
      "Programmatic video/content generation",
      "End-to-end web deployment",
    ],
  },
];

export function Services() {
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
    <section id="services" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#2563EB]/10 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Enterprise AI Automation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Services
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            End-to-end intelligent systems designed to eliminate manual labor, decrease response times, and scale operations seamlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-[#111827]/80 border border-[#334155]/70 rounded-2xl p-8 hover:border-[#2563EB]/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#2563EB]/15 transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#60A5FA] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-[#334155]/50 pt-4 mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs text-[#94A3B8] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:text-[#60A5FA] transition-colors group/link"
                  >
                    <span>Deploy Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}