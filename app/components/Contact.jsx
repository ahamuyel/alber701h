export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
        <p className="text-lg mb-6">Fique à vontade para me contatar para colaborações ou dúvidas!</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:seu.email@exemplo.com" className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700">E-mail</a>
          <a href="https://github.com/seuusuario" className="bg-gray-600 px-6 py-3 rounded-full hover:bg-gray-700">GitHub</a>
          <a href="https://linkedin.com/in/seuusuario" className="bg-blue-800 px-6 py-3 rounded-full hover:bg-blue-900">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}