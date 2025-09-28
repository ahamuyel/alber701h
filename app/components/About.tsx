import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-600/10 to-coral-500/10 z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center my-16 ">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left: List */}
          <div className="md:w-1/2 text-gray-700">
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coral-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Desenvolvimento de interfaces dinâmicas e acessíveis com React e Next.js, priorizando performance e escalabilidade.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coral-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a6 6 0 100 12m0-12a6 6 0 110 12m-6-6h12" />
                </svg>
                Criação de soluções robustas com código limpo, seguindo as melhores práticas de desenvolvimento web.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coral-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Design de experiências visuais modernas com Tailwind CSS, incorporando animações fluidas e intuitivas.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coral-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Desenvolvimento de interfaces dinâmicas e acessíveis com React e Next.js, priorizando performance e escalabilidade.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coral-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a6 6 0 100 12m0-12a6 6 0 110 12m-6-6h12" />
                </svg>
                Criação de soluções robustas com código limpo, seguindo as melhores práticas de desenvolvimento web.
              </li>
            </ul>
          </div>
          {/* Right: Text and Button */}
          <div className="md:w-1/2 text-center">
            <p className="text-sm md:text-xl max-w-2xl mx-auto mt-4 mb-4">
              Sou Alberto Hamuyela, um desenvolvedor web dedicado a criar soluções digitais inovadoras e de alto impacto. Com sólida experiência em React, Next.js, Tailwind CSS e JavaScript moderno, desenvolvo aplicações responsivas que combinam design sofisticado, performance otimizada e usabilidade excepcional.
            </p>
            <Link
              href="#contact"
              className="cta-button inline-block px-6 py-3 my-10 bg-teal-600 text-white rounded hover:bg-coral-500 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}