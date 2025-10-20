import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';

export default function CampaignPage({ campaign }: { campaign: any }) {
  if (!campaign) return <div className="p-10 text-center">Campaign not found.</div>;
  return (
    <main className="min-h-screen bg-background text-text flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-4" style={{ color: campaign.themeColor }}>{campaign.headline}</h1>
        <p className="text-lg md:text-2xl mb-6">{campaign.description}</p>
        {campaign.image && (
          <div className="mx-auto mb-6 rounded-xl overflow-hidden shadow-xl">
            <Image src={campaign.image} alt={campaign.clientName + ' Hero'} width={1200} height={700} sizes="(max-width: 768px) 100vw, 800px" placeholder="empty" />
          </div>
        )}
        <Link href={{ pathname: '/contact', query: { campaign: campaign.clientName } }} className="inline-block px-8 py-3 rounded-full bg-accent text-white text-lg font-semibold shadow-xl hover:bg-accent-dark transition-colors duration-200">
          {campaign.ctaText}
        </Link>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'campaigns.json');
  const campaigns = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = campaigns.map((c: any) => ({ params: { client: c.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { client } = params as { client: string };
  const filePath = path.join(process.cwd(), 'public', 'campaigns.json');
  const campaigns = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const campaign = campaigns.find((c: any) => c.slug === client) || null;
  return {
    props: { campaign },
  };
};
