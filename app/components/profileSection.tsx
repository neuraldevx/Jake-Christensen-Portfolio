import React from 'react';
import { CiUser } from 'react-icons/ci';
import { FaGraduationCap, FaHandshake, FaBrain } from 'react-icons/fa';

const ProfileSection = () => {
  const sections = [
    {
      title: 'About',
      content: [
        { header: 'Personal', subtext: ['Hey there Im Jacob! A driven developer currently an undergrad @ the University of Wisconsin-Madison.'] },
        { header: '', subtext: [' Passion for data science, software development, and AI/ML technologies. Connect with me on LinkedIn and check out my work on GitHub.'] }
      ],
      icon: <CiUser className="icon is-medium header-icon" />,
    },
    {
      title: 'Education',
      content: [
        { header: 'Bachelor of Science in Data Science', subtext: ['University of Wisconsin-Madison, 2024'] },
        { header: 'Certificate in Computer Science', subtext: ['University of Wisconsin-Madison, 2024'] },
      ],
      icon: <FaGraduationCap className="icon is-medium header-icon" />,
    },
    {
      title: 'Experience',
      content: [
        { header: 'Software Developer Intern', subtext: ['Publix, May 2023 – August 2023'] },
        { header: 'Research Assistant', subtext: ['University of Wisconsin-Madison IT Help Desk, October 2022 – May 2023'] },
      ],
      icon: <FaHandshake className="icon is-medium header-icon" />,
    },
    {
      title: 'Expertise & Roles',
      content: [
        { header: 'Expertise', subtext: ['Artificial Intelligence', 'Machine Learning', 'Data Engineering', 'Software Development'] },
        { header: 'Looking For', subtext: ['AI/ML Roles', 'Data Engineering Positions', 'Software Development Roles'] },
      ],
      icon: <FaBrain className="icon is-medium header-icon" />,
    },
  ];

  return (
    <section className="container mt-6 profile-section">
      <div className="columns is-multiline is-variable is-8">
        {sections.map((section, idx) => (
          <div key={idx} className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
            <div className="card hover-card is-flex is-flex-direction-column same-height">
              <header className="card-header">
                <p className="card-header-title">
                  {section.icon} <span className="header-text">{section.title}</span>
                </p>
              </header>
              <div className="card-content is-flex-grow-1">
                {Array.isArray(section.content)
                  ? section.content.map((item, idx) => (
                      <div key={idx} className="content">
                        <strong>{item.header}</strong>
                        <ul>
                          {item.subtext.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : <p className="content">{section.content}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
