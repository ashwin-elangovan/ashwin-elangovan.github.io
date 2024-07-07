module.exports = {
  siteMetadata: {
    siteUrl: `https://ashwin-elangovan.github.io`,
    name: 'Ashwin Elangovan',
    title: `Ashwin Elangovan | Full-Stack Developer`,
    author: `@im_ashwinn`,
    github: `https://github.com/ashwin-elangovan`,
    githubContent: 'GitHub',
    linkedin: `https://www.linkedin.com/in/ashwin-elangovan/`,
    linkedinContent: 'LinkedIn',
    twitter: `https://twitter.com/im_ashwinn`,
    twitterContent: 'Twitter',
    resumeContent: 'Resume',
    professionalResume: `https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-resume.pdf`,
    professionalResumeContent: 'Professional Resume',
    fullResume: `https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-full-resume.pdf`,
    fullResumeContent: 'Full Resume',
    workResume: `https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-work-resume.pdf`,
    pmResume: `https://ashwin-docs.s3.amazonaws.com/ashwin_elangovan_resume.pdf`,
    multilevelCacheReport: `https://ashwin-docs.s3.amazonaws.com/multi-level-cache-architecture.pdf`,
    statusPage: `https://ashwin.statuspage.io/`,
    statusPageContent: 'STATUS PAGE',
    footer: 'Built with ❤️ by Ashwin Elangovan',
    about1: `I'm Ashwin Elangovan, a recent Computer Science graduate from Arizona State University. I have worked as an Intern, Software Engineer, and Senior Product Engineer for 4+ years at Freshworks, which develops cool SaaS products to make the lives of businesses easier!`,
    about2: `I have a wide range of interests in software including developer tools, libraries, frameworks all the way to building products. I'm intrinsically curious and like to learn how tech works under the hood, so I tend to get involved in many things at once.`,
    projects: [
      {
        name: 'EmailChecker',
        timeframe: 'FEB 2024',
        link: 'https://pkg.go.dev/github.com/ashwin-elangovan/email-checker',
        descriptionBullets: [
          {
            content: 'A Go package which checks the DNS records for a given domain extracted from an email address and displays information about its MX, SPF, and DMARC records.',
            link: '',
            linkname: ''
          }
        ],
        sectionTags: ['Go', 'DNS']
      },
      {
        name: 'Guardian Angel',
        timeframe: 'NOV 2023',
        link: 'https://github.com/ashwin-elangovan/guardian-angel',
        descriptionBullets: [
          {
            content: 'Developed a Health Monitor android app which continuously tracks vital signs swiftly identifying irregularities. In critical scenarios, the application prompts users to seek medical attention and has the capability to notify emergency contacts.',
          },
          {
            content: 'Tracked sleep patterns of the user to identify the ideal wake-up time and used the data to set alarms accordingly.'
          },
          {
            content: 'Employed fuzzy inference system and incorporated location and weather data to deliver personalized recommendations in a timely manner.'
          }
        ],
        sectionTags: ['Android Studio', 'Kotlin', 'Flask', 'OpenAPI', 'MongoDB', 'Fuzzy Logic', 'Twilio']
      },
      {
        name: 'Theia: Website change detector',
        timeframe: 'FEB 2023',
        link: '',
        descriptionBullets: [
          {
            content: 'Developed a web app using Python and React to monitor websites and send email alerts with screenshots upon changes.'
          },
          {
            content: 'Utilized OpenCV-Python to detect image changes and celery for implementing background workers. Integrated with Sendgrid for email notifications and leveraged Amazon S3 to securely store website screenshots.'
          },
          {
            content: 'Implemented public APIs using GraphQL, incorporating API key authentication for enhanced security.'
          },
          {
            content: 'Achieved 95% test coverage using pytest and Selenium.'
          }
        ],
        sectionTags: ['Python', 'Spring Boot', 'React', 'Rails', 'OpenCV', 'GraphQL', 'Sendgrid', 'Amazon S3', 'Celery', 'Selenium']
      },
      {
        name: 'FluxFlow: Visual analysis of anomalous information spreading on X',
        timeframe: 'OCT 2022',
        link: 'https://fluxflow.ashwinelangovan.com',
        descriptionBullets: [
          {
            content: 'Designed a Flask, D3.js and MongoDB based app for the visual analysis of anomalous information spreading on X (Twitter).'
          },
          {
            content: 'Scraped and processed nearly a million tweets about related topics, creating a dataset to identify location-specific anomalies. Leveraged MongoDB as a robust storage solution for efficient retrieval and analysis of the dataset.'
          },
          {
            content: 'Employed model-based clustering algorithms to categorize related topics and used D3.js to create captivating and intuitive visualization designs to present the anomalies, which enabled in-depth analysis.'
          }
        ],
        sectionTags: ['Flask', 'D3.js', 'MongoDB', 'Twitter API', 'Scrapy', 'NLP']
      },
      {
        name: 'Hodoor: A rate limiter service',
        timeframe: 'JAN 2022',
        link: 'https://github.com/ashwin-elangovan/hodoor',
        descriptionBullets: [
          {
            content: 'Implemented a high-performance rate limiter middleware based on the sliding window algorithm using Java and Redis.'
          }
        ],
        sectionTags: ['Java', 'Redis']
      }
    ],
    experience: [
      {
        organization: 'Arizona State University',
        name: 'Graduate Teaching Assistant',
        timeframe : 'AUG 2023 - DEC 2023',
        // description: 'Graduate Teaching Assistant | AUG 2023 - DEC 2023',
        link: 'https://www.asu.edu/',
        titleImage: 'asu',
        descriptionBullets: [
          {
            content: 'Served as a Teaching Assistant for CSE 551: Foundations of Algorithms, where responsibilities included grading assignments and exam papers, conducting office hours, and providing assistance to students with their inquiries.'
          },
          {
            content: 'Organized review sessions to enhance students’ understanding of algorithmic concepts, fostering a collaborative and engaging learning environment.'
          }
        ],
        sectionTags: ['Algorithms', 'Python', 'C'],
        sectionImages: []
      },
      {
        name: 'Student Supervisor',
        timeframe: 'AUG 2023',
        // description: 'Student Supervisor | AUG 2023',
        descriptionBullets: [
          {
            content: 'Demonstrated outstanding skills as a Verifier, earning a promotion to the supervisor role. In this position, played a key role in tasks such as training and mentoring new student verifiers, contributing to the overall success of the team.',
            contentStyle: 'paragraph'
          }
        ],
        sectionTags: [],
        sectionImages: []
      },
      {
        name: 'Student Verifier',
        timeframe: 'SEP 2022 - JUL 2023',
        // description: 'Student Verifier | SEP 2022 - JUL 2023',
        descriptionBullets: [
          {
            content: 'Proficiently verified and processed a high volume of Domestic College, High School, and International student transcripts.'
          },
          {
            content: 'Handled confidential data for over 3000 students while achieving a remarkable accuracy rate of more than 98%.'
          }
        ],
        sectionTags: ['Hyland OnBase', 'Salesforce'],
        sectionImages: []
      },
      {
        organization: 'Freshworks',
        name: 'Senior Software Engineer',
        timeframe: 'MAY 2021 - JUL 2022',
        // description: 'Senior Software Engineer | MAY 2021 - JUL 2022',
        link: 'https://www.freshworks.com/',
        titleImage: 'freshworks',
        subdescription: '',
        descriptionBullets: [
          {
            content: 'Designed and developed a multilevel cache architecture using Redis, process and thread caches for handling feature flags. This reduced feature flag database calls by 99.99% (123M to 400 calls per day), and 6% of the overall database load.'
            // link: 'https://ashwin-docs.s3.amazonaws.com/Global-flag.pdf',
            // linkname: 'Documentation'
          },
          {
            content: 'Played a key role in the containerization of the product’s tech stack using Docker, resulting in more efficient development, testing, and deployment processes.'
          },
          {
            content: 'Led the development of a shared cloud - based phone system which integrated with multiple Freshworks products, utilizing  Ember.js and Ruby on Rails, resulting in a 15% increase in product revenue.'
            // link: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/shared-call-appearance/',
            // linkname: 'Product Website'
          },
          {
            content: 'Developed ETL pipelines to extract data from subscription platforms, employing Python, Ruby and SQL scripts for processing, and storing data in Snowflake and Amazon S3, leading to comprehensive reports and analytics.'
          },
          {
            content: 'Orchestrated application deployments on AWS infrastructure utilizing Kubernetes and Terraform, ensuring efficient deployments.',
          },
          {
            content: 'Mentored Software Engineers on full-stack development best practices including reviewing code and tech specs.',
          }
        ],
        sectionTags: ['React', 'Node.js', 'Ruby on Rails', 'AWS', 'Docker', 'Ember.js', 'Redis', 'Snowflake', 'Kubernetes', 'Terraform'],
        sectionImages: []
      },
      {
        name: 'Software Engineer',
        timeframe: 'JUN 2018 - MAY 2021',
        // description: 'Software Engineer | JUN 2018 - MAY 2021',
        descriptionBullets: [
          {
            content: 'Collaborated with a team of 4 machine learning experts and built a Freddy AI powered voicebot using Spring Boot, Rails and Memcached. Upon its beta release to the customers, this bot resolved an average of 25% of common customer queries.'
            // link: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/voicebot/',
            // linkname: 'Product Website'
          },
          {
            content: 'Built a custom subscription library to handle the product’s billing logic and streamline integration with the billing platform.'
          },
          {
            content: 'Conducted performance profiling of Spring Boot and Rails applications using New Relic, Rack Mini Profiler and Jprofiler, effectively identifying bottlenecks and improving several API and SQL query performances by 35%.'
          },
          {
            content: 'Enhanced the core design of the Freshdesk Contact Center by building an automated call routing framework using Node.js. This facilitated effortless integration with supported third-party apps and achieve parity with competing products.'
            // link: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/automated-call-routing/',
            // linkname: 'Product Website'
          },
          {
            content: 'Enhanced the core design of the website monitoring product by leveraging Flask and React to integrate advanced analytics and enable SMS alerts, empowering users with deeper insights and real- time notifications.'
          },
          {
            content: 'Used Apache Kafka for publishing product events across various services, ensuring robust data consistency within the ecosystem.'
          },
          {
            content: 'Earned the Quality Champion award for resolving critical customer issues and restructuring frequent SQL queries, which reduced the response times of several APIs by up to 70%.'
          }
        ],
        sectionTags: ['Spring Boot', 'Ruby on Rails', 'React', 'Flask', 'Node.js', 'Docker', 'Ember.js', 'Redis', 'Kafka', 'Memcached', 'New Relic'],
        sectionImages: [
          {
            imageLocation: '/src/images/sectionImages/freshworks/se/routing_automation.jpeg',
            url: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/automated-call-routing/'
          },
          {
            imageLocation: '/src/images/sectionImages/freshworks/se/voicebot.jpeg',
            url: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/voicebot/'
          },
          {
            imageLocation: '/src/images/sectionImages/freshworks/se/voicebot.jpeg',
            url: 'https://www.freshworks.com/freshcaller-cloud-pbx/call-center-management/service-level-monitoring/'
          }
        ],
      },
      {
        name: 'Product Development Intern',
        timeframe: 'JAN 2018 - JUN 2018',
        // description: 'Product Development Intern | JAN 2018 - JUN 2018',
        descriptionBullets: [
          {
            content: 'Designed and implemented new features based on frequent customer issues on the product’s internal admin application using Ruby on Rails, reducing the number of high-priority L2 customer support tickets by 50%.'
          },
          {
            content: 'Led the second phase of Freshcaller’s website development using HTML and JS, offering a 360-degree view of the product.'
          }
        ],
        sectionTags: ['Node.js', 'Rails', 'HTML', 'CSS'],
        sectionImages: []
      },
      {
        name: 'Summer Intern',
        timeframe: 'MAR 2017 - JUL 2017',
        // description: 'Summer Intern | MAR 2017 - JUL 2017',
        descriptionBullets: [
          {
            content: 'Improved SPACES - an internal web portal of Freshworks by developing a meeting room booking system for Freshdesk employees using Node.js which regulated meeting room bookings and reduced the waiting time.',
            contentStyle: 'paragraph'
          }
        ],
        sectionTags: ['Node.js', 'HTML', 'CSS'],
        sectionImages: []
      },
    ],
    skills: [
      {
        key: 'languages',
        title: 'Programming Languages',
        highlight: false,
        tags: ['Ruby', 'Python', 'JavaScript', 'Java', 'C', 'C++', 'Bash']
      },
      {
        key: 'frameworks',
        title: 'Frameworks & Libraries',
        highlight: false,
        tags: ['Ruby on Rails', 'Spring boot', 'Node.js', 'React', 'Flask', 'Django', 'Ember.js', 'Tailwind CSS']
      },
      {
        key: 'tools',
        title: 'Tools and Databases',
        highlight: false,
        tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Apache Kafka', 'AWS', 'Git', 'gRPC', 'Jenkins', 'Docker', 'GraphQL', 'Redis', 'Memcached', 'Elasticsearch', 'Kubernetes', 'Grafana', 'Selenium', 'Microservices', 'API design', 'Agile / Scrum', 'System Design', 'Jira', 'Confluence']
      }
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
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    '@skagami/gatsby-plugin-dark-mode',
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
