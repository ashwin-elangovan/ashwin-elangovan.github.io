import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function MyDocument() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          multilevelCacheReport
        }
      }
    }
  `);

  const { multilevelCacheReport } = data.site.siteMetadata;
  useEffect(() => {
    window.location.href = multilevelCacheReport;
  }, [multilevelCacheReport]);

  return null;
}
