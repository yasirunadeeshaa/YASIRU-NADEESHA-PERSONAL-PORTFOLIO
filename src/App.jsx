import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';

// Placeholder components for other pages
const About = () => (
  <div className="page">
    <h1>About Me</h1>
    <p>About page coming soon...</p>
  </div>
);

const Projects = () => (
  <div className="page">
    <h1>My Projects</h1>
    <p>Projects page coming soon...</p>
  </div>
);

const Contact = () => (
  <div className="page">
    <h1>Get In Touch</h1>
    <p>Contact page coming soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;