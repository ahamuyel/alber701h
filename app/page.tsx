import Navbar from "./components/navbar/Navbar"
import HomeSection from './components/Home';
import About from './components/About';
import Projects from './components/Projexts';
import Contact from './components/Contact';

import "./styles.css"

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <HomeSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}