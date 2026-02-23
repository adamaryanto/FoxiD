import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import useScrollReveal from './hooks/useScrollReveal';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}

export default App;
