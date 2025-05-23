import React, { useState } from 'react';
import './Labelage.css';
import ProductModal from './ProductModal';

import img1 from '../img/Screenshot-from-2022-10-17-14-48-23-e1666011179370-1024x681.png';
import img2 from '../img/krem-na-noc-e1666011220431-1024x773.jpg';
import img3 from '../img/krem-pod-oko-e1666011327511-1024x743.jpg';
import img4 from '../img/serum-e.jpg';
import img5 from '../img/ultraintensywna-maseczka-do-twarzy-e1666011519786-1024x780.jpg';
import img6 from '../img/tonik.jpg';
import img7 from '../img/gele-dly-kogi.jpg';
import img8 from '../img/maseczka-1024x842.png';
import img9 from '../img/maslo-1024x861.png';

export default function Labelage() {
  // Кастомная плавная прокрутка
  function smoothScrollTo(targetY, duration = 1200) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      window.scrollTo(0, startY + diff * easeInOutCubic(progress));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  const scrollToProducts = () => {
    const section = document.getElementById('labelage-products');
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(y, 1200);
    }
  };
  const [modalProduct, setModalProduct] = useState(null);
  const openModal1 = () => setModalProduct(1);
  const openModal2 = () => setModalProduct(2);
  const openModal3 = () => setModalProduct(3);
  const openModal4 = () => setModalProduct(4);
  const openModal5 = () => setModalProduct(5);
  const openModal6 = () => setModalProduct(6);
  const openModal7 = () => setModalProduct(7);
  const openModal8 = () => setModalProduct(8);
  const openModal9 = () => setModalProduct(9);
  const closeModal = () => setModalProduct(null);
  return (
    <>
      <section className="labelage-hero" style={{ backgroundImage: 'url(/img/photo-1512207846876-.jpg)' }}>
        <div className="labelage-hero-overlay" />
        <div className="labelage-hero-content">
          <h1 className="labelage-hero-title">
            <span className="labelage-yellow">L'ABELAGE</span> УХОД,<br />ВДОХНОВЛЕННЫЙ СИЛОЙ<br />ЧЕРНОЙ ИКРЫ
          </h1>
          <p className="labelage-hero-subtitle">
            Познакомьтесь с нашей уникальной продукцией, которую мы применяем в своей работе и которую вы можете испытать на себе.
          </p>
          <div className="labelage-hero-arrow" onClick={scrollToProducts} style={{cursor: 'pointer'}}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 34L24 14" stroke="#fff" strokeWidth="3" strokeLinecap="round"/><path d="M16 26L24 34L32 26" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
          </div>
        </div>
      </section>

      {/* Каталог продукции */}
      <section className="labelage-products-section" id="labelage-products">
        <h2 className="labelage-products-title">Откройте для себя мир красоты</h2>
        <div className="labelage-products-grid">
          <div className="labelage-product-card">
            <img src={img1} alt="Дневной крем L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Дневной крем против морщин с черной икрой, золотом, жемчужным порошком и жетоном, 50 мл</div>
              <button className="labelage-product-btn" onClick={openModal1}>Read more</button>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img2} alt="Восстанавливающий ночной крем L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Восстанавливающий ночной крем с черной икрой, золотом, жемчужным порошком и стволовыми клетками, 50 мл</div>
              <button className="labelage-product-btn" onClick={openModal2}>Read more</button>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img3} alt="Крем для глаз и шеи L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Восстанавливающий крем для глаз и шеи с черной икрой, золотом, жемчужным порошком и экстрактом зеленого чая, 50 мл</div>
              <button className="labelage-product-btn" onClick={openModal3}>Read more</button>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img4} alt="Сыворотка против морщин L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Сыворотка против морщин с черной икрой, золотом, жемчужным порошком и минералами Мертвого моря, 50 мл</div>
              <button className="labelage-product-btn" onClick={openModal4}>Read more</button>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img5} alt="Интенсивная маска для лица L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Интенсивная маска для лица с черной икрой, золотом, жемчужным порошком и стволовыми клетками, 50 мл</div>
              <div className="labelage-product-btn-center"><button className="labelage-product-btn" onClick={openModal5}>Read more</button></div>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img6} alt="Интенсивно очищающий тоник L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Интенсивно очищающий тоник с ромашкой и алоэ, 100 мл</div>
              <div className="labelage-product-btn-center"><button className="labelage-product-btn" onClick={openModal6}>Read more</button></div>
            </div>
          </div>
          {/* Ещё 3 товара */}
          <div className="labelage-product-card">
            <img src={img7} alt="Глубоко очищающий гель для кожи лица L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Глубоко очищающий гель для кожи лица с Розой и огурцом, 100 мл</div>
              <div className="labelage-product-btn-center"><button className="labelage-product-btn" onClick={openModal7}>Read more</button></div>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img8} alt="Интенсивная отшелушивающая маска L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Интенсивная отшелушивающая маска с фруктовыми кислотами, 50 мл</div>
              <div className="labelage-product-btn-center"><button className="labelage-product-btn" onClick={openModal8}>Read more</button></div>
            </div>
          </div>
          <div className="labelage-product-card">
            <img src={img9} alt="Восстанавливающий увлажняющий лосьон для тела L'abelage" className="labelage-product-img" />
            <div className="labelage-product-desc">
              <div className="labelage-product-name">Восстанавливающий увлажняющий лосьон для тела с черной икрой, золотом, жемчужным порошком и слизью улитки, 120 мл</div>
              <div className="labelage-product-btn-center"><button className="labelage-product-btn" onClick={openModal9}>Read more</button></div>
            </div>
          </div>
        </div>
        {modalProduct && <ProductModal onClose={closeModal} product={modalProduct} />}
      </section>
    </>
  );
} 