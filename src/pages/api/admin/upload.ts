import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { Readable } from 'stream';
import authConfig from '../auth/[...nextauth]';

export const config = {
  api: {
    bodyParser: false,
  },
};

function buffer(readable: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    readable.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig as any);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const form = new IncomingForm({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: 'Invalid form data' });
    }
    // For formidable v3, files come as File objects with .filepath in temp
    const file: any = files.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const originalName = Array.isArray(file.originalFilename) ? file.originalFilename[0] : file.originalFilename;
    const safeName = String(originalName || 'upload').replace(/[^a-z0-9\-_.]/gi, '_').toLowerCase();
    const destPath = path.join(uploadsDir, safeName);

    await fs.promises.copyFile(file.filepath, destPath);

    const publicUrl = `/uploads/${safeName}`;
    return res.status(200).json({ url: publicUrl, name: safeName });
  });
}
