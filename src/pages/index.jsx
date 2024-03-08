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
import ScrollUp from '../components/scroll-up';
import { isBrowser } from "react-device-detect";
import useCursorSpotlight from '../components/spotlight';

const classes = {
  footer: 'relative font-bold text-gray-900 dark:text-white text-center mt-5',
  spotlight: 'inset-0 z-30 transition duration-300 -z-50'
};

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const footerText = get(data, 'site.siteMetadata.footer', false);
  const noBlog = !posts || !posts.length;

  let [elementRef, spotlightStyle] = useCursorSpotlight(
    "red dark:bg-slate-900", // Background color
    "red", // Highlight color
    "500px", // Highlight size
    true // Active state
  );

  console.log(elementRef, spotlightStyle)

  return (
    <div ref={elementRef} style={{ background: spotlightStyle, zIndex: 9999, position: 'relative' }} >
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
            {isBrowser && <ScrollUp />}
        </Layout>
      </div>
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
        author
        github
        githubContent
        linkedin
        linkedinContent
        twitter
        twitterContent
        resumeContent
        professionalResume
        professionalResumeContent
        fullResume
        fullResumeContent
        workResume
        statusPage
        statusPageContent
        multilevelCacheReport
        footer
        about
        projects {
          name
          timeframe
          link
          subdescription
          descriptionBullets {
            content
            link
            linkname
            contentStyle
          }
          sectionTags
          sectionImages {
            imageLocation
            url
          }
        }
        experience {
          name
          timeframe
          organization
          description
          link
          subdescription
          descriptionBullets {
            content
            link
            linkname
            contentStyle
          }
          titleImage
          sectionTags
          sectionImages {
            imageLocation
            url
          }
        }
        skills {
          key
          title
          tags
          highlight
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
