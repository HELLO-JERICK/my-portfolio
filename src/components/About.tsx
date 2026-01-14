import { Code2, Palette, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Learning',
      description: 'Continuously studying new web technologies and programming concepts.',
    },
    {
      icon: Palette,
      title: 'Creativity',
      description: 'Trying to create simple but nice-looking websites and interfaces.',
    },
    {
      icon: Zap,
      title: 'Eager',
      description: 'Always excited to learn from others and improve my coding skills.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-16">
          <p>
            I'm a web developer passionate about creating clean, functional, and visually appealing websites. 
            I enjoy working with modern web technologies to build user-friendly applications that solve real problems.
          </p>
          <p>
            My focus is on both frontend development and design, where I combine technical skills with an eye for 
            aesthetics. I believe that great web experiences come from the perfect balance of functionality and 
            beautiful design.
          </p>
          <p>
            When I'm not coding, I'm exploring new design trends and working on projects 
            that challenge me to grow as a developer and designer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}