const siteConfig = {
  title: 'Capacita.dev',
  tagline: 'Aprenda programação online de graça através de desafios práticos',
  url: 'https://www.capacita.dev',
  baseUrl: '/',
  cleanUrl: true,
  docsUrl: '',
  projectName: 'Capacita.dev',
  organizationName: 'woliveiras',
  headerLinks: [
    {
      doc: 'sobre',
      label: 'Como funciona'
    }
  ],
  headerIcon: 'img/favicon/favicon-96x96.png',
  footerIcon: 'img/favicon/favicon-96x96.png',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#5E2A85'
  },
  copyright: `Copyright © ${new Date().getFullYear()} William Oliveira`,
  highlight: {
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  repoUrl: 'https://github.com/woliveiras/capacita.dev',
  twitterUsername: '@etc_william',
  enableUpdateBy: true,
  gaTrackingId: 'UA-25964646-2'
}

module.exports = siteConfig
