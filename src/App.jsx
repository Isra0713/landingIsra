
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {


  return (
    
      <div>

        <Navbar/>

        <section id="home" className="h-screen bg-blue-100 flex items-center justify-center">
                <h1 className="text-5xl">Home</h1>
            </section>
            <section id="about" className="h-screen bg-green-100 flex items-center justify-center">
                <h1 className="text-5xl">Acerca de</h1>
            </section>
            <section id="gallery" className="h-screen bg-yellow-100 flex items-center justify-center">
                <h1 className="text-5xl">Galería</h1>
            </section>
            <section id="projects" className="h-screen bg-red-100 flex items-center justify-center">
                <h1 className="text-5xl">Proyectos</h1>
            </section>
            <Footer/>
     
      </div>
  )
}

export default App;
