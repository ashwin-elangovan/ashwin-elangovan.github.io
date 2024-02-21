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
    }, 500);

    return () => clearTimeout(timeout);
  }, [hideSplash]);

  if (!isVisible) return null;

  return (
    <div className={classes.splashScreenDiv}>
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default SplashScreen;
