import Achievement from "./components/Achievement";
import HeroCarousel from "./components/HeroCarousel"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import About_Contact from "./components/About_Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";



function App() {

  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <NavBar />
      <HeroCarousel />
      <Achievement />
      <Projects />
      <Testimonials />
      <About_Contact />
      <Footer />
    </div>
  )
}

export default App
