const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      description: String
      author: String
      github: String
      githubContent: String
      linkedin: String
      linkedinContent: String
      instagram: String
      resumeContent: String
      professionalResume: String
      professionalResumeContent: String
      fullResume: String
      fullResumeContent: String
      workResume: String
      pmResume: String
      statusPage: String
      statusPageContent: String
      footer: String
      about1: String
      about2: String
      projects: [SectionItem]
      experience: [SectionItem]
      skills: [SectionItem]
    }

    type SectionItem {
      key: String
      organization: String
      name: String
      timeframe: String
      link: String
      description: String
      subdescription: String
      descriptionBullets: [DescriptionBullet]
      titleImage: String
    }

    type DescriptionBullet {
      content: String
      link: String
      linkname: String
      contentStyle: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/resume',
    component: require.resolve('./src/pages/resume.jsx'),
  });

  createPage({
    path: '/full-resume',
    component: require.resolve('./src/pages/full-resume.jsx'),
  });

  createPage({
    path: '/work-resume',
    component: require.resolve('./src/pages/work-resume.jsx'),
  });

  createPage({
    path: '/my_resume',
    component: require.resolve('./src/pages/my_resume.jsx'),
  });


  createPage({
    path: '/multilevel-cache-report',
    component: require.resolve('./src/pages/multilevel-cache-report.jsx'),
  });
};
