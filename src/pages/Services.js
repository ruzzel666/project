import React from 'react';
import BookingForm from '../components/BookingForm';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: '681b96cc0aadb4f0dba13b31',
      name: 'Стрижка',
      price: 1200,
      duration: 45,
      description: 'Классическая стрижка для мужчин и женщин.'
    },
    // Добавьте другие услуги по необходимости
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <h1>Наши услуги</h1>
        
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p className="service-price">{service.price} ₽</p>
              <p className="service-duration">Длительность: {service.duration} мин.</p>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="booking-section">
          <h2>Записаться на услугу</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Services; 