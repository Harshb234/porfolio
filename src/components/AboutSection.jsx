
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComicPanel from "./ComicPanel";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    
    if (!section || !image) return;

    // Animate image
    gsap.fromTo(image, 
      { 
        scale: 0.8,
        opacity: 0,
        rotation: -5
      },
      { 
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: image,
          start: "top bottom-=100",
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
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-spiderverse-purple-dark to-spiderverse-blue-dark opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-spiderverse-pink-light">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="relative max-w-sm">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Harsh - Computer Science Engineer"
                className="rounded-lg border-4 border-spiderverse-yellow relative z-10 w-full h-auto"
              />
              <div className="absolute -inset-3 bg-gradient-to-r from-spiderverse-pink to-spiderverse-blue rounded-lg opacity-50 blur-lg -z-10"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <ComicPanel delay={0.2} className="rotated-panel">
              <h3 className="text-2xl font-comic text-spiderverse-yellow mb-3">Education</h3>
              <p className="text-white">
                Currently pursuing B-Tech in Computer Science Engineering at Vishwakarma University (2023-2026) with a 7.9 CGPA. Previously completed a Diploma in Information Technology from Government Polytechnic Nagpur (2020-2023) with an 8.3 CGPA.
              </p>
            </ComicPanel>
            
            <ComicPanel variant="alt" delay={0.4} className="rotated-panel-reverse">
              <h3 className="text-2xl font-comic text-spiderverse-pink-light mb-3">Experience</h3>
              <p className="text-white">
                Worked as a Web Development Intern at Sampurva Technologies, Nagpur (June-August 2022), where I developed responsive web applications and gained hands-on experience with databases and APIs. My journey has equipped me with both theoretical knowledge and practical skills.
              </p>
            </ComicPanel>
            
            <ComicPanel delay={0.6} className="rotated-panel">
              <h3 className="text-2xl font-comic text-spiderverse-blue-light mb-3">Projects & Skills</h3>
              <p className="text-white">
                Built a React.js Quiz App with API integration and an Apple iPhone website using React.js and Three.js for 3D modeling. I'm proficient in C++, Java, Python, JavaScript, and cloud technologies like AWS, Docker, and Kubernetes. I can communicate fluently in English, Hindi, and Marathi.
              </p>
            </ComicPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
