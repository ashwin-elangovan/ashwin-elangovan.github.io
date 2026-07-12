import { graphql } from "gatsby";
import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import ScrollUp from "../components/scroll-up";
import SectionAbout from "../components/section-about";
import SectionExperience from "../components/section-experience";
import SectionProjects from "../components/section-projects";

const Index = ({ data }) => {
  const { about1, about2, experience, footer, projects } =
    data.site.siteMetadata;

  return (
    <Layout metadata={data.site.siteMetadata}>
      <Header metadata={data.site.siteMetadata} />
      {about1 && (
        <div id="about">
          <SectionAbout about1={about1} about2={about2} />
        </div>
      )}
      {experience?.length > 0 && (
        <div id="experience">
          <SectionExperience experience={experience} />
        </div>
      )}
      {projects?.length > 0 && (
        <div id="projects">
          <SectionProjects projects={projects} />
        </div>
      )}
      <footer className="relative mt-5 text-center font-bold text-gray-900 dark:text-white">
        {footer}
      </footer>
      <ScrollUp />
    </Layout>
  );
};

export default Index;

export const Head = ({ data }) => {
  const { author, description, title } = data.site.siteMetadata;

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
    </>
  );
};

export const pageQuery = graphql`
  query HomePage {
    site {
      siteMetadata {
        name
        title
        description
        author
        github
        linkedin
        instagram
        resumeContent
        professionalResume
        professionalResumeContent
        fullResume
        fullResumeContent
        statusPage
        statusPageContent
        footer
        about1
        about2
        projects {
          name
          timeframe
          link
          descriptionBullets {
            content
          }
          sectionTags
        }
        experience {
          name
          timeframe
          link
          descriptionBullets {
            content
          }
          titleImage
          sectionTags
        }
      }
    }
  }
`;
