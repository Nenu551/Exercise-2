// GitHub Copilot Suggestion:
// const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }) => {
//   return (
//     <div className="project-card">
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <div className="tags">
//         {tags.map(tag => <span key={tag}>{tag}</span>)}
//       </div>
//       <div className="links">
//         <a href={githubUrl} target="_blank">GitHub</a>
//         <a href={liveUrl} target="_blank">Live Demo</a>
//       </div>
//     </div>
//   )
// }

import React from 'react';

const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }) => {
  return (
    <div className="portfolio-project-card">
      <div className="project-image-container">
        <img 
          src={image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'} 
          alt={title} 
          className="project-image"
        />
        <div className="project-image-overlay"></div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className="project-tag-badge">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn github-btn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
              Code
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn live-btn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
