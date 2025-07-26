import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  Code, 
  Globe, 
  Settings, 
  TestTube, 
  Database, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions using .NET Core, C#, and modern architectures.',
      features: ['RESTful APIs', 'Microservices', 'Database Integration', 'Performance Optimization'],
      color: 'tech-blue'
    },
    {
      icon: Globe,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development with modern frameworks and technologies.',
      features: ['React.js Frontend', 'API Development', 'Database Design', 'Responsive Design'],
      color: 'tech-purple'
    },
    {
      icon: Settings,
      title: 'CI/CD & DevOps Automation',
      description: 'Streamlined deployment processes and automated workflows for efficient development.',
      features: ['GitHub Actions', 'Azure DevOps', 'Docker Containers', 'Automated Testing'],
      color: 'tech-green'
    },
    {
      icon: TestTube,
      title: 'Test Automation',
      description: 'Comprehensive testing strategies and automated test suites for quality assurance.',
      features: ['Unit Testing', 'Integration Testing', 'Robot Framework', 'Quality Assurance'],
      color: 'tech-blue'
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Efficient database architectures and performance optimization for scalable applications.',
      features: ['SQL Server', 'MongoDB', 'Query Optimization', 'Data Modeling'],
      color: 'tech-purple'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional software development services tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-surface border-border/50 glow-on-hover group h-full flex flex-col"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary/50 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-surface border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with modern, 
                scalable, and efficient software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="glow-on-hover"
                  asChild
                >
                  <a href="mailto:doraprasad2111@example.com?subject=Project%20Inquiry">
                  Get Started
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glow-on-hover"
                  asChild
                >
                  <a href="tel:+917893311049">
                  Schedule a Call
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;