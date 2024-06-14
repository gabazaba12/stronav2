import React from 'react';
import { useTranslation } from 'react-i18next';
import teamImage from '../../assets/images/team.jpg'; 
import historyImage from '../../assets/images/history.jpg'; 

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="about-section">
        <h2>{t('about_us')}</h2>
        <p className="intro">{t('about_description')}</p>
        <div className="about-details">
          <div className="mission">
            <h3>{t('our_mission')}</h3>
            <p>{t('mission_text')}</p>
          </div>
          <div className="values">
            <h3>{t('our_values')}</h3>
            <ul>
              <li>{t('value1')}</li>
              <li>{t('value2')}</li>
              <li>{t('value3')}</li>
            </ul>
          </div>
        </div>
        <div className="history-section">
          <h3>{t('our_history')}</h3>
          <img src={historyImage} alt={t('history_image_alt')} />
          <p>{t('history_text')}</p>
        </div>
        <div className="team-section">
          <h3>{t('our_team')}</h3>
          <img src={teamImage} alt={t('team_image_alt')} />
          <p>{t('team_text')}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
