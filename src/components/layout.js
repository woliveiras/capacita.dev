import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import { Container, Content } from './containers'
import { GlobalStyle } from './global-style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle theme='purple' />
      <Header />
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
