import { Card } from './ui/card';
import { Code, Database, Cloud, TestTube, Settings, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C#', 'Python', 'JavaScript', 'SQL', 'TypeScript'],
      color: 'tech-blue'
    },
    {
      icon: Settings,
      title: 'Frameworks & Libraries',
      skills: ['.NET Core', 'ReactJS', 'Robot Framework', 'Entity Framework'],
      color: 'tech-purple'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQL Server', 'MongoDB', 'Azure SQL', 'Database Design'],
      color: 'tech-green'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: ['Azure', 'GitHub Actions', 'Jenkins', 'Docker', 'CI/CD'],
      color: 'tech-blue'
    },
    {
      icon: TestTube,
      title: 'Testing & Automation',
      skills: ['NUnit', 'JUnit', 'Robot Framework', 'Test Automation'],
      color: 'tech-purple'
    },
    {
      icon: Cpu,
      title: 'AI/ML & Others',
      skills: ['YOLO', 'Computer Vision', 'Azure DevOps', 'Git'],
      color: 'tech-green'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-surface border-border/50 glow-on-hover group h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm bg-surface-alt/50 text-foreground rounded-full border border-border/30 hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-surface border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently expanding my expertise in test automation with Robot Framework and exploring 
                advanced Python automation techniques.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;