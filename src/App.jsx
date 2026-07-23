import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Lineup from './pages/Lineup';
import Gallery from './pages/Gallery';
import Events from "./pages/Events"
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', width: '100%' }}>
      {/* Navigation bar floating at the top */}
      <Navbar />
      
      {/* Sequential scrollable pages */}
      <Hero />
      <About />
      <Lineup />
      <Gallery />
      
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;