import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Terminal, Zap, Download, ExternalLink } from 'lucide-react';

const PortfolioHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="portfolio-hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            {/* Status Badge */}
            <div className="badge-group">
              <span className="status-badge">
                <Sparkles size={16} className="badge-icon" />
                Available for Opportunities
              </span>
              <span className="verified-badge">
                <Zap size={16} />
                Verified Developer
              </span>
            </div>

            {/* Main Content */}
            <div className="hero-main-content">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">
                <span className="name-text">A.Yasiru Nadeesha Aththanayaka</span>
                <span className="cursor-blink">|</span>
              </h1>
              <h2 className="hero-title">
                Full Stack
                <span className="gradient-text"> Developer</span>
              </h2>

              <p className="hero-description">
                Crafting exceptional digital experiences through elegant code and innovative solutions. 
                Specialized in building scalable web applications with modern technologies.
              </p>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta">
                <button className="btn-primary">
                  <span>View My Work</span>
                  <ArrowRight size={20} className="btn-icon" />
                  <div className="btn-shine"></div>
                </button>
                <button className="btn-secondary">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a href="https://github.com" className="social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:your.email@example.com" className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-right">
            <div className="visual-container">
              {/* Main Code Card */}
              <div className="code-card main-card">
                <div className="card-header">
                  <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="file-name">developer.js</span>
                </div>
                <div className="card-body">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-variable">developer</span> = {'{'}
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="indent">name: </span>
                    <span className="code-string">'Your Name'</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="indent">role: </span>
                    <span className="code-string">'Full Stack Developer'</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="indent">skills: [</span>
                    <span className="code-string">'React'</span>,{' '}
                    <span className="code-string">'Node.js'</span>],
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="indent">passion: </span>
                    <span className="code-string">'Building Amazing Things'</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">6</span>
                    {'};'}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="floating-cards">
                {/* Achievement Card */}
                <div className="float-card CurrentWorking-card">
                  <Sparkles size={20} className="card-icon" />
                  <div className="card-content">
                    <h4>Currently Working On</h4>
                    <p>HealthCare Application</p>
                    <span className="CurrentWorking-badge">Final Year Project</span>
                  </div>
                </div>
                {/* Tech Stack Card */}
                <div className="float-card tech-card">
                  <Code2 size={20} className="card-icon" />
                  <div className="card-content">
                    <h4>Tech Stack</h4>
                    <div className="tech-tags">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">TypeScript</span>
                    </div>
                  </div>
                </div>

                {/* Current Project Card */}
                <div className="float-card project-cardd">
                  <Terminal size={20} className="card-icon" />
                  <div className="card-content">
                    <h4>Current Focus</h4>
                    <p>Building AI-powered web apps</p>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>
                </div>

                {/* Achievement Card */}
                <div className="float-card achievement-card">
                  <Sparkles size={20} className="card-icon" />
                  <div className="card-content">
                    <h4>Latest Achievement</h4>
                    <p>🏆 Best Project Award</p>
                    <span className="achievement-badge">2024</span>
                  </div>
                </div>
              </div>

              {/* Animated Rings */}
              <div className="animated-ring ring-1"></div>
              <div className="animated-ring ring-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          display: flex;
          align-items: center;
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1800px;
          margin: auto auto;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Left Content */
        .hero-left {
          animation: fadeInLeft 0.8s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .badge-group {
          display: flex;
          gap: 15px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .status-badge, .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          animation: float 3s ease-in-out infinite;
        }

        .status-badge {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          border: 1px solid rgba(102, 126, 234, 0.3);
          color: #a5b4fc;
        }

        .verified-badge {
          background: rgba(72, 187, 120, 0.2);
          border: 1px solid rgba(72, 187, 120, 0.3);
          color: #86efac;
        }

        .badge-icon {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero-main-content {
          max-width: 800px;
        }

        .hero-greeting {
          font-size: 18px;
          color: #a5b4fc;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .hero-name {
          font-size: 72px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 15px;
          letter-spacing: -2px;
        }

        .name-text {
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cursor-blink {
          color: #667eea;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 40px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 14px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-cta {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 35px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.5);
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover .btn-shine {
          left: 100%;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
          transform: translateY(-3px);
        }

        /* Right Visual */
        .hero-right {
          position: relative;
          animation: fadeInRight 0.8s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .visual-container {
          position: relative;
          height: 500px;
        }

        .code-card {
        margin: auto;
        width: 600px;
        margin-top: 170px;
          background: rgba(17, 24, 39, 0.8);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .main-card {
          position: relative;
          z-index: 2;
          animation: float 6s ease-in-out infinite;
        }

        .card-header {
          background: rgba(30, 41, 59, 0.8);
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .file-name {
          color: #94a3b8;
          font-size: 14px;
          font-family: 'Monaco', monospace;
        }

        .card-body {
          padding: 30px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 16px;
          line-height: 2;
        }

        .code-line {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .line-number {
          color: #475569;
          min-width: 30px;
          text-align: right;
          user-select: none;
        }

        .code-keyword {
          color: #c084fc;
        }

        .code-variable {
          color: #60a5fa;
        }

        .code-string {
          color: #34d399;
        }

        .indent {
          margin-left: 20px;
          color: #cbd5e1;
        }

        /* Floating Cards */
        .floating-cards {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .float-card {
          position: absolute;
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
        }

        .float-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .card-icon {
          color: #667eea;
          margin-bottom: 10px;
        }

        .card-content h4 {
          font-size: 16px;
          margin-bottom: 10px;
          color: white;
        }

        .card-content p {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .tech-card {
          top: -140px;
          right: -30px;
          animation: float-1 8s ease-in-out infinite;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 5px 12px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          font-size: 12px;
          color: #a5b4fc;
        }

        .project-cardd {
          bottom: 10%;
          left: -120px;
          animation: float-2 10s ease-in-out infinite;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 10px;
        }

        .progress-fill {
          height: 100%;
          width: 70%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          animation: progress 2s ease-out;
        }

        @keyframes progress {
          from { width: 0; }
        }

        .achievement-card {
          bottom: -30px;
          right: 40px;
          animation: float-3 12s ease-in-out infinite;
        }

        .achievement-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 12px;
          font-size: 12px;
          color: #fcd34d;
          margin-top: 10px;
        }
          .CurrentWorking-card{
          bottom: 450px;
          right: 700px;
            animation: float-3 12s ease-in-out infinite;
          }

          .CurrentWorking-badge {
          background: rgba(72, 187, 120, 0.2);
          border: 1px solid rgba(72, 187, 120, 0.3);
          color: #86efac;
          display: inline-block;
          padding: 4px 12px;
          border: 1px solid rgba(72, 187, 120, 0.3);
          border-radius: 12px;
          font-size: 12px;
          margin-top: 10px;
        }


        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-10px); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        /* Animated Rings */
        .animated-ring {
          position: absolute;
          border: 2px solid rgba(102, 126, 234, 0.2);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ring-1 {
          width: 500px;
          height: 500px;
          animation: rotate 20s linear infinite;
        }

        .ring-2 {
          width: 650px;
          height: 650px;
          animation: rotate-reverse 30s linear infinite;
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 13px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 1.5s ease-in-out infinite;
        }

        @keyframes scroll {
          0% { opacity: 1; top: 8px; }
          100% { opacity: 0; top: 20px; }
        }

        .scroll-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .hero-right {
            order: -1;
          }

          .visual-container {
            height: 400px;
          }

          .hero-name {
            font-size: 56px;
          }

          .hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 20px;
          }

          .hero-name {
            font-size: 42px;
          }

          .hero-title {
            font-size: 28px;
          }

          .hero-stats {
            gap: 20px;
          }

          .stat-number {
            font-size: 28px;
          }

          .hero-cta {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .float-card {
            transform: scale(0.85);
          }

          .animated-ring {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioHero;