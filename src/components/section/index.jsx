import React from 'react';

import { useScramble } from "use-scramble";

const classes = {
  wrapper: 'block pt-4 md:flex',
  title: 'pb-6 md:w-full md:max-w-150 md:p-0',
  heading: `text-xl font-bold uppercase tracking-widest hover:text-black dark:hover:text-blue-200 text-transparent bg-clip-text dark:text-transparent`,
  gradient: 'bg-gradient-to-r from-black to-gray-100 dark:from-white dark:to-gray-700',
  content: 'flex-none text-base text-gray-600 dark:text-gray-200 font-normal md:flex-1 md:pl-20',
};

const Section = ({ title, children }) => {
  const { ref, replay } = useScramble({
    text: title,
    speed: 0.25
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2
          className={`${classes.heading} ${classes.gradient} sticky-top`}
          ref={ref}
          onMouseOver={replay}
          onFocus={replay}>
          {title}
        </h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
