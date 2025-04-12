
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product catalog, shopping cart, user authentication, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality, task categories, and real-time updates.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion"]
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media analytics with interactive charts, metrics tracking, and report generation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      technologies: ["Vue.js", "Vuex", "D3.js", "Express", "PostgreSQL"]
    }
  ];
  
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
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
