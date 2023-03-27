import React, { useState, useEffect } from 'react'; 
import {
  SiStatuspage
} from 'react-icons/si';


const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'relative dark:bg-gray-800',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-flex items-center py-2 font-semibold text-xs text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400',
  linkName: 'ml-1'
};

const Layout = ({ children }) => {
  const [svgHeight, setSvgHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setSvgHeight(window.innerHeight);
    setIsDesktop(window.innerWidth >= 768);
  }, []);
  return (
    <div className={classes.outerWrapper}>
      {isDesktop && ( // Only render the following if isDesktop is true
      <div>
        <ul className={classes.list} style={{ position: "absolute", top: -10, right: 10 }}>
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
      <svg
        className={classes.svg}
        width="404"
        height={svgHeight}
        fill="none"
        viewBox={`0 0 404 ${svgHeight}`}
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
          width="404"
          height={svgHeight}
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
