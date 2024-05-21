import React from 'react';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          className="footer-button"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/neuraldevx"
        >
          <ArrowIcon />
          <span className="ml-2">GitHub</span>
        </a>
        <a
          className="footer-button"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/realjakechris"
        >
          <ArrowIcon />
          <span className="ml-2">Twitter</span>
        </a>
      </div>
    </footer>
  );
}
