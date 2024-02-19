import React, { useState, useEffect } from 'react';
import {
  SiStatuspage
} from 'react-icons/si';

import SplashScreen from '../splash-screen';

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { isBrowser} from 'react-device-detect';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'relative dark:bg-slate-900',
  svg: 'hidden fixed transform right-0 z-0 xl:block',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  bigitem: 'inline list-none pr-6',
  link: 'inline-flex items-center py-2 font-semibold text-xs text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400',
  linkName: 'ml-1',
  topBar: 'fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-10 shadow-lg'
};

const Layout = ({ children }) => {
  const [svgHeight, setSvgHeight] = useState(0);
  const [svgWidth, setSvgWidth] = useState(0);
  // const [isDesktop, setIsDesktop] = useState(true);
  const [themeIcon, setThemeIcon] = useState(null);

  const [splashVisible, setSplashVisible] = useState(true);

  const hideSplash = () => {
    setSplashVisible(false);
  };

  const updateTheme = () => {
    document.querySelector('body').classList.add('changing-theme');
    if ((localStorage.theme === 'dark') || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'light';
      document.querySelector('body').classList.remove('dark');
      document.querySelector('body').classList.add('light');
      setThemeIcon(() => <BsFillSunFill />);
    } else {
      localStorage.theme = 'dark';
      document.querySelector('body').classList.remove('light');
      document.querySelector('body').classList.add('dark');
      setThemeIcon(() => <BsFillMoonFill />);
    }
    window.setTimeout(() => {
      document.querySelector('body').classList.remove('changing-theme');
    });
  };

  useEffect(() => {
    setSvgHeight(window.innerHeight);
    // setIsDesktop(window.innerWidth >= 768);
    setSvgWidth((window.innerWidth * 30) / 100);
    // Set theme icon based on localStorage (client-side)
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      setThemeIcon((theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? <BsFillMoonFill /> : <BsFillSunFill />);
    }
  }, []);

  const containerStyle = {
    width: isBrowser ? '70%' : '100%', // Adjust the width based on the device type
    marginRight: isBrowser ? '10%' : '0', // Adjust the margin for desktop
  };
  return (
    <div>
      {splashVisible && <SplashScreen hideSplash={hideSplash} />}
      {!splashVisible && (
        <div className={classes.outerWrapper}>
          {isBrowser && ( // Only render the following if isBrowser is true
            <div className = {classes.topBar}>
            <ul className={classes.list} style={{ position: "absolute", top: 0, right: 10 }}>
                <li className={classes.bigitem}>
                  <button
                    className={`${classes.link} cursor-pointer`}
                    onClick={() => updateTheme()}
                  >
                    {themeIcon}
                  </button>
                </li>
                <li className={classes.item}>
                  <a
                    className={classes.link}
                    href={`https://ashwin.statuspage.io/`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiStatuspage /> <span className={classes.linkName}>STATUS PAGE</span>
                  </a>
                </li>
            </ul>
          </div>
          )}
          {isBrowser && ( // Only render the following if isBrowser is true
          <svg
            className={classes.svg}
            style={{ top: '10%' }}
            width={svgWidth}
            height={svgHeight}
            fill="none"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="3"
                  cy="3"
                  r="3"
                  className="text-gray-200 dark:text-gray-600 fill-current"
                />
              </pattern>
            </defs>
            <rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
          )}
          <div className={classes.wrapper} style={containerStyle}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Layout;
