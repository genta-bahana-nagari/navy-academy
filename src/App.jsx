import './App.css'
import Navbar from "./components/NavBar";
import Hero from './components/Hero'
import About from './components/About'
import Academy from './components/Academy';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Academy />
    </div>
  )
}

export default App
