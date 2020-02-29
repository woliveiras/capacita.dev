import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>Eita! Não tem nada aqui</h1>
    <p>Você está procurando conteúdo para aprender programação?</p>
    <p>Confere aqui: <a href='/'>Capacita.dev</a></p>
  </Layout>
)

export default NotFoundPage
