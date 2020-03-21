import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './Footer'
import { Container, TextContent } from './containers'
import { GlobalStyle } from './global-style'

const Challenges = ({ children, ...props }) => {
  const { title, logo, date } = props.pageContext.frontmatter

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Container>
        <TextContent>
          <main>{children}</main>
        </TextContent>
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
