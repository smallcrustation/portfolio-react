/**
 * Typed access to public configuration (Vite `import.meta.env`).
 * Defaults preserve existing site behavior when `.env` is absent.
 */

import { logger } from "@/shared/lib/logger";

function trimOr<T>(value: string | undefined, fallback: T): string | T {
  const v = value?.trim();
  return v === undefined || v === "" ? fallback : v;
}

const DEFAULT_GITHUB = "https://github.com/smallcrustation";
const DEFAULT_LINKEDIN =
  "https://www.linkedin.com/in/cody-oberholtzer-6b4256159/";

function safeHttpUrl(
  name: string,
  value: string,
  fallback: string
): string {
  try {
    const u = new URL(value);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      throw new Error("invalid protocol");
    }
    return value;
  } catch {
    logger.warn(`Invalid URL for ${name}; using default.`);
    return fallback;
  }
}

export const env = {
  appTitle: trimOr(import.meta.env.VITE_APP_TITLE, "Cody - Coder"),
  appDescription: trimOr(
    import.meta.env.VITE_APP_DESCRIPTION,
    "Portfolio — full stack JavaScript developer"
  ),
  contactEmail: trimOr(import.meta.env.VITE_CONTACT_EMAIL, "lpmaze@gmail.com"),
  heroHeadline: trimOr(
    import.meta.env.VITE_HERO_HEADLINE,
    "Hi, I'm Cody the Coder"
  ),
  githubUrl: safeHttpUrl(
    "VITE_GITHUB_URL",
    trimOr(import.meta.env.VITE_GITHUB_URL, DEFAULT_GITHUB),
    DEFAULT_GITHUB
  ),
  linkedInUrl: safeHttpUrl(
    "VITE_LINKEDIN_URL",
    trimOr(import.meta.env.VITE_LINKEDIN_URL, DEFAULT_LINKEDIN),
    DEFAULT_LINKEDIN
  ),
} as const;
