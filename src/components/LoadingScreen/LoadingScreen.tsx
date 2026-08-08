"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading?: boolean;
  onFinished?: () => void;
}

export function LoadingScreen({ isLoading = true, onFinished }: LoadingScreenProps) {
  const [present, setPresent] = React.useState(isLoading);

  React.useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setPresent(false);
        if (onFinished) onFinished();
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      setPresent(true);
    }
  }, [isLoading, onFinished]);

  return (
    <AnimatePresence>
      {present && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] text-[#F8FAFC]"
        >
          {/* Ambient Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[#2563EB]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white shadow-xl shadow-[#2563EB]/40 mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl font-black tracking-tight text-[#F8FAFC] mb-2"
            >
              NextFlow <span className="text-[#2563EB]">AI</span>
            </motion.div>

            <p className="text-xs text-[#94A3B8] font-mono tracking-widest uppercase mb-8">
              Initializing AI Engine...
            </p>

            {/* Progress Bar Container */}
            <div className="w-48 h-1.5 bg-[#1E293B] rounded-full overflow-hidden relative border border-[#334155]/50">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}