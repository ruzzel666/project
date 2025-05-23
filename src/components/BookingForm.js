import React, { useState } from 'react';
import { createBooking } from '../services/api';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    serviceId: '',
    date: '',
    time: ''
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
      await createBooking(formData);
      setSuccess(true);
      setFormData({
        clientName: '',
        phone: '',
        serviceId: '',
        date: '',
        time: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Записаться на услугу</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Запись успешно создана!</div>}
      
      <form onSubmit={handleSubmit} className="booking-form">
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
          <label htmlFor="serviceId">Услуга:</label>
          <select
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
          >
            <option value="">Выберите услугу</option>
            <option value="681b96cc0aadb4f0dba13b31">Стрижка</option>
            {/* Добавьте другие услуги по необходимости */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Дата:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Время:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Отправка...' : 'Записаться'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 