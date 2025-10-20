import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ContactPage() {
  const router = useRouter();
  const { campaign } = router.query as { campaign?: string };
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const base = 'https://wa.me/254713582336'; // 
    const text = encodeURIComponent(`Hi, I'm ${name}. I'm interested in ${campaign || 'your offer'}. ${message}`);
    const url = `${base}?text=${text}`;
    window.location.href = url;
  }

  return (
    <main className="min-h-screen bg-background text-text px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-light mb-8">Contact</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md grid gap-4">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="px-4 py-3 rounded border border-border bg-white dark:bg-gray-900" />
        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message (optional)" className="px-4 py-3 rounded border border-border bg-white dark:bg-gray-900" />
        <button type="submit" className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow hover:bg-accent-dark">Talk on WhatsApp</button>
      </form>
    </main>
  );
}
