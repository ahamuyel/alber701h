import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-secondary py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-base text-secondary mb-4 animate-fade-in">
          Alberto Hamuyela &copy; 2025 | Desenvolvedor Web Apaixonado por Criar Experiências Digitais
        </p>
        <div className="flex justify-center space-y-4 sm:space-y-0 sm:space-x-6 flex-col sm:flex-row">
          <Link
            href="mailto:seu.email@exemplo.com"
            className="footer-link text-text hover:text-accent transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <FaEnvelope className="w-5 h-5" />
            <span>E-mail</span>
          </Link>
          <Link
            href="https://github.com/seuusuario"
            className="footer-link text-text hover:text-accent transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/seuusuario"
            className="footer-link text-text hover:text-accent transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}