
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: t('projects.taskApp.title'),
      description: t('projects.taskApp.description'),
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion"]
    },
    {
      title: t('projects.dashboard.title'),
      description: t('projects.dashboard.description'),
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      technologies: ["Vue.js", "Vuex", "D3.js", "Express", "PostgreSQL"]
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
