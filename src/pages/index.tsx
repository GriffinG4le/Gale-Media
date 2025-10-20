import Head from 'next/head';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gale Media – Premium Multi-Client Campaigns</title>
        <meta name="description" content="Minimal, instant, Apple-inspired marketing sites for modern brands. Created by Gale Media." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <Section />
        <Footer />
      </main>
    </>
  );
}
