import { motion } from "framer-motion";
import DownloadButtons from "./DownloadButtons";

const trustItems = [
  { value: "4.9", label: "App Store Rating", icon: "⭐" },
  { value: "25 min", label: "Average delivery", icon: "🛵" },
  { value: "500+", label: "Local restaurants", icon: "🍽️" },
];

const floatingCards = [
  {
    emoji: "🍕",
    label: "Pepperoni Pizza",
    price: "$12.99",
    color: "bg-red-50",
    delay: 0,
    x: -80,
    y: -40,
  },
  {
    emoji: "🍔",
    label: "Classic Burger",
    price: "$9.99",
    color: "bg-amber-50",
    delay: 1.5,
    x: 60,
    y: 20,
  },
  {
    emoji: "🍜",
    label: "Ramen Bowl",
    price: "$14.99",
    color: "bg-green-50",
    delay: 3,
    x: -40,
    y: 120,
  },
  {
    emoji: "🥗",
    label: "Caesar Salad",
    price: "$8.99",
    color: "bg-emerald-50",
    delay: 4.5,
    x: 80,
    y: -80,
  },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Phone body */}
      <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-gray-900 bg-white shadow-2xl">
        {/* Notch */}
        <div className="mx-auto mt-2 h-6 w-32 rounded-full bg-gray-900" />

        {/* Screen content */}
        <div className="p-4 pt-3">
          {/* App header */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold text-brand">Foodiez</span>
            <div className="h-2 w-12 rounded-full bg-gray-200" />
          </div>

          {/* Search bar */}
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs text-gray-400">Search restaurants...</span>
          </div>

          {/* Food cards */}
          <div className="space-y-3">
            {[
              { emoji: "🍕", name: "Pizza Palace", time: "20-30 min", rating: "4.8" },
              { emoji: "🍣", name: "Sushi Spot", time: "25-35 min", rating: "4.9" },
              { emoji: "🌮", name: "Taco Fiesta", time: "15-25 min", rating: "4.7" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3 rounded-xl border border-gray-100 p-3">
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-900">{item.name}</div>
                  <div className="text-[11px] text-gray-500">
                    {item.time} · {item.rating} ★
                  </div>
                </div>
                <div className="h-6 w-6 rounded-full bg-brand/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="mx-auto mb-2 h-1 w-28 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-white to-orange-50 pt-28 lg:pt-32">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Your favorite food,{" "}
              <span className="text-brand">delivered fast</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl"
            >
              Browse hundreds of local restaurants, order with a tap, and get
              fresh, hot food delivered to your door in under 30 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-8"
            >
              <DownloadButtons className="justify-center lg:justify-start" />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start"
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <div className="text-left">
                    <div className="text-lg font-bold text-gray-900">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — Phone mockup */}
          <div className="relative flex justify-center">
            {/* Floating cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: [0, 1, 1, 0.85],
                  y: [40, card.y, card.y - 12, card.y],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 + card.delay * 0.3 },
                  y: {
                    duration: 5,
                    delay: 0.8 + card.delay * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                className={`absolute z-10 hidden rounded-2xl ${card.color} px-4 py-3 shadow-lg sm:block`}
                style={{ left: `calc(50% + ${card.x}px)`, top: `calc(50% + ${card.y}px)` }}
              >
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-2xl">{card.emoji}</span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {card.label}
                    </div>
                    <div className="text-xs font-medium text-brand">
                      {card.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
