import { Link } from "gatsby";
import get from "lodash/get";
import React from "react";
import {
  IoLogoGithub as IconGithub,
  IoLogoLinkedin as IconLinkedin,
  IoChatbox as IconBlog
} from "react-icons/io5";
import {
  BiLogoInstagramAlt as IconInstagram
} from "react-icons/bi";
import { isBrowser } from "react-device-detect";
import { useScramble } from "use-scramble";
import { useState } from "react";
import { AiFillFile as IconResume } from "react-icons/ai";

import profileImg from "../../images/profile.jpeg";
import foregroundImage from "../../images/profile_picture.jpg";
import backgroundImage from "../../images/popup_image.png";
import sign from "../../images/sign.png";

const classes = {
  wrapper: "block mb-6 md:flex",
  imageWrapper: "max-w-250 mt-[-30px]",
  imageWrapperMobile: "w-full max-w-150",
  image: "rounded-full transform transition-all duration-150 hover:scale-105",
  contentWrapper:
    "flex-none flex flex-col justify-center items-center pt-6 md:pt-1 md:flex-1 md:pl-20",
  name: "text-7xl font-bold leading-tight hover:text-black dark:hover:text-blue-200 text-transparent bg-clip-text dark:text-transparent drop-shadow-[0_2px_2px_rgba(236,8,8,0.9)]",
  gradient:
    "bg-gradient-to-r from-black to-gray-100 dark:from-white dark:to-gray-700",
  description: "text-gray-600 dark:text-gray-300 italic pt-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]",
  list: "mt-6 uppercase tracking-wider",
  item: "inline list-none pr-5",
  zoom: "transform transition-all duration-150 hover:scale-150",
  resumeZoom: "transform transition-all duration-150 hover:scale-125",
  link: "inline-flex items-center py-2 font-semibold text-s text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-teal-300",
  linkName: "ml-2",
  dropDown:
    "absolute top-full left-1/2 transform -translate-x-1/2 ml-[-10%] p-3 mt-2 border dark:border-white-300 border-gray-600 rounded shadow-md text-gray-600 dark:text-gray-300 dark:bg-slate-900 bg-white",
  dropDownText:
    "block px-4 py-2 text-xs hover:text-black dark:hover:text-teal-200 text-center",
};

const Header = ({ metadata = {}, noBlog = false }) => {
  // Scramble text for title name
  const { ref, replay } = useScramble({
    text: metadata.name,
    speed: 0.6,
  });

  // Dropdown and functions for resume
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleResumeMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleResumeMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleResumeClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const github = get(metadata, "github", false);
  const linkedin = get(metadata, "linkedin", false);
  const instagram = get(metadata, "instagram", false);
  const resume = get(metadata, "professionalResume", false);
  const fullResume = get(metadata, "fullResume", false);

  return (
    <div className={classes.wrapper}>

      {/* Profile picture */}
      {isBrowser ? (
        <div className={`${classes.imageWrapper}`}>
          <div className="card">
            <div className="wrapper">
              <img src={foregroundImage} className="cover-image" alt="my-bw-profile-pic" />
            </div>
            <img src={sign} className="title" alt="my-profile-sign" />
            <img src={backgroundImage} className="background-image" alt="my-color-profile-pic" />
          </div>
        </div>
      ) : (
        <div className={`${classes.imageWrapperMobile} mx-auto`}>
          <Link to="/">
            <img
              className={classes.image}
              src={profileImg}
              alt={metadata.name}
            />
          </Link>
        </div>
      )}

      <div className={`${classes.contentWrapper} ${isBrowser ? "" : "mobile-center"}`}>

        {/* Profile name */}
        <div ref={ref} className={`${classes.name} ${classes.gradient}`} onMouseOver={replay} onFocus={replay}>
          <h1>
            {metadata.name}
          </h1>
        </div>

        {/* Profile description */}
        <p className={classes.description}>{metadata.description}</p>

        {/* Profile links */}
        <ul className={classes.list}>

          {github && (
            <li className={classes.item}>
              <a
                className={`${classes.link} ${classes.zoom}`}
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <IconGithub />
                {/* <span className={classes.linkName}>
                  {metadata.githubContent}
                </span> */}
              </a>
            </li>
          )}

          {linkedin && (
            <li className={classes.item}>
              <a
                className={`${classes.link} ${classes.zoom}`}
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <IconLinkedin />{" "}
                {/* <span className={classes.linkName}>
                  {metadata.linkedinContent}
                </span> */}
              </a>
            </li>
          )}

          {instagram && (
            <li className={classes.item}>
              <a
                className={`${classes.link} ${classes.zoom}`} href={instagram}
                target="_blank"
                rel="noreferrer"
              >
                <IconInstagram />{" "}
                {/* <span className={classes.linkName}>{metadata.twitterContent}</span> */}
              </a>
            </li>
          )}



          {resume && (
            <li
              className={`${classes.item} relative`}
              onMouseEnter={handleResumeMouseEnter}
              onMouseLeave={handleResumeMouseLeave}
              onClick={handleResumeClick}
            >
              <a className={`${classes.link} ${classes.resumeZoom} cursor-pointer`}>
                <IconResume />
                <span className={classes.linkName}>
                  {metadata.resumeContent}
                </span>
              </a>

              {isDropdownVisible && (
                <div className={classes.dropDown}>

                  {/* Professional Resume */}
                  <a
                    className={`${classes.dropDownText} ${classes.resumeZoom}`}
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {metadata.professionalResumeContent}
                  </a>

                  {/* Full Resume link */}
                  <a
                    className={`${classes.dropDownText} ${classes.resumeZoom}`}
                    href={fullResume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {metadata.fullResumeContent}
                  </a>
                </div>
              )}
            </li>
          )}

          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                <IconBlog /> <span className={classes.linkName}>Blog</span>
              </Link>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
};

export default Header;
