import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Header from './Header'
import Button from './Button'

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <Header title="Make an Appointment">
          #3-781 Marine Park Drive Salmon Arm, BC V1E2W7
        </Header>
        <Button color="white">Send</Button>
      </div>
    )
  }
}

export default ContactForm
