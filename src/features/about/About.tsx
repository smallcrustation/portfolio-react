import { useCallback } from "react";
import { useNav, NAV_SECTION_IDS } from "@/features/navigation/context/NavContext";
import { useTheme } from "@/features/theme/context/ThemeContext";
import "@/features/about/About.css";

export function About() {
  const { registerSection } = useNav();
  const { dayNight } = useTheme();

  const setSectionRef = useCallback(
    (node: HTMLElement | null) => {
      registerSection(NAV_SECTION_IDS.ABOUT, node);
    },
    [registerSection]
  );

  return (
    <section ref={setSectionRef} className="About container">
      <h2 className={dayNight ? "" : "night-h2"}>About</h2>
      <p>
        Four score and seven years ago*. Hello, I&apos;m a full stack Javascript
        web developer using the PERN stack.
      </p>
      <p>
        Before diving into web dev with JS, I took a few computer science
        classes in college then dabbled more with coding;{" "}
      </p>
      <p>
        First with a small side scroller then web development with
        python/django, java/spring and then onto Javascript.
      </p>
    </section>
  );
}
