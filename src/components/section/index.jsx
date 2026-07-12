import React from "react";

import { useScramble } from "use-scramble";

const classes = {
  wrapper:
    "grid grid-cols-1 gap-6 pt-10 md:grid-cols-[150px_minmax(0,1fr)] md:gap-20",
  title: "pb-2 md:p-0",
  heading: `text-xl font-bold uppercase tracking-widest hover:text-black dark:hover:text-blue-200 text-transparent bg-clip-text dark:text-transparent`,
  gradient:
    "bg-gradient-to-r from-black to-gray-100 dark:from-white dark:to-gray-700",
  content: "min-w-0 text-base font-normal text-gray-600 dark:text-gray-200",
};

const Section = ({ title, children }) => {
  const { ref } = useScramble({
    text: title,
    speed: 0.25,
  });

  return (
    <div id={title} className={classes.wrapper}>
      <div className={classes.title}>
        <h2
          className={`${classes.heading} ${classes.gradient} sticky-top`}
          ref={ref}
        >
          {title}
        </h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
