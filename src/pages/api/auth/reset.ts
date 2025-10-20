import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { token, password } = req.body || {};
  if (!token || !password) return res.status(400).json({ error: 'Token and password required' });

  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const user = await users.findOne({ resetToken: token, resetTokenExpires: { $gt: new Date() } });
  if (!user) return res.status(400).json({ error: 'Invalid or expired token' });

  const hash = await bcrypt.hash(password, 10);
  await users.updateOne({ _id: user._id }, { $set: { password: hash }, $unset: { resetToken: '', resetTokenExpires: '' } });

  return res.status(200).json({ ok: true });
}
