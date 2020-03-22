import React from 'react'
import 'normalize.css'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../img/logo-capacita-dev.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout style={{ maxWidth: '600px' }}>
      <SEO title='Aprenda programação' />
      <div style={{ maxWidth: '360px', margin: '0 auto' }}>
        <Logo style={{ maxWidth: '100%' }} />
      </div>
      <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center', paddingBottom: '2rem' }}>
        <h2>Aprenda programação online de graça através de desafios práticos</h2>
        <p>Projeto educacional de capacitação profissional para pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social</p>
        {/* <LinkWrapper to='/docs/primeiros-passos/'>Iniciantes</LinkWrapper>
        <LinkWrapper to='/desafios/'>Desafios</LinkWrapper> */}
        <LinkWrapper to='/docs/empresas/'>Empresas</LinkWrapper>
        <LinkWrapper to='/docs/contribuir/'>Contribuir</LinkWrapper>
      </div>
    </Layout>
  )
}

const LinkWrapper = styled(Link)`
  display: inline-block;
  border: 1px solid #4c207c;
  border-radius: 5px;
  color: #4c207c;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;
  margin: 5px;
  text-transform: uppercase;
`

export default IndexPage
