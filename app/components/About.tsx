import Link from "next/link"
export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre Mim</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Sou um desenvolvedor web apaixonado por criar aplicações responsivas e amigáveis. 
          Tenho experiência com React, Next.js, Tailwind CSS e JavaScript moderno.
        </p>
      </div>
    </section>
  );
}