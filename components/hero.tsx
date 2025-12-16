import Link from "next/link";

export function Hero() {
  return (
    <section className="rounded-3xl border border-yellow-400/25 bg-brand-muted p-8 shadow-sm">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black">
          Demo • Privacy-first UX • No real money
        </div>
        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          Crypto casino prototype focused on <span className="text-yellow-100">privacy UX</span>
        </h1>
        <p className="mt-4 text-sm text-yellow-200/80">
          Investor-friendly demo: wallet flows, “shielded” balances (UI), game session mock, and admin event stream — all local.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/games"
            className="rounded-2xl bg-brand-yellow px-5 py-3 font-black text-brand-black"
          >
            Explore games
          </Link>
          <Link
            href="/wallet"
            className="rounded-2xl border border-yellow-400/35 bg-black/30 px-5 py-3 font-black"
          >
            View wallet
          </Link>
          <Link href="/admin" className="rounded-2xl px-5 py-3 font-black underline">
            Admin demo
          </Link>
        </div>

        <p className="mt-5 text-xs text-yellow-200/70">
          Note: this repo is meant to be extended — later you can plug in real providers (KYC, payments, game aggregator) if you go legit.
        </p>
      </div>
    </section>
  );
}
