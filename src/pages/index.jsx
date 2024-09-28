import React, { useEffect, useState, useRef } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
// import SectionSkills from '../components/section-skills';
import Seo from '../components/seo';
import ScrollUp from '../components/scroll-up';
import { isBrowser } from "react-device-detect";
// import useCursorSpotlight from '../components/spotlight';

const classes = {
  footer: 'relative font-bold text-gray-900 dark:text-white text-center mt-5'
};

const Index = ({ data }) => {
  const about1 = get(data, 'site.siteMetadata.about1', false);
  const about2 = get(data, 'site.siteMetadata.about2', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  // const skills = get(data, 'site.siteMetadata.skills', false);
  const footerText = get(data, 'site.siteMetadata.footer', false);
  const noBlog = !posts || !posts.length;

  const [currentSection, setCurrentSection] = useState('header');
  const observerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Function to add section refs
  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);

      // If the observer is already set up, observe this new section
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  return (
    // <div ref={elementRef} style={{ background: spotlightStyle }}>
    <Layout metadata={data.site.siteMetadata} currentSection={currentSection}>
      <Seo />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about1 && (
        <div id="about" className="section-observer" ref={addSectionRef}>
          <SectionAbout about1={about1} about2={about2} />
        </div>
      )}
      {experience && experience.length && (
        <div id="experience" className="section-observer" ref={addSectionRef}>
          <SectionExperience experience={experience} />
        </div>
      )}
      {projects && projects.length && (
        <div id="projects" className="section-observer" ref={addSectionRef}>
          <SectionProjects projects={projects} />
        </div>
      )}
      {/* {skills && skills.length && (
        <div id="skills" className="section-observer" ref={addSectionRef}>
          <SectionSkills skills={skills} />
        </div>
      )} */}
      <div className={classes.footer}>{footerText}</div>
      {isBrowser && <ScrollUp />}
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
        pmResume
        statusPage
        statusPageContent
        multilevelCacheReport
        footer
        about1
        about2
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
