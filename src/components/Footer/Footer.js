import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-title">Beauty Laboratorium: забота о вашей<br/>красоте и здоровье</div>
        </div>
        <div className="footer-right">
          <button className="footer-copyright-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="footer-copyright">&copy; Beauty Laboratorium 2025 <span className="footer-arrow">↑</span></span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 