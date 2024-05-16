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
      <section className={`jumbotron text-center ${fadeIn ? 'fade-in' : ''}`}>
        <div className="container">
          <h1 className="display-4">Jacob Christensen</h1>
          <p className="lead">Passionate Developer | AI & Data Engineer | UW-Madison '24</p>
          <div className="d-flex justify-content-center">
            <Link href="https://twitter.com/realjakechris" aria-label="Twitter">
              <BsTwitterX className="mx-2 cursor-pointer" style={{ width: '24px', height: '24px' }} />
            </Link>
            <a className="d-flex align-items-center mx-2" href="mailto:Jrchris511@gmail.com">
              <MailIcon className="mx-2 cursor-pointer" style={{ width: '24px', height: '24px' }} />
            </a>
            <Link href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn">
              <Linkedin className="mx-2 cursor-pointer" style={{ width: '24px', height: '24px' }} />
            </Link>
            <Link href="https://github.com/JakeChristensen5" aria-label="GitHub">
              <GitHub className="mx-2 cursor-pointer" style={{ width: '24px', height: '24px' }} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <div className="card mx-auto" style={{ maxWidth: '300px' }}>
          <Image
            src={mainImage}
            alt="Picture of the author"
            className="card-img-top"
            width={300}
            height={300}
          />
          <div className="card-body">
            <p className="card-text">This is a picture of Jacob Christensen.</p>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <div className="columns is-multiline">
          {[
            {
              title: "About",
              content: "Jacob is a skilled software engineer with a passion for building innovative and user-friendly applications. He has extensive experience in full-stack development, leveraging technologies such as React, Node.js, and MongoDB to deliver high-quality solutions. In his free time, Jacob enjoys exploring new tech trends, contributing to open-source projects, and hiking.",
              icon: <CiUser style={{ width: '24px', height: '24px' }} />
            },
            {
              title: "Education",
              content: [
                { header: "Bachelor of Science in Data Science", subtext: "University of Wisconsin-Madison, 2024" },
                { header: "Certificate in Computer Science", subtext: "University of Wisconsin-Madison, 2024" }
              ],
              icon: <FaGraduationCap style={{ width: '24px', height: '24px' }} />
            },
            {
              title: "Experience",
              content: [
                { header: "Software Developer Intern", subtext: "Publix, 2023 - Present" },
                { header: "IT Quality Assurance Technician", subtext: "University of Wisconsin-Whitewater IT Help Desk, 2022" }
              ],
              icon: <FaGraduationCap style={{ width: '24px', height: '24px' }} />
            },
            {
              title: "Skills",
              content: [
                { header: "Programming Languages", subtext: "Python, Java, SQL, C, JavaScript, TypeScript" },
                { header: "Frameworks & Tools", subtext: "React, Node.js, MongoDB, MySQL, Docker, Git" },
                { header: "Data Science & Machine Learning", subtext: "Pandas, NumPy, TensorFlow, Scikit-learn" }
              ],
              icon: <FaGraduationCap style={{ width: '24px', height: '24px' }} />
            }
          ].map((section, idx) => (
            <div key={idx} className="column is-one-third">
              <div className="card box-shadow-hover hover-shadow">
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
      </section>
    </main>
  );
}