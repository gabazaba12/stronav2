import React, { useState } from 'react';

const CookieConsent = () => {
  const [consent, setConsent] = useState(false);

  const acceptCookies = () => {
    setConsent(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  if (consent || localStorage.getItem('cookieConsent') === 'true') return null;

  return (
    <div className="cookie-consent">
      <p>This site uses cookies to offer you a better browsing experience.</p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
};

export default CookieConsent;
