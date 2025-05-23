import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Салон красоты "Элегант"</h1>
          <p>Профессиональный уход за вашей красотой</p>
        </div>
      </section>

      <section className="about-preview">
        <h2>О нас</h2>
        <p>
          Мы предлагаем широкий спектр услуг по уходу за волосами, лицом и телом.
          Наши мастера - профессионалы с многолетним опытом работы.
        </p>
      </section>

      <section className="services-preview">
        <h2>Наши услуги</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Стрижки</h3>
            <p>Классические и современные стрижки для всех</p>
          </div>
          <div className="service-item">
            <h3>Окрашивание</h3>
            <p>Профессиональное окрашивание волос</p>
          </div>
          <div className="service-item">
            <h3>Укладки</h3>
            <p>Создание идеальных укладок на любой случай</p>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <h2>Отзывы наших клиентов</h2>
        <FeedbackForm />
      </section>
    </div>
  );
};

export default Home; 