import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { token } = req.body || {};
  if (!token) return res.status(400).json({ error: 'Token required' });

  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const result = await users.findOneAndUpdate({ verifyToken: token }, { $set: { verified: true }, $unset: { verifyToken: '' } });
  if (!result.value) return res.status(400).json({ error: 'Invalid token' });

  return res.status(200).json({ ok: true });
}
