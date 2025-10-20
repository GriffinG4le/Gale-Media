import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <>
      {domain ? (
        <Script strategy="afterInteractive" data-domain={domain} src="https://plausible.io/js/script.js" />
      ) : null}
      <VercelAnalytics />
    </>
  );
}
