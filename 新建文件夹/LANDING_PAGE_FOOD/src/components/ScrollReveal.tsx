import { motion } from "framer-motion";
import type { ReactNode } from "react";

const transition = { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const };

export default function ScrollReveal({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...transition, delay: delay ?? 0 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
