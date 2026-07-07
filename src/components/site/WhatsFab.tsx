import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsFab() {
  return (
    <motion.a
      href="https://wa.me/5561900000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-brand text-cream shadow-[0_20px_40px_-15px_rgba(46,125,50,0.7)] hover:bg-mustard hover:text-forest transition-colors"
    >
      <span className="absolute inset-0 rounded-full bg-green-brand/50 animate-ping" />
      <MessageCircle size={22} className="relative" />
    </motion.a>
  );
}
