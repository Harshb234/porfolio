
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DimensionalPortal from "./DimensionalPortal";
import SpiderWebAnimation from "./SpiderWebAnimation";

const HeroSection = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const name = nameRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;
    
    if (!hero || !name || !title || !button) return;

    const tl = gsap.timeline();

    // Setup initial state
    gsap.set([name, title, button], { opacity: 0, y: 20 });

    // Animate elements
    tl.to(name, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    // Create floating animation for the hero section
    gsap.to(hero.querySelector(".hero-content"), {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center web-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-spiderverse-purple-dark via-spiderverse-purple-dark to-spiderverse-black opacity-90"></div>
      
      <SpiderWebAnimation />
      
      <div className="container mx-auto px-4 z-10 hero-content text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 
              ref={nameRef}
              className="glitch-text font-comic text-5xl sm:text-6xl md:text-7xl text-white mb-4"
              data-text="Peter Parker"
            >
              Peter Parker
            </h1>
            <p 
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl text-spiderverse-yellow font-comic mb-8"
            >
              <span className="block">DevOps &</span>
              <span className="block">Frontend Developer</span>
            </p>
            <button
              ref={buttonRef}
              onClick={scrollToProjects}
              className="neo-button"
            >
              View My Multiverse
            </button>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <DimensionalPortal className="animate-float" />
          </div>
        </div>
      </div>
      
      {/* Animated Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28L2 14L5 11L16 22L27 11L30 14L16 28Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
