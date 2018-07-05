import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'

const ImageStyle = styled.img`
  width: 385.766px;
  height: 385.766px;
`

const Teaser = props => {
  return (
    <div {...props}>
      <ImageStyle src={props.img} alt="Shuswap Family Therapy" />
      <div>{props.imgText}</div>
      <Button>{props.btnTitle}</Button>
    </div>
  )
}

Teaser.propTypes = {
  img: PropTypes.string,
  imgText: PropTypes.string,
  btnTitle: PropTypes.string,
}

export default Teaser
