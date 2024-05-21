'use client';
import React, { useEffect, useState } from 'react';
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { BsTwitterX } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import 'bulma/css/bulma.min.css';
import 'app/styles/global.css'; // Import custom styles
import ProfileSection from './components/profileSection';
import Jumbotron from './components/animatedJumbotron'; // Import the Jumbotron component
import ContactForm from './components/contactForm';
import Skills from './components/skills';
import Certifications from './components/certifications';
import IntroAnimated from './components/introAnimated';

export default function Page() {
  const [fadeIn, setFadeIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const { status, message } = await res.json();

    if (status === 'success') {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus(`Failed to send message: ${message}`);
    }
  };

  return (
    <main className="p-4">
      <IntroAnimated />
      {/* <Jumbotron /> */}
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
