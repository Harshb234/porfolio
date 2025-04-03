
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComicPanel from "./ComicPanel";
import { Code, Server, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={40} />,
      color: "text-spiderverse-pink-light",
      skills: ["JavaScript", "Python", "C++", "Java", "C", "SQL"],
      description: "The core languages I use to build applications across different platforms."
    },
    {
      title: "DevOps & Cloud",
      icon: <Server size={40} />,
      color: "text-spiderverse-blue-light",
      skills: ["AWS", "Docker", "Kubernetes", "Cloud Computing"],
      description: "Tools and platforms I leverage to build and deploy scalable infrastructure."
    },
    {
      title: "Web Development",
      icon: <Globe size={40} />,
      color: "text-spiderverse-yellow",
      skills: ["React.js", "Three.js", "GSAP", "HTML/CSS", "APIs", "Responsive Design"],
      description: "Frontend technologies I use to create engaging web experiences with interactive 3D elements."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate skill categories
    const categories = section.querySelectorAll(".skill-category");
    
    gsap.fromTo(categories, 
      { 
        x: -50,
        opacity: 0
      },
      { 
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-spiderverse-blue-dark to-spiderverse-purple-dark opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-spiderverse-blue-light">My Multiverse Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-category"
            >
              <ComicPanel 
                variant={index % 2 === 0 ? "default" : "alt"} 
                className="h-full flex flex-col"
              >
                <div className={`${category.color} mb-4 flex items-center justify-center`}>
                  {category.icon}
                </div>
                
                <h3 className={`text-2xl font-comic ${category.color} mb-4 text-center`}>
                  {category.title}
                </h3>
                
                <p className="text-white mb-6 text-center">
                  {category.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-spiderverse-black/40 rounded-md p-2 text-center"
                    >
                      <p className="text-white font-medium hover:text-glow hover:scale-105 transition-all">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </ComicPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
