import { useCallback } from "react";
import { useNav, NAV_SECTION_IDS } from "@/features/navigation/context/NavContext";
import { useTheme } from "@/features/theme/context/ThemeContext";
import { env } from "@/shared/lib/env";
import emailIcon from "@/assets/icons/email.svg";
import gitHubIcon from "@/assets/icons/GitHub.svg";
import linkedInIcon from "@/assets/icons/LinkedIn.png";
import "@/features/contact/Contact.css";

const mailtoHref = `mailto:${env.contactEmail}?subject=${encodeURIComponent(
  "Portfolio Mail!"
)}`;

export function Contact() {
  const { registerSection } = useNav();
  const { dayNight } = useTheme();

  const setSectionRef = useCallback(
    (node: HTMLElement | null) => {
      registerSection(NAV_SECTION_IDS.CONTACT, node);
    },
    [registerSection]
  );

  return (
    <section ref={setSectionRef} className="Contact container">
      <h2 className={dayNight ? "" : "night-h2"}>Contact</h2>
      <div className="container">
        <div>
          <a
            className={`a-btn ${dayNight ? "" : "a-btn-dark"}`}
            href={mailtoHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={emailIcon} alt="" />
            {env.contactEmail}
          </a>
        </div>
        <div>
          <a
            className={`a-btn ${dayNight ? "" : "a-btn-dark"}`}
            href={env.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="" />
            GitHub
          </a>
        </div>
        <div>
          <a
            className={`a-btn ${dayNight ? "" : "a-btn-dark"}`}
            href={env.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
