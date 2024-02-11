module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ashwin-elangovan.github.io`,
    // Your Name
    name: 'Ashwin Elangovan',
    // Main Site Title
    title: `Ashwin Elangovan | Full-Stack Developer`,
    // Description that goes under your name in main bio
    // description: `Grad CS student at Arizona State University.`,
    // Optional: Twitter account handle
    author: `@im_ashwinn`,
    // Optional: Github account URL
    github: `https://github.com/ashwin-elangovan`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ashwin-elangovan/`,
    // Optional: Resume URL
    resume: `https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-resume.pdf`,
    fullResume: `https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-full-resume.pdf`,
    workResume: `https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-ruby-resume.pdf`,
    multilevelCacheReport: `https://ashwin-docs.s3.amazonaws.com/Global-flag.pdf`,
    // Content of the About Me section
    about: `I am a graduate student pursuing a Master's in Computer Science at Arizona State University, actively seeking full-time opportunities. I have worked as an Intern, Software Engineer, Senior Software Engineer at Freshworks for 4+ years where I explored full-stack development, object-oriented programming and microservices deployed in cloud.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Guardian Angel | Nov 2023',
        description: '',
        subdescription: '',
        link: 'https://github.com/ashwin-elangovan/guardian-angel',
        description_bullets: [
          {
            content: 'Developed a Health Monitor android app which continuously tracks vital signs swiftly identifying irregularities. In critical scenarios, the application prompts users to seek medical attention and has the capability to notify emergency contacts.',
            link: '',
            linkname: ''
          },
          {
            content: 'Tracked sleep patterns of the user to identify the ideal wake-up time and used the data to set alarms accordingly.',
            link: '',
            linkname: ''
          },
          {
            content: 'Employed fuzzy inference system and incorporated location and weather data to deliver personalized recommendations in a timely manner.',
            link: '',
            linkname: ''
          }
        ],
      },
      {
        name: 'Theia: Website change detector | Feb 2023',
        description: '',
        subdescription: '',
        link: '',
        description_bullets: [
          {
            content: 'Developed a web app using Python and React to monitor websites and send email alerts with screenshots upon changes.',
            link: '',
            linkname: ''
          },
          {
            content: 'Utilized OpenCV-Python to detect image changes and rq for implementing background workers. Integrated with Sendgrid for email notifications and leveraged Amazon S3 to securely store website screenshots.',
            link: '',
            linkname: ''
          },
          {
            content: 'Implemented public APIs using GraphQL, incorporating API key authentication for enhanced security.',
            link: '',
            linkname: ''
          },
          {
            content: 'Achieved 95% test coverage using pytest and Selenium.',
            link: '',
            linkname: ''
          }
        ],

      },
      {
        name: 'FluxFlow: Visual analysis of anomalous info spreading on X | Oct 2022',
        // description: 'Oct 2022',
        subdescription: '',
        link: 'https://fluxflow.ashwinelangovan.com',
        description_bullets: [
          {
            content: 'Designed a Flask, D3.js and MongoDB based app for the visual analysis of anomalous information spreading on x (Twitter).',
            link: '',
            linkname: ''
          },
          {
            content: 'Scraped and processed nearly a million tweets about related topics, creating a dataset to identify location-specific anomalies. Leveraged MongoDB as a robust storage solution for efficient retrieval and analysis of the dataset.',
            link: '',
            linkname: ''
          },
          {
            content: 'Employed model-based clustering algorithms to categorize related topics and used D3.js to create captivating and intuitive visualization designs to present the anomalies, which enabled in-depth analysis.',
            link: '',
            linkname: ''
          }
        ],
      },
      {
        name: 'Hodoor: A rate limiter service | Jan 2022',
        // description: 'Jan 2022',
        subdescription: '',
        link: 'https://github.com/ashwin-elangovan/hodoor',
        description_bullets: [
          {
            content: 'Implemented a high-performance rate limiter middleware based on the sliding window algorithm using Java and Redis.',
            link: '',
            linkname: ''
          }
        ],
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Arizona State University',
        description: 'Graduate Teaching Assistant | Aug 2023 - Dec 2023',
        link: 'https://www.asu.edu/',
        title_image: 'asu',
        subdescription: '',
        description_bullets: [
          {
            content: 'Served as a Teaching Assistant for CSE 551: Foundations of Algorithms, where responsibilities included grading assignments and exam papers, conducting office hours, and providing assistance to students with their inquiries.',
            link: '',
            linkname: ''
          },
          {
            content: 'Organized review sessions to enhance students’ understanding of algorithmic concepts, fostering a collaborative and engaging learning environment.',
            link: '',
            linkname: ''
          }
        ]
      },
      {
        description: 'Student Supervisor | Aug 2023 - Aug 2023',
        description_bullets: [
          {
            content: 'Demonstrated outstanding skills as a Verifier, earning a promotion to the supervisor role.',
            link: '',
            linkname: ''
          },
          {
            content: 'In this position, played a key role in tasks such as training and mentoring new student verifiers, contributing to the overall success of the team.',
            link: '',
            linkname: ''
          }
        ]
      },
      {
        description: 'Student Verifier | Sep 2022 - July 2023',
        description_bullets: [
          {
            content: 'Proficiently verified and processed a high volume of Domestic College, High School, and International student transcripts.',
            link: '',
            linkname: ''
          },
          {
            content: 'Handled confidential data for over 3000 students while achieving a remarkable accuracy rate of more than 98%.',
            link:'',
            linkname: ''
          }
        ]
      },
      {
        name: 'Freshworks',
        description: 'Senior Software Engineer | May 2021 - July 2022',
        link: 'https://www.freshworks.com/',
        title_image: 'freshworks',
        subdescription: '',
        description_bullets: [
          {
            content: 'Designed and developed a multilevel cache architecture using Redis, process and thread caches for handling feature flags. This reduced feature flag database calls by 99.99% (123M to 400 calls per day), and 6% of the overall database load',
            link: 'https://ashwin-docs.s3.amazonaws.com/Global-flag.pdf',
            linkname: 'Documentation'
          },
          {
            content: 'Played a key role in the containerization of the product’s tech stack using Docker, resulting in more efficient development, testing, and deployment processes.',
            link: '',
            linkname:''
          },
          {
            content: 'Led the development of a shared cloud - based phone system which integrated with multiple Freshworks products, utilizing  Ember.js and Ruby on Rails, resulting in a 15% increase in product revenue.',
            link: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/shared-call-appearance/',
            linkname: 'Product Website'
          },
          {
            content: 'Developed ETL pipelines to extract data from subscription platforms, employing Python, Ruby and SQL scripts for processing, and storing data in Snowflake and Amazon S3, leading to comprehensive reports and analytics.',
            link: '',
            linkname: ''
          },
          {
            content: 'Orchestrated application deployments on AWS infrastructure utilizing Kubernetes and Terraform, ensuring efficient deployments.',
            link: '',
            linkname: ''
          },
          {
            content: 'Mentored Software Engineers on full-stack development best practices including reviewing code and tech specs.',
            link: '',
            linkname:''
          }
        ]
      },
      {
        description: 'Software Engineer | June 2018 - May 2021',
        description_bullets: [
          {
            content: 'Collaborated with a team of 4 machine learning experts and built a Freddy AI powered voicebot using Spring Boot, Rails and Memcached. Upon its beta release to the customers, this bot resolved an average of 25% of common customer queries',
            link: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/voicebot/',
            linkname: 'Product Website'
          },
          {
            content: 'Built a custom subscription library to handle the product’s billing logic and streamline integration with the billing platform.',
            link: '',
            linkname:''
          },
          {
            content: 'Conducted performance profiling of Spring Boot and Rails applications using New Relic, Rack Mini Profiler and Jprofiler, effectively identifying bottlenecks and improving several API and SQL query performances by 35%.',
            link: '',
            linkname: ''
          },
          {
            content: 'Enhanced the core design of the Freshdesk Contact Center by building an automated call routing framework using Node.js. This facilitated effortless integration with supported third-party apps and achieve parity with competing products.',
            link: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/automated-call-routing/',
            linkname: 'Product Website'
          },
          {
            content: 'Enhanced the core design of the website monitoring product by leveraging Flask and React to integrate advanced analytics and enable SMS alerts, empowering users with deeper insights and real- time notifications.',
            link: '',
            linkname: ''
          },
          {
            content: 'Used Apache Kafka for publishing product events across various services, ensuring robust data consistency within the ecosystem.',
            link: '',
            linkname: ''
          },
          {
            content: 'Earned the Quality Champion award for resolving critical customer issues and restructuring frequent SQL queries, which reduced the response times of several APIs by up to 70%.',
            link: '',
            linkname:''
          }
        ]
      },
      {
        description: 'Product Development Intern | Jan 2018 - Jun 2018',
        description_bullets: [
          {
            content: 'Designed and implemented new features based on frequent customer issues on the product’s internal admin application using Ruby on Rails, reducing the number of high- priority L2 customer support tickets by 50%.',
            link: '',
            linkname: ''
          },
          {
            content: 'Led the second phase of Freshcaller’s website development using HTML and JS, offering a 360-degree view of the product.',
            link: '',
            linkname: ''
          }
        ]
      },
      {
        description: 'Summer Intern | Mar 2017 - Jul 2017',
        description_bullets: [
          {
            content: 'Improved SPACES - an internal web portal of Freshworks by developing a meeting room booking system for Freshdesk employees using Node.js which regulated meeting room bookings and reduced the waiting time.',
            link: '',
            linkname: ''
          }
        ]
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        // subdescription: 'Ruby, Python, JavaScript, Java, C, C++, Bash',
        tags: ['Ruby', 'Python', 'JavaScript', 'Java', 'C', 'C++', 'Bash']
      },
      {
        name: 'Frameworks',
        // description: 'Ruby on Rails, Ember.js, Node.js, Flask, Django, Spring boot, React, Tailwind CSS',
        tags: ['Ruby on Rails', 'Ember.js', 'Node.js', 'Flask', 'Django', 'Spring boot', 'React', 'Tailwind CSS']
      },
      {
        name: 'Tools and Databases',
        // description:
        //   'MySQL, PostgreSQL, MongoDB, Apache Kafka, AWS, Git, gRPC, Jenkins, Docker, GraphQL, Redis, Memcached, Elasticsearch, Microsoft Azure, Kubernetes, Grafana, Selenium, Microservices, API design, Agile / Scrum, System Design, Jira, Confluence',
        tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Apache Kafka', 'AWS', 'Git', 'gRPC', 'Jenkins', 'Docker', 'GraphQL', 'Redis', 'Memcached', 'Elasticsearch', 'Microsoft Azure', 'Kubernetes', 'Grafana', 'Selenium', 'Microservices', 'API design', 'Agile / Scrum', 'System Design', 'Jira', 'Confluence']
      },
    ],
  },
  flags: {
    DEV_SSR: true
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2GWQ9WBCZX", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashwin Elangovan`,
        short_name: `Ashwin`,
        start_url: `/`,
        background_color: `#2f3e46`,
        theme_color: `#2f3e46`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
