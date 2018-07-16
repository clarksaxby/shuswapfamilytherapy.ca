import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu, { MenuItem } from '../components/Menu'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Menu>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/services">Services</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
      <MenuItem to="/resources">Resources</MenuItem>
    </Menu>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
