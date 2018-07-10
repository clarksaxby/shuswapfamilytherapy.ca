import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import Button from './Button'
import Input from './Input'
import Textarea from './TextArea'

const ContactFormWrapper = styled.div``
const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-gap: 20px 20px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  justify-content: space-evenly;
  align-content: space-around;
`
const InputStyleLeft = styled(Input)`
  color: white;
  grid-column: 1 / span 2;
`
const InputStyleRight = styled(Input)`
  color: white;
  grid-column: 3 / span 2;
`
const TextareaStyle = styled(Textarea)`
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
`
const ButtonStyle = styled(Button)`
  grid-column: 2 / span 2;
`

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
