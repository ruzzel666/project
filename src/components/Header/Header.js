import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Плавный скролл к секции
  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // если секция еще не отрендерена, меняем hash, useEffect на Home обработает
        window.location.hash = hash;
      }
    } else {
      navigate('/#' + hash);
    }
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-left">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/services">Услуги</Link></li>
        </ul>
        <div className="header-logo">Beauty Laboratorium</div>
        <ul className="nav-right">
          <li><Link to="/labelage">Продукт Labelage</Link></li>
          <li><a href="#contacts" onClick={e => handleNavClick(e, 'contacts')}>Контакты</a></li>
          <li><a href="#reviews" onClick={e => handleNavClick(e, 'reviews')}>Отзывы</a></li>
        </ul>
      </nav>
      <div className="header-divider" />
    </header>
  );
}

export default Header; 