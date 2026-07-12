import React from "react";
import Section from "../section";

const classes = {
  aboutDiv: "mb-6 max-w-3xl leading-7",
};

const SectionAbout = ({ about1, about2 }) => {
  return (
    <Section title="About Me">
      <div className={classes.aboutDiv}>
        <p className="mb-6 font-bold">Hey Visitor 👋</p>
        <p className="space-y-6 italic">
          <span className="block">{about1}</span>
          <span className="block">{about2}</span>
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
