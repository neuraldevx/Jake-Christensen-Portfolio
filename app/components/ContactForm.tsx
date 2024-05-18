// components/ContactForm.tsx
'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

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
    <section className="container mt-6">
      <div className="card hover-card" style={{ backgroundColor: '#161B22', border: '1px solid #30363D' }}>
        <header className="card-header" style={{ backgroundColor: '#0D1117' }}>
          <p className="card-header-title has-text-white">Contact Me</p>
        </header>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label has-text-grey-light">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#0D1117', color: '#C9D1D9' }}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-grey-light">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#0D1117', color: '#C9D1D9' }}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-grey-light">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#0D1117', color: '#C9D1D9' }}
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
          {formStatus && <p className="has-text-grey-light">{formStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
