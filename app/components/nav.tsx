// components/nav.tsx
import Link from 'next/link';
import { CiCoffeeCup } from "react-icons/ci";

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

const navItems = {
  '/': {
    name: 'Home',
    icon: <MountainIcon />
  },
  '/projects': {
    name: 'Projects'
  },
  'https://buymeacoffee.com/jakechristensen': {
    name: 'Buy Me a Coffee',
    icon: <div className='py-4 flex'><CiCoffeeCup /></div>
  },
};

export function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            {navItems['/'].icon}
          </Link>
          <div className="navbar-burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link href={path} key={path} className="navbar-item">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
