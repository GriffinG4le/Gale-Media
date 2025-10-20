import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleCredentialsLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await signIn('credentials', { redirect: false, email, password, callbackUrl: '/admin' });
    if (res?.error) setError('Invalid credentials');
  }

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white dark:bg-neutral-900 shadow rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Admin Login</h1>
          <form onSubmit={handleCredentialsLogin} className="grid gap-3">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-4 py-3 rounded border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="px-4 py-3 rounded border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800" />
            <button type="submit" className="mt-2 px-4 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">Login</button>
            {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
          </form>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl mb-8">Admin Dashboard (Prototype)</h1>
      <div className="grid gap-6 w-full max-w-md">
        <Link href="/campaigns/archived" className="px-6 py-4 rounded-xl bg-blue-500 text-white font-semibold shadow-xl hover:bg-blue-600 transition-all text-center">Manage Archived Campaigns</Link>

        <div className="px-6 py-6 rounded-xl bg-gray-50 dark:bg-neutral-900 text-black dark:text-white shadow">
          <div className="font-semibold mb-3">Upload Campaign Image</div>
          <form action="/api/admin/upload" method="post" encType="multipart/form-data" className="flex items-center gap-3">
            <input type="file" name="file" accept="image/*" className="flex-1" />
            <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white font-semibold shadow hover:bg-blue-600">Upload</button>
          </form>
        </div>

        <button
          className="px-8 py-3 text-white rounded-full bg-red-500 hover:bg-red-600 shadow-lg font-semibold"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Log out
        </button>
      </div>
    </main>
  );
}
