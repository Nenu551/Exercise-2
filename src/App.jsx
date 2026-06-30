import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import SocialLinks from './components/SocialLinks';
import ProjectCard from './components/ProjectCard';

function App() {
  // Theme States
  const [siteTheme, setSiteTheme] = useState('dark');
  const [socialTheme, setSocialTheme] = useState('dark');

  // Synchronize site theme with body class
  useEffect(() => {
    if (siteTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [siteTheme]);

  // Mock User Data
  const userData = {
    name: 'Sarah Connor',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
    bio: 'Senior Creative Developer & UI/UX Designer crafting immersive digital experiences. Building the future of the web with React, Three.js, and WebGL shader code.',
  };

  // Mock Social Media Links
  const socialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'GitHub', url: 'https://github.com' },
  ];

  // Mock Portfolio Projects
  const projects = [
    {
      title: 'VibeSync Platform',
      description: 'A real-time collaborative music curation app. Features instant syncing, chat rooms, and a canvas visualizer using React and socket.io.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'Socket.io', 'CSS Glass'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
    },
    {
      title: 'Aetheria 3D Space',
      description: 'Immersive 3D landing page highlighting organic vector layouts and custom WebGL shaders. Highly optimized frame rate using Three.js.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop',
      tags: ['Three.js', 'React Three Fiber', 'GLSL', 'Vite'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
    },
    {
      title: 'Nova Docs Engine',
      description: 'A light-speed documentation static-site generator. Out-of-the-box syntax highlighting, instant fuzzy search, and clean MDX parser.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop',
      tags: ['React', 'MDX', 'Fuzzy Search', 'Aesthetics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
    },
  ];

  const toggleSiteTheme = () => {
    setSiteTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSocialTheme = () => {
    setSocialTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <header className="app-header">
        <h1 className="logo-text">InstaBio</h1>
        <p className="subtitle">Your digital identity, simplified and beautifully styled</p>
      </header>

      {/* Control Panel to toggle Site Theme and SocialLinks theme prop */}
      <section className="control-panel">
        <span className="theme-toggle-label">Controls:</span>
        <button 
          onClick={toggleSiteTheme} 
          className="control-btn"
          aria-label="Toggle general page theme"
        >
          {siteTheme === 'dark' ? '☀️ Light Page' : '🌙 Dark Page'}
        </button>
        <button 
          onClick={toggleSocialTheme} 
          className="control-btn"
          aria-label="Toggle social links component theme prop"
        >
          🔄 Social Links Theme: {socialTheme.toUpperCase()}
        </button>
      </section>

      {/* Profile Card Component */}
      <ProfileCard 
        name={userData.name}
        avatarUrl={userData.avatarUrl}
        bio={userData.bio}
      />

      {/* Social Links Component */}
      <SocialLinks 
        links={socialLinks}
        theme={socialTheme}
      />

      {/* Portfolio Projects Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
