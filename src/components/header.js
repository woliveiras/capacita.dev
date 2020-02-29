import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon/favicon-96x96.png" }) {
        childImageSharp {
          fixed(width: 34) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: '#20232a',
        marginBottom: '2rem'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '.5rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.25em' }}>
          <Link
            to='/'
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Img
              fixed={image.placeholderImage.childImageSharp.fixed}
              style={{
                marginRight: '10px'
              }}
            />
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
