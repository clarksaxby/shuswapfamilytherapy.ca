import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const IconsStyle = styled.div`
  border: 1px solid;
  border-radius: 50%;
  padding: 17px 17px;
  border-color: rgba(255, 255, 255, 0.5);

  &: hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.5);
  }
`
const Icon = styled(FontAwesomeIcon)`
  color: white;
`
// width: 50px;
// height: 50px;

const Icons = props => {
  return (
    <div {...props}>
      <IconsStyle>
        <Icon icon={faFacebookF} />
      </IconsStyle>
      <IconsStyle>
        <Icon icon={faEnvelope} />
      </IconsStyle>
      <IconsStyle>
        <Icon icon={faPhone} />
      </IconsStyle>
    </div>
  )
}

export default Icons
