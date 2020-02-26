/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

function Help (props) {
  const { config: siteConfig, language = '' } = props
  const { baseUrl, docsUrl } = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const supportLinks = [
    {
      content: 'Para apoiar acesse: [PicPay - William Oliveira](https://picpay.me/etc.william)',
      title: 'Apoiar financeiramente'
    },
    {
      content: 'Acompanhe as atualizações no Twitter [@etc_william](https://twitter.com/etc_william)',
      title: 'Acompanhe todas as novidades'
    },
    {
      content: 'Deixe sua estrelinha no [GitHub](https://github.com/woliveiras/capacita.dev/)',
      title: 'Acompanhe no GitHub'
    }
  ]

  return (
    <div className='docMainWrapper wrapper'>
      <Container className='mainContainer documentContainer postContainer'>
        <div className='post'>
          <header className='postHeader'>
            <h1>Gostaria de ajudar o Capacita.dev?</h1>
          </header>
          <p>Existem diversas maneiras de apoiar um projeto open source educacional, mas acredito que a principal é divulgando para que outras pessoas tenham acesso ao conteúdo.</p>
          <p>Mas, se você quiser contribuir de outra maneira, confira abaixo.</p>
          <GridBlock contents={supportLinks} layout='threeColumn' />
        </div>
      </Container>
    </div>
  )
}

module.exports = Help
