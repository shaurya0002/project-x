import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';

function App(){
  return(
    <Router>
      <div style={{backgroundColor: 'var(--bg-primary)', minHeight: '100vh', width: '100%'}}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lineup/:teamId" element={<TeamPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;