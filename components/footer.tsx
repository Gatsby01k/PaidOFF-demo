import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-yellow-400/20 pt-8 text-sm text-yellow-200/70">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} PAID OFF — demo prototype</div>
        <div className="flex gap-4">
          <Link href="/legal/privacy" className="underline">Privacy</Link>
          <Link href="/legal/terms" className="underline">Terms</Link>
          <a className="underline" href="https://example.com" target="_blank" rel="noreferrer">
            Docs placeholder
          </a>
        </div>
      </div>
    </footer>
  );
}
