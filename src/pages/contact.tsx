import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function ContactPage() {
  const router = useRouter();
  const { campaign } = router.query as { campaign?: string };
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const base = 'https://wa.me/254713582336';
    const text = encodeURIComponent(`Hi, I'm ${name}. I'm interested in ${campaign || 'your offer'}. ${message}`);
    const url = `${base}?text=${text}`;
    window.location.href = url;
  }

  return (
    <>
      <Head>
        <title>Contact Gale Media – Get Started Today</title>
        <meta name="description" content="Ready to launch your next campaign? Contact Gale Media for premium marketing solutions that scale." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="px-4 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-black dark:text-white hover:text-blue-500 transition-colors">
            Gale Media
          </Link>
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Home
          </Link>
        </div>
      </nav>

      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 py-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-light mb-8 text-center">Contact</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md grid gap-4">
          <input 
            value={name} 
            onChange={e=>setName(e.target.value)} 
            placeholder="Your name" 
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
            required
          />
          <textarea 
            value={message} 
            onChange={e=>setMessage(e.target.value)} 
            placeholder="Message (optional)" 
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            rows={4}
          />
          <button 
            type="submit" 
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-colors"
          >
            Talk on WhatsApp
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}