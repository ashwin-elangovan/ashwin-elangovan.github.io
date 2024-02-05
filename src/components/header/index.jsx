import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import {
  IoLogoGithub as IconGithub,
  IoLogoTwitter as IconTwitter,
  IoLogoLinkedin as IconLinkedin,
  IoChatbox as IconBlog
} from 'react-icons/io5';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import { useScramble } from "use-scramble";

import { useState, useEffect } from 'react';

import { AiFillFile as IconResume } from "react-icons/ai";

import profileImg from '../../images/profile.jpeg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-7xl font-bold leading-tight hover:text-black dark:hover:text-blue-200 text-transparent bg-clip-text dark:text-transparent',
  gradient: 'bg-gradient-to-r from-black to-gray-100 dark:from-white dark:to-gray-700',
  description: 'text-gray-600 dark:text-gray-300 italic pt-2',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-8',
  zoom: 'transform transition-all duration-150 hover:scale-125',
  link: 'inline-flex items-center py-2 font-semibold text-xs text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400',
  linkName: 'ml-1',
  dropDown: "absolute top-full left-1/2 transform -translate-x-1/2 ml-[-10%] p-3 mt-2 border dark:border-white-300 border-gray-600 rounded shadow-md text-gray-600 dark:text-gray-300 dark:bg-slate-900 bg-white",
  dropDownText: 'block px-4 py-2 text-xs hover:text-black dark:hover:text-blue-200 text-center'
};

const Header = ({ metadata = {}, noBlog = false }) => {
  // const [isDesktop, setIsDesktop] = useState(true);
  const { ref, replay } = useScramble({
    text: metadata.name,
  });

  // useEffect(() => {
  //   setIsDesktop(window.innerWidth >= 768);
  // }, []);

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

  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const resume = get(metadata, 'resume', false);
  const fullResume = get(metadata, 'fullResume', false);

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.imageWrapper} ${isBrowser ? '' : 'mx-auto'}`}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={`${classes.contentWrapper} ${isBrowser ? '' : 'mobile-center'}`}>
        <h1
          ref={ref}
          className={`${classes.name} ${classes.gradient}`}
          onMouseOver={replay}
          onFocus={replay}
        >
          {metadata.name}
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={`${classes.link} ${classes.zoom}`}
                href={`https://twitter.com/${twitter}`}
              >
                <IconTwitter /> <span className={classes.linkName}>Twitter</span>
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={`${classes.link} ${classes.zoom}`} href={github}>
                <IconGithub /> <span className={classes.linkName}>GitHub</span>
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={`${classes.link} ${classes.zoom}`} href={linkedin}>
                <IconLinkedin /> <span className={classes.linkName}>LinkedIn</span>
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
              <a className={`${classes.link} ${classes.zoom} cursor-pointer`}>
                <IconResume /> <span className={classes.linkName}>Resume</span>
              </a>
              {isDropdownVisible && (
                <div className={classes.dropDown}>
                  <a className={`${classes.dropDownText} ${classes.zoom}`} href={resume} target="_blank" rel="noreferrer">
                    Professional Resume
                  </a>
                  <a className={`${classes.dropDownText} ${classes.zoom}`} href={fullResume} target="_blank" rel="noreferrer">
                    Full Resume
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
