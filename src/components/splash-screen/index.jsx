import React, { useEffect, useState } from "react";

const SplashScreen = ({ hideSplash }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      hideSplash();
    }, 1500);

    return () => clearTimeout(timeout);
  }, [hideSplash]);

  if (!isVisible) return null;

  return (
    <div>
      <div className="stars" />
      <div className="twinkling" />

      <div id="loader">
        <div id="top" />
        <div id="line" />
        <div id="bottom" />
      </div>
    </div>
  );
};

export default SplashScreen;
