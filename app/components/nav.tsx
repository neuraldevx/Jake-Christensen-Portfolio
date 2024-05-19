import Link from 'next/link';
import { CiCoffeeCup } from "react-icons/ci";
import StarButton from './StarButton';

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

interface NavItem {
  name: string;
  icon?: JSX.Element;
  className: string;
}

const navItems: Record<string, NavItem> = {
  '/': {
    name: 'Home',
    className: 'navbar-item button is-focused is-white-glow'
  },
  '/projects': {
    name: 'Projects',
    className: 'navbar-item button is-focused is-white-glow'
  },
  'https://buymeacoffee.com/jakechristensen': {
    name: 'Buy Me a Coffee',
    icon: <div className='py-4 flex'><CiCoffeeCup /></div>,
    className: 'navbar-item button is-focused is-white-glow'
  },
};

export function Navbar() {
  return (
    <nav className="navbar is-dark is-spaced flex-auto text-wrap">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <MountainIcon />
          </Link>
          <div className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            {Object.entries(navItems).map(([path, { name, icon, className }]) => (
              <Link href={path} key={path} className={className}>
                {icon && <span className="icon">{icon}</span>}
                <span>{name}</span>
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <StarButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
