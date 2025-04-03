
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 ? "py-3 bg-spiderverse-purple-dark/90 backdrop-blur-md" : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="font-comic text-2xl text-white hover:text-spiderverse-blue transition-colors"
          >
            SpiderDev
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-comic text-lg text-white hover:text-spiderverse-pink hover:scale-110 transition-all transform-gpu"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-spiderverse-purple-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-comic text-xl text-white py-2 hover:text-spiderverse-pink transition-colors text-left animate-spider-swing"
                style={{ animationDelay: `${parseInt(item.length.toString(), 10) * 0.1}s` }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
