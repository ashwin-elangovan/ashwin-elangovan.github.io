import { Link } from "gatsby";
import React from "react";
import { BiLinkExternal as IconExternalLink } from "react-icons/bi";
import ReactDOMServer from "react-dom/server";
import { isBrowser } from 'react-device-detect';

import freshworksImgLight from "../../images/freshworks-light.png";
import freshworksImgDark from "../../images/freshworks-dark.png";
import asuImgLight from "../../images/asu-light.png";
import asuImgDark from "../../images/asu-dark.png";
import { v4 as uuidv4 } from 'uuid';

const classes = {
  wrapper: "mb-6",
  name: "font-bold text-gray-900 dark:text-white pb-1 pt-0",
  description: "text-md text-gray-600 dark:text-gray-200 font-semibold text-lg",
  image: "transform transition-all duration-150 hover:scale-125",
  mobileImageSize: "lg:w-1/4 w-full max-w-[60%]",
  desktopImageSize: "w-full max-w-[25%]",
  imageWrapper: "text-gray-600 dark:text-gray-200",
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  subdescription,
  description_bullets,
  paragraph,
  tags,
  images,
  title_image,
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  const dParts = description ? description.split("|") : null;
  const nParts = name ? name.split("|") : null;

  let light_image = null;
  let dark_image = null;

  let lightImagesArray = null;
  let darkImagesArray = null;

  if (images && images.length === 2) {
    lightImagesArray = images[0];
    darkImagesArray = images[1];
  }

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
    <div className={classes.wrapper}>
      {!title_image ? (
        nParts && nParts.length === 2 ? (
          // Render this if nParts has 2 elements
          <div
            className={`
              ${classes.name}
              ${link ? 'hover:text-black dark:hover:text-blue-400' : ''}
              font-semibold text-lg
              ${isBrowser ? 'flex justify-between text-justify' : 'flex-col text-center'}
            `}
          >
            <div className={isBrowser ? 'w-10/12' : ''}>
              {link ? (

                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span className="mr-2">{nParts[0]}</span>
                  <span> <IconExternalLink /></span>
                </a>

              ) : (
                <span>{nParts[0]}</span>
              )}
            </div>
            <div className={isBrowser ? 'w-2/12 flex justify-end' : 'mt-3'}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span>
                    <i>{nParts[1]}</i>
                  </span>
                </a>
              ) : (
                <span>
                  <i>{nParts[1]}</i>
                </span>
              )}
            </div>
          </div>
        ) : (
          // Render this if nParts doesn't have 2 elements
          <h3
            className={`${classes.name} ${link
                ? "hover:text-black dark:hover:text-blue-400 text-3xl"
                : "font-semibold text-lg"
                }${isBrowser ? 'flex justify-between text-justify' : 'flex-col text-center'}`}
          >
            {link ? linkContent : name}
          </h3>
        )
      ) : (
        <div
          className={`flex justify-center items-center mx-auto text-center pb-6 pt-1`}
        >
            <div className={`${classes.imageWrapper} ${isBrowser ? classes.desktopImageSize : classes.mobileImageSize}`}>
            <Link to={link}>
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
            </Link>
          </div>
        </div>
      )}

      {/* Description */}
      {dParts && dParts.length === 2 ? (
        <div className={`${classes.description} ${subdescription || description_bullets ? 'leading-10 pt-3' : ''} ${isBrowser ? 'flex justify-between text-justify' : 'flex-col text-center'}`}>
          <div>
            <span>{dParts[0]}</span>
          </div>
          {isBrowser ? (
            <div>
              <span><i>{dParts[1]}</i></span>
            </div>
          ) : (
            <div>
              <i>{dParts[1]}</i>
            </div>
          )}
        </div>
      ) : (
        <p
          className={`${classes.description} ${subdescription || description_bullets ? "leading-10 pt-3" : ""
            } justify-between`}
        >
          {description}
        </p>
      )}


      {/* Description bullets */}
      <ul>
        {description_bullets
          ? description_bullets.map((description_bullets) => (
            <li
              key={`${description_bullets}-${uuidv4()}`}
              className={"list-disc text-justify pt-2 font-light"}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `${description_bullets.content}
    ${description_bullets.link && description_bullets.linkname
                      ? `<a href="${description_bullets.link}" target="_blank" rel="noreferrer"
                          class="inline-flex items-center font-bold hover:text-black dark:hover:text-blue-400 ml-2"
                         >
                          [
                          <span class="mr-1">${description_bullets.linkname}</span>
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
          : ""}
      </ul>
      {/* Subdescription */}
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
        /* Render tags if not in browser */
        tags && (
          <div className="pt-3">
            {tags.map((tag) => (
              <span key={tag} className={"tags dark:bg-slate-500 bg-slate-600"}>
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
