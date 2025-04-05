
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import SpiderWebAnimation from "./SpiderWebAnimation";

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section title
    gsap.fromTo(section.querySelector(".section-title"),
      { opacity: 0, y: -20 },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate form
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 40 },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate social icons
    const socialIcons = section.querySelectorAll(".social-icon");
    gsap.fromTo(socialIcons,
      { scale: 0, opacity: 0 },
      { 
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section.querySelector(".social-container"),
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // In a real app, you would send this data to a server
    
    // Show success toast
    toast.success("Thanks for reaching out! I'll get back to you soon.");
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    
    // Add web-shooting animation
    const button = document.querySelector(".submit-button");
    if (button) {
      gsap.to(button, {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Create web stream effect
          const section = sectionRef.current;
          const rect = button.getBoundingClientRect();
          const web = document.createElement("div");
          
          web.className = "absolute bg-white z-50 rounded-full";
          web.style.width = "10px";
          web.style.height = "10px";
          web.style.top = `${rect.top + rect.height / 2}px`;
          web.style.left = `${rect.left + rect.width / 2}px`;
          
          document.body.appendChild(web);
          
          gsap.to(web, {
            width: "2px",
            height: "2px",
            top: window.innerHeight / 2,
            left: window.innerWidth / 2,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              document.body.removeChild(web);
            }
          });
        }
      });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-spiderverse-purple-dark to-spiderverse-black opacity-90"></div>
      
      <SpiderWebAnimation className="opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-spiderverse-pink-light">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border-spiderverse-purple text-white focus:border-spiderverse-blue focus:ring-spiderverse-blue"
                  placeholder="Harsh Bmabatkar"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border-spiderverse-purple text-white focus:border-spiderverse-blue focus:ring-spiderverse-blue"
                  placeholder="harshbambatkar0502@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border-spiderverse-purple text-white focus:border-spiderverse-blue focus:ring-spiderverse-blue min-h-[150px]"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="neo-button submit-button flex items-center"
              >
                <span>Send Message</span>
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center space-y-10">
            <div className="p-6 bg-spiderverse-black/50 rounded-lg border-2 border-spiderverse-purple/30">
              <h3 className="text-2xl font-comic text-spiderverse-yellow mb-4">Get In Touch</h3>
              <p className="text-white mb-6">
                Whether you're looking for a developer to join your team, have a project in mind, or just want to connect, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:harshbambatkar0502@gmail.com" 
                  className="flex items-center text-white hover:text-spiderverse-blue transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <span>harshbambatkar0502@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="social-container flex justify-center gap-6">
              <a 
                href="https://github.com/Harshb234" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon p-4 bg-spiderverse-black/50 rounded-full border-2 border-spiderverse-purple/30 text-white hover:text-spiderverse-yellow hover:border-spiderverse-yellow transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/harsh-bambatkar-728827256" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon p-4 bg-spiderverse-black/50 rounded-full border-2 border-spiderverse-purple/30 text-white hover:text-spiderverse-pink hover:border-spiderverse-pink transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              
              <a 
                href="mailto:harshbambatkar0502@gmail.com" 
                className="social-icon p-4 bg-spiderverse-black/50 rounded-full border-2 border-spiderverse-purple/30 text-white hover:text-spiderverse-blue hover:border-spiderverse-blue transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
