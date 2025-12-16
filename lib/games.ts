export type Game = {
  id: string;
  title: string;
  tagline: string;
  rtp: number;
  tags: string[];
};

export const games: Game[] = [
  { id: "roulette", title: "Roulette", tagline: "Clean bets, fast spins, demo RNG.", rtp: 97.3, tags: ["classic", "fast"] },
  { id: "blackjack", title: "Blackjack", tagline: "Hit, stand — minimalist table.", rtp: 99.4, tags: ["skill-ish", "table"] },
  { id: "crash", title: "Crash", tagline: "Cash out before it pops.", rtp: 98.2, tags: ["trend", "quick"] },
  { id: "slots-neon", title: "Neon Slots", tagline: "Three reels, bold feedback.", rtp: 96.0, tags: ["slots", "casual"] },
  { id: "dice", title: "Dice", tagline: "Under/Over with clean controls.", rtp: 98.9, tags: ["simple", "provably-fair (mock)"] },
  { id: "coinflip", title: "Coinflip", tagline: "50/50, instant result.", rtp: 98.0, tags: ["simple", "fast"] },
];
