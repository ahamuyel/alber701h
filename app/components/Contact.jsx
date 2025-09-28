import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text animate-fade-in">
          Vamos Conversar
        </h2>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-8">
          Estou aberto a colaborações, projetos ou apenas um bate-papo sobre tecnologia. Entre em contato!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="mailto:seu.email@exemplo.com"
            className="contact-button bg-primary text-text px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <FaEnvelope className="w-5 h-5" />
            <span>E-mail</span>
          </Link>
          <Link
            href="https://github.com/seuusuario"
            className="contact-button bg-primary text-text px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/seuusuario"
            className="contact-button bg-primary text-text px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  );
}