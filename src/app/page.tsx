"use client";

import { Navbar } from "@/components/Navbar/Navbar";

import { Hero } from "@/components/Section/Hero";
import { TrustedCompanies } from "@/components/Section/TrustedCompanies";
import { Services } from "@/components/Section/Services";
import { Industries } from "@/components/Section/Industries";
import { WhyChooseUs } from "@/components/Section/WhyChooseUs";
import { Process } from "@/components/Section/Process";
import { Portfolio } from "@/components/Section/Portfolio";
import { Testimonials } from "@/components/Section/Testimonials";
import { FAQ } from "@/components/Section/FAQ";
import { Contact } from "@/components/Section/Contact";
import { Footer } from "@/components/Section/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#F8FAFC] selection:bg-[#2563EB] selection:text-white relative overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trusted Companies Banner */}
      <TrustedCompanies />

      {/* Services Section */}
      <Services />

      {/* Industries Transformed Section */}
      <Industries />

      {/* Why Choose Us / Value Proposition Section */}
      <WhyChooseUs />

      {/* Methodology / How It Works Section */}
      <Process />

      {/* Case Studies & Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact & Consultation Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* Floating Interactive Controls */}
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}