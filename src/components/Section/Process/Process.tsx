"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Heading, Subheading } from "@/components/ui/Heading";

export function Process() {
  return (
    <Section id="process" className="relative py-24 bg-[#030712] overflow-hidden border-t border-[#334155]/40">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">OUR PROCESS</Badge>
            <Heading as="h2" className="mb-4">From Idea to AI Automation</Heading>
            <Subheading className="text-center">A simple and transparent process that takes your business from manual work to intelligent automation.</Subheading>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}