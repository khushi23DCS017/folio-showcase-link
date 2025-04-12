
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  demoLink, 
  githubLink, 
  technologies, 
  index 
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <Card 
      className={`overflow-hidden border-0 shadow-lg hover:shadow-xl animate-fade-in dark:bg-lightNavy/80 dark:text-white transition-all duration-300 rounded-lg hover-glow`} 
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} h-full`}>
        {/* Project Image */}
        <div className="w-full md:w-1/2 relative group overflow-hidden">
          <div className="absolute inset-0 bg-navy opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Project Details */}
        <CardContent className="flex flex-col justify-between w-full md:w-1/2 p-6 bg-white dark:bg-lightNavy/80">
          <div>
            <h3 className="text-xl font-bold mb-3 text-navy dark:text-aqua">{title}</h3>
            <p className="text-slate dark:text-lightSlate mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <Badge key={tech} className="bg-secondary text-navy dark:bg-navy/50 dark:text-lightSlate hover:bg-secondary/80 dark:hover:bg-navy/70 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4 mt-2">
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy dark:text-aqua hover:text-aqua dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy dark:text-aqua hover:text-aqua dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
