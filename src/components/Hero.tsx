
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-aqua font-mono mb-5">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy dark:text-white">
            John Doe
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate dark:text-lightSlate">
            I build things for the web.
          </h2>
          
          <p className="text-lg text-slate dark:text-lightSlate mb-8 max-w-2xl">
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild className="bg-navy hover:bg-lightNavy dark:bg-aqua dark:text-navy dark:hover:bg-aqua/90 text-white transition-all duration-300 hover-glow">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-navy text-navy dark:border-lightSlate dark:text-lightSlate hover:bg-navy/5 dark:hover:bg-white/5 transition-all duration-300">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-aqua dark:text-lightSlate dark:hover:text-aqua transition-colors transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-aqua dark:text-lightSlate dark:hover:text-aqua transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:johndoe@example.com" 
              className="text-slate hover:text-aqua dark:text-lightSlate dark:hover:text-aqua transition-colors transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
