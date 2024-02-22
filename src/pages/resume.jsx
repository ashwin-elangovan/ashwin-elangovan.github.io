import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function MyDocument() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          professionalResume
        }
      }
    }
  `);

  const { resume } = data.site.siteMetadata;
  useEffect(() => {
    window.location.href = resume;
  }, [resume]);

  return null;
}
