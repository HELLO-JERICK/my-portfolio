import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'Trabacco: An Application for Tracking and Monitoring Tobacco Production with Geo-Mapping',
      description: 'A web and mobile application designed to track and monitor tobacco production with integrated geo-mapping features. The system allows users to record production data, visualize farm locations on map, and generate reports for better agricultural management and monitoring.',
      image: '/assets/project/project1.png',
      tags: ['Laravel', 'React JS', 'MariaDB MySQL', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'QR-Based Attendance System',
      description: 'A digital attendance management system that uses QR code technology for quick and efficient attendance tracking. Students  can scan QR codes to mark their attendance, and administrators can view real-time attendance records and generate reports.',
      image: '/assets/project/project2.png',
      tags: ['Laravel', 'MariaDB MySQL', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow group relative"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-9 px-3 text-sm border border-gray-300 bg-transparent hover:bg-gray-50 gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-9 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
