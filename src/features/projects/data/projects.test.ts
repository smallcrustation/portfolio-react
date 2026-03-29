import { describe, expect, it } from "vitest";
import { projects } from "@/features/projects/data/projects";

describe("projects data", () => {
  it("uses unique ids and valid external URLs", () => {
    const seen = new Set<string>();
    for (const p of projects) {
      expect(p.id.length).toBeGreaterThan(0);
      expect(seen.has(p.id)).toBe(false);
      seen.add(p.id);
      expect(() => new URL(p.liveUrl)).not.toThrow();
      expect(() => new URL(p.gitHub)).not.toThrow();
      const { githubApi } = p;
      if (githubApi !== undefined) {
        expect(() => new URL(githubApi)).not.toThrow();
      }
    }
  });
});
