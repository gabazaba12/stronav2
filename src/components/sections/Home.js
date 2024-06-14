import React from 'react';
import { useTranslation } from 'react-i18next';
import tulip from '../../assets/images/tulip.jpg';
import rose from '../../assets/images/rose.jpg';
import daisy from '../../assets/images/daisy.jpg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>{t('welcome')}</h1>
        <p>{t('home_description')}</p>
      </header>
      <main className="main-content">
        <section className="about-section">
          <h2>{t('about_us')}</h2>
          <p>{t('about_description')}</p>
        </section>
        <section className="featured-flowers-section">
          <h2>{t('our_flowers')}</h2>
          <div className="featured-flowers">
            <div className="flower">
              <img src={tulip} alt={t('tulip')} />
              <p>{t('tulip')}</p>
            </div>
            <div className="flower">
              <img src={rose} alt={t('rose')} />
              <p>{t('rose')}</p>
            </div>
            <div className="flower">
              <img src={daisy} alt={t('daisy')} />
              <p>{t('daisy')}</p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <h2>{t('testimonials')}</h2>
          <div className="testimonial">
            <p>"{t('testimonial1')}" - {t('testimonial_author1')}</p>
          </div>
          <div className="testimonial">
            <p>"{t('testimonial2')}" - {t('testimonial_author2')}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
