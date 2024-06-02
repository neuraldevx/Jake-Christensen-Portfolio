import React from 'react';
import { FaReact, FaJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma, SiVercel, SiNetlify, SiPrisma, SiR, SiTensorflow } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython className="icon has-text-info" /> },
  { name: 'R', icon: <SiR className="icon has-text-grey-light" /> },
  { name: 'React', icon: <FaReact className="icon has-text-info" /> },
  { name: 'JavaScript', icon: <FaJs className="icon has-text-warning" /> },
  { name: 'TypeScript', icon: <SiTypescript className="icon has-text-info" /> },
  { name: 'Git', icon: <FaGitAlt className="icon has-text-danger" /> },
  { name: 'TailWind', icon: <SiTailwindcss className="icon has-text-info" /> },
  { name: 'Vercel', icon: <SiVercel className="icon has-text-black" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="icon has-text-success" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="icon has-text-danger" /> },
];

const Skills = () => {
  return (
    <section className="skills-section mt-6 mb-6">
      <div className="container">
        <h2 className="title has-text-centered" style={{ color: 'var(--text-color)' }}>Skills</h2>
        <p className="subtitle has-text-centered" style={{ color: 'var(--text-color)' }}>Here are some of the technologies I'm proficient in.</p>
        <div className="columns is-multiline is-centered">
          {skills.map((skill) => (
            <div key={skill.name} className="column is-2 has-text-centered">
              <div className="box transition duration-300 transform hover:bg-gray-700 hover:scale-105" style={{ backgroundColor: 'var(--card-background-color)' }}>
                <div className="is-size-1">{skill.icon}</div>
                <p className="mt-2" style={{ color: 'var(--text-color)' }}>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
