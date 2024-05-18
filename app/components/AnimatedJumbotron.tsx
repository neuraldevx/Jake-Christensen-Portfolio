import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsTwitterX } from 'react-icons/bs';
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { SiNextdotjs, SiVercel, SiTailwindcss } from 'react-icons/si'; // Import Tailwind CSS icon
import mainImage from '../public/assets/mainPic.png';

const AnimatedJumbotron = () => {
  return (
    <section className="hero is-dark is-bold my-40" style={{ backgroundImage: 'url(assets/dev3pfp.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-body" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="container is-flex is-align-items-center">
          <div className="text-content">
            <h1 className="title has-text-white is-size-2">Jacob Christensen</h1>
            <p className="subtitle has-text-grey-light is-size-5">Passionate Developer | AI & Data Engineer | UW-Madison '24</p>
            <div className="buttons">
              <a href="https://twitter.com/realjakechris" aria-label="Twitter" className="icon is-large icon-white">
                <BsTwitterX size={24} />
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
              borderRadius: ["50%", "50%", "50%", "50%", "50%"]
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 1,
              repeatDelay: 1
            }}
            style={{ marginLeft: 'auto' }} // Add marginLeft to push the image to the right
          >
            <Image
              src={mainImage}
              alt="Picture of Jacob Christensen"
              className="is-rounded jumbotron-image"
              width={128}
              height={128} // Make the image smaller
            />
          </motion.figure>
          <div className="tech-info ml-4">
            <p className="has-text-white is-size-5">Made with:</p>
            <div className="icons">
              <SiNextdotjs className="icon is-medium icon-white glow" />
              <SiVercel className="icon is-medium icon-white glow" />
              <SiTailwindcss className="icon is-medium icon-white glow" /> {/* Added Tailwind CSS icon */}
            </div>
            <p className="has-text-white is-size-6">Deployed with Vercel</p>
            <p className="has-text-white is-size-6">Styled with Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedJumbotron;
