import { Link } from "gatsby";
import React from "react";
import { BiLinkExternal as IconExternalLink } from "react-icons/bi";
import ReactDOMServer from "react-dom/server";
import { isBrowser } from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';

// Image imports
import freshworksImgLight from "../../images/freshworks-light.png";
import freshworksImgDark from "../../images/freshworks-dark.png";
import asuImgLight from "../../images/asu-light.png";
import asuImgDark from "../../images/asu-dark.png";

const classes = {
  wrapper: "mb-6",
  projectSectionTitle: "font-bold text-gray-600 dark:text-white pb-1 pt-0 text-lg",
  experienceSectionTitle: "text-md text-gray-600 dark:text-gray-200 font-semibold text-lg",
  image: "transform transition-all duration-150 hover:scale-125",
  imageWrapper: "text-gray-600 dark:text-gray-200",
  linkHover: "hover:text-black dark:hover:text-blue-400",
  titleExternalLink: "inline-flex items-center",
  descriptionBullet: "list-disc text-justify pt-2 font-light text-gray-600 dark:text-gray-400",
  desktop: {
    ImageSize: "w-full max-w-[25%]",
    TitlePartsFlex: "flex justify-between text-justify",
    projectTitleWidth: "w-10/12",
    projectTimeframe: "w-2/12 flex justify-end font-light"
  },
  mobile: {
    ImageSize: "lg:w-1/4 w-full max-w-[60%]",
    TitlePartsFlex: "flex-col text-center",
    projectTimeframe: "mt-3 font-light"
  },
  tagLayout: "tags dark:bg-slate-500 bg-slate-600"

};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  subdescription,
  descriptionBullets,
  paragraph,
  tags,
  images,
  title_image,
}) => {
  let linkContent = internal ? <Link to={link}>{name}</Link> : <a href={link}>{name}</a>;

  const experienceTitleParts = description ? description.split("|") : null;
  const projectTitleParts = name ? name.split("|") : null;

  // Specific images for skills
  let lightImagesArray = null;
  let darkImagesArray = null;

  if (images && images.length === 2) {
    lightImagesArray = images[0];
    darkImagesArray = images[1];
  }

  // Specific images for experience (ASU and Freshworks)
  let light_image = null;
  let dark_image = null;

  switch (title_image) {
    case "freshworks":
      light_image = freshworksImgLight;
      dark_image = freshworksImgDark;
      break;
    case "asu":
      light_image = asuImgLight;
      dark_image = asuImgDark;
      break;
    default:
    // code block
  }
  return (
    // Wrapper for Experience, Projects and Skills
    <div className={classes.wrapper}>

      {!title_image ? (
        // If title image is not present [Applicable specifically for "Projects"]
        // Check for projectTitleParts
        // If projectTitleParts has 2 elements, render title and timeframe
        projectTitleParts && projectTitleParts.length === 2 ? (
          <div className={`
            ${classes.projectSectionTitle}
            ${link ? classes.linkHover : ''}
            ${isBrowser ? classes.desktop.TitlePartsFlex : classes.mobile.TitlePartsFlex}
          `}>

            {/* Title of project */}
            <div className={isBrowser ? classes.desktop.projectTitleWidth : ''}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className={classes.titleExternalLink}>
                  <span className="mr-2">{projectTitleParts[0]}</span>
                  <span>{" "}<IconExternalLink /></span>
                </a>
              ) : (
                <span>{projectTitleParts[0]}</span>
              )}
            </div>

            {/* Year of project */}
            <div className={isBrowser ? classes.desktop.projectTimeframe : classes.mobile.projectTimeframe}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span>
                    {projectTitleParts[1]}
                  </span>
                </a>
              ) : (
                <span>
                  {projectTitleParts[1]}
                </span>
              )}
            </div>

          </div>
        ) : (
          // If project title does not have 2 elements, render as normal
          // This shouldn't happen, but just in case [Dead code]
          <h3 className={
             `${classes.projectSectionTitle}
              ${link ? `${classes.linkHover} text-3xl` : "font-semibold text-lg"}
              ${isBrowser ? classes.desktop.TitlePartsFlex : classes.mobile.TitlePartsFlex}`
            }
          >
            {link ? linkContent : name}
          </h3>
        )
      ) : (
        // If title image is present (Else condition)
        // Title images in experience for ASU and Freshworks
        <div className={`flex justify-center items-center mx-auto text-center pb-6 pt-1`}>
          <div className={`${classes.imageWrapper} ${isBrowser ? classes.desktop.ImageSize : classes.mobile.ImageSize}`}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  className={`${classes.image} block dark:hidden`}
                  src={light_image}
                  alt={name}
                />
                <img
                  className={`${classes.image} hidden dark:block`}
                  src={dark_image}
                  alt={name}
                />
              </a>
          </div>
        </div>
      )}

      {/* Experience title */}
      {experienceTitleParts && experienceTitleParts.length === 2 ? (
        <div className={
          `${classes.experienceSectionTitle}
           ${subdescription || descriptionBullets ? 'leading-10 pt-3' : ''}
           ${isBrowser ? classes.desktop.TitlePartsFlex : classes.mobile.TitlePartsFlex}`
        }>
          {/* Experience Role */}
          <div>
            <span>{experienceTitleParts[0]}</span>
          </div>

          {/* Timeframe of experience */}
          {
            isBrowser ? (
              <div className='font-light'>
                <span>{experienceTitleParts[1]}</span>
              </div>
            ) : (
              <div className='font-light'>{experienceTitleParts[1]}</div>
            )
          }
        </div>
      ) : (
        // Experience always has 2 parts
        // Just in case [Dead code]
        <p className={
          `${classes.experienceSectionTitle}
           ${subdescription || descriptionBullets ? "leading-10 pt-3" : ""} justify-between`
        }>
          {description}
        </p>
      )}

      {/* Description bullets */}
      {/* Applicable for both Experience and Projects */}
      <ul>
        {
          descriptionBullets
            ? descriptionBullets.map((descriptionBullet) => (
              <li
                key={`${descriptionBullet}-${uuidv4()}`}
                className={`${classes.descriptionBullet}`}>
                {/* ToDo: Should revamp this */}
                {/* Render each bullet points */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${descriptionBullet.content} ${descriptionBullet.link && descriptionBullet.linkname
                      ? `<a href="${descriptionBullet.link}" target="_blank" rel="noreferrer"
                          class="inline-flex items-center font-bold ${classes.linkHover} ml-2"
                         >
                          [
                          <span class="mr-1">${descriptionBullet.linkname}</span>
                          <span>
                            ${ReactDOMServer.renderToString(<IconExternalLink />)}
                          </span>
                          ]
                        </a>`
                        : ""
                      }`,
                  }}
                />
              </li>
            ))
            : ""
        }
      </ul>

      {/* Subdescription */}
      {/* Dead code */}
      <ul>
        {subdescription
          ? subdescription.split(/<br> /).map((subdescription) => (
            <li
              key={subdescription}
              className={`${paragraph ? "" : "list-disc"} text-justify`}
            >
              {subdescription}
            </li>
          ))
          : ""}
      </ul>

      {/* Skills images */}
      {isBrowser ? (
        (lightImagesArray || darkImagesArray) && (
          <div className="pt-3">
            <div className="logo-container">

              {/* Light mode images */}
              {lightImagesArray && lightImagesArray.map((image, index) => (
                <img
                  key={`light_${index}`}
                  src={image}
                  alt={`Light Mode Image ${index}`}
                  className={`logo-image block dark:hidden ${classes.image}`}
                />
              ))}

              {/* Dark mode images */}
              {darkImagesArray && darkImagesArray.map((image, index) => (
                <img
                  key={`dark_${index}`}
                  src={image}
                  alt={`Dark Mode Image ${index}`}
                  className={`logo-image hidden dark:block ${classes.image}`}
                />
              ))}
            </div>
          </div>
        )
      ) : (
        /* Render skills as tags if in mobile */
        tags && (
          <div className="pt-3">
            {tags.map((tag) => (
              <span key={tag} className={classes.tagLayout}>
                {tag}
              </span>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SummaryItem;
