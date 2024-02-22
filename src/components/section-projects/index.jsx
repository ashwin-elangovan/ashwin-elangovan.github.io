import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          source="Projects"
          key={project.name}
          titleName={project.name}
          titleTime={project.timeframe}
          link={project.link}
          descriptionBullets={project.descriptionBullets}
          sectionTags={project.sectionTags}
          sectionImages={project.sectionImages}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
