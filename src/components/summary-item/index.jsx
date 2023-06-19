import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 dark:text-white pb-1',
  description: 'text-md text-gray-600 dark:text-gray-200 font-light',
  
};

const SummaryItem = ({ name, description, link = false, internal = false, subdescription, desc, paragraph }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }


  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black dark:hover:text-blue-400' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={`${classes.description} ${subdescription || desc ? 'italic leading-10 font-normal' : ''} text-justify`}>{description}</p>
      <ul>
      {
        desc ?
        desc.map(
          desc =>
          <li key={desc} className={'list-disc text-justify'}>
            {desc.content} {desc.link && desc.linkname ? <a href={desc.link} target='_blank' rel='noreferrer'>(<b><u>{desc.linkname}</u></b>).</a>: ''}
          </li>
        )
        :
        ''
      }
      </ul>
      <ul>
      {
        subdescription ?
        subdescription.split(/<br> /).map(
          subdescription =>
          <li key={subdescription} className={`${paragraph ? '':'list-disc'} text-justify`}>
            {subdescription}
          </li>
        )
        :
        ''
      }
      </ul>
    </div>
  );
};

export default SummaryItem;
