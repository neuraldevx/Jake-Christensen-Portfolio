// File: /workspaces/personalportfolio/app/components/toggle.tsx

import React, { useState } from 'react';

interface ToggleProps {
  children?: React.ReactNode;  // children are optional
  ariaLabel: string;
}

const Toggle: React.FC<ToggleProps> = ({ children, ariaLabel }) => {
    const [enabled, setEnabled] = useState(false);

    const toggleEnabled = () => {
        setEnabled(!enabled);
        document.body.classList.toggle('dark-mode', enabled);  // Adjust based on your dark mode class
    };

    return (
        <button onClick={toggleEnabled} aria-label={ariaLabel} className="focus:outline-none">
            {children || <MoonIcon />}
        </button>
    );
};

export default Toggle;

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
