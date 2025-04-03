
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComicPanel from "./ComicPanel";
import { Calendar, MapPin, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const experiences: Experience[] = [
    {
      title: "Senior DevOps Engineer",
      company: "Multiverse Technologies",
      location: "San Francisco, CA",
      date: "2022 - Present",
      description: [
        "Led the implementation of CI/CD pipelines, reducing deployment time by 70%",
        "Designed and maintained Kubernetes clusters across multiple cloud providers",
        "Automated infrastructure provisioning with Terraform and Ansible"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Web Slingers Inc.",
      location: "New York, NY",
      date: "2019 - 2022",
      description: [
        "Developed responsive web applications using React and Vue",
        "Implemented state management solutions with Redux and Vuex",
        "Collaborated with design team to create intuitive user interfaces"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Spider Tech Solutions",
      location: "Chicago, IL",
      date: "2017 - 2019",
      description: [
        "Built RESTful APIs using Node.js and Express",
        "Designed and implemented database schemas with MongoDB and PostgreSQL",
        "Created frontend interfaces with React and integrated with backend services"
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    
    if (!section || !timeline) return;

    // Animate the timeline
    gsap.fromTo(timeline,
      { 
        height: 0,
        opacity: 0
      },
      { 
        height: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      }
    );

    // Animate the experience items
    const experienceItems = section.querySelectorAll(".experience-item");
    
    experienceItems.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0
        },
        { 
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-spiderverse-black to-spiderverse-purple-dark opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-spiderverse-blue-light">My Multiverse Timeline</h2>
        
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div ref={timelineRef} className="w-1 bg-gradient-to-b from-spiderverse-blue via-spiderverse-purple to-spiderverse-pink rounded-full mx-auto"></div>
          </div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} experience-item`}>
                {/* Empty div for alignment */}
                <div className="md:w-1/2"></div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-spiderverse-yellow border-4 border-spiderverse-purple animate-pulse"></div>
                </div>
                
                {/* Experience content */}
                <div className="md:w-1/2 md:px-8">
                  <ComicPanel variant={index % 2 === 0 ? "default" : "alt"} className={index % 2 === 0 ? "rotated-panel" : "rotated-panel-reverse"}>
                    <h3 className="text-2xl font-comic text-spiderverse-yellow mb-1">
                      {exp.title}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-spiderverse-pink-light mb-1">
                        <Briefcase size={16} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center text-spiderverse-blue-light mb-1">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <div className="flex items-center text-white/70">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                    
                    <ul className="text-white space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="text-spiderverse-yellow mr-2">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </ComicPanel>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
