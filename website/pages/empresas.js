const React = require('react')

const CompLibrary = require('../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

function Enterprises (props) {
  const supportLinks = [
    {
      content: 'Acompanhe as atualizações no Twitter [@etc_william](https://twitter.com/etc_william)',
      title: 'Acompanhe todas as novidades'
    },
    {
      content: 'Para apoiar acesse: [PicPay - William Oliveira](https://picpay.me/etc.william)',
      title: 'Apoiar financeiramente'
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
            <h1>Sua empresa busca inclusão social de profissionais em tecnologia?</h1>
          </header>
          <p>Se a sua empresa busca inclusão social de profissionais em tecnologia, o Capacita.dev pode ajudar!</p>
          <p>Com o apoio da comunidade de programação, vamos capacitar técnica e não tecnicamente o máximo possível de pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social.</p>
          <p>As pessoas que cumprem os desafios do Capacita.dev possuem as seguintes habilidades:</p>
          <ul>
            <li>Capacidade de auto-aprendizagem</li>
            <li>Coragem para enfrentar desafios complexos e/ou longos</li>
            <li>Interação com a comunidade de software através do open source e eventos</li>
            <li>Portfólio de projetos pessoais e profissionais (mesmo as mais iniciantes)</li>
            <li>Desde a primeira aula já praticam programação com projetos/desafios propostos pela comunidade de programação</li>
          </ul>
          <p>Nossa missão é capacitar essas pessoas a distância e te conectar com elas para conseguirem o tão sonhado emprego com programação.</p>
          <p>Quando elas finalizam os desafios das trilhas, recebem uma indicação nas empresas através do nosso mailing.</p>
          <p>Se você se interessou pelo programa e gostaria de receber nosso contato/acompanhar o trabalho, cadastre seu email na nossa base clicando neste link [ <a href='http://eepurl.com/dNIYOk'>aqui</a> ] e acompanhe os links a seguir.</p>
          <GridBlock contents={supportLinks} layout='threeColumn' />
        </div>
      </Container>
    </div>
  )
}

module.exports = Enterprises
