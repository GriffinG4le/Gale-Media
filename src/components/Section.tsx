import Reveal from './Reveal';

export default function Section() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold mb-4 text-black dark:text-white">
            Marketing that feels effortless
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-gray-700 dark:text-gray-300 mb-10">
            Problem → Offer → Proof → CTA, all in a seamless Apple-inspired story flow.
          </p>
        </Reveal>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full blur-sm opacity-60"></div>
    </section>
  );
}
