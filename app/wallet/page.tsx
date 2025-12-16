"use client";

import { useState } from "react";
import { useDemoWallet } from "@/lib/use-demo-wallet";
import { formatAmount } from "@/lib/format";

export default function WalletPage() {
  const { balance, privacyMode, deposit, withdraw, history } = useDemoWallet();
  const [amt, setAmt] = useState(50);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Wallet (demo)</h1>
      <p className="mt-2 text-sm text-yellow-200/80">
        Local-only mock wallet. No blockchain. No real funds.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-yellow-400/30 bg-brand-muted p-6 lg:col-span-1">
          <div className="text-xs text-yellow-200/70">Balance</div>
          <div className="mt-1 text-3xl font-black">
            {privacyMode ? "••••" : formatAmount(balance)}{" "}
            <span className="text-xs font-semibold text-yellow-200/70">D-TOK</span>
          </div>

          <div className="mt-5">
            <div className="text-xs text-yellow-200/70">Amount</div>
            <input
              type="number"
              min={1}
              value={amt}
              onChange={(e) => setAmt(Math.max(1, Number(e.target.value || 1)))}
              className="mt-1 w-full rounded-xl border border-yellow-400/30 bg-black/40 px-4 py-3 text-yellow-100 outline-none focus:border-yellow-400/70"
            />
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => deposit(amt)}
              className="flex-1 rounded-2xl bg-brand-yellow px-4 py-3 font-black text-brand-black"
            >
              Deposit
            </button>
            <button
              onClick={() => withdraw(amt)}
              className="flex-1 rounded-2xl border border-yellow-400/40 bg-black/30 px-4 py-3 font-black"
            >
              Withdraw
            </button>
          </div>

          <p className="mt-4 text-xs text-yellow-200/70">
            “Deposit/Withdraw” just changes local state, for showcasing flows.
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-400/30 bg-brand-muted p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-lg font-black">Activity</div>
            <div className="text-xs text-yellow-200/70">last 20 events</div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-yellow-400/20">
            <div className="max-h-[420px] overflow-auto">
              {history.length === 0 ? (
                <div className="p-4 text-sm text-yellow-200/70">No activity yet.</div>
              ) : (
                <ul className="divide-y divide-yellow-400/10">
                  {history.slice(0, 20).map((h) => (
                    <li key={h.id} className="p-4 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">{h.type}</div>
                        <div className="text-xs text-yellow-200/70">
                          {new Date(h.ts).toLocaleString()}
                        </div>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="text-yellow-200/80">{h.note}</div>
                        <div className="font-black">
                          {privacyMode ? "••••" : formatAmount(h.delta)}{" "}
                          <span className="text-xs text-yellow-200/70">D-TOK</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <p className="mt-4 text-xs text-yellow-200/70">
            Privacy Mode hides amounts — a UX proxy for “shielded balances”.
          </p>
        </div>
      </div>
    </main>
  );
}
