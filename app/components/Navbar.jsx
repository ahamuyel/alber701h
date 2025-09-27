import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alber701H</h1>
        <ul className="flex space-x-6">
          <li><Link href="#home" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="#projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}