import type { ReactNode } from "react";
import { ThemeProvider } from "@/features/theme/context/ThemeContext";

type AppProvidersProps = {
  children: ReactNode;
};

/** Global providers only; feature-specific providers (e.g. navigation) live next to their UI. */
export function AppProviders({ children }: AppProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
