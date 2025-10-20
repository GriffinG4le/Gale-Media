import Head from 'next/head';
import Reveal from '../components/Reveal';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Gale Media – Vision & Philosophy</title>
        <meta name="description" content="Learn about Gale Media's vision for premium, scalable marketing campaigns and our Apple-inspired approach to digital excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-light text-center mb-8 text-black dark:text-white">
              Vision & Philosophy
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="prose prose-lg max-w-none text-center mb-16">
              <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We believe marketing should feel effortless—like using an Apple product. 
                Every interaction should be intuitive, every campaign should scale seamlessly, 
                and every brand should feel premium.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Our Approach</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Simplicity is luxury. We strip away complexity to reveal the core value proposition, 
                  then amplify it through clean design and smooth interactions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Speed builds trust. Every millisecond saved adds credibility to your brand and 
                  respect for your audience's time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Our Promise</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Modular campaigns that deploy in minutes, not months. 
                  Apple-inspired aesthetics that feel premium without being pretentious.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A platform that grows with your ambitions—from single campaigns to 
                  enterprise-scale marketing operations.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Built for Scale</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                This platform itself is our case study—a live demonstration of our execution philosophy. 
                Fast, adaptive, and modular. Just like we build for our clients.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
