const API_BASE_URL = 'https://salon-backend-n413.onrender.com/api';

// Запись на услугу
export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error('Ошибка при создании записи');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Ошибка при создании записи: ${error.message}`);
  }
};

// Отправка отзыва
export const createFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке отзыва');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Ошибка при отправке отзыва: ${error.message}`);
  }
};

// Отправка контактной формы
export const createContact = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке контактной формы');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Ошибка при отправке контактной формы: ${error.message}`);
  }
}; 