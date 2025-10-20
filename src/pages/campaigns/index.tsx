import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import Reveal from '../../components/Reveal';

export default function CampaignListPage({ campaigns, archivedCount }: { campaigns: any[], archivedCount: number }) {
  const visibleCampaigns = campaigns.filter(c => c.active !== false);
  const dev = process.env.NODE_ENV !== 'production';
  return (
    <main className="min-h-screen px-6 py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-light mb-8">Featured Campaigns</h1>
      {dev && visibleCampaigns.length === 0 && archivedCount > 0 && (
        <div className="mb-12 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 font-semibold w-full max-w-xl">
          Campaigns exist, but none are active.<br/>
          Edit <code>public/campaigns.json</code> to unarchive, then restart the dev server to update list.
        </div>
      )}
      <div className="grid gap-8 max-w-2xl w-full">
        {visibleCampaigns.map(c => (
          <Reveal key={c.slug}>
            <div className="rounded-2xl shadow-lg bg-gray-50 dark:bg-neutral-900 px-8 py-6 flex flex-col md:flex-row items-center">
              {c.image && <img src={c.image} alt={c.clientName + ' Logo'} className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-8" />}
              <div className="flex-1 text-center md:text-left">
                <div className="text-2xl font-semibold mb-1" style={{ color: c.themeColor }}>{c.clientName}</div>
                <div className="mb-2 text-gray-600 dark:text-gray-300">{c.headline}</div>
                <Link legacyBehavior href={`/campaigns/${c.slug}`}>
                  <a className="inline-block mt-2 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow font-semibold transition-colors duration-200">
                    View Campaign
                  </a>
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'campaigns.json');
  const campaigns = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const archivedCount = campaigns.filter((c: any) => c.active === false).length;
  return { props: { campaigns, archivedCount } };
}
