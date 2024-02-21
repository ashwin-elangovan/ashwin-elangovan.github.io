import { Link } from "gatsby";
import React, {useState} from "react";
import { FaLink as IconExternalLink } from "react-icons/fa6";
import { BiLinkExternal as IconExternalLink2 } from 'react-icons/bi';
import { isBrowser } from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';

// Image imports
import freshworksImgLight from "../../images/freshworks-light.png";
import freshworksImgDark from "../../images/freshworks-dark.png";
import asuImgLight from "../../images/asu-light.png";
import asuImgDark from "../../images/asu-dark.png";
import voicebotImg from "../../images/sectionImages/freshworks/se/voicebot.jpeg";
import routingAutomationImg from "../../images/sectionImages/freshworks/se/routing_automation.jpeg";
import slmImg from "../../images/sectionImages/freshworks/se/slm.jpg";
import redisCacheImg from "../../images/sectionImages/freshworks/sse/redis_cache.jpeg";
import sharedCallerImg from "../../images/sectionImages/freshworks/sse/shared_caller.jpeg";
import freshCallerImg from "../../images/sectionImages/freshworks/intern/freshcaller.jpeg";
import gTAImg from "../../images/sectionImages/asu/gta.png";

// Temporary: ToDo: Refactor this logic
const sectionImages = {
    "Graduate Teaching Assistant": [
    {
      imageLocation: gTAImg,
      url: 'https://search.asu.edu/profile/4145840'
    },
    ],
    "Software Engineer": [
    {
      imageLocation: voicebotImg,
      url: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/voicebot/'
    },
    {
      imageLocation: routingAutomationImg,
      url: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/automated-call-routing/'
    },
    {
      imageLocation: slmImg,
      url: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-management/service-level-monitoring/'
    }
  ],
  "Senior Software Engineer": [
    {
      imageLocation: redisCacheImg,
      url: 'https://www.ashwinelangovan.com/multilevel-cache-report/'
    },
    {
      imageLocation: sharedCallerImg,
      url: 'https://support.freshdesk.com/en/support/solutions/articles/50000003828-sharing-freshcaller-account-between-omnichannel-and-freshworks-crm'
    }
  ],
  "Product Development Intern":[
    {
      imageLocation: freshCallerImg,
      url: 'https://www.freshcaller.com/'
    }
  ]
};


const classes = {
  wrapper: "mb-2",
  projectSectionTitle: "font-bold pt-0 text-lg",
  experienceSectionTitle: "text-md font-semibold text-lg",
  image: "transform transition-all duration-150 hover:scale-125",
  imageWrapper: "text-gray-600 dark:text-gray-200",
  linkHover: "hover:text-black dark:hover:text-teal-300",
  titleExternalLink: "inline-flex items-baseline",
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
  sectionTags,
}) => {
  let linkContent = internal ? <Link to={link}>{name}</Link> : <a href={link}>{name}</a>;

  const experienceTitleParts = description ? description.split("|") : null;
  const projectTitleParts = name ? name.split("|") : null;

  let experienceTitle = null;
  let experienceTimeframe = null;

  if (experienceTitleParts != null && experienceTitleParts.length == 2) {
    experienceTitle = experienceTitleParts[0].trim();
    console.log(experienceTitle);
    console.log(sectionImages[experienceTitle]);
    experienceTimeframe = experienceTitleParts[1];
  }

  const [isHovered, setIsHovered] = useState(false);

  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const [issectionImageHovered, setsectionImageHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

      {title_image && (
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


      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` ${isHovered ? 'dark:bg-slate-800 bg-gray-200 rounded' : ''}`}
      >
        <div style={{
            boxShadow: isHovered ? 'inset 0 1px 0 0 rgba(148,163,184,0.1)' : 'none',
            paddingLeft: '50px',
            paddingRight: '50px',
            paddingTop: '25px',
            paddingBottom: '25px',
        }}>
        {!title_image && (
          // If title image is not present [Applicable specifically for "Projects"]
          // Check for projectTitleParts
          // If projectTitleParts has 2 elements, render title and timeframe
          projectTitleParts && projectTitleParts.length === 2 ? (
            <div className={`
              ${classes.projectSectionTitle}
              ${link ? classes.linkHover : ''}
              ${isBrowser ? classes.desktop.TitlePartsFlex : classes.mobile.TitlePartsFlex}
              ${isHovered ? `text-black dark:text-teal-300` : 'text-gray-600 dark:text-white'}`}
              onMouseEnter={() => setIsTitleHovered(true)}
              onMouseLeave={() => setIsTitleHovered(false)}>

              {/* Title of project */}
              <div className={isBrowser ? classes.desktop.projectTitleWidth : ''}>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className={classes.titleExternalLink}>
                      <span className={classes.titleExternalLink}>
                        <span className={`mr-2 ${isTitleHovered && `scale-125`}`}>{" "}<IconExternalLink /></span>
                        <span>{projectTitleParts[0]}</span>
                      </span>

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
            // For skills titles
            <h3 className={
              `${classes.projectSectionTitle}
                ${link ? `${classes.linkHover} text-3xl` : "font-semibold text-lg"}
                ${isBrowser ? classes.desktop.TitlePartsFlex : classes.mobile.TitlePartsFlex}`
              }
            >
              {link ? linkContent : name}
            </h3>
          )
        )}

        {/* Experience title */}
        {experienceTitleParts && experienceTitleParts.length === 2 ? (
          <div className={
            `${classes.experienceSectionTitle}
            ${subdescription || descriptionBullets ? 'leading-10 ' : ''}
            ${isBrowser ? classes.desktop.TitlePartsFlex : classes.mobile.TitlePartsFlex}
            ${isHovered ? 'text-black dark:text-teal-300' : 'text-gray-600 dark:text-gray-200'}`
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
            ${subdescription || descriptionBullets ? "leading-10 pt-1" : ""} justify-between`
          }>
            {description}
          </p>
        )}

        {/* Section Level Tags */}
        {sectionTags && (
          <ul className="mt-1 flex flex-wrap" aria-label="Technologies used">
            {sectionTags.map((section, index) => (
              <li key={index} className="mr-1.5 mt-1 mb-1">
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-black/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 text-slate-900">
                  {section}
                </div>
              </li>
            ))}
          </ul>
        )}


        {/* Description bullets */}
        {/* Applicable for both Experience and Projects */}
        {descriptionBullets && (
            <ul>
              {descriptionBullets.map((descriptionBullet) => (
                <li
                  key={`${descriptionBullet}-${uuidv4()}`}
                  className={`${classes.descriptionBullet}
                  ${isHovered ? 'text-black dark:text-slate-200' : ''}`}

                >
                  {/* Render each bullet points */}
                  {descriptionBullet.content}
                </li>
              ))}
            </ul>
        )}

        {/* Images */}
          {sectionImages[experienceTitle] != null && (
            <div className="flex flex-wrap gap-4 mt-4 mb-3 pb-3 pt-3">
              {/* Map over sectionImages and render each image */}
              {sectionImages[experienceTitle] != null && sectionImages[experienceTitle].map((image, index) => (
                <div key={index} className='relative'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  <a href={image.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={image.imageLocation}
                      alt={`Image ${index + 1}`}
                      className="rounded border-2 border-slate-800/10 dark:border-slate-800 transition group-hover:border-slate-200/30"
                      style={{ width: '150px', height: '80px', objectFit: 'cover', opacity: hoveredIndex === index ? 1 : 0.7 }}
                    />
                    {hoveredIndex === index && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          padding: '4px',
                          backgroundColor: 'rgba(128, 128, 128, 0.7)',
                          cursor: 'pointer',
                        }}
                      >
                        <IconExternalLink2 />
                      </div>)}
                  </a>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

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
