import { useCallback, useState } from "react";
import { useNav } from "@/features/navigation/context/NavContext";
import { useTheme } from "@/features/theme/context/ThemeContext";
import { Nav } from "@/features/navigation/components/Nav";
import { DayNight } from "@/features/theme/components/DayNight";
import "@/features/navigation/components/Header.css";

export function Header() {
  const { expanded } = useNav();
  const { dayNight } = useTheme();
  const [mobile, setMobile] = useState(true);

  const toggleMobile = useCallback((value: boolean) => {
    setMobile(value);
  }, []);

  return (
    <header
      style={dayNight ? undefined : { borderBottomColor: "black" }}
      className={`Header fadeInDown-1 container ${
        expanded && mobile ? "Header-expanded" : ""
      }`}
    >
      <a className={`Logo ${dayNight ? "" : "Logo-night"}`} href="/">
        <span>CO</span>
      </a>
      <DayNight />
      <Nav toggleMobile={toggleMobile} />
    </header>
  );
}
