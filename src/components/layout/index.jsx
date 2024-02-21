import React, { useState, useEffect } from 'react';
import { isBrowser } from 'react-device-detect';

// Icons from react-icons
import { SiStatuspage } from 'react-icons/si';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

// Components
import SplashScreen from '../splash-screen';
// import useCursorSpotlight from '../spotlight';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  // Dark mode background
  outerWrapper: 'relative dark:bg-slate-900',
  svg: 'hidden fixed transform right-0 z-0 xl:block',
  topBarList: 'mt-6 uppercase tracking-wider mr-4',
  zoom: 'transform transition-all duration-150 hover:scale-125',
  statusPage: 'inline list-none pr-4',
  updateTheme: 'inline list-none pr-6',
  link: 'inline-flex items-center py-2 font-semibold text-xs text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400',
  statusPageLink: 'ml-2',
  topBar: 'fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-10 shadow-lg'
};


const Layout = ({ metadata = {}, children }) => {
  const [svgHeight, setSvgHeight] = useState(0);
  const [svgWidth, setSvgWidth] = useState(0);
  const [themeIcon, setThemeIcon] = useState(null);

  // Splash screen visibility
  const [splashVisible, setSplashVisible] = useState(true);
  const hideSplash = () => {
    setSplashVisible(false);
  };

  // let [elementRef, spotlightStyle] = useCursorSpotlight(
  //   "red", // Background color
  //   "green", // Highlight color
  //   "200px", // Highlight size
  //   true // Active state
  // );

  // Theme toggler option
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

  // Set the SVG dimensions based on the window size and theme during initial render
  useEffect(() => {
    setSvgHeight(window.innerHeight);
    setSvgWidth(window.innerWidth * 0.25);

    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      setThemeIcon((theme === 'dark' || (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)) ? <BsFillMoonFill /> : <BsFillSunFill />);
    }
  }, []);

  // Freshchat widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//fw-cdn.com/11364413/4045228.js';
    script.async = true;
    if (isBrowser){
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const containerStyle = {
    width: isBrowser ? '75%' : '100%',
    marginRight: isBrowser ? '10%' : '0',
  };

  return (
    <div>
      {/* Render splash screen initially */}
      {splashVisible && <SplashScreen hideSplash={hideSplash} />}

      {!splashVisible && (
        // Cursor spotlight effect
        // <div ref={elementRef} style={{ background: { spotlightStyle } }}>
        <div>
          {/* The wrapper that encapsulates the entire website */}
          <div className={classes.outerWrapper} >

              {/*Top bar with status page and theme toggler*/}
              {isBrowser && (
                <div className = {classes.topBar}>
                  <ul className={classes.topBarList} style={{ position: "absolute", top: 0, right: 10 }}>
                      <li className={classes.updateTheme}>
                        <button
                          className={`${classes.link} cursor-pointer ${classes.zoom} mr-1`}
                          onClick={() => updateTheme()}
                        >
                          {themeIcon}
                        </button>
                      </li>
                      <li className={classes.statusPage}>
                        <a
                          className={`${classes.link} ${classes.zoom}`}
                          href={metadata.statusPage}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <SiStatuspage />
                          <span className={classes.statusPageLink}>{metadata.statusPageContent}</span>
                        </a>
                      </li>
                  </ul>
                </div>
              )}

              {/* SVG design background */}
              {isBrowser && (
                <svg
                  className={`${classes.svg}`}
                  style={{ top: '10%' }}
                  width={svgWidth}
                  height={svgHeight}
                  fill="none"
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                >

                  {/* Smaller rectangle pattern inside */}
                  <defs>
                    <pattern id="side-bg-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-500" fill="currentColor" />
                    </pattern>
                  </defs>

                  {/* Larger rectangle on the right */}
                  <rect
                    width={svgWidth}
                    height={svgHeight}
                    fill="url(#side-bg-pattern)"
                  />
                </svg>
              )}

              {/* Main content wrapper */}
              <div className={classes.wrapper} style={containerStyle}>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
