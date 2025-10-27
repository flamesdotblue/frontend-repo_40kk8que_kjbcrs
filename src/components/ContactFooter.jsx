import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContactFooter() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 1200);
    e.currentTarget.reset();
  };

  return (
    <footer id="contact" className="relative overflow-hidden border-t bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_50%_at_50%_120%,rgba(99,102,241,0.15),rgba(0,0,0,0))]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Let’s build something remarkable
          </h3>
          <p className="mt-3 text-gray-600">
            I’m available for internships, freelance, and full‑time roles. Share a bit about your needs and I’ll get back quickly.
          </p>
          <div className="mt-6 flex items-center gap-3 text-gray-700">
            <Mail size={18} /> penkesatyasaihruthikesh@example.com
          </div>
        </div>

        <form onSubmit={onSubmit} className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                placeholder="Tell me about your project or role"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow transition active:scale-[0.98] disabled:opacity-60"
              >
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white" />
                    Sending
                  </span>
                )}
                {status === 'sent' && (
                  <span className="inline-flex items-center gap-2">
                    <span className="i h-4 w-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                    Sent!
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="relative border-t bg-white/80 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Penke Satya Sai Hruthikesh. All rights reserved.
      </div>
    </footer>
  );
}
