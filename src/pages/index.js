import React from 'react'
import 'normalize.css'
import Logo from '../img/logo-capacita-dev.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Página inicial' />
      <div style={{ maxWidth: '320px', marginBottom: '1.45rem' }}>
        <Logo style={{ maxWidth: '100%' }} />
      </div>
      <h2>Aprenda programação online de graça através de desafios práticos</h2>
      <p>Projeto educacional de capacitação profissional para pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social</p>
    </Layout>
  )
}

export default IndexPage
