import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email required' });

  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetTokenExpires = new Date(Date.now() + 1000 * 60 * 30); // 30 minutes
  await users.updateOne({ email: String(email).toLowerCase() }, { $set: { resetToken, resetTokenExpires } });

  // TODO: send email with reset link containing token
  return res.status(200).json({ ok: true, resetToken });
}
