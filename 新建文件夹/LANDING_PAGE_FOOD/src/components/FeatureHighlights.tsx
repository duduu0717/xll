import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Real-time order tracking",
    description:
      "Watch your order move from the restaurant kitchen to your doorstep with live GPS tracking. Get accurate ETAs and status updates every step of the way.",
    color: "bg-gradient-to-br from-orange-100 to-amber-200",
    icon: (
      <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    preview: [
      { left: "Order #8472", right: "En route" },
      { left: "Est. arrival", right: "12 min" },
      { left: "Your rider", right: "Alex D." },
    ],
  },
  {
    title: "Personalized recommendations",
    description:
      "Our smart algorithm learns your taste preferences and suggests dishes and restaurants you'll love. The more you order, the better the recommendations get.",
    color: "bg-gradient-to-br from-purple-100 to-pink-200",
    icon: (
      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    preview: [
      { left: "Based on your orders", right: "92% match" },
      { left: "Trending near you", right: "Pho House" },
      { left: "You might like", right: "Sushi Zen" },
    ],
  },
  {
    title: "Lightning-fast checkout",
    description:
      "Reorder favorite meals in one tap, use saved payment methods, and set default delivery instructions. From cart to confirmed in under 10 seconds.",
    color: "bg-gradient-to-br from-green-100 to-emerald-200",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    preview: [
      { left: "Saved card", right: "Visa ····4242" },
      { left: "Delivery to", right: "Home" },
      { left: "Est. total", right: "$18.47" },
    ],
  },
  {
    title: "Exclusive local restaurants",
    description:
      "Access hidden gems and neighborhood favorites you won't find on other platforms. We partner directly with local chefs to bring you unique dining experiences.",
    color: "bg-gradient-to-br from-amber-100 to-yellow-200",
    icon: (
      <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    preview: [
      { left: "Exclusive to Foodiez", right: "12 spots" },
      { left: "Chef's specials", right: "Weekly" },
      { left: "New this week", right: "Ramen Ko" },
    ],
  },
];

function FeaturePreview({ items }: { items: { left: string; right: string }[] }) {
  return (
    <div className="mt-6 space-y-2">
      {items.map((item) => (
        <div
          key={item.left}
          className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2 text-xs sm:text-sm"
        >
          <span className="text-gray-600">{item.left}</span>
          <span className="font-semibold text-gray-900">{item.right}</span>
        </div>
      ))}
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Why you'll love Foodiez
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
            Every feature is designed to make ordering food faster, smarter, and more enjoyable.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <ScrollReveal key={feature.title}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image / preview side */}
                  <div
                    className={`rounded-3xl ${feature.color} p-8 sm:p-12 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      {feature.icon}
                    </div>
                    <FeaturePreview items={feature.preview} />
                  </div>

                  {/* Text side */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
