import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Button from './Button'
import overlay from './overlay.png'

const HeroContainer = styled.div`
  color: #ffffff;
  padding: 12rem 6rem 10rem 6rem;
  cursor: default;
  position: relative;
  text-align: center;

  @media screen and (max-width: 1280px) {
    padding: 10rem 3rem 8rem 3rem;
  }

  @media screen and (max-width: 980px) {
    padding: 18rem 3rem 16rem 3rem;
  }

  @media screen and (max-width: 736px) {
    padding: 6rem 3rem 4rem 3rem;
  }

  @media screen and (max-width: 480px) {
    padding: 10rem 1.5rem 8rem 1.5rem;
  }

  @media screen and (max-width: 360px) {
    padding: 8rem 1.5rem 6rem 1.5rem;
  }

  ${({ image }) =>
    !image &&
    css`
      background-image: linear-gradient(45deg, #a2cedc, #aa8fff);
    `};
`

const HeroTitle = styled.h1`
  transition: opacity 0.875s ease-out, transform 0.875s ease-out,
    filter 0.875s ease-out;
  transition-delay: 1.99609375s;
  color: #ffffff;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
`

const HeroImageContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  &:before {
    transition: opacity 1.3125s ease-in-out;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${overlay}), url(${overlay}),
      linear-gradient(45deg, #a2cedc, #aa8fff);
    opacity: 0.7;
    z-index: 1;
  }

  &:after {
    transition: opacity 1.3125s ease-in-out;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${overlay}), url(${overlay}),
      linear-gradient(45deg, #8c8c8c, #816fb9);
    opacity: 0;
    z-index: 1;
  }
`

const HeroImage = styled.img`
  transition: transform 2.1875s ease-out, filter 2.1875s ease-out;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const HeroBanner = ({ image, title, action, onAction }) => (
  <HeroContainer image={image}>
    {image && (
      <HeroImageContainer>
        <HeroImage src={image} />
      </HeroImageContainer>
    )}
    <HeroTitle>{title}</HeroTitle>
    {action && (
      <Button color="white" next onClick={onAction}>
        {action}
      </Button>
    )}
  </HeroContainer>
)

HeroBanner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  action: PropTypes.string,
  onAction: PropTypes.func,
}

export default HeroBanner
