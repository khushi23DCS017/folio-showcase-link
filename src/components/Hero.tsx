
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-aqua font-mono mb-5">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy">
            John Doe
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate">
            I build things for the web.
          </h2>
          
          <p className="text-lg text-slate mb-8 max-w-2xl">
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild className="bg-navy hover:bg-lightNavy text-white">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy/5">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-aqua transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-aqua transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:johndoe@example.com" 
              className="text-slate hover:text-aqua transition-colors"
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
