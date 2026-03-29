import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "dayNight";

export type ThemeContextValue = {
  /** `true` = day (light) mode, `false` = night mode — matches original naming */
  dayNight: boolean;
  toggleDayNight: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredDayNight(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return true;
    }
    const parsed: unknown = JSON.parse(raw);
    return typeof parsed === "boolean" ? parsed : true;
  } catch {
    return true;
  }
}

type ThemeProviderProps = { children: ReactNode };

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [dayNight, setDayNight] = useState<boolean>(readStoredDayNight);

  const toggleDayNight = useCallback(() => {
    setDayNight((d) => !d);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(dayNight));
    } catch {
      // Private mode / quota — non-fatal
    }
  }, [dayNight]);

  const value = useMemo(
    () => ({
      dayNight,
      toggleDayNight,
    }),
    [dayNight, toggleDayNight]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
