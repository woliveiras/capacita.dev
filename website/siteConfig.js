// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const siteConfig = {
  title: 'Capacita.dev', // Title for your website.
  tagline: 'Aprenda programação online de graça através de desafios práticos',
  url: 'https://www.capacita.dev/', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'Capacita.dev',
  organizationName: 'woliveiras',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  // headerLinks: [
  //   { doc: 'doc1', label: 'Docs' },
  //   { doc: 'doc4', label: 'API' },
  //   { page: 'help', label: 'Help' },
  //   { blog: true, label: 'Blog' }
  // ],

  headerLinks: [],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon/favicon-96x96.png',
  footerIcon: 'img/favicon/favicon-96x96.png',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#5E2A85'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} William Oliveira`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/woliveiras/capacita.dev',
  twitterUsername: '@etc_william'
}

module.exports = siteConfig
