import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-center gap-3 py-14 bg-transparent text-xs text-gray-500 select-none"
    >
      <span>
        Built by <span className="font-semibold text-accent"><a href="https://galeindustries.netlify.app" target="_blank" rel="noopener noreferrer">Gale Industries</a></span> © 2025
      </span>
      <span className="flex gap-4">
        <a href="/about" className="hover:text-blue-500 transition-colors text-sm">About</a>
        <a href="/campaigns" className="hover:text-blue-500 transition-colors text-sm">Campaigns</a>
        <a href="/contact" className="hover:text-blue-500 transition-colors text-sm">Contact</a>
      </span>
    </motion.footer>
  );
}
