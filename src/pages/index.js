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
    </Layout>
  )
}

export default IndexPage
