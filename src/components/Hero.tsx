import { Button } from './ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/dora-profile.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:doraprasad2111@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="floating absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="floating absolute bottom-20 left-20 w-24 h-24 bg-tech-green/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-1 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-floating glow-on-hover">
              <img
                src={profileImage}
                alt="Dora Prasad"
                className="w-full h-full object-cover"
              />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-lg animate-glow-pulse"></div>
            </div>
            </div>

            {/* Hero Content */}
            <div className="order-2 md:order-2 text-center md:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Palakodeti B N M R Dora Prasad</span>
                <br />
              <p className ="text-primary font-medium">Software Engineer</p>
              </h1>
              <p className="text-xl text-muted-foreground">
                Building Scalable, Secure, and Smart Applications
              </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a passionate and solution-oriented Software Engineer with 2+ years of hands-on 
              experience in backend and full-stack development using .NET, C#, SQL, and ReactJS. 
              I thrive in agile environments, love solving real-world problems, and enjoy working 
              on meaningful digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="glow-on-hover" onClick={() => scrollToSection('portfolio')}>
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="glow-on-hover" onClick={() => scrollToSection('contact')}>
                Contact
              </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="glow-on-hover"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;