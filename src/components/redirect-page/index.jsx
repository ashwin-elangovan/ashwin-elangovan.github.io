import { graphql, useStaticQuery } from "gatsby";
import { useEffect } from "react";

const RedirectPage = ({ target }) => {
  const { site } = useStaticQuery(graphql`
    query RedirectTargets {
      site {
        siteMetadata {
          professionalResume
          fullResume
          workResume
          pmResume
          multilevelCacheReport
        }
      }
    }
  `);
  const url = site.siteMetadata[target];

  useEffect(() => {
    if (url) window.location.replace(url);
  }, [url]);

  return null;
};

export default RedirectPage;
