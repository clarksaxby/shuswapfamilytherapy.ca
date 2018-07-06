import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  padding: 7rem 6rem 5rem 6rem;
  text-align: center;
  margin: 0 auto;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;

  @media screen and (max-width: 1280px) {
    padding: 5rem 3rem 3rem 3rem;
  }

  @media screen and (max-width: 736px) {
    padding: 3rem 2rem 1rem 2rem;
    padding-bottom: 1.5rem;
    margin-bottom: 1.75rem;
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 1.5rem 1rem 1.5rem;
  }
`

const HeaderTitle = styled.h1`
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 3rem;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 20rem;
    height: 3px;
    margin-left: -10rem;
    background-image: linear-gradient(90deg, #a2cedc, #aa8fff);
  }
`

const HeaderText = styled.p`
  position: relative;
  font-size: 1.25rem;
  margin-top: -1rem;

  @media screen and (max-width: 736px) {
    font-size: 1rem;
    margin-top: -0.25rem;
  }
`

const Header = props => (
  <HeaderContainer>
    <HeaderTitle>{props.title}</HeaderTitle>
    <HeaderText>{props.children}</HeaderText>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Header
