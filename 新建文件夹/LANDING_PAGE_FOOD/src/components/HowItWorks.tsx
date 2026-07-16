import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Browse restaurants",
    description:
      "Explore 500+ local restaurants and discover new favorites. Filter by cuisine, rating, delivery time, or price.",
  },
  {
    number: "02",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    title: "Order in seconds",
    description:
      "Customize your meal, pick add-ons, and check out instantly with saved payment methods and delivery addresses.",
  },
  {
    number: "03",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Fast delivery",
    description:
      "Track your order in real-time from the kitchen to your doorstep. Most orders arrive in under 30 minutes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
            Getting your favorite food delivered has never been easier. Just three simple steps.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="group relative rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:p-10">
                {/* Step number */}
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-gray-100 transition-colors group-hover:text-brand/10">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                  {step.icon}
                </div>

                <h3 className="relative text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
