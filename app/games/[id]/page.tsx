"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { games } from "@/lib/games";
import { useDemoWallet } from "@/lib/use-demo-wallet";
import { formatAmount } from "@/lib/format";
import Link from "next/link";

export default function GamePage() {
  const params = useParams<{ id: string }>();
  const game = useMemo(() => games.find((g) => g.id === params.id), [params.id]);

  const { balance, privacyMode, placeBet } = useDemoWallet();
  const [bet, setBet] = useState(10);

  if (!game) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-black">Game not found</h1>
        <Link className="mt-4 inline-block underline" href="/games">Back to Games</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{game.title}</h1>
          <p className="mt-2 text-sm text-yellow-200/80">{game.tagline}</p>
        </div>
        <div className="rounded-2xl border border-yellow-400/30 bg-brand-muted p-4 text-right">
          <div className="text-xs text-yellow-200/70">Demo balance</div>
          <div className="text-2xl font-black">
            {privacyMode ? "••••" : formatAmount(balance)}{" "}
            <span className="text-xs font-semibold text-yellow-200/70">D-TOK</span>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-yellow-400/30 bg-brand-muted p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-yellow-200/80">
            This is a UI prototype of a game session. Odds are simulated.
          </div>
          <div className="text-xs rounded-full bg-yellow-400/10 border border-yellow-400/25 px-3 py-1">
            RNG: demo
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex-1">
            <div className="text-xs text-yellow-200/70">Bet amount</div>
            <input
              type="number"
              min={1}
              step={1}
              value={bet}
              onChange={(e) => setBet(Math.max(1, Number(e.target.value || 1)))}
              className="mt-1 w-full rounded-xl border border-yellow-400/30 bg-black/40 px-4 py-3 text-yellow-100 outline-none focus:border-yellow-400/70"
            />
          </label>
          <button
            onClick={() => placeBet({ amount: bet, gameId: game.id })}
            className="rounded-2xl bg-brand-yellow px-5 py-3 font-black text-brand-black shadow-sm transition hover:translate-y-[-1px]"
          >
            Place bet
          </button>
        </div>

        <p className="mt-5 text-xs text-yellow-200/70">
          Tip: toggle “Privacy Mode” in the header — it hides balances and treats them as “shielded” (UI only).
        </p>
      </div>

      <div className="mt-6 flex justify-between text-sm">
        <Link className="underline" href="/games">← Games</Link>
        <Link className="underline" href="/wallet">Wallet →</Link>
      </div>
    </main>
  );
}
