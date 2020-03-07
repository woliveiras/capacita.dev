import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './header'
import Footer from './Footer'
import { Container, Content } from './containers'

const GlobalStyle = createGlobalStyle`
  body {
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  main {
    flex: 1;
    max-width: 620px;
    margin: 0 auto;
  }
  li {
    list-style: none;
    padding: 5px
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
    <Wrapper>
      <GlobalStyle theme='purple' />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Content>
          <main>{children}</main>
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
