import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import smoothscroll from "smoothscroll-polyfill";
import { AppProviders } from "@/app/providers/AppProviders";
import { App } from "@/app/App";
import { env } from "@/shared/lib/env";
import "@/index.css";

smoothscroll.polyfill();
document.title = env.appTitle;

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element "#root" not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
