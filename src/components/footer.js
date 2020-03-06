import React from 'react'
import styled from 'styled-components'

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <span>
        © {new Date().getFullYear()} - <a href='https://twitter.com/etc_william'>William Oliveira</a> , desenvolvido com  <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </span>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
    color: white;
    background-color: #1f2229;
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem;
    margin-top: 2rem;

    a {
        color: white
    }
`

export default Footer
