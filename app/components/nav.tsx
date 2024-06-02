"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CiCoffeeCup } from "react-icons/ci";
import StarButton from './starButton';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

interface NavItem {
  name: string;
  icon?: JSX.Element;
  className: string;
}

const navItems: Record<string, NavItem> = {
  '/': {
    name: 'Home',
    className: 'navbar-item is-white-glow'
  },
  '/projects': {
    name: 'Projects',
    className: 'navbar-item is-white-glow'
  },
  'https://buymeacoffee.com/jakechristensen': {
    name: 'Buy Me a Coffee',
    icon: <div className='py-4 flex'><CiCoffeeCup /></div>,
    className: 'navbar-item is-white-glow'
  },
};

export function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar has-background-black is-spaced">
      <div className="container">
        <div className="navbar-brand">
          <div className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} data-target="navbarMenu" onClick={toggleBurgerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {Object.entries(navItems).map(([path, { name, icon, className }]) => (
              <Link href={path} key={path} className={className}>
                {icon && <span className="icon">{icon}</span>}
                <span style={{ color: 'var(--text-color)' }}>{name}</span>
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-light" onClick={toggleTheme}>
                {theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
              </button>
            </div>
            <div className="navbar-item">
              <StarButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
