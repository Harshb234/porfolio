
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-spiderverse-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-spiderverse-black to-spiderverse-purple-dark/40 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <p className="font-comic">
              © {new Date().getFullYear()} Peter Parker | Spider-Verse DevOps
            </p>
          </div>
          
          <div>
            <p className="text-white/70 text-sm">
              Crafted with <span className="text-spiderverse-pink">❤</span> across the Spider-Verse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
