
import { gsap } from "gsap";

export const createPortalAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    rotation: 360,
    duration: 15,
    repeat: -1,
    ease: "none"
  });
};

export const createGlitchAnimation = (element: HTMLElement) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  
  tl.to(element, {
    skewX: 10,
    duration: 0.1
  })
  .to(element, {
    skewX: -10,
    duration: 0.1
  })
  .to(element, {
    skewX: 0,
    duration: 0.1
  });
  
  return tl;
};

export const createDimensionalShift = (element: HTMLElement) => {
  gsap.fromTo(element,
    { 
      x: -50,
      opacity: 0,
      scale: 0.8
    },
    { 
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }
  );
};

export const createWebAnimation = (element: SVGElement) => {
  const lines = element.querySelectorAll("path, line, circle");
  
  gsap.set(lines, { 
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    opacity: 0.7
  });
  
  gsap.to(lines, {
    strokeDashoffset: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power1.inOut"
  });
};

export const createHoverAnimation = (element: HTMLElement) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
};
