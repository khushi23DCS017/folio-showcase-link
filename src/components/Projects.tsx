
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('projects.eduRadar.title'),
      description: t('projects.eduRadar.description'),
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      githubLink: "https://github.com",
      demoLink: "https://example.com/demo",
      technologies: ["React", "Node.js", "Firebase", "GPS", "Real-time Chat"],
      techStack: t('projects.eduRadar.techStack')
    },
    {
      title: t('projects.inclusivePay.title'),
      description: t('projects.inclusivePay.description'),
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      githubLink: "https://github.com",
      demoLink: "https://example.com/demo",
      technologies: ["HTML", "CSS", "JavaScript", "React", "AI"],
      techStack: t('projects.inclusivePay.techStack')
    }
  ];
  
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{t('projects.title')}</h2>
        <div className="flex flex-col space-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
              techStack={project.techStack}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
