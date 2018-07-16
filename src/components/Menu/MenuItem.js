import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

const activeClassName = 'activeMenuLink'
export const MenuLink = styled(Link).attrs({
  activeClassName,
})`
  position: relative;
  display: inline-block;
  margin: 0 0.75rem;
  padding: 0;
  text-decoration: none;
  cursor: pointer;

  &.${activeClassName} {
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
  }
`

export const MenuLinkContent = styled.span`
  display: block;
  height: inherit;
  line-height: inherit;
  border-bottom: 0;
  padding: 0 0.75rem;
  font-weight: 600;
  color: #7a7d86;

  &:hover {
    color: #a3a9e7;
  }

  .${activeClassName} > & {
    color: #a3a9e7;
  }
`

const MenuItem = ({ children, ...props }) => (
  <MenuLink activeClassName={activeClassName} {...props}>
    <MenuLinkContent>{children}</MenuLinkContent>
  </MenuLink>
)

MenuItem.propTypes = {
  current: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default MenuItem
