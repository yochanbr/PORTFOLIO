import ReelStrip from "@/components/ReelStrip";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FocusController from "@/components/FocusController";
import Hero from "@/components/Hero";

export default function DesktopPage() {
  return (
    <>
      <FocusController />
      <Hero />
      <ReelStrip />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
