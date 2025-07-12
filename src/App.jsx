import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronUp, Menu, X } from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percent = (winScroll / height) * 100;
      setScrollProgress(scrolled_percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <Progress value={scrollProgress} className="h-full" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isScrolled ? 'mt-4' : 'mt-8'
      }`}>
        <Card className={`px-6 py-3 backdrop-blur-md bg-white/80 border-gray-200/50 shadow-lg transition-all duration-300 ${
          isScrolled ? 'scale-95' : 'scale-100'
        }`}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            <span className="font-semibold text-gray-800">Vadranapu Pavan</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </Card>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <Card className="mt-2 p-4 backdrop-blur-md bg-white/90 border-gray-200/50 shadow-lg md:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Card>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="about" className="py-12">
          <About />
        </section>
        
        <section id="education" className="py-12 bg-white/50">
          <Education />
        </section>
        
        <section id="skills" className="py-12">
          <Skills />
        </section>
        
        <section id="projects" className="py-12 bg-white/50">
          <Projects />
        </section>
        
        <section id="certifications" className="py-12">
          <Certifications />
        </section>
        
        <section id="contact" className="py-12 bg-white/50">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-400">
            © 2024 Vadranapu Pavan. Crafted with Love and React.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 rounded-full p-3 shadow-lg"
          size="sm"
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}

export default App;