import path from 'path';
import fs from 'fs';
import { useState } from 'react';
import Link from 'next/link';

export default function ArchivedCampaigns({ archivedCampaigns }: { archivedCampaigns: any[] }) {
  const [campaigns, setCampaigns] = useState(archivedCampaigns);
  function handleMockToggle(slug: string) {
    alert(`To archive/unarchive, edit public/campaigns.json ("active": true/false) and restart dev server.\nFuture: This button will enable admin toggling directly!`);
  }
  return (
    <main className="min-h-screen bg-background text-text px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-light mb-8">Archived/Hidden Campaigns (Admin)</h1>
      <div className="mb-6 max-w-lg text-red-700 font-semibold">This is a prototype. To hide/unhide, set <code>active</code> in <code>public/campaigns.json</code> and restart the dev server.</div>
      <Link href="/admin" className="mb-6 px-4 py-2 rounded bg-accent text-white font-semibold shadow hover:bg-accent-dark transition-colors">Go to Admin Dashboard</Link>
      <div className="grid gap-8 max-w-2xl w-full">
        {campaigns.length === 0 && <div className="text-lg">No archived campaigns.</div>}
        {campaigns.map(c => (
          <div key={c.slug} className="rounded-2xl shadow-lg bg-muted dark:bg-muted-dark px-8 py-6 flex flex-col md:flex-row items-center">
            {c.image && <img src={c.image} alt={c.clientName + ' Logo'} className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-8" />}
            <div className="flex-1 text-center md:text-left">
              <div className="text-2xl font-semibold mb-1" style={{ color: c.themeColor }}>{c.clientName}</div>
              <div className="mb-2 text-gray-600 dark:text-gray-300">{c.headline}</div>
              <button onClick={() => handleMockToggle(c.slug)} className="inline-block mt-2 px-6 py-2 rounded-full bg-accent text-white hover:bg-accent-dark shadow font-semibold transition-colors duration-200">
                Unarchive (Mock)
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'campaigns.json');
  const all = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const archivedCampaigns = all.filter((c: any) => c.active === false);
  return { props: { archivedCampaigns } };
}
