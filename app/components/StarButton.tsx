// components/StarButton.tsx
"use client";
import { useState } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { Star } from 'react-feather';

const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
  liked: { scale: 1.2 },
  unliked: { scale: 1 },
};

const iconVariants: Variants = {
  unliked: { scale: 1 },
  liked: {
    scale: [1, 1.5, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hover: { scale: 1.2 },
};

const iconFadeTransition: Transition = { duration: 0.2, delay: 0.3 };

const StarButton: React.FC = () => {
  const [isStarred, setIsStarred] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleStarClick = () => {
    setIsStarred(true);
    // Add a delay before navigating to GitHub
    setTimeout(() => {
      window.open("https://github.com/neuraldevx/Jake-Christensen-Portfolio", "_blank");
    }, 1000); // 1000ms = 1 second delay
  };

  return (
    <motion.button
      initial="rest"
      animate={[isStarred ? "liked" : "unliked", isHover ? "hover" : "rest"]}
      whileTap="tap"
      variants={buttonVariants}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onClick={handleStarClick}
      className="button is-focused is-white-glow"
    >
      <motion.div
        className="icon"
        variants={iconVariants}
        transition={iconFadeTransition}
      >
        <Star color={isStarred ? 'yellow' : 'white'} size={24} />
      </motion.div>
      <span style={{ marginLeft: '8px' }}>{isStarred ? 'Starred' : 'Star'}</span>
    </motion.button>
  );
};

export default StarButton;
