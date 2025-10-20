import { useState } from 'react';

export default function ForgotPage() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null); setResult(null);
    const res = await fetch('/api/auth/forgot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'Failed');
    setResult(`Reset token: ${data.resetToken}`);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white dark:bg-neutral-900 shadow rounded-xl p-6 grid gap-3">
        <h1 className="text-2xl font-semibold mb-2 text-center">Forgot Password</h1>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-4 py-3 rounded border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800" />
        <button type="submit" className="mt-2 px-4 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">Send Reset Link</button>
        {result && <div className="text-green-700 text-sm">{result}</div>}
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </form>
    </main>
  );
}
