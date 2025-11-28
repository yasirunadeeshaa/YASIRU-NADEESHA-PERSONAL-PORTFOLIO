import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Server,
  GitBranch,
  Wrench,
  Award,
  CheckCircle2,
  Zap,
  TrendingUp
} from 'lucide-react';

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 size={28} />,
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'PHP']
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Palette size={28} />,
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={28} />,
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: ['Express.js', 'Spring Boot']
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={28} />,
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      skills: ['MySQL', 'MongoDB']
    },
    {
      id: 'version',
      title: 'Version Control',
      icon: <GitBranch size={28} />,
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      skills: ['Git', 'GitHub']
    },
    {
      id: 'tools',
      title: 'Software Development & Tools',
      icon: <Wrench size={28} />,
      color: '#30cfd0',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      skills: ['RESTful APIs', 'Postman', 'Agile', 'Docker', 'CI/CD']
    }
  ];

  const stats = [
    { icon: <Code2 size={24} />, value: '20+', label: 'Technologies', color: '#667eea' },
    { icon: <Award size={24} />, value: '5+', label: 'Years Experience', color: '#f093fb' },
    { icon: <CheckCircle2 size={24} />, value: '50+', label: 'Projects Built', color: '#43e97b' },
    { icon: <TrendingUp size={24} />, value: '100%', label: 'Commitment', color: '#4facfe' }
  ];

  return (
    <div className="sp-skills-page" ref={sectionRef}>
      {/* Hero Section */}
      <div className={`sp-hero-section ${isVisible ? 'sp-visible' : ''}`}>
        <div className="sp-hero-content">
          <div className="sp-hero-badge">
            <Zap size={16} />
            <span>Technical Excellence</span>
          </div>
          <h1 className="sp-hero-title">
            My <span className="sp-gradient-text">Technical</span> Arsenal
          </h1>
          <p className="sp-hero-subtitle">
            A comprehensive showcase of technologies and tools I've mastered throughout my journey as a full-stack developer
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className={`sp-skills-container ${isVisible ? 'sp-visible' : ''}`}>
        <div className="sp-skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`sp-skill-category ${activeCategory === category.id ? 'sp-active' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--sp-category-color': category.color,
                '--sp-category-gradient': category.gradient
              }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="sp-category-header">
                <div className="sp-category-icon">{category.icon}</div>
                <h3 className="sp-category-title">{category.title}</h3>
              </div>

              <div className="sp-skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="sp-skill-tag"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    <CheckCircle2 size={14} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="sp-category-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sp-skills-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        .sp-skills-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(240, 147, 251, 0.1) 0%, transparent 60%);
          pointer-events: none;
          animation: sp-pulse 10s ease-in-out infinite;
        }

        @keyframes sp-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Hero Section */
        .sp-hero-section {
          max-width: 1200px;
          margin: 0 auto 80px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .sp-hero-section.sp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-hero-content {
          margin-bottom: 60px;
        }

        .sp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.4);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          animation: sp-float 3s ease-in-out infinite;
        }

        @keyframes sp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .sp-hero-title {
          font-size: 64px;
          font-weight: 900;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .sp-gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sp-hero-subtitle {
          font-size: 20px;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Stats Grid */
        .sp-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .sp-stat-card {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          backdrop-filter: blur(20px);
          opacity: 0;
          animation: sp-slideUp 0.6s ease forwards;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .sp-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--sp-stat-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .sp-stat-card:hover {
          transform: translateY(-8px);
          border-color: var(--sp-stat-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .sp-stat-card:hover::before {
          transform: scaleX(1);
        }

        @keyframes sp-slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sp-stat-icon {
          color: var(--sp-stat-color);
          margin-bottom: 16px;
        }

        .sp-stat-value {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          background: linear-gradient(135deg, white, var(--sp-stat-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sp-stat-label {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Skills Container */
        .sp-skills-container {
          max-width: 1400px;
          margin: 0 auto 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }

        .sp-skills-container.sp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .sp-skill-category {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          opacity: 0;
          animation: sp-fadeInScale 0.6s ease forwards;
          position: relative;
          overflow: hidden;
        }

        @keyframes sp-fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .sp-skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--sp-category-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .sp-skill-category:hover::before {
          transform: scaleX(1);
        }

        .sp-skill-category:hover {
          transform: translateY(-8px);
          border-color: var(--sp-category-color);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
        }

        .sp-category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--sp-category-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .sp-skill-category:hover .sp-category-overlay {
          opacity: 0.1;
        }

        .sp-category-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .sp-category-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: var(--sp-category-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .sp-skill-category:hover .sp-category-icon {
          transform: rotate(5deg) scale(1.1);
        }

        .sp-category-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          flex: 1;
        }

        .sp-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .sp-skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          opacity: 0;
          animation: sp-fadeIn 0.4s ease forwards;
          cursor: default;
        }

        @keyframes sp-fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sp-skill-tag svg {
          color: var(--sp-category-color);
          transition: all 0.3s ease;
        }

        .sp-skill-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--sp-category-color);
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .sp-skill-tag:hover svg {
          transform: scale(1.2);
        }

        @keyframes sp-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .sp-cta-content {
          position: relative;
          z-index: 1;
        }

        .sp-cta-icon {
          color: #667eea;
          margin-bottom: 24px;
          animation: sp-pulse-icon 2s ease-in-out infinite;
        }

        @keyframes sp-pulse-icon {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .sp-cta-content h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .sp-cta-content p {
          font-size: 18px;
          color: #94a3b8;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .sp-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 48px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
        }

        .sp-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 50px rgba(102, 126, 234, 0.5);
        }

        .sp-cta-button svg {
          transition: transform 0.3s ease;
        }

        .sp-cta-button:hover svg {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .sp-hero-title {
            font-size: 56px;
          }

          .sp-skills-grid {
            gap: 24px;
          }
        }

        @media (max-width: 968px) {
          .sp-skills-page {
            padding: 60px 30px;
          }

          .sp-hero-title {
            font-size: 48px;
          }

          .sp-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .sp-skills-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }


          .sp-cta-content h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .sp-skills-page {
            padding: 40px 20px;
          }

          .sp-hero-title {
            font-size: 36px;
          }

          .sp-hero-subtitle {
            font-size: 16px;
          }

          .sp-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .sp-stat-card {
            padding: 24px;
          }

          .sp-skill-category {
            padding: 30px;
          }

          .sp-category-icon {
            width: 50px;
            height: 50px;
          }

          .sp-category-title {
            font-size: 18px;
          }

          .sp-skills-list {
            gap: 8px;
          }

          .sp-skill-tag {
            padding: 10px 16px;
            font-size: 14px;
          }

        }
      `}</style>
    </div>
  );
};

export default SkillsPage;