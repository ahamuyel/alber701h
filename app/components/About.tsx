export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-600/10 to-coral-500/10 z-10"
    >
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center my-16 ">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left: List */}
          <div className="md:w-1/2 text-center">
            <p className="text-sm md:text-xl max-w-2xl mx-auto mt-4 mb-4">
              Sou <strong>Alberto Hamuyela</strong>, cadete da{" "}
              <strong>Escola 42</strong> e desenvolvedor web apaixonado por
              tecnologia, inovação e aprendizado contínuo. Tenho experiência em{" "}
              <strong>React, Next.js, Tailwind CSS, Node.js</strong> e{" "}
              <strong>C++</strong>, além de aprofundar conhecimentos em{" "}
              <strong>redes, sistemas e segurança</strong>. Busco unir{" "}
              <strong>design, performance e usabilidade</strong> em cada
              projeto, sempre aberto a desafios e colaboração.
            </p>

            {/* Botão de currículo */}
            <a
              href="https://drive.google.com/file/d/1DV5ms6ghHjwTKVRDM9jk53aSBFTJK_rN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block px-6 py-3 my-10 bg-teal-600 text-white rounded hover:bg-coral-500 transition-colors"
            >
              Ver o meu Currículo
            </a>
          </div>

          {/* Right: Lista */}
          <div className="md:w-1/2 text-gray-700">
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <p>
                  Formação intensiva na <span>42 Luanda</span> com foco em{" "}
                  <span>Shell, C, C++</span>, POO, algoritmos e boas práticas de
                  engenharia de software.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-coral-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <p>
                  Desenvolvimento de aplicações web modernas com{" "}
                  <span>React, Next.js e Tailwind CSS</span>.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p>
                  Conhecimento em <span>redes de computadores</span> (CIDR,
                  sub-redes, roteamento) e{" "}
                  <span>administração de sistemas</span> com <span>Docker</span>{" "}
                  e ambiente Linux.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
