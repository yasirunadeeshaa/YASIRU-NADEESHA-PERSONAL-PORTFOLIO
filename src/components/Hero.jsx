import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Your Name</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences that combine beautiful design 
            with powerful functionality. Specialized in React, Node.js, and modern web technologies.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span> developer = {'{'}
              </div>
              <div className="code-line indent">
                name: <span className="code-string">'Your Name'</span>,
              </div>
              <div className="code-line indent">
                skills: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>],
              </div>
              <div className="code-line indent">
                passion: <span className="code-string">'Building'</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;