// components/ProfileSection.tsx
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { FaGraduationCap } from 'react-icons/fa';

const ProfileSection = () => {
  const sections = [
    {
      title: 'About',
      content: 'Jacob is a skilled software engineer with a passion for building innovative and user-friendly applications. He has extensive experience in full-stack development, leveraging technologies such as React, Node.js, and MongoDB to deliver high-quality solutions. In his free time, Jacob enjoys exploring new tech trends, contributing to open-source projects, and hiking.',
      icon: <CiUser className="icon is-medium" />,
    },
    {
      title: 'Education',
      content: [
        { header: 'Bachelor of Science in Data Science', subtext: 'University of Wisconsin-Madison, 2024' },
        { header: 'Certificate in Computer Science', subtext: 'University of Wisconsin-Madison, 2024' },
      ],
      icon: <FaGraduationCap className="icon is-medium" />,
    },
    {
      title: 'Experience',
      content: [
        { header: 'Software Developer Intern', subtext: 'Publix, 2023 - Present' },
        { header: 'IT Quality Assurance Technician', subtext: 'University of Wisconsin-Whitewater IT Help Desk, 2022' },
      ],
      icon: <FaGraduationCap className="icon is-medium" />,
    },
    {
      title: 'Skills',
      content: [
        { header: 'Programming Languages', subtext: 'Python, Java, SQL, C, JavaScript, TypeScript' },
        { header: 'Frameworks & Tools', subtext: 'React, Node.js, MongoDB, MySQL, Docker, Git' },
        { header: 'Data Science & Machine Learning', subtext: 'Pandas, NumPy, TensorFlow, Scikit-learn' },
      ],
      icon: <FaGraduationCap className="icon is-medium" />,
    },
  ];

  return (
    <section className="container mt-6">
      <div className="columns is-multiline">
        {sections.map((section, idx) => (
          <div key={idx} className="column is-one-quarter-desktop is-half-tablet">
            <div className="card hover-card" style={{ backgroundColor: '#161B22', border: '1px solid #30363D', height: '100%' }}>
              <header className="card-header" style={{ backgroundColor: '#0D1117' }}>
                <p className="card-header-title has-text-white">
                  {section.icon} {section.title}
                </p>
              </header>
              <div className="card-content">
                {Array.isArray(section.content)
                  ? section.content.map((item, idx) => (
                      <div key={idx} className="content has-text-grey-light">
                        <strong>{item.header}</strong>
                        <p>{item.subtext}</p>
                      </div>
                    ))
                  : <p className="content has-text-grey-light">{section.content}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
