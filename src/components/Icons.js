import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 17px;
`
const IconsStyle = styled.div`
  border: 1px solid;
  border-radius: 50%;
  padding: 18px;
  border-color: rgba(255, 255, 255, 0.35);
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-align: center;
  &: hover {
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 0.35);
    border-color: rgba(255, 255, 255, 1);
  }
`
const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2em;
`

const Icons = props => {
  return (
    <IconsWrapper {...props}>
      <IconsStyle>
        <a href="https://www.facebook.com/shuswapfamilytherapy">
          <Icon icon={faFacebookF} />
        </a>
      </IconsStyle>
      <IconsStyle>
        <a href="mailto:k2kieft@gmail.com">
          <Icon icon={faEnvelope} />
        </a>
      </IconsStyle>
      <IconsStyle>
        <a href="tel:1-250-515-1003">
          <Icon icon={faPhone} />
        </a>
      </IconsStyle>
    </IconsWrapper>
  )
}

export default Icons
