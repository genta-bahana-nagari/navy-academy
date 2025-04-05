import './App.css'
import Navbar from "./components/NavBar";
import Header from './components/Header'
import About from './components/About'
import Academy from './components/Academy';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Header />
      <About />
      <Academy />
    </div>
  )
}

export default App
