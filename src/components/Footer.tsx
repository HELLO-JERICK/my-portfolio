import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-medium text-white mb-4">Jerick Parallag</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Web Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Jerick Parallag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
