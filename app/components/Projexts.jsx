import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Projeto Um',
      description: 'Uma aplicação web construída com React e Tailwind CSS.',
      link: '#',
    },
    {
      title: 'Projeto Dois',
      description: 'Uma plataforma de e-commerce com UI moderna e UX fluida.',
      link: '#',
    },
    {
      title: 'Projeto Três',
      description: 'Um blog pessoal construído com Next.js e Markdown.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text animate-fade-in">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}