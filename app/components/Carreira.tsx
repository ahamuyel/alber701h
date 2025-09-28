import Link from 'next/link';

export default function Carreira() {
  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'freeCodeCamp',
      date: 'Janeiro 2024',
      link: 'https://www.freecodecamp.org/certification/sample/react',
    },
    {
      title: 'Next.js & React - The Complete Guide',
      issuer: 'Udemy',
      date: 'Março 2024',
      link: 'https://www.udemy.com/certificate/sample/nextjs',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'Agosto 2023',
      link: 'https://www.freecodecamp.org/certification/sample/javascript',
    },
  ];

  return (
    <section id="carreira" className="min-h-screen flex items-center justify-center z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-8">
          Carreira e Certificações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4 shadow-md hover:bg-coral-500/20 transition-colors"
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-400">{cert.title}</h3>
                <p className="text-sm text-gray-600">Emitido por: {cert.issuer}</p>
                <p className="text-sm text-gray-600">Data: {cert.date}</p>
                {cert.link && (
                  <Link
                    href={cert.link}
                    className="text-coral-500 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Certificado
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}