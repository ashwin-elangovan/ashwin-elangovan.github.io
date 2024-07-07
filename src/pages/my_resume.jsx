import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function MyDocument() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pmResume
        }
      }
    }
  `);

  const { pmResume } = data.site.siteMetadata;
  useEffect(() => {
    window.location.href = pmResume;
  }, [pmResume]);

  return null;
}
