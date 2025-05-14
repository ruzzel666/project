import React, { useState } from 'react';
import './Reviews.css';
import bg from '../../img/oblojka.jpg';

export default function Reviews() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setText('');
    setRating(0);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="reviews-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="reviews-container">
        <h1 className="reviews-title">Оставь свой отзыв о нас</h1>
        <form className="reviews-form" onSubmit={handleSubmit}>
          <input className="reviews-input" type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />
          <input className="reviews-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="reviews-input" type="tel" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} required />
          <textarea className="reviews-textarea" placeholder="Напишите, что Вы думаете о нас" value={text} onChange={e => setText(e.target.value)} required />
          <div className="reviews-stars">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <span key={i} className={i <= rating ? 'star active' : 'star'} onClick={() => setRating(i)}>&#9733;</span>
            ))}
          </div>
          <button className="reviews-btn" type="submit">Отправить отзыв</button>
        </form>
        {success && (
          <div className="reviews-success">Спасибо за ваш отзыв!</div>
        )}
      </div>
    </div>
  );
} 