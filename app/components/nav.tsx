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
    icon: <MountainIcon />  // Icon for the homepage link
  },
  '/blog': {
    name: 'Blog',
  },
  '/projects': {
    name: 'Projects'
  },
    'https://buymeacoffee.com/jakechristensen': { // Replace 'yourusername' with your actual username on Buy Me a Coffee
      name: 'Buy Me a Coffee',
      icon: <div className='py-4 flex'><CiCoffeeCup /> </div> // Coffee cup GIF icon
  },
};

export function Navbar() {
  return (
    <header className="bg-gray-900 text-white w-full ">
      <div className="pl-1 sm:pl-2 lg:pl-3"> {/* Adjusted padding for closer edge alignment */}
        <div className="flex justify-start items-center h-16"> {/* Changed justify-between to justify-start */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center mr-4">
              <Link href="/">
                {navItems['/'].icon}
              </Link>
            </div>
            <div className="flex">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link key={path} href={path} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
