"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "How fast can NextFlow AI deploy an automated system?",
    answer:
      "Most enterprise workflows and custom voice or chatbot implementations are built, tested, and deployed into live production within 14 days. Complex custom AI software projects typically range from 2 to 4 weeks.",
  },
  {
    question: "Do I retain full ownership of the custom AI code and workflows?",
    answer:
      "Yes, 100%. All custom automation scripts, n8n/Make workflows, API integrations, and fine-tuned prompts belong entirely to your company upon project completion with zero vendor lock-in.",
  },
  {
    question: "Will your AI tools integrate with our existing CRM and software stack?",
    answer:
      "Absolutely. We build integrations across popular CRMs (HubSpot, Salesforce, GoHighLevel, Zoho), ERPs, communication platforms (Slack, WhatsApp, Twilio), and enterprise databases via secure REST APIs.",
  },
  {
    question: "How do you ensure data security and HIPAA/GDPR compliance?",
    answer:
      "We strictly implement end-to-end encryption, SOC2-ready protocols, zero-data-retention model API configurations, and isolated database clusters to ensure your operational data remains protected and compliant.",
  },
  {
    question: "What is the expected ROI after implementing AI automation?",
    answer:
      "Our enterprise clients typically experience a 3.5x average increase in operational efficiency, up to an 85% reduction in routine manual support tasks, and positive cost recovery within 30 days of launch.",
  },
  {
    question: "What happens after the initial automation system is deployed?",
    answer:
      "We offer ongoing technical monitoring, latency optimization, model fine-tuning, and prompt updates to ensure your AI infrastructure scales seamlessly as your business operations grow.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#2563EB]/10 blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#334155]/80 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Everything you need to know about our custom AI agency services, architecture, and deployment timeline.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-[#111827]/80 border border-[#334155]/70 hover:border-[#2563EB]/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-[#1E293B] border border-[#334155]/80 flex items-center justify-center text-[#94A3B8] transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-[#2563EB] bg-[#2563EB]/10 border-[#2563EB]/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm text-[#94A3B8] leading-relaxed border-t border-[#334155]/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}