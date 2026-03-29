import { NavProvider } from "@/features/navigation/context/NavContext";
import { useTheme } from "@/features/theme/context/ThemeContext";
import { Header } from "@/features/navigation/components/Header";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Skills } from "@/features/skills/Skills";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/features/footer/Footer";
import "@/app/App.css";

export function App() {
  const { dayNight } = useTheme();

  return (
    <div className={`App ${dayNight ? "" : "App-night"}`}>
      <NavProvider>
        <Header />
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact />
        <Footer />
      </NavProvider>
    </div>
  );
}
