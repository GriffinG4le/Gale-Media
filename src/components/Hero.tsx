import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const blobX = useTransform(mx, [0, 1], ['-8%', '8%']);
  const blobY = useTransform(my, [0, 1], ['-8%', '8%']);
  const titleY = useTransform(my, [0, 1], ['0px', '10px']);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      mx.set(e.clientX / innerWidth);
      my.set(e.clientY / innerHeight);
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className="relative flex flex-col items-center justify-center py-24 lg:py-36 px-4 overflow-hidden">
      {/* Dark overlay to improve contrast in dark mode */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-gradient-to-b from-black/40 via-black/30 to-transparent" />
      {/* Blurred colored blobs with parallax */}
      <motion.div className="absolute inset-0 -z-10 flex justify-center" style={{ x: blobX, y: blobY }}>
        <div className="w-[36rem] h-[36rem] bg-gradient-to-tr from-blue-400/30 via-fuchsia-300/20 to-cyan-200/40 rounded-full blur-3xl opacity-70 dark:opacity-30"></div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        className="text-5xl md:text-7xl font-light dark:font-normal text-center tracking-tight mb-6 drop-shadow-2xl text-black dark:text-white"
        style={{ y: titleY }}
      >
        Premium Marketing. <span className="text-blue-500 dark:text-blue-400">Zero Clutter.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="text-lg md:text-2xl text-center text-gray-700 dark:text-gray-100 mb-8 max-w-2xl"
      >
        The platform for <span className="font-semibold">rapid, scalable campaigns</span>.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="flex justify-center gap-4"
        style={{ y: titleY }}
      >
        <a href="/contact" className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-xl text-lg font-semibold focus:ring-2 ring-blue-500 focus:outline-none transition-all duration-200">
          Get Started
        </a>
        <a href="/campaigns" className="px-8 py-3 rounded-full bg-gray-100 dark:bg-neutral-800 text-black dark:text-white border border-gray-200 dark:border-neutral-700 text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200">
          See Campaigns
        </a>
      </motion.div>
    </section>
  );
}
