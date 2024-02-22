import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          source="Experience"
          key={item.name}
          titleName={item.name}
          titleTime={item.timeframe}
          description={item.description}
          link={item.link}
          titleImage={item.titleImage}
          internal={false}
          descriptionBullets={item.descriptionBullets}
          sectionTags={item.sectionTags}
          sectionImages={item.sectionImages}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
