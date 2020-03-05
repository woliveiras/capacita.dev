import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Header from './header'
import { Container, Content } from './containers'

const GlobalStyle = createGlobalStyle`
  body {
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle theme='purple' />
      <Header siteTitle={data.site.siteMetadata.title} />

      <Container>
        <Content>
          <main>{children}</main>
          <footer>
          © {new Date().getFullYear()} - <a href='https://twitter.com/etc_william'>William Oliveira</a> , desenvolvido com  <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </footer>
        </Content>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
