const React = require('react')

class HomeSplash extends React.Component {
  render () {
    const { siteConfig } = this.props
    const { baseUrl } = siteConfig

    const SplashContainer = props => (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>{props.children}</div>
        </div>
      </div>
    )

    const ProjectTitle = props => (
      <div>
        <img
          src={`${baseUrl}img/logo/Capacita.dev-logo-320.png`}
          alt='Logo do programa Capacita.dev. Letra C artístico com bordas arredondadas e sombreado no topo com a base fina e fechada com ponta. A cor do logo é roxo com gradiente de tonalidade mais escura.'
        />
        <h2 className='projectTitle'>
          <small>{props.tagline}</small>
        </h2>
      </div>
    )

    const PromoSection = props => (
      <div className='section promoSection'>
        <div className='promoRow'>
          <div className='pluginRowBlock'>{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className='inner'>
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <p>Em breve um projeto educacional de capacitação profissional para pessoas de grupos sub-representados e/ou em situação de vulnerabilidade social</p>
          <PromoSection>
            <Button href='/empresas'>Empresas</Button>
            <Button href='/apoiar'>Como ajudar</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render () {
    const { config: siteConfig } = this.props

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} />
      </div>
    )
  }
}

module.exports = Index
