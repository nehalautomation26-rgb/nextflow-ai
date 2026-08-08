"use client";

import * as React from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "AI Voice Agents",
    message: "",
  });

  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your message.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Read response as text first.
      // This prevents "Unexpected end of JSON input"
      // when the API returns an empty response.
      const responseText = await response.text();

      let result: ApiResponse = {};

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.error("Invalid API JSON response:", parseError);
          console.error("Raw API response:", responseText);

          throw new Error(
            `Server returned an invalid response (${response.status}).`
          );
        }
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your message."
        );
      }

      // Success
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "AI Voice Agents",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#334155]/70 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-5">
              <Mail className="w-3.5 h-3.5" />
              Contact Us
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
                Automate Your Business?
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Tell us about your business and automation needs. We&apos;ll get
              back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#111827]/90 backdrop-blur-md border border-[#334155]/70 rounded-2xl p-6 sm:p-8 shadow-2xl">
              {/* Success Message */}
              {status === "success" && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-[#2563EB]/40 bg-[#2563EB]/10 p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#60A5FA] mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold text-[#F8FAFC]">
                      Message sent successfully!
                    </p>

                    <p className="text-sm text-[#94A3B8] mt-1">
                      Thank you for contacting NextFlow AI. We&apos;ll get back
                      to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-500/10 p-4">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold text-red-200">
                      Unable to send message
                    </p>

                    <p className="text-sm text-red-300/80 mt-1">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Name <span className="text-[#2563EB]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/60 border border-[#334155]/80 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Email <span className="text-[#2563EB]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/60 border border-[#334155]/80 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/60 border border-[#334155]/80 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/60 border border-[#334155]/80 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] transition-colors disabled:opacity-60"
                  >
                    <option value="AI Voice Agents">
                      AI Voice Agents
                    </option>
                    <option value="AI Chatbots">
                      AI Chatbots
                    </option>
                    <option value="CRM Automation">
                      CRM Automation
                    </option>
                    <option value="RAG AI Systems">
                      RAG AI Systems
                    </option>
                    <option value="Business Automation">
                      Business Automation
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Message <span className="text-[#2563EB]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or automation needs..."
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/60 border border-[#334155]/80 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-[#F8FAFC] font-semibold shadow-lg shadow-[#2563EB]/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}