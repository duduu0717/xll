import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "GrubSpot", color: "bg-red-100" },
  { name: "EatNow", color: "bg-blue-100" },
  { name: "QuickBite", color: "bg-green-100" },
  { name: "FoodDash", color: "bg-purple-100" },
  { name: "Munchies", color: "bg-amber-100" },
  { name: "TastyGo", color: "bg-pink-100" },
];

const testimonials = [
  {
    avatar: "SM",
    name: "Sarah M.",
    quote:
      "Foodiez has completely changed how I eat. The recommendations are spot-on, and delivery is always faster than expected.",
    rating: 5,
    color: "bg-orange-100",
  },
  {
    avatar: "JT",
    name: "James T.",
    quote:
      "I use Foodiez at least 3 times a week. The real-time tracking is a game changer — I know exactly when my food arrives.",
    rating: 5,
    color: "bg-blue-100",
  },
  {
    avatar: "ML",
    name: "Maria L.",
    quote:
      "As a busy mom, Foodiez saves me so much time. The kids love the variety and I love the lightning-fast checkout.",
    rating: 5,
    color: "bg-green-100",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Partner logos */}
        <ScrollReveal>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400">
            Trusted by top restaurants and food partners
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ scale: 1.05 }}
                className={`flex h-14 items-center rounded-2xl ${partner.color} px-6`}
              >
                <span className="text-sm font-bold text-gray-700">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <ScrollReveal key={t.name}>
              <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <Stars count={t.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-sm font-bold text-gray-700`}
                  >
                    {t.avatar}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
