import React, { useState } from 'react';
import { ExternalLink, Github, Play, Sparkles, Code2, Zap, Eye, Star, TrendingUp } from 'lucide-react';

const PortfolioProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "HealthCare Application",
      category: "web",
      featured: true,
      status: "In Development",
      description: "Advanced healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      metrics: {
        users: "10K+",
        rating: "4.9",
        performance: "98%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "web",
      featured: true,
      status: "Live",
      description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Stripe", "MongoDB"],
      metrics: {
        users: "25K+",
        rating: "4.8",
        performance: "95%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      category: "ai",
      featured: false,
      status: "Live",
      description: "Intelligent conversational AI with natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Python", "OpenAI", "React", "FastAPI"],
      metrics: {
        users: "15K+",
        rating: "4.7",
        performance: "92%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Portfolio CMS",
      category: "web",
      featured: false,
      status: "Live",
      description: "Dynamic content management system for creative professionals with drag-and-drop builder and SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Next.js", "Prisma", "TailwindCSS"],
      metrics: {
        users: "8K+",
        rating: "4.9",
        performance: "97%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Task Management App",
      category: "mobile",
      featured: false,
      status: "Live",
      description: "Cross-platform productivity app with team collaboration, time tracking, and intelligent task prioritization.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      metrics: {
        users: "20K+",
        rating: "4.6",
        performance: "94%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      category: "web",
      featured: false,
      status: "Live",
      description: "Real-time business intelligence platform with customizable widgets, data visualization, and reporting tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Vue.js", "D3.js", "Node.js", "Redis"],
      metrics: {
        users: "12K+",
        rating: "4.8",
        performance: "96%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section className="projects-section">
      {/* Background Elements */}
      <div className="bg-gradient-blur blur-1"></div>
      <div className="bg-gradient-blur blur-2"></div>
      <div className="bg-gradient-blur blur-3"></div>

      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <Sparkles size={18} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="title-gradient">Projects</span>
          </h2>
          <p className="section-description">
            Explore my collection of innovative solutions and creative experiments. 
            Each project represents a unique challenge and a commitment to excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span>{filter.label}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured-card' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className="status-badge-container">
                {project.featured && (
                  <span className="featured-badge">
                    <Star size={14} />
                    Featured
                  </span>
                )}
                <span className={`status-badge ${project.status === 'Live' ? 'live' : 'development'}`}>
                  <div className="status-dot"></div>
                  {project.status}
                </span>
              </div>

              {/* Project Image */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className={`image-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <div className="overlay-gradient"></div>
                  <div className="overlay-actions">
                    <button className="overlay-btn primary">
                      <Eye size={18} />
                      <span>View Project</span>
                    </button>
                    <div className="overlay-icon-btns">
                      <button className="overlay-icon-btn">
                        <ExternalLink size={18} />
                      </button>
                      <button className="overlay-icon-btn">
                        <Github size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Metrics */}
                <div className="project-metrics">
                  <div className="metric-item">
                    <TrendingUp size={16} className="metric-icon" />
                    <span className="metric-label">Users:</span>
                    <span className="metric-value">{project.metrics.users}</span>
                  </div>
                  <div className="metric-item">
                    <Star size={16} className="metric-icon" />
                    <span className="metric-label">Rating:</span>
                    <span className="metric-value">{project.metrics.rating}</span>
                  </div>
                  <div className="metric-item">
                    <Zap size={16} className="metric-icon" />
                    <span className="metric-label">Performance:</span>
                    <span className="metric-value">{project.metrics.performance}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <button className="action-btn primary">
                    <Play size={18} />
                    <span>View Project</span>
                  </button>
                  <button className="action-btn secondary">
                    <Code2 size={18} />
                  </button>
                </div>
              </div>

              {/* Decorative Border */}
              <div className={`card-border-gradient bg-gradient-to-r ${project.color}`}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          min-height: 100vh;
          padding: 10px 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
        }

        /* Background Blur Elements */
        .bg-gradient-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          pointer-events: none;
        }

        .blur-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
          top: 10%;
          left: 5%;
          animation: float-blur 20s ease-in-out infinite;
        }

        .blur-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent);
          top: 50%;
          right: 10%;
          animation: float-blur 25s ease-in-out infinite reverse;
        }

        .blur-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.2), transparent);
          bottom: 10%;
          left: 40%;
          animation: float-blur 30s ease-in-out infinite;
        }

        @keyframes float-blur {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(50px, -50px); }
          66% { transform: translate(-30px, 30px); }
        }

        .projects-container {
          position: relative;
          z-index: 2;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(102, 126, 234, 0.15);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: 56px;
          font-weight: 900;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .title-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 18px;
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Filter Tabs */
        .filter-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 60px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: #cbd5e1;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(102, 126, 234, 0.4);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          border-color: rgba(102, 126, 234, 0.5);
          color: white;
        }

        .filter-count {
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          font-size: 13px;
        }

        .filter-btn.active .filter-count {
          background: rgba(255, 255, 255, 0.25);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .project-card {
          position: relative;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: cardFadeIn 0.6s ease-out both;
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .featured-card {
          grid-column: span 1;
        }

        /* Status Badges */
        .status-badge-container {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }

        .featured-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.4);
          border-radius: 50px;
          color: #fcd34d;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .status-badge.live {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          color: #86efac;
        }

        .status-badge.development {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #93c5fd;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        /* Project Image */
        .project-image-container {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-overlay.active {
          opacity: 1;
        }

        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
        }

        .overlay-actions {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .overlay-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .overlay-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        }

        .overlay-icon-btns {
          display: flex;
          gap: 12px;
        }

        .overlay-icon-btn {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .overlay-icon-btn:hover {
          background: white;
          color: #667eea;
          transform: scale(1.1);
        }

        /* Project Content */
        .project-content {
          padding: 30px;
        }

        .project-title {
          font-size: 24px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .project-description {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        /* Metrics */
        .project-metrics {
          display: flex;
          gap: 20px;
          padding: 16px 0;
          margin-bottom: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
        }

        .metric-icon {
          color: #667eea;
        }

        .metric-label {
          color: #64748b;
        }

        .metric-value {
          color: white;
          font-weight: 700;
        }

        /* Tags */
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .project-tag {
          padding: 6px 14px;
          background: rgba(102, 126, 234, 0.15);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 600;
        }

        /* Actions */
        .project-actions {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn.primary {
          flex: 1;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .action-btn.secondary {
          width: 52px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.15);
          color: white;
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* Card Border Gradient */
        .card-border-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .card-border-gradient {
          opacity: 1;
        }

        /* View More Section */
        .view-more-section {
          text-align: center;
          padding: 60px 0;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .view-more-text {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 24px;
        }

        .view-more-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .view-more-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.5);
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .view-more-btn:hover .btn-glow {
          left: 100%;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
          }

          .section-title {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .projects-container {
            padding: 0 20px;
          }

          .section-title {
            font-size: 36px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .filter-container {
            gap: 10px;
          }

          .filter-btn {
            padding: 12px 20px;
            font-size: 14px;
          }

          .project-metrics {
            flex-wrap: wrap;
            gap: 12px;
          }

          .featured-card {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioProjects;