import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import 'bulma/css/bulma.min.css';

const certifications = [
  {
    title: 'Fundamentals of the Databricks Lakehouse Platform Accreditation',
    issuer: 'Databricks',
    date: 'April 2024',
    credentialId: '102062094',
    url: 'https://credentials.databricks.com/ac1c99c3-791c-485a-8e17-74f00bccbda2',
    skills: 'Azure Databricks · Data Lake Fundamentals · Software Development'
  },
  {
    title: 'Generative AI Fundamentals Accreditation',
    issuer: 'Databricks',
    date: 'April 2024',
    credentialId: 'E-1Q55ZV',
    url: 'https://customer-academy.databricks.com/learn/course/1811/generative-ai-fundamentals-accreditation?generated_by=662980&hash=03686e60d3ef9961c90e1b716a00a15d7c853229',
    skills: 'Generative AI · Large Language Models (LLM)'
  },
  {
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: 'April 2024',
    url: 'https://www.kaggle.com/learn/certification/jakerchristensen/intro-to-machine-learning',
    skills: 'Machine Learning'
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="container mt-6">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <div className="card hover-card">
            <header className="card-header">
              <p className="card-header-title has-text-white">
                <FaCertificate className="icon is-medium"/> Certifications
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="title is-5 has-text-white">{cert.title}</p>
                    <p className="subtitle is-6 has-text-grey-light">{cert.issuer}</p>
                    <p className="has-text-grey-light">{cert.date}</p>
                    <p className="has-text-grey-light">Credential ID: {cert.credentialId}</p>
                    <p className="has-text-grey-light">Skills: {cert.skills}</p>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="icon has-text-grey-light ml-2">
                      <FaExternalLinkAlt />
                    </a>
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
