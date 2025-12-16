"use client";

import { useDemoWallet } from "@/lib/use-demo-wallet";

export default function AdminPage() {
  const { history } = useDemoWallet();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Admin (mock)</h1>
      <p className="mt-2 text-sm text-yellow-200/80">
        Demo admin view for investor walkthrough. No auth in this prototype.
      </p>

      <div className="mt-8 rounded-2xl border border-yellow-400/30 bg-brand-muted p-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-black">Event stream</div>
          <div className="text-xs text-yellow-200/70">from local wallet</div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-yellow-400/20">
          <div className="max-h-[520px] overflow-auto">
            <ul className="divide-y divide-yellow-400/10">
              {history.slice(0, 50).map((h) => (
                <li key={h.id} className="p-4 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{h.type}</div>
                    <div className="text-xs text-yellow-200/70">
                      {new Date(h.ts).toLocaleString()}
                    </div>
                  </div>
                  <div className="mt-1 text-yellow-200/80">{h.note}</div>
                </li>
              ))}
              {history.length === 0 && (
                <li className="p-4 text-sm text-yellow-200/70">No events yet.</li>
              )}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-xs text-yellow-200/70">
          Next step (if needed): connect real backend services (users, sessions, games, payments).
        </p>
      </div>
    </main>
  );
}
