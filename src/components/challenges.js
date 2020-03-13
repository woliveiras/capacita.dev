import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './Footer'
import { Container, Content } from './containers'
import { GlobalStyle } from './global-style'

const Challenges = ({ title, children }) => {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default Challenges
