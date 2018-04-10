import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './header'
import '../css/main.css'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const { location } = this.props

    const isRoot = location.pathname === '/'

    return (
      <div>
        <Helmet
          title="Filoblog"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en-US" />
        </Helmet>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 .5rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
