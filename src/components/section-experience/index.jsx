import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.description}
          name={item.name}
          description={item.description}
          link={item.link}
          internal={false}
          subdescription={item.subdescription}
          descriptionBullets={item.descriptionBullets}
          title_image={item.title_image}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
