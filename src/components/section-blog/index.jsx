import { Link } from 'gatsby';
import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  blogLink: "text-gray-500 dark:text-white text-sm hover:text-black dark:hover:text-blue-400"
};

const SectionBlog = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}

      {posts.length >= 5 && (
        <Link className={classes.blogLink} to="/blog">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionBlog;
