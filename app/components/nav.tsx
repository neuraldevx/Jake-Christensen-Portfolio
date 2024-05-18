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
  // '/blog': {
  //   name: 'Blog',
  // },
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {navItems['/'].icon}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Object.entries(navItems).map(([path, { name }]) => (
              <li className="nav-item" key={path}>
                <Link href={path} className="nav-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
