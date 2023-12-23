import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function MyDocument() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          fullResume
        }
      }
    }
  `);

  const { fullResume } = data.site.siteMetadata;
  useEffect(() => {
    window.location.href = fullResume;
  }, [fullResume]);

  return null;
}
