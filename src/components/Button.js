import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button`
  appearance: none;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 3rem;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  height: 3rem;
  line-height: calc(3rem - 1px);
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  font-size: 0.9rem;

  color: #7a7d86 !important;
  box-shadow: inset 0 0 0 3px #dde1eb;

  &:hover {
    background-color: rgba(163, 169, 231, 0.1);
    box-shadow: inset 0 0 0 3px #a3a9e7;
    color: #a3a9e7 !important;
  }

  &:active {
    background-color: rgba(163, 169, 231, 0.35);
    box-shadow: inset 0 0 0 3px #a3a9e7;
    color: #a3a9e7 !important;
  }

  &:focus {
    outline: none;
  }

  ${({ color }) =>
    color &&
    color === 'primary' &&
    css`
      box-shadow: none;
      background-color: #a3a9e7;
      color: #ffffff !important;

      &:hover {
        background-color: #b0b6f3;
        color: #ffffff !important;
        box-shadow: none;
      }

      &:active {
        background-color: #8d95e3;
      }
    `};
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.75rem;
  transition: color 0.2s ease-in-out;
  color: #dde1eb;

  ${ButtonStyle}:hover & {
    color: #a3a9e7 !important;
    transition-delay: 0.2s;
  }

  ${({ color }) =>
    color &&
    color === 'primary' &&
    css`
      ${ButtonStyle}:hover & {
        color: #dde1eb !important;
      }
    `};
`

const IconRight = styled(Icon)`
  margin-left: 0.75rem;
  margin-right: 0;
`

const Button = props => {
  return (
    <ButtonStyle {...props}>
      {props.icon && <Icon icon={props.icon} color={props.color} />}
      {props.children}
      {props.next && (
        <IconRight icon={faLongArrowAltRight} color={props.color} />
      )}
    </ButtonStyle>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  next: PropTypes.bool,
}

export default Button
