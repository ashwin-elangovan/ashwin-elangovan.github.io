import { Link } from "gatsby";
import React from "react";
import { BiLinkExternal as IconExternalLink } from "react-icons/bi";

const classes = {
  wrapper: "mb-6",
  name: "font-bold text-gray-900 dark:text-white pb-1 pt-0",
  description: "text-md text-gray-600 dark:text-gray-200 font-semibold text-lg",
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
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  const dParts = description ? description.split("|") : null;
  const nParts = name ? name.split("|") : null;
  return (
    <div className={classes.wrapper}>
      {/* Title */}
      {nParts && nParts.length === 2 ? (
        <p
          className={`${classes.name} ${link
              ? "hover:text-black dark:hover:text-blue-400 text-3xl"
              : "font-semibold text-lg"
            } text-justify flex justify-between`}
        >
          <span>{nParts[0]}</span>
          <span>
            <i>{nParts[1]}</i>
          </span>
        </p>
      ) : (
        <h3
          className={`${classes.name} ${link
              ? "hover:text-black dark:hover:text-blue-400 text-3xl"
              : "font-semibold text-lg"
            }`}
        >
          {link ? linkContent : name}
        </h3>
      )}

      {/* Description */}
      {dParts && dParts.length === 2 ? (
        <p
          className={`${classes.description} ${subdescription || description_bullets ? "leading-10 pt-3" : ""
            } text-justify flex justify-between`}
        >
          <span>{dParts[0]}</span>
          <span>
            <i>{dParts[1]}</i>
          </span>
        </p>
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
              key={description_bullets}
              className={"list-disc text-justify pt-2 font-light"}
            >
              {description_bullets.content}{" "}
              {description_bullets.link && description_bullets.linkname ? (
                <a
                  href={description_bullets.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center font-bold hover:text-black dark:hover:text-blue-400"
                >
                  [
                  <span className="mr-1">{description_bullets.linkname}</span>
                  <span>
                    <IconExternalLink />
                  </span>
                  ]
                </a>
              ) : (
                ""
              )}
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

      {/* Tags */}
      {tags ? (
        <div>
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className={'tags'}
              >
                {tag}
              </span>
            );
          })}
        </div>
      ): ""}

    </div>
  );
};

export default SummaryItem;
