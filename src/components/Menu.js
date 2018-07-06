import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'

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

const LinkListItem = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 0.75rem;
  padding: 0;
  cursor: pointer;

  ${({ current }) =>
    current &&
    css`
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-image: linear-gradient(90deg, #a2cedc, #aa8fff);
      }
    `};
`

const ToggleIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 0.625rem;
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
export const MenuLink = styled.a`
  display: block;
  height: inherit;
  line-height: inherit;
  border-bottom: 0;
  padding: 0 0.75rem;
  font-weight: 600;

  &:hover {
    color: #a3a9e7;
  }

  ${({ current }) =>
    current &&
    css`
      color: #a3a9e7;
    `};
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

export const MenuItem = ({ current, children, ...props }) => (
  <LinkListItem current={current}>
    <MenuLink current={current} {...props}>
      {children}
    </MenuLink>
  </LinkListItem>
)

MenuItem.propTypes = {
  current: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

const PanelContainer = styled.div`
  transform: translateX(100%);
  transition: transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
  -webkit-overflow-scrolling: touch;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 20em;
  max-width: 80%;
  height: 100%;
  background: #ffffff;
  box-shadow: none;
  overflow-y: auto;
  visibility: hidden;
  z-index: 10002;

  @media screen and (max-width: 980px) {
    display: block;
  }

  ${({ visible }) =>
    visible &&
    css`
      transform: translateX(0);
      box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
      visibility: visible;
    `};
`

const PanelLinkList = styled.ul`
  padding: 3em 2em;
  margin: 0;

  @media screen and (max-width: 736px) {
    padding: 2.5em 1.75em;
  }

  & ${LinkListItem} {
    transition: color 0.2s;
    display: block;
    border-top: solid 1px #dde1eb;
    color: inherit !important;
    padding: 0.75em 0;
    text-decoration: none;
    border-bottom: 0;
    margin: 0;
  }

  & ${LinkListItem} a {
    padding: 0;
    margin: 0;
    height: 24px;
    line-height: 24px;
  }

  & ${LinkListItem}:first-child {
    border-top: 0;
  }

  & ${LinkListItem}:hover, & ${LinkListItem}:active, & ${LinkListItem}:focus {
    color: #a3a9e7 !important;
  }

  & ${LinkListItem}:after {
    display: none;
  }
`

const PanelCloseIcon = styled.span`
  text-decoration: none;
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 7em;
  height: 3.25em;
  line-height: 3.25em;
  border: 0;
  color: #dde1eb;
  cursor: pointer;
  padding-right: 1.25em;
  text-align: right;
  vertical-align: middle;

  &:hover {
    color: #a3a9e7;
  }

  @media screen and (max-width: 736px) {
    height: 4em;
    line-height: 4em;
  }
`

const Panel = ({ children, visible, onCloseClick }) => (
  <PanelContainer visible={visible}>
    <PanelCloseIcon onClick={onCloseClick}>
      <FontAwesomeIcon icon={faTimes} />
    </PanelCloseIcon>
    {children}
  </PanelContainer>
)

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  visible: PropTypes.bool,
  onCloseClick: PropTypes.func,
}

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
