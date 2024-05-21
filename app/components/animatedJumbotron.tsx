import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsTwitterX } from 'react-icons/bs';
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { SiNextdotjs, SiVercel, SiTailwindcss } from 'react-icons/si';
import mainImage from 'public/assets/mainPic.png';

const InteractiveCard = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        className="relative bg-black rounded-xl shadow-xl p-8"
        style={{ width: '90%', maxWidth: '600px' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Jacob Christensen</h1>
          <p className="text-gray-400 text-lg md:text-xl mb-6">Passionate Developer | AI & Data Engineer | UW-Madison '24</p>
          <motion.div
            className="relative mx-auto mb-6"
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
          >
            <Image
              src={mainImage}
              alt="Picture of Jacob Christensen"
              className="rounded-full border-4 border-white shadow-lg"
              width={128}
              height={128}
            />
          </motion.div>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://twitter.com/realjakechris" aria-label="Twitter" className="text-white hover:text-gray-300 transition duration-300">
              <BsTwitterX size={32} />
            </a>
            <a href="mailto:Jrchris511@gmail.com" aria-label="Email" className="text-white hover:text-gray-300 transition duration-300">
              <MailIcon width={32} height={32} />
            </a>
            <a href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition duration-300">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/JakeChristensen5" aria-label="GitHub" className="text-white hover:text-gray-300 transition duration-300">
              <GitHub size={32} />
            </a>
          </div>
          <div>
            <p className="text-white text-lg mb-4">Made with:</p>
            <div className="flex justify-center space-x-4 text-white text-3xl">
              <SiNextdotjs className="hover:text-gray-300 transition duration-300" />
              <SiVercel className="hover:text-gray-300 transition duration-300" />
              <SiTailwindcss className="hover:text-gray-300 transition duration-300" />
            </div>
            <p className="text-gray-400 mt-4">Deployed with Vercel</p>
            <p className="text-gray-400">Styled with Tailwind CSS</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InteractiveCard;
