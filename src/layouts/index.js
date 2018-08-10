import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu, { MenuItem } from '../components/Menu'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Menu
      logo={data.logoImage.childImageSharp.resolutions}
      logoText="Kendra Kieft, MA, RCC"
    >
      <MenuItem exact to="/">
        Home
      </MenuItem>
      <MenuItem exact to="/about">
        About
      </MenuItem>
      <MenuItem exact to="/resources">
        Resources
      </MenuItem>
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

    logoImage: file(relativePath: { eq: "layouts/images/logo.png" }) {
      childImageSharp {
        resolutions(width: 65) {
          ...GatsbyImageSharpResolutions_noBase64
        }
      }
    }
  }
`
