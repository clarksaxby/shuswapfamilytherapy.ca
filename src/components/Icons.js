import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'

const IconsStyle = styled(FontAwesomeIcon)``
const Icons = props => {
  return (
    <div {...props}>
      <IconsStyle icon={faFacebookF} />
    </div>
  )
}

export default Icons
