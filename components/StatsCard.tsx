"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  delay?: number;
}

export default function StatsCard({ icon, value, label, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group rounded-xl border border-border bg-primary-secondary p-6 text-center transition-colors hover:border-text-primary/20"
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-tertiary text-text-primary transition-colors group-hover:bg-accent/10">
        {icon}
      </div>
      <div className="text-2xl font-bold text-text-primary">{value}</div>
      <div className="mt-1 text-sm text-text-tertiary">{label}</div>
    </motion.div>
  );
}
