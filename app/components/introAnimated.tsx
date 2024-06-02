import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsTwitter } from 'react-icons/bs';
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Intro = () => {
  return (
    <section className="hero is-bold my-40 custom-hero">
      <div className="hero-body custom-hero-body">
        <motion.div
          className="container custom-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-content">
            <h1 className="title custom-title">Jacob Christensen</h1>
            <p className="subtitle custom-subtitle">Passionate Developer | AI & Data Engineer | UW-Madison '24</p>
            <div className="buttons social-icons">
              <a href="https://twitter.com/realjakechris" aria-label="X" className="icon is-large icon-white hover">
                <BsTwitter size={24} />
              </a>
              <a href="mailto:Jrchris511@gmail.com" aria-label="Email" className="icon is-large icon-white">
                <MailIcon width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn" className="icon is-large icon-white">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/JakeChristensen5" aria-label="GitHub" className="icon is-large icon-white">
                <GitHub size={24} />
              </a>
            </div>
          </div>
          <motion.figure
            className="image is-256x256 jumbotron-image"
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
              width={200}
              height={200}
            />
          </motion.figure>
          <div className="tech-info">
            <p className="is-size-5">Made with:</p>
            <div className="icons">
              <SiNextdotjs className="icon glow" />
              <SiVercel className="icon glow" />
              <SiTailwindcss className="icon glow" />
            </div>
            <p className="is-size-6">Deployed with Vercel</p>
            <p className="is-size-6">Styled with Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
