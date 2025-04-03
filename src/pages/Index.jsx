
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Set up smooth scrolling
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      // Create a background color animation for each section
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        toggleClass: { targets: section, className: "active" },
        onEnter: () => {
          console.log("Entered section:", section.id);
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-spiderverse-black relative">
      {/* Cursor trail effect (simplified) */}
      <div className="fixed inset-0 pointer-events-none z-50" id="cursor-trail"></div>
      
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
