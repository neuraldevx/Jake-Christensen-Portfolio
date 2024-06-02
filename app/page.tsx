'use client';
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import 'app/styles/global.css'; // Import custom styles
import ProfileSection from './components/profileSection';
import ContactForm from './components/contactForm';
import Skills from './components/skills';
import Certifications from './components/certifications';
import IntroAnimated from './components/introAnimated';

export default function Page() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className="p-4">
      <IntroAnimated />
      <ProfileSection />
      <Skills />
      <div className="columns is-variable is-8 is-multiline">
        <div className="column is-full-mobile is-half-tablet is-half-desktop">
          <Certifications />
        </div>
        <div className="column is-full-mobile is-half-tablet is-half-desktop contact-form-column">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
