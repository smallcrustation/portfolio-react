import { useCallback } from "react";
import { useNav, NAV_SECTION_IDS } from "@/features/navigation/context/NavContext";
import { useTheme } from "@/features/theme/context/ThemeContext";
import { projects } from "@/features/projects/data/projects";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import "@/features/projects/ProjectsList.css";

export function ProjectsSection() {
  const { registerSection } = useNav();
  const { dayNight } = useTheme();

  const setSectionRef = useCallback(
    (node: HTMLElement | null) => {
      registerSection(NAV_SECTION_IDS.PROJECTS, node);
    },
    [registerSection]
  );

  return (
    <section ref={setSectionRef} className="ProjectsList container">
      <h2 className={dayNight ? "" : "night-h2"}>Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
