import React, { useEffect, useState } from 'react';

import loading from "../../images/loading.gif";

const classes = {
  splashScreenDiv: "bg-white h-screen flex justify-center items-center",
};

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
      <div className="stars"></div>
      <div className="twinkling"></div>
      {/* <div className="clouds"></div> */}

      <div id="loader">
        <div id="top"></div>
        <div id="line"></div>
        <div id="bottom"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
