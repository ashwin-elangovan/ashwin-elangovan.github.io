import React, { useEffect, useState } from 'react';

import loading from "../../images/loading.gif";

const SplashScreen = ({ hideSplash }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      hideSplash();
    }, 500);

    return () => clearTimeout(timeout);
  }, [hideSplash]);

  if (!isVisible) return null;

  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={loading} alt="Loading..." />
      </div>
  );
};

export default SplashScreen;
