import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <div className="contact-info">
          <h1>Контакты</h1>
          <div className="info-block">
            <h3>Адрес</h3>
            <p>г. Москва, ул. Примерная, д. 123</p>
          </div>
          <div className="info-block">
            <h3>Телефон</h3>
            <p>+7 (999) 123-45-67</p>
          </div>
          <div className="info-block">
            <h3>Время работы</h3>
            <p>Пн-Пт: 9:00 - 21:00</p>
            <p>Сб-Вс: 10:00 - 20:00</p>
          </div>
        </div>

        <div className="map-container">
          <MapContainer
            center={[55.7558, 37.6173]}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[55.7558, 37.6173]}>
              <Popup>
                Наш салон красоты
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts; 