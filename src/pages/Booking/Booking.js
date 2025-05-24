import React, { useState } from 'react';
import { createBooking } from '../../services/api';
import './Booking.css';
import oblojkaBackground from '../../img/oblojka.jpg';

const SERVICES = [
  'Лечение иннари',
  'Лечение икрой Labelage',
  'Кавитационный пилинг на основе косметики Labelage',
  'Сонофорез на основе косметики Labelage',
  'Лифтинг на основе косметики Labelage',
  'Маска из водорослей',
  'Массаж лица',
  'Кислородная инфузия для лица, шеи, декольте',
  'Оксибразия лица, шеи, декольте',
  'Безыгольная карбокситерапия',
  'Миндальный пилинг с успокаивающей маской',
  'Моделирование губ с помощью гиалуроновой кислоты',
  'Заполнение носогубной борозды гиалуроновой кислотой',
  'Моделирование нижней челюсти с помощью гиалуроновой кислоты',
  'Моделирование подбородка с помощью гиалуроновой кислоты',
  'Моделирование щек с помощью гиалуроновой кислоты',
  'Игольчатая мезотерапия лица, шеи, декольте',
  'Игольчатая мезотерапия волосистой части головы',
  'Гибридный педикюр',
  'Гибридный маникюр',
  'Коррекция бровей',
  'Брови с хной',
  'Брови с порошком хны',
  'Ламинирование/лифтинг ресниц/бровей',
  'Брови с хной + подтяжка ресниц + корректировка бровей',
  'LPG - вакуумный массаж Primelle',
  'Массаж тела на нефритовом ложе около 30 минут',
  'Массаж Кобидо - безоперационная подтяжка лица',
  'Классический массаж',
  'Массаж всего тела (ноги, руки, спина, живот)',
  'Массаж ног',
  'Массаж рук',
  'Массаж спины',
  'Лимфатический массаж',
  'Антицеллюлитный массаж (китайский пузырь)',
  'Китайский пузырьковый массаж тела',
  'Массаж тела бамбуковыми палочками',
];

export default function Booking() {
  const [service, setService] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const bookingData = {
        clientName: name,
        phone: phone,
        email: email,
        serviceId: service,
        date: date,
        time: time
      };

      await createBooking(bookingData);
      setSuccess(true);
      // Очистка формы
      setService('');
      setName('');
      setPhone('');
      setEmail('');
      setDate('');
      setTime('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-bg" style={{ backgroundImage: `url(${oblojkaBackground})` }}>
      <div className="booking-container">
        <h1 className="booking-title">Запишитесь на услугу прямо сейчас</h1>
        {error && <div className="error-message">{error}</div>}
        <form className="booking-form" onSubmit={handleSubmit}>
          <label className="booking-label">
            Выберите услугу
            <select className="booking-select" value={service} onChange={e => setService(e.target.value)} required>
              <option value="" disabled>Выберите...</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label className="booking-label">
            Ваше имя
            <input className="booking-input" type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label className="booking-label">
            Телефон
            <input className="booking-input" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
          </label>
          <label className="booking-label">
            E-mail (необязательно)
            <input className="booking-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label className="booking-label">
            Дата посещения
            <input className="booking-input" type="date" value={date} onChange={e => setDate(e.target.value)} required />
          </label>
          <label className="booking-label">
            Время посещения
            <input className="booking-input" type="time" value={time} onChange={e => setTime(e.target.value)} required />
          </label>
          <button className="booking-btn" type="submit" disabled={loading}>
            {loading ? 'Отправка...' : 'Записаться'}
          </button>
        </form>
        {success && (
          <div className="booking-info" style={{ color: '#22c55e', fontWeight: 600 }}>
            Спасибо! Ваша заявка успешно отправлена.
          </div>
        )}
        <div className="booking-info">Выберите удобное время и мастера для посещения салона</div>
      </div>
    </div>
  );
} 