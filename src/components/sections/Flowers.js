import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import flower1 from '../../assets/images/tulip.jpg';
import flower2 from '../../assets/images/rose.jpg';
import flower3 from '../../assets/images/daisy.jpg';
import flower4 from '../../assets/images/dahlia.jpg';
import flower5 from '../../assets/images/poppy.jpg';

const flowerData = [
  { src: flower1, nameKey: 'tulip', factKey: 'tulip_fact' },
  { src: flower2, nameKey: 'rose', factKey: 'rose_fact' },
  { src: flower3, nameKey: 'daisy', factKey: 'daisy_fact' },
  { src: flower4, nameKey: 'dahlia', factKey: 'dahlia_fact' },
  { src: flower5, nameKey: 'poppy', factKey: 'poppy_fact' }
];

const Flowers = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlower = () => {
    setCurrentIndex((currentIndex + 1) % flowerData.length);
  };

  const prevFlower = () => {
    setCurrentIndex((currentIndex - 1 + flowerData.length) % flowerData.length);
  };

  return (
    <section className="flowers-section section">
      <h1>{t('our_flowers')}</h1>
      <div className="flower-gallery">
        <button onClick={prevFlower}>&lt;</button>
        <div className="flower-container">
          <img src={flowerData[currentIndex].src} alt={t(flowerData[currentIndex].nameKey)} />
          <p>{t(flowerData[currentIndex].nameKey)}</p>
          <p className="flower-fact">{t(flowerData[currentIndex].factKey)}</p>
        </div>
        <button onClick={nextFlower}>&gt;</button>
      </div>
    </section>
  );
};

export default Flowers;
