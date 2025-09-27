import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-purple-600">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Oi, eu sou Alberto Hamuyela</h2>
        <p className="text-xl mb-6">Desenvolvedor apaixonado por criar experiências web incríveis</p>
        <Link href="#projects" className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700">Ver Meus Projetos</Link>
      </div>
    </section>
  );
}