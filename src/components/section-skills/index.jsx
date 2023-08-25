import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
          subdescription={skill.subdescription}
          tags={skill.tags}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
