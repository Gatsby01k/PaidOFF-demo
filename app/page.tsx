import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { GameStrip } from "@/components/game-strip";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Hero />
      <div className="mt-10">
        <GameStrip />
      </div>
      <div className="mt-12">
        <FeatureGrid />
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </main>
  );
}
