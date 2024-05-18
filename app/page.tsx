// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';
import { FaGraduationCap } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import mainImage from './public/assets/mainPic.png';

export default function Page() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className="p-4">
      <section className={`hero is-dark is-bold ${fadeIn ? 'fade-in' : ''}`}>
        <div className="hero-body">
          <div className="container is-flex is-align-items-center is-flex-direction-column is-flex-direction-row-desktop">
            <figure className="image is-128x128 mr-4 mb-4 mb-0-desktop">
              <Image
                src={mainImage}
                alt="Picture of Jacob Christensen"
                className="is-rounded"
                width={128}
                height={128}
              />
            </figure>
            <div className="content has-text-centered has-text-left-desktop">
              <h1 className="title is-1">Jacob Christensen</h1>
              <p className="subtitle is-4">Passionate Developer | AI & Data Engineer | UW-Madison '24</p>
              <div className="buttons is-centered is-left-desktop">
                <Link href="https://twitter.com/realjakechris" aria-label="Twitter" className="button is-link">
                  <BsTwitterX className="icon" />
                </Link>
                <a href="mailto:Jrchris511@gmail.com" className="button is-link">
                  <MailIcon className="icon" />
                </a>
                <Link href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn" className="button is-link">
                  <Linkedin className="icon" />
                </Link>
                <Link href="https://github.com/JakeChristensen5" aria-label="GitHub" className="button is-link">
                  <GitHub className="icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {[
              {
                title: "About",
                content: "Jacob is a skilled software engineer with a passion for building innovative and user-friendly applications. He has extensive experience in full-stack development, leveraging technologies such as React, Node.js, and MongoDB to deliver high-quality solutions. In his free time, Jacob enjoys exploring new tech trends, contributing to open-source projects, and hiking.",
                icon: <CiUser className="icon" />
              },
              {
                title: "Education",
                content: [
                  { header: "Bachelor of Science in Data Science", subtext: "University of Wisconsin-Madison, 2024" },
                  { header: "Certificate in Computer Science", subtext: "University of Wisconsin-Madison, 2024" }
                ],
                icon: <FaGraduationCap className="icon" />
              },
              {
                title: "Experience",
                content: [
                  { header: "Software Developer Intern", subtext: "Publix, 2023 - Present" },
                  { header: "IT Quality Assurance Technician", subtext: "University of Wisconsin-Whitewater IT Help Desk, 2022" }
                ],
                icon: <FaGraduationCap className="icon" />
              },
              {
                title: "Skills",
                content: [
                  { header: "Programming Languages", subtext: "Python, Java, SQL, C, JavaScript, TypeScript" },
                  { header: "Frameworks & Tools", subtext: "React, Node.js, MongoDB, MySQL, Docker, Git" },
                  { header: "Data Science & Machine Learning", subtext: "Pandas, NumPy, TensorFlow, Scikit-learn" }
                ],
                icon: <FaGraduationCap className="icon" />
              }
            ].map((section, idx) => (
              <div key={idx} className="column is-one-third mb-4">
                <div className="card box-shadow-hover project-card">
                  <header className="card-header">
                    <p className="card-header-title is-centered">
                      {section.icon} <span className="ml-2">{section.title}</span>
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {Array.isArray(section.content) ? (
                        <ul>
                          {section.content.map((item, index) => (
                            <li key={index}>
                              <strong>{item.header}</strong>
                              {item.subtext && <br />}
                              {item.subtext}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="title is-2 mt-6">Certifications</h2>
          <div className="columns is-multiline">
            {[
              {
                title: "Fundamentals of the Databricks Lakehouse Platform Accreditation",
                issuer: "Databricks",
                date: "Issued Apr 2024",
                credentialId: "102062094",
                skills: "Azure Databricks, Data Lake Fundamentals, Software Development"
              },
              {
                title: "Generative AI Fundamentals Accreditation",
                issuer: "Databricks",
                date: "Issued Apr 2024",
                credentialId: "E-1Q55ZV",
                skills: "Generative AI, Large Language Models (LLM)"
              },
              {
                title: "Intro to Machine Learning",
                issuer: "Kaggle",
                date: "Issued Apr 2024",
                skills: "Machine Learning"
              }
            ].map((certification, idx) => (
              <div key={idx} className="column is-one-third">
                <div className="card box-shadow-hover project-card">
                  <header className="card-header">
                    <p className="card-header-title is-centered">
                      {certification.title}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <p><strong>Issuer:</strong> {certification.issuer}</p>
                      <p><strong>Date:</strong> {certification.date}</p>
                      {certification.credentialId && <p><strong>Credential ID:</strong> {certification.credentialId}</p>}
                      <p><strong>Skills:</strong> {certification.skills}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="title is-2 mt-6">Contact</h2>
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="card box-shadow-hover project-card">
                <div className="card-content">
                  <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control">
                        <input className="input" type="text" name="name" required />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input className="input" type="email" name="email" required />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Message</label>
                      <div className="control">
                        <textarea className="textarea" name="message" required></textarea>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-link" type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
