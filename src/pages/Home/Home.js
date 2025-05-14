import React, { useState, useEffect } from 'react';
import './Home.css';
import heroBg from '../../assets/smiling-woman-with-h.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const reviews = [
    {
      text: '"Я очень довольна косметикой и процедурами. Мне нравится, как кожа меняется от процедуры к процедуре. Она чувствует себя расслабленной и очень довольна.”',
      name: 'Svetlana',
      role: 'Постоянная клиентка салона',
      img: '/img/IMG-2014-scaled-pwcgfowo6l3atx9xjzuaz0n8z0z391o9tmaaxgx91c.jpg',
    },
    {
      text: '"Я ваш постоянный клиент, у меня есть косметика L\'abelage, и я считаю, что это очень хороший и профессиональный продукт. Я вижу эффекты на своем лице. Кроме того, я доволен услугами парикмахера - мои волосы сильно улучшились. Выбор вашего салона был удачным!”',
      name: 'Irena',
      role: 'Постоянный клиент салона',
      img: '/img/IMG-2006-pwcgfm35m2zfv3e10gmf9jcv6vczlyd2t8buhn1fk0.jpg',
    },
    {
      text: '"Я являюсь клиентом салона с 2018 года, моей главной проблемой были расширенные сосуды и сухая кожа. Пользуюсь косметикой и косметикой регулярно. Продукты L\'abelage приятны для кожи, не вызывают аллергии, хорошо впитываются и гармонируют с кожей. После применения продуктов я чувствую успокаивающую кожу, нет сухости, нет ощущения стягивания. Косметика имеет приятный запах. До сих пор я использовал такие бренды, как La Prairie, Kanebo, продукты L\'abelage соответствуют моим ожиданиям на 100%. У меня аллергия, косметика не вызывает у меня аллергии,я чувствую, что они успокаивают мою кожу.”',
      name: 'Alicja',
      role: 'Регулярная посетительница салона',
      img: '/img/IMG-1958-1-scaled-pwcghocelzt3cae5yupy8ima4b6zi1jvffv7ehzbwg.jpg',
    },
  ];
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % reviews.length);
  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactComment, setContactComment] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // небольшая задержка для корректного рендера
      }
    }
  }, []);

  return (
    <div className="home">
      {/* Hero-блок */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content centered">
          <h1 className="hero-title">Подчеркните свою красоту</h1>
          <p className="hero-subtitle">
            Откройте для себя оазис индивидуальной красоты и заботы о себе. Мы сочетаем новейшие технологии и индивидуальный подход, чтобы создать преобразующий опыт, подчеркивая вашу естественную красоту и повышая вашу уверенность.
          </p>
          <Link className="cta-button hero-cta" to="/booking">Записаться сейчас</Link>
        </div>
      </section>

      {/* Наши услуги */}
      <section className="services-block">
        <h2 className="services-title">Наши услуги</h2>
        <p className="services-subtitle">Насладитесь индивидуальными услугами: омолаживанием кожи, контурированием тела и уходом за волосами, учитывая ваши потребности для лучших результатов.</p>
        <div className="services-list">
          <div className="service-item">
            <span className="service-name">Миндальный скраб с успокаивающей маской</span>
            <span className="service-price">5360₽</span>
          </div>
          <div className="service-item">
            <span className="service-name">Массаж тела на нефритовой кровати</span>
            <span className="service-price">3216₽</span>
          </div>
          <div className="service-item">
            <span className="service-name">Ламинирование / подтяжка ресниц / бровей</span>
            <span className="service-price">4288₽</span>
          </div>
        </div>
      </section>

      {/* Ощутите разницу (галерея) */}
      <section className="gallery-block">
        <h2 className="gallery-title">Ощутите разницу</h2>
        <p className="gallery-subtitle">Убедитесь сами: посмотрите нашу галерею с результатами услуг, отражающими роскошную атмосферу и счастье клиентов.</p>
        <div className="gallery-list">
          <img className="gallery-img" src="/img/photo-1512207846876-.jpg" alt="Работа 1" />
          <img className="gallery-img" src="/img/photo-1519415510236-.jpg" alt="Работа 2" />
          <img className="gallery-img" src="/img/photo-1570172619644-.jpg" alt="Работа 3" />
          <img className="gallery-img" src="/img/wwa-113-scaled-pwdznmqo7of8wl0f7r86kbc8xrg3t8o2u9ixpa4ef4.jpg" alt="Работа 4" />
          <img className="gallery-img" src="/img/wwa-120-scaled.jpg" alt="Работа 5" />
          <img className="gallery-img" src="/img/wwa-147-scaled.jpg" alt="Работа 6" />
          <img className="gallery-img" src="/img/wwa-140-scaled.jpg" alt="Работа 7" />
          <img className="gallery-img" src="/img/wwa-136-scaled.jpg" alt="Работа 8" />
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section className="reviews-block reviews-slider-block" id="reviews">
        <h2 className="reviews-title">Отзывы наших клиентов</h2>
        <div className="reviews-slider">
          <button className="slider-arrow left" onClick={prev} aria-label="Предыдущий отзыв">&#60;</button>
          <div className="review-slide">
            <p className="review-text">{reviews[current].text}</p>
            <img className="review-photo" src={reviews[current].img} alt={reviews[current].name} />
            <div className="review-author-name">{reviews[current].name}</div>
            <div className="review-author-role">{reviews[current].role}</div>
          </div>
          <button className="slider-arrow right" onClick={next} aria-label="Следующий отзыв">&#62;</button>
        </div>
        <div className="slider-dots">
          {reviews.map((_, idx) => (
            <span key={idx} className={"slider-dot" + (idx === current ? " active" : "")}></span>
          ))}
        </div>
        <Link to="/reviews" className="leave-review-btn">Оставить отзыв</Link>
      </section>

      {/* Блог */}
      <section className="blog-block">
        <h2 className="blog-title">Красота прозрения</h2>
        <p className="blog-subtitle">Будьте в курсе современных трендов в красоте и узнайте советы по уходу за кожей в наших блогах.</p>
        <div className="blog-list">
          <div className="blog-card">
            <img className="blog-img" src="/img/photo-1512207846876-.jpg" alt="Косметика" />
            <h3>Как сохранить здоровье кожи летом</h3>
            <p>Советы по уходу за кожей в жаркую погоду, защите от солнца и поддержанию оптимального уровня увлажнения.</p>
            <a href="#" className="blog-link">Читать статью</a>
          </div>
          <div className="blog-card">
            <img className="blog-img" src="/img/photo-1519415510236-.jpg" alt="Педикюр" />
            <h3>Тренды в причёсках и стрижках</h3>
            <p>Обзор актуальных причёсок и стрижек, которые подчеркнут вашу индивидуальность и стиль.</p>
            <a href="#" className="blog-link">Читать статью</a>
          </div>
          <div className="blog-card">
            <img className="blog-img" src="/img/photo-1570172619644-.jpg" alt="Маска для лица" />
            <h3>Уход за волосами: мифы и реальность</h3>
            <p>Разбираем популярные мифы об уходе за волосами и рассказываем о проверенных методах поддержания их здоровья.</p>
            <a href="#" className="blog-link">Читать статью</a>
          </div>
        </div>
      </section>

      {/* Контакты/CTA */}
      <section className="contacts-block" id="contacts">
        <h2 className="contacts-title">Свяжитесь с нами</h2>
        <p className="contacts-subtitle">Наши специалисты готовы помочь вам с выбором процедур и ответить на любые вопросы.</p>
        <div className="contacts-columns">
          <div className="contacts-left">
            <div className="contacts-info">
              <div className="contacts-phone">Тел. --------------------</div>
              <div className="contacts-dash">--------------------------</div>
              <div className="contacts-address">Салон красоты <b>Beauty Laboratorium</b> в Калининграде</div>
            </div>
            <div className="contacts-socials">
              <a href="https://t.me/" className="social-icon" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none"><path d="M21.5 3.5L2.5 10.5C1.5 10.9 1.5 11.6 2.4 11.9L7.1 13.3L18.1 6.7C18.6 6.4 19.1 6.6 18.7 6.9L9.5 15.2V15.2L9.2 19.1C9.6 19.1 9.8 18.9 10 18.7L12.1 16.7L16.7 20.1C17.5 20.6 18.1 20.3 18.3 19.3L21.8 4.5C22.1 3.5 21.5 3.5 21.5 3.5Z" fill="#229ED9"/></svg>
              </a>
              <a href="https://vk.com/" className="social-icon" aria-label="VK" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="45" cy="45" r="45" fill="#5181B8"/>
                  <path d="M63.6 33.6c.4-1.3 0-2.3-1.8-2.3h-5.9c-1.5 0-2.2.8-2.6 1.7 0 0-3 7.2-7.2 11.8-1.4 1.4-2 1.8-2.7 1.8-.4 0-1-.5-1-1.8v-11c0-1.6-.5-2.3-1.8-2.3h-9.3c-1 0-1.6.7-1.6 1.4 0 1.5 2.2 1.9 2.4 6.2v9.4c0 2-.4 2.3-1.3 2.3-2.3 0-7.8-7.2-11-15.4-.7-1.7-1.3-2.3-2.8-2.3h-5.9c-1.8 0-2.2.8-2.2 1.7 0 1.6 2.3 9.6 10.7 20.2 5.6 7.3 13.5 11.3 20.7 11.3 4.3 0 4.8-1 4.8-2.7v-6.2c0-2 .4-2.3 1.8-2.3 1 0 2.7.5 6.7 4.3 4.6 4.6 5.4 6.7 8 6.7h5.9c1.8 0 2.7-1 2.2-2.7-.6-1.7-2.7-4.2-5.5-7.2-1.5-1.7-3.7-3.6-4.4-4.5-1-1.3-.7-1.9 0-3.1 0 0 7-9.8 7.7-13.1z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
          <form className="contacts-form" onSubmit={e => {
            e.preventDefault();
            setContactSuccess(true);
            setContactName('');
            setContactEmail('');
            setContactPhone('');
            setContactComment('');
            setTimeout(() => setContactSuccess(false), 4000);
          }}>
            <input type="text" className="form-input" placeholder="Ваше полное имя" value={contactName} onChange={e => setContactName(e.target.value)} required />
            <input type="email" className="form-input" placeholder="Ваш адрес электронной почты" value={contactEmail} onChange={e => setContactEmail(e.target.value)} required />
            <input type="tel" className="form-input" placeholder="+7 (___) ___-__-__" value={contactPhone} onChange={e => setContactPhone(e.target.value)} required />
            <textarea className="form-textarea" placeholder="Ваши комментарии" rows="3" value={contactComment} onChange={e => setContactComment(e.target.value)}></textarea>
            <button type="submit" className="contacts-submit">Записаться на консультацию</button>
            {contactSuccess && (
              <div style={{ color: '#22c55e', fontWeight: 600, marginTop: 16, textAlign: 'center' }}>
                Спасибо! Ваша заявка успешно отправлена.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home; 