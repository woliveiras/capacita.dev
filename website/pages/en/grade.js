const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container

class Curricula extends React.Component {
  render () {
    const links = [
      { title: 'Como usar o Capacita', href: '/como-usar-o-capacita-dev' },
      { title: 'Primeiros passos como pessoa desenvolvedora de software', href: '/primeiros-passos' }
    ]

    const listItems = links.map((link, index) => <li key={index}><a href={link.href}>{link.title}</a></li>)

    return (
      <div className='docMainWrapper wrapper'>
        <Container className='mainContainer documentContainer postContainer'>
          <div className='post'>
            <header className='postHeader'>
              <h1>Grade curricular: Capacita.dev</h1>
            </header>
            <p>Aqui está o material do Capacita.dev que você precisa para aprender programação.</p>
            <p>O conteúdo está em ordem de leitura, por isso basta seguir essa sequência e ser feliz!</p>
            <ul>
              {listItems}
            </ul>
          </div>
        </Container>
      </div>
    )
  }
}

module.exports = Curricula
