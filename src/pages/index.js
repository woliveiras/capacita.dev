import React from 'react'
import { Link } from 'theme-ui'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div style={{ maxWidth: '320px', margin: '0 auto', paddingBottom: '2rem' }}>
      <Image />
    </div>
    <h2>Aprenda programação online de graça através de desafios práticos</h2>
    <p>Em breve um projeto educacional de capacitação profissional para pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social</p>

    <Link variant='cta' href='/apoiar'>Quero ajudar</Link>

  </Layout>
)

export default IndexPage
