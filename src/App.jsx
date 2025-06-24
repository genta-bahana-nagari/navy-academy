import './App.css'
import Navbar from "./components/NavBar";
import Hero from './components/Hero'
import About from './components/About'
import Academy from './components/Academy';
import Contact from './components/Contact';
import CTA from './components/CTA';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Academy />
      <CTA />
      <Contact />
    </div>
  )
}

export default App
