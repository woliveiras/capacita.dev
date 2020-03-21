import React from 'react'
import 'normalize.css'
import { Link } from 'gatsby'

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
      <div style={{ maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Aprenda programação online de graça através de desafios práticos</h2>
        <p>Projeto educacional de capacitação profissional para pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social</p>
        <Link to='/desafios/'>Desafios</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
