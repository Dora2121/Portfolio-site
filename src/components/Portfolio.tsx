import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Clinical Automation System',
      description: 'Secure hospital platform with role-based access and real-time chat functionality.',
      longDescription: 'A comprehensive clinical automation system designed for hospitals and healthcare facilities. Features secure role-based access control, real-time communication between medical staff, patient management, and automated workflow processes.',
      image: '/api/placeholder/600/400',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'SignalR', 'Azure'],
      features: [
        'Role-based access control for different medical staff',
        'Real-time chat and communication system',
        'Patient management and records',
        'Automated workflow processes',
        'Secure data handling and HIPAA compliance'
      ],
      outcomes: [
        'Improved hospital workflow efficiency by 40%',
        'Reduced communication delays between departments',
        'Enhanced data security and compliance'
      ],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Nest Navigate',
      description: 'Real estate full-stack application with live listings and MongoDB integration.',
      longDescription: 'A modern real estate platform that connects buyers, sellers, and agents. Features advanced search capabilities, real-time property listings, interactive maps, and comprehensive property management tools.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Google Maps API'],
      features: [
        'Real-time property listings and updates',
        'Advanced search and filtering options',
        'Interactive maps with property locations',
        'User authentication and profiles',
        'Property management dashboard'
      ],
      outcomes: [
        'Streamlined property search experience',
        'Increased user engagement by 60%',
        'Reduced property listing time by 50%'
      ],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Vehicle Number Plate Detection',
      description: 'YOLO-based number plate detection system for smart traffic management.',
      longDescription: 'An intelligent traffic management system using YOLO (You Only Look Once) deep learning model for real-time vehicle number plate detection and recognition. Designed for smart city traffic monitoring and automated toll collection.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'Computer Vision'],
      features: [
        'Real-time number plate detection and recognition',
        'High accuracy YOLO-based deep learning model',
        'Traffic monitoring and analytics',
        'Automated violation detection',
        'Integration with traffic management systems'
      ],
      outcomes: [
        'Achieved 95% accuracy in plate detection',
        'Reduced manual traffic monitoring workload',
        'Enabled automated traffic violation detection'
      ],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing some of my best work and technical achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden bg-surface border-border/50 glow-on-hover group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-surface-alt/50 flex items-center justify-center">
                  <div className="text-muted-foreground text-4xl">
                    🚀
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Project Description */}
                          <div>
                            <h4 className="font-semibold mb-2">About This Project</h4>
                            <p className="text-muted-foreground">{project.longDescription}</p>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <h4 className="font-semibold mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <h4 className="font-semibold mb-3">Project Outcomes</h4>
                            <ul className="space-y-2">
                              {project.outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4 pt-4">
                            <Button asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-surface border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Want to See More?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects and contributions to open source.
              </p>
              <Button className="glow-on-hover" asChild>
                <a href="https://github.com/Dora2121" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;