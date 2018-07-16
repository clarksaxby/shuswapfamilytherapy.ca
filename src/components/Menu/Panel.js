import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'

import { MenuLink, MenuLinkContent } from './MenuItem'

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

export const PanelLinkList = styled.ul`
  padding: 3em 2em;
  margin: 0;

  @media screen and (max-width: 736px) {
    padding: 2.5em 1.75em;
  }

  & ${MenuLink} {
    transition: color 0.2s;
    display: block;
    border-top: solid 1px #dde1eb;
    color: inherit !important;
    padding: 0.75em 0 !important;
    text-decoration: none;
    border-bottom: 0;
    margin: 0;
    height: 46px;
    line-height: 24px;
  }

  & ${MenuLink} ${MenuLinkContent} {
    padding: 0;
    margin: 0;
  }

  & ${MenuLink}:first-child {
    border-top: 0;
  }

  & ${MenuLink}:hover, & ${MenuLink}:active, & ${MenuLink}:focus {
    color: #a3a9e7 !important;
  }

  & ${MenuLink}:after {
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

export default Panel
