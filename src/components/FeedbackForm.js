import React, { useState } from 'react';
import { createFeedback } from '../services/api';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      await createFeedback(formData);
      setSuccess(true);
      setFormData({
        name: '',
        message: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Оставить отзыв</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Спасибо за ваш отзыв!</div>}
      
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Ваш отзыв:</label>
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
          {loading ? 'Отправка...' : 'Отправить отзыв'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm; 