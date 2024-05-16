// components/ScrollProgressBar.js
"use client"; // Ensure this is treated as a client component

import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = totalScroll / windowHeight;

    setProgress(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        backgroundColor: '#0070f3',
        transform: `scaleX(${progress})`,
        transformOrigin: '0%',
        zIndex: 9999
      }}
    />
  );
};

export default ScrollProgressBar;
