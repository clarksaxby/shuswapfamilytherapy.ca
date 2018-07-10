import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

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
    height: 44px;
    line-height: 44px;
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

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  text-transform: uppercase;

  @media screen and (max-width: 736px) {
    left: 1rem;
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
    currentItem: 0,
    collapsed: true,
  }

  propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    logo: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  handleMenuItemClick = (index, handler = () => {}) => () => {
    this.setState({
      currentItem: index,
    })

    handler()
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
        {logo && <Logo>{logo}</Logo>}
        {children && (
          <React.Fragment>
            <LinkList>
              {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                  onClick: this.handleMenuItemClick(index, child.props.onClick),
                  current: this.state.currentItem === index,
                })
              )}
            </LinkList>
            <Panel visible={!this.state.collapsed} onCloseClick={this.toggle}>
              <PanelLinkList>
                {React.Children.map(children, (child, index) =>
                  React.cloneElement(child, {
                    onClick: this.handleMenuItemClick(
                      index,
                      child.props.onClick
                    ),
                    current: this.state.currentItem === index,
                  })
                )}
              </PanelLinkList>
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
