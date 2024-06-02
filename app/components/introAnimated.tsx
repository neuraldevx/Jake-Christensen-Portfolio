import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsTwitterX } from "react-icons/bs";
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { SiNextdotjs, SiVercel, SiTailwindcss } from 'react-icons/si';
import mainImage from 'public/assets/mainPic.png';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const Intro = () => {
  return (
    <section className="hero my-6 p-8 custom-hero">
      <div className="hero-body">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="columns is-vcentered">
            <div className="column is-half has-text-centered-touch">
              <h1 className="title has-text-white is-size-3-mobile is-size-2-tablet custom-title">Jacob Christensen</h1>
              <p className="subtitle has-text-white is-size-5-mobile is-size-4-tablet custom-subtitle">Passionate Developer | AI & Data Engineer | UW-Madison '24</p>
              <div className="buttons is-centered">
                <a href="https://twitter.com/realjakechris" aria-label="Twitter" className="button is-light">
                  <BsTwitterX size={24} />
                </a>
                <a href="mailto:Jrchris511@gmail.com" aria-label="Email" className="button is-light">
                  <MailIcon width={24} height={24} />
                </a>
                <a href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn" className="button is-light">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/JakeChristensen5" aria-label="GitHub" className="button is-light">
                  <GitHub size={24} />
                </a>
              </div>
            </div>
            <div className="column is-half has-text-centered">
              <motion.figure
                className="image is-256x256 mx-auto jumbotron-image"
                animate={{
                  scale: [1, 1.2, 1.2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ['50%', '50%', '50%', '50%', '50%'],
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: 1,
                  repeatDelay: 1,
                }}
              >
                <Image
                  src={mainImage}
                  alt="Picture of Jacob Christensen"
                  className="is-rounded jumbotron-image"
                  width={256}
                  height={256}
                />
              </motion.figure>
            </div>
          </div>
          <div className="columns is-centered mt-5">
            <div className="column has-text-centered">
              <p className="has-text-white is-size-5">Made with:</p>
              <div className="is-flex is-justify-content-center is-align-items-center">
                <SiNextdotjs className="icon is-large has-text-white glow" />
                <SiVercel className="icon is-large has-text-white glow mx-3" />
                <SiTailwindcss className="icon is-large has-text-white glow" />
              </div>
              <p className="has-text-white is-size-6 mt-2">Deployed with Vercel</p>
              <p className="has-text-white is-size-6">Styled with Tailwind CSS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
