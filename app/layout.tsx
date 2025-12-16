import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "PAID OFF — Demo",
  description: "Privacy-first casino UX prototype (demo tokens).",
  icons: [
    { rel: "icon", url: "/favicon/browser.png" },
    { rel: "apple-touch-icon", url: "/favicon/iphone.png" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
