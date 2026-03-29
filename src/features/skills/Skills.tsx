import { useTheme } from "@/features/theme/context/ThemeContext";
import "@/features/skills/Skills.css";

export function Skills() {
  const { dayNight } = useTheme();

  return (
    <section className="Skills container">
      <h2 className={dayNight ? "" : "night-h2"}>Skills</h2>
      <p>
        Javascript, GIT, HTML, CSS, Postgres, Express, React, and Node + some
        Java/Spring & Python/django
      </p>
    </section>
  );
}
