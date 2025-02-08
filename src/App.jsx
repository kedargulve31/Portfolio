import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white relative overflow-hidden">
      <Navbar /> 

      {/* Sections with IDs */}
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}

export default App;
