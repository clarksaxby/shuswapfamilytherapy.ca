import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from './Button'
import overlay from '../layouts/images/overlay.png'
import Link from 'gatsby-link'

const TeaserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 300px 0.75fr 0.5fr;
`
const ImageZoomWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / -1;
  justify-self: center;
  position: relative;
  overflow: hidden;
`
const ImageStyleAfter = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease;
  &:hover ${ImageStyle} {
    transform: scale(1.075);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${overlay}),
      linear-gradient(
        45deg,
        rgba(162, 206, 220, 0.25),
        rgba(170, 143, 255, 0.25)
      );
  }
`
const ImageStyle = styled(Img)`
  display: block;
  height: 100%;
  width: 100%;
`

const TextMessage = styled.p`
  grid-column: 1 / span 3;
  align-self: center;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  color: #7a7d86;
  text-align: center;
  &:first-line {
    font-weight: 600;
  }
`

const TeaserButton = styled(Link)`
  grid-column: 2 / span 1;
`

const Teaser = props => {
  return (
    <TeaserWrapper>
      <ImageZoomWrapper>
        <ImageStyleAfter>
          <ImageStyle
            resolutions={props.img}
            origin={props.imgPosition}
            alt="Shuswap Family Therapy"
          />
        </ImageStyleAfter>
      </ImageZoomWrapper>

      <TextMessage>{props.imgText}</TextMessage>
      <TeaserButton {...props}>
        <Button next>{props.btnTitle}</Button>
      </TeaserButton>
    </TeaserWrapper>
  )
}

Teaser.propTypes = {
  img: PropTypes.object,
  imgText: PropTypes.string,
  imgPosition: PropTypes.string,
  btnTitle: PropTypes.string,
}

export default Teaser
