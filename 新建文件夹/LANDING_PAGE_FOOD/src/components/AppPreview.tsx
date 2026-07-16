import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const screens = [
  {
    title: "Browse Menus",
    description: "Scroll through full menus with photos, ratings, and prices.",
    emoji: "📋",
    color: "from-brand to-orange-400",
    items: ["Margherita Pizza", "Chicken Tikka", "Pad Thai", "Falafel Wrap"],
  },
  {
    title: "Track Orders",
    description: "Live GPS tracking from the kitchen to your front door.",
    emoji: "🗺️",
    color: "from-blue-500 to-cyan-400",
    items: ["Order confirmed", "Being prepared", "On the way", "Delivered"],
  },
  {
    title: "Quick Reorder",
    description: "One-tap reorder from your favorites and recent orders.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-400",
    items: ["Recent orders", "Favorites", "Custom meals", "Group orders"],
  },
  {
    title: "Smart Search",
    description: "Find exactly what you're craving with powerful filters.",
    emoji: "🔍",
    color: "from-emerald-500 to-teal-400",
    items: ["Cuisine type", "Price range", "Dietary needs", "Rating 4.5+"],
  },
  {
    title: "Saved Places",
    description: "Save home, work, and favorite delivery spots.",
    emoji: "📍",
    color: "from-amber-500 to-yellow-400",
    items: ["Home", "Office", "Gym", "Park"],
  },
];

export default function AppPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need, right in the app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
            A beautifully designed app that makes ordering food a delight. Swipe through to see what's inside.
          </p>
        </ScrollReveal>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-[260px] flex-shrink-0 snap-center sm:w-[300px]"
            >
              <div className="overflow-hidden rounded-[2.5rem] border-4 border-gray-900 bg-white shadow-xl">
                {/* Notch */}
                <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-gray-900" />

                {/* App header */}
                <div
                  className={`mx-3 mt-3 rounded-2xl bg-gradient-to-r ${screen.color} p-4 text-white`}
                >
                  <span className="text-3xl">{screen.emoji}</span>
                  <h3 className="mt-2 text-lg font-bold">{screen.title}</h3>
                  <p className="mt-1 text-xs text-white/80">
                    {screen.description}
                  </p>
                </div>

                {/* Screen items */}
                <div className="space-y-2 p-4">
                  {screen.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-brand" />
                      <span className="text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Home indicator */}
                <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-gray-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
