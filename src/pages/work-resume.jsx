import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function MyDocument() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          workResume
        }
      }
    }
  `);

  const { workResume } = data.site.siteMetadata;
  useEffect(() => {
    window.location.href = workResume;
  }, [workResume]);

  return null;
}
