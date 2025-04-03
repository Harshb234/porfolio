
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveLink?: string;
}

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects: Project[] = [
    {
      title: "Multi-Dimensional CMS",
      description: "A content management system that spans across different design dimensions, allowing for flexible content organization.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      tags: ["React", "Node.js", "MongoDB", "GraphQL"],
      github: "#",
      liveLink: "#"
    },
    {
      title: "Web-Slinger DevOps Dashboard",
      description: "A real-time monitoring dashboard for DevOps teams to track infrastructure and application performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Vue", "D3.js", "AWS", "Docker"],
      github: "#",
      liveLink: "#"
    },
    {
      title: "Spider-Commerce Platform",
      description: "A full-featured e-commerce platform with inventory management, payment processing, and customer support.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      github: "#",
      liveLink: "#"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set up project animations
    projectRefs.current.forEach((project, index) => {
      if (!project) return;
      
      gsap.set(project, { 
        opacity: 0,
        y: 50
      });
      
      gsap.to(project, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: project,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
      
      // Hover animation
      project.addEventListener("mouseenter", () => {
        gsap.to(project, {
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      project.addEventListener("mouseleave", () => {
        gsap.to(project, {
          scale: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-spiderverse-purple-dark to-spiderverse-black opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-spiderverse-yellow">My Multiverse Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-300 bg-spiderverse-black/60 border-2 border-spiderverse-purple/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiderverse-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-comic text-white">
                  {project.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-white mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-spiderverse-purple/30 text-spiderverse-pink-light rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-spiderverse-blue transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-spiderverse-pink transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
