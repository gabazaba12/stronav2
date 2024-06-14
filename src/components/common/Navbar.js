import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">FlowerSite</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">{t('home')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{t('about')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/flowers">{t('flowers')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">{t('contact')}</Link>
          </li>
        </ul>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('pl')}>PL</button>
      </div>
    </nav>
  );
};

export default Navbar;
