/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

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
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <h1></h1>
        </div>
        <footer style={{
          padding: `0.5px 1rem`,
          color: `#5b6c5d`,
        }}>
          © {new Date().getFullYear()} <a href="https://github.com/aeridona/augmented-reality-floodmap">Tess Bergman and Jennefer Campoverde</a>, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
