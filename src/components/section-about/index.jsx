import React from 'react';
import Section from '../section';

const classes = {
  aboutDiv: "mb-6 text-justify"
};

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className={classes.aboutDiv}>
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
