import React, { useState } from 'react';
import { createContact } from '../services/api';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createContact(formData);
      setSuccess(true);
      setFormData({
        clientName: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Связаться с нами</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Сообщение успешно отправлено!</div>}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="clientName">Ваше имя:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Отправка...' : 'Отправить сообщение'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 