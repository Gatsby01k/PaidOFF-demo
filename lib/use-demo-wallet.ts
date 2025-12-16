"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type HistoryItem = {
  id: string;
  ts: number;
  type: "DEPOSIT" | "WITHDRAW" | "BET" | "WIN" | "LOSS";
  delta: number;
  note: string;
};

type BetInput = { amount: number; gameId: string };

const LS_KEY = "paidoff_demo_wallet_v1";

function rid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function useDemoWallet() {
  const [hydrated, setHydrated] = useState(false);
  const [balance, setBalance] = useState(500); // starting demo bankroll
  const [privacyMode, setPrivacyMode] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<{
          balance: number;
          privacyMode: boolean;
          history: HistoryItem[];
        }>;
        if (typeof parsed.balance === "number") setBalance(parsed.balance);
        if (typeof parsed.privacyMode === "boolean") setPrivacyMode(parsed.privacyMode);
        if (Array.isArray(parsed.history)) setHistory(parsed.history);
      }
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  // persist
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(LS_KEY, JSON.stringify({ balance, privacyMode, history }));
  }, [balance, privacyMode, history, hydrated]);

  const push = useCallback((item: Omit<HistoryItem, "id" | "ts">) => {
    setHistory((h) => [{ id: rid(), ts: Date.now(), ...item }, ...h].slice(0, 100));
  }, []);

  const togglePrivacyMode = useCallback(() => {
    setPrivacyMode((v) => !v);
  }, []);

  const deposit = useCallback((amount: number) => {
    const a = clamp(Math.floor(amount), 1, 1_000_000);
    setBalance((b) => b + a);
    push({ type: "DEPOSIT", delta: a, note: `Demo deposit +${a} D-TOK` });
  }, [push]);

  const withdraw = useCallback((amount: number) => {
    const a = clamp(Math.floor(amount), 1, 1_000_000);
    setBalance((b) => {
      const nb = b - a;
      return nb < 0 ? b : nb;
    });
    push({ type: "WITHDRAW", delta: -a, note: `Demo withdraw -${a} D-TOK` });
  }, [push]);

  const placeBet = useCallback((input: BetInput) => {
    const a = clamp(Math.floor(input.amount), 1, 1_000_000);
    // if insufficient, emit a "LOSS" note without changing
    setBalance((b) => {
      if (b < a) {
        push({ type: "LOSS", delta: 0, note: `Bet rejected: insufficient demo balance` });
        return b;
      }
      // bet
      const afterBet = b - a;
      push({ type: "BET", delta: -a, note: `Bet ${a} D-TOK on ${input.gameId}` });

      // demo RNG: 48% win chance, payout 2x (net +a), otherwise lose (net -a)
      const win = Math.random() < 0.48;
      if (win) {
        push({ type: "WIN", delta: a, note: `Win! +${a} D-TOK (demo)` });
        return afterBet + (a * 2); // return stake + profit
      } else {
        push({ type: "LOSS", delta: 0, note: `Loss (demo)` });
        return afterBet;
      }
    });
  }, [push]);

  return useMemo(() => ({
    balance,
    privacyMode,
    history,
    togglePrivacyMode,
    deposit,
    withdraw,
    placeBet,
  }), [balance, privacyMode, history, togglePrivacyMode, deposit, withdraw, placeBet]);
}
