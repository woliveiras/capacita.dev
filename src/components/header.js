import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Container } from './containers'

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Title>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </Title>
      <LinkContainer>
        <Link
          to='/sobre'
          style={{
            color: 'white',
            textDecoration: 'none',
            borderBottom: '2px solid #cfa6fe'
          }}
        >
          Como funciona
        </Link>
      </LinkContainer>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

const Wrapper = styled.header`
  background: #340b65;
  margin-bottom: 1rem;
  border-bottom: 5px solid rgb(207, 166, 255);
`

const Title = styled.h1`
  margin: 0;
  padding: .5rem 0;
`

const LinkContainer = styled.div`
  padding: 0.8rem 0;
`

export default Header
