import React from 'react';
import Section from '../section';

const classes = {
  aboutDiv: "mb-6 text-justify"
};

const SectionAbout = ({ about1, about2 }) => {
  return (
    <Section title="About Me">
      <div className={classes.aboutDiv}>
        <b><p>Hey Visitor 👋 </p></b>
        <br/>
        <p>
          <i>{about1}</i>
          <br/><br/>
          <i>{about2}</i>
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
