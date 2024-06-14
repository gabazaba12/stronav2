import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = t('Please enter your name.');
    if (!formData.email) {
      formErrors.email = t('Please enter your email.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t('Email address is invalid.');
    }
    if (!formData.message) formErrors.message = t('Please enter a message.');
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      alert(t('Message sent successfully!'));
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <h2>{t('contact_us')}</h2>
        <p>{t('contact_description')}</p>
        <div className="contact-details">
          <div className="contact-info">
            <h3>{t('address')}</h3>
            <p>123 Flower Street, Blossom City, FL 12345</p>
            <h3>{t('phone')}</h3>
            <p>(123) 456-7890</p>
            <h3>{t('email_us')}</h3>
            <p>contact@flowersite.com</p>
          </div>
          <div className="contact-hours">
            <h3>{t('hours')}</h3>
            <ul>
              <li>{t('hours_monday')}</li>
              <li>{t('hours_tuesday')}</li>
              <li>{t('hours_wednesday')}</li>
              <li>{t('hours_thursday')}</li>
              <li>{t('hours_friday')}</li>
              <li>{t('hours_saturday')}</li>
              <li>{t('hours_sunday')}</li>
            </ul>
          </div>
        </div>
        <div className="contact-form-section">
          <h3>{t('contact_form')}</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit">{t('send_message')}</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
