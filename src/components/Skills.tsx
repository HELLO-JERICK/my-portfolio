import { Badge } from '@/components/ui/badge';

export function Skills() {
    const skillCategories = [
      {
        category: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript', 'React Basics','Vue Basics', 'Tailwind CSS', 'Flutter', 'Ionic'],
      },
      {
        category: 'Backend',
        skills: ['PHP', 'MySQL', 'REST API Basics'],
      },
      {
        category: 'Tools & Others',
        skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Responsive Design'],
      },
    ];
  
    return (
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl mb-6 text-blue-600">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-sm py-1.5 px-3 bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
