
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p 
            className="text-accent font-mono mb-5 animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
          >
            Hi, my name is
          </p>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy dark:text-white animate-fade-in text-gradient"
            style={{ animationDelay: '0.3s' }}
          >
            John Doe
          </h1>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate dark:text-lightSlate animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            I build things for the web.
          </h2>
          
          <p 
            className="text-lg text-slate dark:text-lightSlate mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button asChild className="bg-gradient-to-r from-purple-default to-indigo-default hover:opacity-90 text-white shadow-lg hover:shadow-accent/30 transition-all duration-300 group">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-navy text-navy dark:border-lightSlate dark:text-lightSlate hover:bg-accent/10 dark:hover:bg-accent/10 transition-all duration-300"
            >
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>
          
          <div 
            className="flex space-x-6 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-accent dark:text-lightSlate dark:hover:text-accent transition-colors transform hover:scale-125 duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-accent dark:text-lightSlate dark:hover:text-accent transition-colors transform hover:scale-125 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
            </a>
            <a 
              href="mailto:johndoe@example.com" 
              className="text-slate hover:text-accent dark:text-lightSlate dark:hover:text-accent transition-colors transform hover:scale-125 duration-300"
              aria-label="Email"
            >
              <Mail size={24} className="animate-bounce-subtle" style={{ animationDelay: '0.6s' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
