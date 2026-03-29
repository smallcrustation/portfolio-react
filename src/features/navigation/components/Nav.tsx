import { useEffect, useRef, useState } from "react";
import { useNav } from "@/features/navigation/context/NavContext";
import { NavMobile } from "@/features/navigation/components/NavMobile";
import { NavDesktop } from "@/features/navigation/components/NavDesktop";
import "@/features/navigation/components/Nav.css";

const MOBILE_BREAKPOINT_PX = 705;

type NavProps = {
  toggleMobile: (isMobile: boolean) => void;
};

export function Nav({ toggleMobile }: NavProps) {
  const [mobile, setMobile] = useState(true);
  const { expanded, toggleExpanded } = useNav();
  const expandedRef = useRef(expanded);
  expandedRef.current = expanded;

  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT_PX) {
        setMobile(true);
        toggleMobile(true);
        if (expandedRef.current) {
          toggleExpanded();
        }
      } else {
        setMobile(false);
        toggleMobile(false);
        if (expandedRef.current) {
          toggleExpanded();
        }
      }
    };

    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () =>
      window.removeEventListener("resize", handleWindowSizeChange);
  }, [toggleMobile, toggleExpanded]);

  return (
    <nav className="Nav">{mobile ? <NavMobile /> : <NavDesktop />}</nav>
  );
}
