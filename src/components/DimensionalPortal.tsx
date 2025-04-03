
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface DimensionalPortalProps {
  className?: string;
}

const DimensionalPortal: React.FC<DimensionalPortalProps> = ({ className }) => {
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const portal = portalRef.current;
    if (!portal) return;
    
    // Create the portal animation
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(portal, { 
      rotation: 360, 
      duration: 15, 
      ease: "none" 
    });

    // Create the portal light effect
    gsap.to(portal.querySelector(".portal-inner"), {
      boxShadow: "0 0 30px 10px rgba(155, 135, 245, 0.8)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={portalRef} 
      className={`relative w-64 h-64 ${className || ""}`}
    >
      <div className="absolute inset-0 rounded-full border-8 border-spiderverse-purple animate-spin"></div>
      <div className="absolute inset-2 rounded-full border-4 border-spiderverse-pink animate-spin" style={{ animationDuration: "8s" }}></div>
      <div className="absolute inset-4 rounded-full border-4 border-spiderverse-blue animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }}></div>
      <div className="absolute inset-6 rounded-full border-4 border-spiderverse-yellow animate-spin" style={{ animationDuration: "4s" }}></div>
      <div className="portal-inner absolute inset-8 rounded-full bg-gradient-to-br from-spiderverse-purple-dark via-spiderverse-purple to-spiderverse-pink-dark opacity-70"></div>
    </div>
  );
};

export default DimensionalPortal;
