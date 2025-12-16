import { games } from "@/lib/games";
import Link from "next/link";

export default function GamesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Games</h1>
      <p className="mt-2 text-sm text-yellow-200/80">
        Demo-only. No real money. Local mock wallet.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <Link
            key={g.id}
            href={`/games/${g.id}`}
            className="rounded-2xl border border-yellow-400/30 bg-brand-muted p-5 shadow-sm transition hover:border-yellow-400/70"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-black">{g.title}</div>
              <div className="text-xs rounded-full border border-yellow-400/30 px-3 py-1">
                {g.rtp}% RTP
              </div>
            </div>
            <p className="mt-2 text-sm text-yellow-200/80">{g.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full bg-yellow-400/10 border border-yellow-400/25 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
