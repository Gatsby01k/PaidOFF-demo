const items = [
  {
    title: "Privacy Mode (UX)",
    desc: "Hides amounts and simulates “shielded balances” for storytelling — no chain integration.",
  },
  {
    title: "Wallet flows",
    desc: "Deposit/withdraw, activity log, balance widgets for walkthroughs and usability testing.",
  },
  {
    title: "Game sessions",
    desc: "Mock “Place bet” interactions with demo RNG and event emission.",
  },
  {
    title: "Admin stream",
    desc: "Investor view: events, audit trail concept, and placeholders for compliance modules.",
  },
];

export function FeatureGrid() {
  return (
    <section>
      <h2 className="text-2xl font-black tracking-tight">What’s inside</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-yellow-400/25 bg-brand-muted p-6 shadow-sm"
          >
            <div className="text-lg font-black">{i.title}</div>
            <p className="mt-2 text-sm text-yellow-200/80">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
