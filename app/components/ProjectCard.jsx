
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} className="text-blue-400 hover:underline">Ver Projeto</a>
    </div>
  );
}