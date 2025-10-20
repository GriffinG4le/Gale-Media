import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const existing = await users.findOne({ email: String(email).toLowerCase() });
  if (existing) return res.status(409).json({ error: 'Email already registered' });

  const hash = await bcrypt.hash(password, 10);
  const verifyToken = crypto.randomBytes(32).toString('hex');
  await users.insertOne({ email: String(email).toLowerCase(), password: hash, verified: false, verifyToken, createdAt: new Date() });

  // TODO: send email with verify link containing token
  return res.status(200).json({ ok: true, verifyToken });
}
