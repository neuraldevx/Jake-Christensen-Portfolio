// app/pages/projects.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import projectOneImage from 'public/assets/proj1.jpg';
import projectTwoImage from 'public/assets/proj2.jpg';
import defaultImage from 'public/assets/dev3pfp.png'; // Add a default image

interface Repository {
  name: string;
  html_url: string;
  description: string;
  language: string;
  id: number;
}

// Create a dictionary to map repository names to images
const projectImages: Record<string, StaticImageData> = {
  'Cosmic-Phenomena-Identification-Distributed-Computing': projectOneImage,
  'Project Two': projectTwoImage,
  // Add more mappings as needed
};

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/neuraldevx/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  const getImageForProject = (projectName: string) => {
    return projectImages[projectName] || defaultImage;
  };

  return (
    <main className="section" style={{ backgroundColor: '#0D1117', color: '#C9D1D9', fontFamily: 'Arial, sans-serif' }}>
      <div className="container">
        <h1 className="title has-text-centered" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {repositories.map((repo) => (
            <div key={repo.id} className="project-card" style={{ flex: '1 1 calc(33.333% - 1rem)', transition: 'transform 0.3s ease', overflow: 'hidden' }}>
              <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={getImageForProject(repo.name)}
                  alt={repo.name}
                  layout="fill"
                  objectFit="cover"
                  className="project-image"
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <p className="title is-4" style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>{repo.name}</p>
                <p className="subtitle is-6" style={{ color: '#C9D1D9', marginBottom: '1rem' }}>{repo.description}</p>
                <div style={{ color: '#C9D1D9', fontSize: '0.9rem' }}>
                  <strong>Language:</strong> {repo.language}
                  <br />
                  <a href={repo.html_url} className="has-text-link" target="_blank" rel="noopener noreferrer" style={{ color: '#58A6FF', textDecoration: 'none', marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
