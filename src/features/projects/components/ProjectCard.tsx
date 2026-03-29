import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectEntry } from "@/features/projects/data/projects";
import { useTheme } from "@/features/theme/context/ThemeContext";
import WavesSvg from "@/assets/svgs/WavesSvg";
import "@/features/projects/components/Project.css";

/** Matches original portfolio-react Project.js scroll parallax constants. */
const slowBgYTrans = 5;
const slowBgRotate = 5;
const slowImgYTrans = 2;

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    summary,
    tech,
    liveUrl,
    gitHub,
    githubApi,
    credentials,
    rowRev,
    images,
  } = project;

  const [scrollPos, setScrollPos] = useState(0);
  const { dayNight } = useTheme();

  const projectRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const el = projectRef.current;
    if (!el) {
      return;
    }
    const bottomWindowYOffset = window.pageYOffset + window.innerHeight;
    if (
      bottomWindowYOffset > el.offsetTop &&
      window.pageYOffset < el.offsetTop
    ) {
      const pos =
        el.clientHeight + el.offsetTop - bottomWindowYOffset;
      setScrollPos(pos / 20);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const openSite = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <article
      className="Project"
      style={rowRev ? { flexDirection: "row-reverse" } : undefined}
    >
      <div ref={projectRef} className="Project-imgs fadeInUp">
        <div>
          <img
            onClick={() => openSite(liveUrl)}
            className="Project-img1"
            style={{
              transform: `translateY(${-scrollPos / slowImgYTrans}%)`,
            }}
            src={images.desktop}
            alt={title}
          />
          {images.mobile ? (
            <img
              onClick={() => openSite(liveUrl)}
              className="Project-img2"
              style={{
                transform: `translateY(${-scrollPos / slowImgYTrans + 1}%)`,
              }}
              src={images.mobile}
              alt={title}
            />
          ) : null}
        </div>
        <div
          className="Project-bg circle-ish"
          style={{
            transform: `rotate(${scrollPos / slowBgRotate}deg) translateY(${scrollPos / slowBgYTrans}%)`,
          }}
        >
          <WavesSvg
            fillColor="black"
            bgColor={dayNight ? "white" : "steelblue"}
          />
        </div>
      </div>
      <div className="Project-summary">
        <h3>{title}</h3>
        <p>{summary}</p>
        {credentials ? (
          <div className="Project-credentials">
            Username: {credentials.username} <br /> Password:{" "}
            {credentials.password}
          </div>
        ) : null}
        <p>{tech}</p>
        <div className="Project-links">
          <a
            className={`a-btn ${dayNight ? "" : "a-btn-dark"}`}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
          <a
            className={`a-btn ${dayNight ? "" : "a-btn-dark"}`}
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          {githubApi ? (
            <a
              className={`a-btn ${dayNight ? "" : "a-btn-dark"}`}
              href={githubApi}
              target="_blank"
              rel="noopener noreferrer"
            >
              Api Repo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
