import Link from "next/link";
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { BsTwitterX } from "react-icons/bs";
import profilePic from 'app/public/assets/dev3pfp.png'
import mainPic from 'app/public/assets/mainPic.png'
import Image from 'next/image';
import { FaGraduationCap } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

export default function Page() {
  return (
    <main className="p-4">
      <section className="container px-4 py-0 md:py-0 lg:py-0 flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Jacob Christensen</h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-lg md:text-xl whitespace-nowrap">
            Passionate Developer | AI & Data Engineer | UW-Madison '24
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com/realjakechris" aria-label="Twitter">
            <BsTwitterX className="h-5 w-5 cursor-pointer" />
          </Link>
          <a className="flex items-center space-x-2" href="mailto:Jrchris511@gmail.com">
            <MailIcon className="h-5 w-5" />
          </a>
          <Link href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 cursor-pointer" />
          </Link>
          <Link href="https://github.com/JakeChristensen5" aria-label="GitHub">
            <GitHub className="h-5 w-5 cursor-pointer" />
          </Link>
        </div>
      </section>
      {/* Profile Picture Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <div className="">
        <Image
          src={mainPic}
          alt="Picture of the author"
          width={250} 
          height={250} 
        />
        </div>
      </section>
      {/* about me*/}
      <section className="container mx-auto px-4 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {[
              {
                title: "About",
                content: "Jacob is a skilled software engineer with a passion for building innovative and user-friendly applications. He has extensive experience in full-stack development, leveraging technologies such as React, Node.js, and MongoDB to deliver high-quality solutions."
              },
              {
                title: "Education",
                content: [
                  { header: "Bachelor of Science in Computer Science", subtext: "University of California, Berkeley" },
                  { header: "Magna Cum Laude" }
                ]
              },
              {
                title: "Experience",
                content: [
                  { header: "Senior Software Engineer", subtext: "Acme Inc., 2019 - Present" },
                  { header: "Software Engineer Intern", subtext: "Vercel, 2018" }
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 transform">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="text-gray-600 dark:text-gray-400">
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, index) => (
                        <li key={index}>
                          <strong className="font-semibold">{item.header}</strong>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
