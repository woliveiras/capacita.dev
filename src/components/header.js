import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Container } from './containers'

const Header = () => {
  const isHome = window.location.pathname === '/'

  const renderTitle = (isHome) => {
    if (isHome) {
      return (
        <Title
          style={{
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt='Logo do projeto Capacita.dev'
            style={{
              width: '30px',
              height: '30px',
              marginRight: '10px'
            }}
          />
          <Link
            to='/'
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {data.site.siteMetadata.title}
          </Link>
        </Title>
      )
    }

    return (
      <Link
        to='/'
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        {data.site.siteMetadata.title}
      </Link>
    )
  }

  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "logo-capacita-dev-transparent-52.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Container>
        {renderTitle(isHome)}
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
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

const Wrapper = styled.header`
  background: #1f2229;
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
