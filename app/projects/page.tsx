// app/pages/projects.tsx
import React from 'react';
import Image from 'next/image';
import projectOneImage from 'app/public/assets/proj1.jpg';
import projectTwoImage from 'app/public/assets/proj2.jpg';

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title has-text-centered">Projects</h1>
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <div className="card project-card hover-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <Image
                    src={projectOneImage}
                    alt="Project One"
                    layout="responsive fit"
                    objectFit="cover"
                    className="project-image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project One</p>
                    <p className="subtitle is-6">Description of project one.</p>
                  </div>
                </div>
                <div className="content">
                  Details about project one.
                  <br />
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card project-card hover-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <Image
                    src={projectTwoImage}
                    alt="Project Two"
                    layout="responsive fit"
                    objectFit="cover"
                    className="project-image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project Two</p>
                    <p className="subtitle is-6">Description of project two.</p>
                  </div>
                </div>
                <div className="content">
                  Details about project two.
                  <br />
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
