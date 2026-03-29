import { env } from "@/shared/lib/env";
import "@/features/hero/Hero.css";

export function Hero() {
  return (
    <div className="Hero fadeInDown-2 container">
      <h1>{env.heroHeadline}</h1>
    </div>
  );
}
