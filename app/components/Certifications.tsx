import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import 'bulma/css/bulma.min.css';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'June 2023',
  },
  {
    title: 'Google Data Engineer Professional',
    issuer: 'Google Cloud',
    date: 'May 2022',
  },
  {
    title: 'Microsoft Azure AI Engineer',
    issuer: 'Microsoft',
    date: 'August 2023',
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="container mt-6">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <div className="card hover-card" style={{ backgroundColor: '#161B22', border: '1px solid #30363D' }}>
            <header className="card-header" style={{ backgroundColor: '#0D1117' }}>
              <p className="card-header-title has-text-white">
                <FaCertificate className="icon is-medium" /> Certifications
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="title is-5 has-text-white">{cert.title}</p>
                    <p className="subtitle is-6 has-text-grey-light">{cert.issuer}</p>
                    <p className="has-text-grey-light">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
