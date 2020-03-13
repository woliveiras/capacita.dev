import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
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
    <FooterWrapper>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt='Logo do projeto Capacita.dev'
        style={{
          opacity: '0.5'
        }}
      />
      <ul>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>GitHub</a></li>
      </ul>
      <span style={{ width: '100%', textAlign: 'center' }}>
        © {new Date().getFullYear()} - <a href='https://twitter.com/etc_william'>William Oliveira</a> , desenvolvido com  <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </span>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    color: white;
    background-color: #1f2229;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex-wrap: wrap;
    max-height: 320px;

    a {
        color: white
    }
`

export default Footer
