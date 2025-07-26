import { Button } from './ui/button';
import { Card } from './ui/card';
import { Download, GraduationCap, Code, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: '2+ Years Experience',
      description: 'Backend and Full-Stack Development'
    },
    {
      icon: Briefcase,
      title: 'Agile Environment',
      description: 'Experienced in collaborative development'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get to know more about my journey and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Passionate Software Engineer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate and solution-oriented Software Engineer with over 2 years of 
                  hands-on experience in backend and full-stack development. My expertise spans 
                  across .NET, C#, SQL, and ReactJS, enabling me to build robust and scalable applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I thrive in agile environments where collaboration and innovation drive success. 
                  My approach to problem-solving combines technical expertise with creative thinking, 
                  allowing me to deliver meaningful digital experiences that make a real impact.
                </p>
              </div>

              {/* Education */}
              <Card className="p-6 bg-surface border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-muted-foreground">
                      B.Tech in Computer Science and Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sasi Institute of Technology and Engineering, 2022
                    </p>
                  </div>
                </div>
              </Card>

              {/* Current Learning */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Currently Learning</h4>
                <p className="text-muted-foreground">
                  Robot Framework for test automation and expanding my Python automation skills 
                  to stay current with industry trends and best practices.
                </p>
              </div>

              <a
                href="/DoraPrasad_Software_Engineer.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center glow-on-hover px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-surface border-border/50 glow-on-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;