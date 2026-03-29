import projectorDesktop from "@/assets/images/projector-desktop.png";
import projectorMobile from "@/assets/images/projector-mobile.png";
import whatdoDesktop from "@/assets/images/whatdo-desktop.png";
import whatdoMobile from "@/assets/images/whatdo-mobile.png";
import bestq from "@/assets/images/bestq.png";
import spacedRepetition from "@/assets/images/spaced-repetition.png";

export type ProjectCredentials = {
  username: string;
  password: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  summary: string;
  tech: string;
  liveUrl: string;
  gitHub: string;
  githubApi?: string;
  credentials?: ProjectCredentials;
  /** Visual layout: reverse flex row */
  rowRev: boolean;
  images: {
    desktop: string;
    mobile?: string;
  };
};

export const projects: readonly ProjectEntry[] = [
  {
    id: "projector",
    title: "Projector",
    summary:
      "Projector is an app designed for you to track your project by it's funding.",
    tech: "A responsive app made using React.js, Express.js and PostgreSQL",
    liveUrl: "https://projector.krill.now.sh/",
    gitHub: "https://github.com/smallcrustation/projector-client",
    githubApi: "https://github.com/smallcrustation/projector-server",
    credentials: { username: "user", password: "password" },
    rowRev: false,
    images: { desktop: projectorDesktop, mobile: projectorMobile },
  },
  {
    id: "whatdo",
    title: "WHAT DO",
    summary:
      "Find event's near you with weather using zip, current location & save events you're interested in",
    tech: "Responsive app made using React.js, Express.js and PostgreSQL",
    liveUrl: "https://whatdo.now.sh/",
    gitHub: "https://github.com/thinkful-ei-firefly/whatdo-client",
    githubApi: "https://github.com/thinkful-ei-firefly/whatdo-server",
    credentials: { username: "user", password: "Password1!" },
    rowRev: true,
    images: { desktop: whatdoDesktop, mobile: whatdoMobile },
  },
  {
    id: "best-quiz",
    title: "Best Quiz!",
    summary:
      "An app that ask exceedingly difficult math question and keeps score before allowing you to restart.",
    tech: "Responsive app made using html, css, javascript and jQuery",
    liveUrl:
      "https://thinkful-ei-firefly.github.io/quizz-app-ahmed-cody/",
    gitHub: "https://github.com/thinkful-ei-firefly/quizz-app-ahmed-cody",
    rowRev: false,
    images: { desktop: bestq },
  },
  {
    id: "spaced-repetition",
    title: "Spaced-Repetition",
    summary:
      "Practice learning a language with the spaced repetition revision technique.",
    tech: "Responsive app made using React.js, Express.js and PostgreSQL",
    liveUrl: "https://spaced-repetition.krill.now.sh/",
    gitHub: "https://github.com/Hmvalles75/spaced-repetition",
    githubApi: "https://github.com/smallcrustation/spaced-rep-api",
    credentials: { username: "admin", password: "pass" },
    rowRev: true,
    images: { desktop: spacedRepetition },
  },
];
