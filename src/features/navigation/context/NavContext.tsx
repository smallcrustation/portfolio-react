import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { logger } from "@/shared/lib/logger";

/** Section keys registered for in-page navigation (matches legacy CSS class names). */
export const NAV_SECTION_IDS = {
  ABOUT: "About",
  PROJECTS: "ProjectsList",
  CONTACT: "Contact",
} as const;

export type NavSectionId =
  (typeof NAV_SECTION_IDS)[keyof typeof NAV_SECTION_IDS];

export type NavContextValue = {
  expanded: boolean;
  toggleExpanded: () => void;
  registerSection: (id: NavSectionId, el: HTMLElement | null) => void;
  scrollTo: (id: NavSectionId) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

type NavProviderProps = { children: ReactNode };

export function NavProvider({ children }: NavProviderProps) {
  const [expanded, setExpanded] = useState(false);
  const [sections, setSections] = useState<
    Partial<Record<NavSectionId, HTMLElement>>
  >({});

  const toggleExpanded = useCallback(() => {
    setExpanded((e) => !e);
  }, []);

  const registerSection = useCallback(
    (id: NavSectionId, el: HTMLElement | null) => {
      setSections((prev) => {
        const next = { ...prev };
        if (el === null) {
          delete next[id];
        } else {
          next[id] = el;
        }
        return next;
      });
    },
    []
  );

  const scrollTo = useCallback(
    (id: NavSectionId) => {
      const el = sections[id];
      if (!el) {
        logger.warn(`scrollTo: section not registered yet: ${id}`);
        return;
      }
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setExpanded(false);
    },
    [sections]
  );

  const value = useMemo(
    () => ({
      expanded,
      toggleExpanded,
      registerSection,
      scrollTo,
    }),
    [expanded, toggleExpanded, registerSection, scrollTo]
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav(): NavContextValue {
  const ctx = useContext(NavContext);
  if (!ctx) {
    throw new Error("useNav must be used within NavProvider");
  }
  return ctx;
}
