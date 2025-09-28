import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text animate-fade-in">
          Quem Sou Eu
        </h2>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-6">
          Sou Alberto Hamuyela, um desenvolvedor web apaixonado por transformar ideias em experiências digitais intuitivas e impactantes. Com expertise em React, Next.js, Tailwind CSS e JavaScript moderno, crio aplicações responsivas que unem design e funcionalidade.
        </p>
        <div className="text-left max-w-2xl mx-auto text-secondary">
          <ul className="list-disc list-inside space-y-2">
            <li>Construo interfaces dinâmicas com React e Next.js, garantindo performance e acessibilidade.</li>
            <li>Desenvolvo soluções escaláveis com foco em código limpo e melhores práticas de desenvolvimento.</li>
            <li>Apaixonado por criar experiências visuais modernas usando Tailwind CSS e animações fluidas.</li>
          </ul>
        </div>
        <Link
          href="#contact"
          className="cta-button inline-block px-6 py-3 my-10"
        >
          Entre em Contato
        </Link>
      </div>
    </section>
  );
}