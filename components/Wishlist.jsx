'use client';

import { useRef, useState } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function Wishlist() {
  const ref = useRef(null);
  useGsapReveal(ref, { y: 40 });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
        return;
      }
      setStatus('success');
      setMessage(data.message);
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  };

  return (
    <section id="wishlist" ref={ref} className="section-gap section-pad hairline-t">
      <div className="max-w-xl mx-auto text-center">
        <SectionLabel className="mb-4">Early Access</SectionLabel>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper mb-4">
          Be first when we launch.
        </h2>
        <p className="text-fog text-sm mb-8">
          Drop your email. We&apos;ll notify you the moment LiveFusion goes live.
        </p>

        {status === 'success' ? (
          <p className="text-violet font-medium text-sm">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              disabled={status === 'loading'}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-3.5 bg-panel hairline text-paper text-sm placeholder:text-mute focus:outline-none focus:border-violet/50 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Notify Me'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-live text-xs mt-3">{message}</p>}
        <p className="text-mute text-[11px] mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
