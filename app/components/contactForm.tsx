import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import 'app/styles/global.css'; // Import custom styles

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="container">
      <div className="columns">
        <div className="column">
          <div className="card hover-card custom-background">
            <header className="card-header custom-card-header">
              <p className="card-header-title" style={{ color: 'var(--text-color)' }}>Contact Me</p>
            </header>
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label" style={{ color: 'var(--text-color)' }}>Name</label>
                  <div className="control">
                    <input
                      className="input custom-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" style={{ color: 'var(--text-color)' }}>Email</label>
                  <div className="control">
                    <input
                      className="input custom-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" style={{ color: 'var(--text-color)' }}>Message</label>
                  <div className="control">
                    <textarea
                      className="textarea custom-input"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
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
              {formStatus && <p style={{ color: 'var(--text-color)' }}>{formStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
