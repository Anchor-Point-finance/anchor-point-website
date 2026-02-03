import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Calculator />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
