import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Panel, { PanelLinkList } from './Panel'

const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 0.5rem 0 rgba(161, 177, 204, 0.325);
  cursor: default;
  z-index: 10000;

  @media screen and (max-width: 736px) {
    height: 60px;
    line-height: 60px;
  }
`

const Toggle = styled.span`
  display: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    top 0.2s ease-in-out, right 0.2s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  height: 44px;
  padding: 0 2rem;
  text-transform: uppercase;
  line-height: inherit;

  @media screen and (max-width: 980px) {
    display: block;
  }

  @media screen and (max-width: 736px) {
    padding: 0 1rem;
  }
`

const ToggleIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 0.625rem;
`

const Logo = styled(Img)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 2rem;
  height: 100%;
  background-size: cover;
  margin-top: 2px;

  @media screen and (max-width: 736px) {
    left: 1rem;
    margin: 1px 0;

    & img {
      height: 60px !important;
    }
  }
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 2rem;

  @media screen and (max-width: 980px) {
    display: none;
  }
`

class Menu extends React.Component {
  state = {
    collapsed: true,
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    logo: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { children, logo } = this.props

    return (
      <MenuContainer>
        <Logo resolutions={logo} />
        {children && (
          <React.Fragment>
            <LinkList>{children}</LinkList>
            <Panel visible={!this.state.collapsed} onCloseClick={this.toggle}>
              <PanelLinkList>{children}</PanelLinkList>
            </Panel>
            <Toggle onClick={this.toggle}>
              Menu
              <ToggleIcon icon={faBars} />
            </Toggle>
          </React.Fragment>
        )}
      </MenuContainer>
    )
  }
}

export default Menu
