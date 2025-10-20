import type { AppProps } from 'next/app';
import '@fontsource/inter/index.css';
import '../../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import ThemeToggle from '../components/ThemeToggle';
import Analytics from '../components/Analytics';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ThemeToggle />
      <Analytics />
    </SessionProvider>
  );
}
