import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import {
  IoLogoGithub as IconGithub,
  IoLogoTwitter as IconTwitter,
  IoLogoLinkedin as IconLinkedin,
  IoChatbox as IconBlog
} from 'react-icons/io5';

import { useState, useEffect } from 'react';

import { AiFillFile as IconResume } from "react-icons/ai";

import profileImg from '../../images/profile.jpeg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-7xl text-gray-900 dark:text-white font-bold leading-tight hover:text-black dark:hover:text-blue-200',
  description: 'text-gray-600 dark:text-gray-300 italic pt-2',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-8',
  link: 'inline-flex items-center py-2 font-semibold text-xs text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400',
  linkName: 'ml-1'
};



const Header = ({ metadata = {}, noBlog = false }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const resume = get(metadata, 'resume', false);

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.imageWrapper} ${isDesktop ? '' : 'mx-auto'}`}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={`${classes.contentWrapper} ${isDesktop ? '' : 'mobile-center'}`}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                <IconTwitter /> <span className={classes.linkName}>Twitter</span>
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                <IconGithub /> <span className={classes.linkName}>GitHub</span>
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                <IconLinkedin /> <span className={classes.linkName}>LinkedIn</span>
              </a>
            </li>
          )}
          {resume && (
            <li className={classes.item}>
              <a className={classes.link} href={resume}>
                <IconResume /> <span className={classes.linkName}>Resume</span>
              </a>
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
