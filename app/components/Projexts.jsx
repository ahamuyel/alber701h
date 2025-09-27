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
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}