import { motion } from "framer-motion";

function StoreButton({
  store,
  label,
  subtitle,
  href,
}: {
  store: "apple" | "google";
  label: string;
  subtitle: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 rounded-2xl bg-gray-900 px-6 py-3 text-white transition-shadow hover:shadow-xl"
    >
      {store === "apple" ? (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      ) : (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
        </svg>
      )}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-medium opacity-80">{subtitle}</span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </motion.a>
  );
}

export default function DownloadButtons({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ""}`}>
      <StoreButton
        store="apple"
        label="App Store"
        subtitle="Download on the"
        href="#"
      />
      <StoreButton
        store="google"
        label="Google Play"
        subtitle="Get it on"
        href="#"
      />
    </div>
  );
}
