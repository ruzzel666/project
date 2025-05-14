import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-tilda">
      <section className="about-hero-tilda">
        <h1 className="about-title-tilda">О нас</h1>
        <div className="about-main-tilda">
          <div className="about-main-text-tilda">
            <p>Мы являемся единственным дистрибьютором на польском рынке косметики от французского бренда L'abelage. На выбор этих средств нас вдохновила сила черной икры, жемчужной пудры и золота. Все эти ингредиенты вы найдете в нашей продукции. Наша косметика действует на все признаки старения кожи и может использоваться как женщинами, так и мужчинами.</p>
            <p>Нельзя переусердствовать в уходе за кожей. В ответ она отплатит вам молодостью и красотой. Мы верим, что ваша кожа заслуживает не только простого ухода – она заслуживает L'abelage!</p>
          </div>
        </div>
        <div className="about-gallery-tilda">
          <img src="/img/wwa-120-scaled.jpg" alt="Косметолог" className="about-gallery-img-tilda" />
          <img src="/img/wwa-113-scaled-pwdznmqo7of8wl0f7r86kbc8xrg3t8o2u9ixpa4ef4.jpg" alt="Здание" className="about-gallery-img-tilda" />
          <img src="/img/wwa-140-scaled.jpg" alt="Персонал" className="about-gallery-img-tilda" />
        </div>
        <div className="about-main-tilda">
          <div className="about-main-text-tilda">
            <p>Помимо инновационной косметики, у нас также есть богатый ассортимент процедур, и мы первыми представили инновационную процедуру Innari (неинвазивные нити для лифтинга). Наш персонал позаботится о вашем самочувствии и результатах лечения.</p>
            <p>Приглашаем вас на икорную процедуру на основе продуктов L'abelage – испытайте силу косметики с черной икрой на себе.</p>
            <Link className="about-cta-tilda" to="/booking">Записаться</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 