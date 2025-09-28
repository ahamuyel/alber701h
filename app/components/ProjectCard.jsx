import Link from 'next/link';

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-2 text-text">{title}</h3>
      <p className="text-base text-secondary mb-4">{description}</p>
      <Link
        href={link}
        className="inline-block bg-primary text-text px-4 py-2 rounded-full font-semibold hover:bg-accent transition-colors"
      >
        Ver Projeto
      </Link>
    </div>
  );
}