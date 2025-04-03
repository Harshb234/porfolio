
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SpiderWebAnimation = ({ className }) => {
  const webRef = useRef(null);

  useEffect(() => {
    const web = webRef.current;
    if (!web) return;

    const lines = web.querySelectorAll(".web-line");
    
    gsap.set(lines, { 
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      opacity: 0.7
    });
    
    // Animate the web lines to appear
    gsap.to(lines, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.1,
      ease: "power1.inOut"
    });

    return () => {
      gsap.killTweensOf(lines);
    };
  }, []);

  return (
    <svg 
      ref={webRef}
      viewBox="0 0 400 400"
      className={`w-full h-full absolute top-0 left-0 pointer-events-none ${className || ""}`}
    >
      {/* Web center */}
      <circle cx="200" cy="200" r="4" fill="#FFFFFF" opacity="0.8" />
      
      {/* Web radial lines */}
      <line className="web-line" x1="200" y1="200" x2="200" y2="0" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="400" y2="200" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="200" y2="400" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="0" y2="200" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="341" y2="59" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="341" y2="341" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="59" y2="341" stroke="#FFFFFF" strokeWidth="1" />
      <line className="web-line" x1="200" y1="200" x2="59" y2="59" stroke="#FFFFFF" strokeWidth="1" />
      
      {/* Web concentric circles */}
      <circle className="web-line" cx="200" cy="200" r="50" fill="none" stroke="#FFFFFF" strokeWidth="1" />
      <circle className="web-line" cx="200" cy="200" r="100" fill="none" stroke="#FFFFFF" strokeWidth="1" />
      <circle className="web-line" cx="200" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="1" />
      <circle className="web-line" cx="200" cy="200" r="180" fill="none" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
};

export default SpiderWebAnimation;
