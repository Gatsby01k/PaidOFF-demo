export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Privacy (demo)</h1>
      <p className="mt-4 text-sm text-yellow-200/80">
        This is a prototype. It stores demo wallet state in your browser (localStorage). No real payments, no blockchain, no PII.
      </p>
      <ul className="mt-6 list-disc pl-6 text-sm text-yellow-200/80 space-y-2">
        <li>We do not collect personal data in this demo.</li>
        <li>All balances are demo tokens and are stored locally on your device.</li>
        <li>You can clear your browser storage to reset the demo.</li>
      </ul>
    </main>
  );
}
