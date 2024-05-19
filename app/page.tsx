// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import mainImage from './public/assets/mainPic.png';
import 'bulma/css/bulma.min.css';
import 'app/styles/global.css'; // Import custom styles
import ProfileSection from './components/ProfileSection';
import Jumbotron from './components/AnimatedJumbotron'; // Import the Jumbotron component
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

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
    <main className="p-4" style={{ backgroundColor: '#0D1117', color: '#C9D1D9' }}>
      <Jumbotron/>{/* Add the Jumbotron component here */}
      <ProfileSection/> {/* Profile section*/}
      <Skills/>
      <Certifications/>
      <ContactForm/> {/* Contact Form*/}
    </main>
  );
}
