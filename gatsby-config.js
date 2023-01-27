module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ashwin-elangovan.github.io`,
    // Your Name
    name: 'Ashwin Elangovan',
    // Main Site Title
    title: `Ashwin Elangovan | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Student at Arizona State University.`,
    // Optional: Twitter account handle
    author: `@im_ashwinn`,
    // Optional: Github account URL
    github: `https://github.com/ashwin-elangovan`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ashwin-elangovan/`,
    // Content of the About Me section
    about: `Computer Science Graduate student with 4 years of experience in full-stack development, object-oriented programming and microservices deployed in cloud, seeking internship opportunities starting Summer 2023.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Website change detector',
        description: 'Feb 2022',
        subdescription: 'A Python web app that monitors a website and alerts upon visual or text changes with screenshots. Implemented image comparison using Pytorch, background workers using rq and email integration using Sendgrid.',
        link: '',
      },
      {
        name: 'Tweet Aggregator',
        description: 'July 2021',
        subdescription: 'A Ruby on Rails web app that curates tweets of given categories and displays them on a daily basis using the Twitter API.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Freshworks',
        description: 'Senior Backend Engineer, May 2021 - June 2022',
        link: 'https://www.freshworks.com/',
        subdescription: 'Implemented a multilevel cache architecture for feature flags using Redis and in-memory cache which reduced the database calls by 99.9 percent. <br> Managed the development and execution of CRM and Contact Center product bundles and associated public APIs using Ember.js and Ruby on Rails which created an impact on sales and in turn increased company revenue. <br> Mentored Software Engineers on full-stack development best practices including reviewing code and tech specs.',
      },
      {
        description: 'Software Engineer, June 2018 - May 2021',
        subdescription: 'Collaborated with 4 members of the ML team and built a voice bot powered by Freddy AI engine and cast this into a customer-facing beta feature using Ruby on Rails and Memcached. <br> Enhanced the core call-routing design by allowing lookups in serverless custom apps like Helpdesk, ITSM, CRM, etc., to route calls based on dynamic real-time inputs using Node.js. <br> Collaborated with the billing team and created a custom subscription Ruby gem to achieve complete integration with the subscription management platform. <br> Received the Quality Champion award for fixing critical customer issues and enhancing product performance by restructuring frequent SQL queries. Improved the execution time of several APIs by 70 percent.'
      },
      {
        description: 'Product Development Intern, Jan 2018 - Jun 2018',
        subdescription: 'Designed and developed new features on the admin application which drastically reduced the turnaround time for high-priority customer support tickets using Ruby on Rails. <br> Spearheaded the second phase of Freshcaller’s website development using HTML and JavaScript which provided a 360-degree view of Freshworks.'
      },
      {
        description: 'Summer Intern, Mar 2017 - Jul 2017',
        subdescription: 'Improved SPACES - an internal web portal of Freshworks by developing a meeting room booking system for Freshdesk employees using Node.js which regulated meeting room bookings and reduced the waiting time.'
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'Ruby, Java, JavaScript, Python, C++, Bash',
      },
      {
        name: 'Front-End',
        description: 'HTML, CSS, Bootstrap',
      },
      {
        name: 'Frameworks',
        description: 'Ruby on Rails, Ember.js, Node.js, Java Spring, Flask',
      },
      {
        name: 'Tools, Databases, and OS',
        description:
          'MySQL, Apache Kafka, MongoDB, AWS, Git, Redis, Jenkins, Docker, MacOS, Linux, CI / CD, Microservices, API design, Agile / Scrum, System Design, Jira, Confluence',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-160304446-2`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nirmal Jasmatiya`,
        short_name: `Nirmal`,
        start_url: `/`,
        background_color: `#2f3e46`,
        theme_color: `#2f3e46`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
