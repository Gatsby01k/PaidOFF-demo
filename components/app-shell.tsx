"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDemoWallet } from "@/lib/use-demo-wallet";

const nav = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/wallet", label: "Wallet" },
  { href: "/admin", label: "Admin" },
];

function cx(...s: Array<string | false | undefined>) {
  return s.filter(Boolean).join(" ");
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { privacyMode, togglePrivacyMode } = useDemoWallet();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-yellow-400/20 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="PAID OFF"
              width={44}
              height={44}
              className="rounded-full border border-yellow-400/30"
            />
            <div className="leading-tight">
              <div className="text-sm font-black tracking-tight">PAID OFF</div>
              <div className="text-[11px] text-yellow-200/70">demo prototype</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => {
              const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-brand-yellow text-brand-black"
                      : "text-yellow-200/90 hover:bg-yellow-400/10"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={togglePrivacyMode}
              className={cx(
                "rounded-full border px-4 py-2 text-xs font-black transition",
                privacyMode
                  ? "border-yellow-400/60 bg-yellow-400/15"
                  : "border-yellow-400/25 bg-black/20 hover:border-yellow-400/60"
              )}
            >
              Privacy Mode: {privacyMode ? "ON" : "OFF"}
            </button>

            <Link
              href="/games"
              className="rounded-full bg-brand-yellow px-4 py-2 text-xs font-black text-brand-black"
            >
              Play demo
            </Link>
          </div>
        </div>
      </header>

      <div>{children}</div>
    </div>
  );
}
