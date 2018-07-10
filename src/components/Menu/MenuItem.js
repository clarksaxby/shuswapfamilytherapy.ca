import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const LinkListItem = styled.li`
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

const MenuItem = ({ current, children, ...props }) => (
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

export default MenuItem
