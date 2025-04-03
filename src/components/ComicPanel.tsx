
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alt";
  delay?: number;
}

const ComicPanel: React.FC<ComicPanelProps> = ({ 
  children, 
  className = "", 
  variant = "default",
  delay = 0 
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    // Initial setup
    gsap.set(panel, { 
      opacity: 0,
      y: 30,
      scale: 0.97
    });

    // Create animation
    const animation = gsap.to(panel, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: panel,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      animation.kill();
    };
  }, [delay]);

  const baseClass = variant === "alt" ? "comic-panel-alt" : "comic-panel";

  return (
    <div 
      ref={panelRef} 
      className={`${baseClass} panel-shadow p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default ComicPanel;
