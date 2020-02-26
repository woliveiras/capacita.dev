/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render () {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='66'
                height='58'
              />
            )}
          </a>

          <div>
            <h5>Comunidade</h5>
            <a href='http://woliveiras.com.br/'>Blog</a>
            <a href='https://github.com/woliveiras/capacita.dev'>GitHub</a>
            <a
              className='github-button'
              href={this.props.config.repoUrl}
              data-icon='octicon-star'
              aria-label='Star this project on GitHub'
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className='social'>
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className='twitter-follow-button'
                >
                  Acompanhe @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>

        </section>

        <div className='container-center'>
          <a
            href='https://opensource.org/'
            target='_blank'
            rel='noreferrer noopener'
            className='fbOpenSource'
          >
            <img
              src={`${this.props.config.baseUrl}img/oss.png`}
              alt='Projeto Open Source'
              width='45'
            />
          </a>
          <a
            href='https://choosealicense.com/licenses/mit/'
            target='_blank'
            rel='noreferrer noopener'
            className='fbOpenSource'
          >
            <img
              src={`${this.props.config.baseUrl}img/MIT_LICENSE.png`}
              alt='Licença MIT'
              width='45'
            />
          </a>
        </div>
        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer
