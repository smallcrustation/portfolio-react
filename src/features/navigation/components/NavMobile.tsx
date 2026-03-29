import {
  NAV_SECTION_IDS,
  useNav,
} from "@/features/navigation/context/NavContext";
import { useTheme } from "@/features/theme/context/ThemeContext";
import "@/features/navigation/components/NavMobile.css";

export function NavMobile() {
  const { expanded, toggleExpanded, scrollTo } = useNav();
  const { dayNight } = useTheme();

  return (
    <div className="NavMobile">
      <div className="menu-icon" onClick={toggleExpanded}>
        <div
          className={`menu-icon-top ${
            expanded ? "menu-icon-top-expanded" : ""
          } ${dayNight ? "" : "menu-icon-night"}`}
        />
        <div
          className={`menu-icon-bottom ${
            expanded ? "menu-icon-bottom-expanded" : ""
          } ${dayNight ? "" : "menu-icon-night"}`}
        />
      </div>
      <ul
        className={`NavMobile-ul-hidden ${
          expanded ? "NavMobile-ul-visible" : ""
        }`}
      >
        <li onClick={() => scrollTo(NAV_SECTION_IDS.ABOUT)}>About</li>
        <li onClick={() => scrollTo(NAV_SECTION_IDS.PROJECTS)}>Projects</li>
        <li onClick={() => scrollTo(NAV_SECTION_IDS.CONTACT)}>Contact</li>
      </ul>
    </div>
  );
}
