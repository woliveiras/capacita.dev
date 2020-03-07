module.exports = {
  siteMetadata: {
    title: 'Capacita.dev',
    description: 'Capacitação profissional em desenvolvimento de software para pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social',
    author: '@etc_william'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /img\/.*\.svg/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'capacita-dev',
        short_name: 'Capacita',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/img/favicon-144x144.png'
      }
    }
  ]
}
