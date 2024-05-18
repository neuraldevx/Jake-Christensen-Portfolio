import React from 'react';
import { FaReact, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma, SiVercel, SiNetlify, SiPrisma } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="icon has-text-info" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="icon has-text-grey-light" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="icon has-text-info" /> },
  { name: 'JavaScript', icon: <FaJs className="icon has-text-warning" /> },
  { name: 'TypeScript', icon: <SiTypescript className="icon has-text-info" /> },
  { name: 'Git', icon: <FaGitAlt className="icon has-text-danger" /> },
  { name: 'Figma', icon: <SiFigma className="icon has-text-pink" /> },
  { name: 'Vercel', icon: <SiVercel className="icon has-text-grey-light" /> },
  { name: 'Netlify', icon: <SiNetlify className="icon has-text-success" /> },
  { name: 'Prisma', icon: <SiPrisma className="icon has-text-info" /> },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered has-text-white">Skills</h2>
        <p className="subtitle has-text-centered has-text-grey-light">Here are some of the technologies I'm proficient in.</p>
        <div className="columns is-multiline is-centered">
          {skills.map((skill) => (
            <div key={skill.name} className="column is-2 has-text-centered">
              <div className="box transition duration-300 transform hover:bg-gray-700 hover:scale-105" style={{ backgroundColor: '#1E1E1E' }}>
                <div className="is-size-1">{skill.icon}</div>
                <p className="has-text-white mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
