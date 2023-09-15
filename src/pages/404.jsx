// import React from 'react';
// import { Link } from 'gatsby';
import { useEffect } from 'react';
import { navigate } from 'gatsby'

// import Layout from '../components/layout';
// import Seo from '../components/seo';

// const classes = {
//   title: 'dark:text-lg font-bold',
//   link: 'underline',
// };

const NotFoundPage = () => {
  useEffect(() => {
    // Use the navigate function to redirect to your homepage
    navigate('/'); // Replace with the actual path to your homepage
  }, []);

  // return <div>Redirecting to homepage...</div>;
};

export default NotFoundPage;
