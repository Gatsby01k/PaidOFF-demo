import Link from "next/link";
import { games } from "@/lib/games";

export function GameStrip() {
  return (
    <section>
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-black tracking-tight">Demo games</h2>
        <Link href="/games" className="text-sm underline">
          View all
        </Link>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.slice(0, 6).map((g) => (
          <Link
            key={g.id}
            href={`/games/${g.id}`}
            className="rounded-2xl border border-yellow-400/25 bg-brand-muted p-6 shadow-sm transition hover:border-yellow-400/70"
          >
            <div className="text-xl font-black">{g.title}</div>
            <p className="mt-2 text-sm text-yellow-200/80">{g.tagline}</p>
            <div className="mt-4 text-xs text-yellow-200/70">RTP: {g.rtp}%</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
