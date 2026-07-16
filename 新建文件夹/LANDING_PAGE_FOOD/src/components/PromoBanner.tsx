import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 lg:py-20">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm sm:text-sm">
            Limited Time Offer
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Free delivery on your first order
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            New to Foodiez? Enjoy free delivery on your very first order — no
            minimum, no strings attached. Just delicious food, delivered free.
          </p>
          <motion.a
            href="#final-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-base font-bold text-brand shadow-lg transition-shadow hover:shadow-xl"
          >
            Claim Your Free Delivery
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
