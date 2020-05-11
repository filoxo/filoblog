import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from './themes/context'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'My thoughts on development and other stuff.',
            },
            { name: 'keywords', content: 'javascript, development, blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="mx-auto max-w-screen-md">{children}</div>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
