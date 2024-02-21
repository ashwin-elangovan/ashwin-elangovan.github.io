import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
// import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import Seo from '../components/seo';
// import useCursorSpotlight from '../components/spotlight';

const classes = {
  footer: 'absolute bottom-0 left-0 right-0 font-bold text-gray-900 dark:text-white text-center mb-10'
};

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const footerText = get(data, 'site.siteMetadata.footer', false);
  const noBlog = !posts || !posts.length;

  // const [elementRef, spotlightStyle] = useCursorSpotlight(
  //   "transparent dark:bg-slate-900", // Background color
  //   "red", // Highlight color
  //   "50px", // Highlight size
  //   true // Active state
  // );

  return (
    // <div ref={elementRef} style={{ background: spotlightStyle }}>
      <Layout metadata={data.site.siteMetadata}>
          <Seo />
          <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
          {about && <SectionAbout about={about} />}
          {experience && experience.length && (
            <SectionExperience experience={experience} />
          )}
          {projects && projects.length && <SectionProjects projects={projects} />}
          {skills && skills.length && <SectionSkills skills={skills} />}
          <div className={classes.footer}>{footerText}</div>
      </Layout>
    // </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        githubContent
        linkedin
        linkedinContent
        resumeContent
        twitter
        twitterContent
        resume
        professionalResumeContent
        fullResume
        fullResumeContent
        workResume
        statusPage
        statusPageContent
        multilevelCacheReport
        footer
        projects {
          name
          description
          link
          subdescription
          descriptionBullets {
            content
            link
            linkname
          }
        }
        experience {
          name
          description
          link
          subdescription
          descriptionBullets {
            content
            link
            linkname
          }
          title_image
        }
        skills {
          name
          title
          description
          subdescription
          tags
        }
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
