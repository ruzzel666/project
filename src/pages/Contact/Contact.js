import React, { useState, useEffect } from 'react';
import Map from '../../components/Map/Map';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('contactFormData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    localStorage.removeItem('contactFormData');
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Свяжитесь с нами</h1>
        <p>Мы всегда готовы ответить на ваши вопросы</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>Наши контакты</h3>
            <div className="info-item">
              <span className="icon">📍</span>
              <p>г. Москва, ул. Примерная, 123</p>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <p>+7 (999) 123-45-67</p>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="info-card">
            <h3>Время работы</h3>
            <div className="info-item">
              <span className="icon">🕒</span>
              <p>Пн-Пт: 9:00 - 18:00</p>
            </div>
            <div className="info-item">
              <span className="icon">🌙</span>
              <p>Сб-Вс: Выходной</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Отправить сообщение</h2>
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </div>

      <div className="map-section">
        <h2>Как нас найти</h2>
        <Map />
      </div>
    </div>
  );
}

export default Contact; 