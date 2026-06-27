import React, { useState } from 'react';
import './Contect.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = () => {
    setStatus('Sending your message...');
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <form
        className="form"
        action="https://formsubmit.co/niteshchaurasia515@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Type your message here"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
};

export default Contect;
