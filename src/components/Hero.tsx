import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="mb-8">
          <img 
            src={`${import.meta.env.BASE_URL}assets/profile/profile.jpg`}
            alt="Profile Picture"
            className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-blue-600"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl tracking-tight">
            Hi, I'm <span className="text-blue-600">Jerick Parallag</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600">
            Web Developer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
         I'm passionate about web development and design, bringing ideas to life through code and creativity.
        </p>
        
        <div className="flex gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View My Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center pt-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:juan@example.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}