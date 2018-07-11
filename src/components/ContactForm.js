import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import Button from './Button'
import Input from './Input'
import Textarea from './TextArea'

const ContactFormWrapper = styled.div``
// const HeaderStyle = styled(Header)`
//   color: white;
// `
const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr 0.25fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 4fr 1fr 0.5fr;
  grid-gap: 20px 20px;
  border-top: 1px solid #dde1eb;
  border-bottom: 1px solid #dde1eb;
`
const InputStyleLeft = styled(Input)`
  color: white;
  grid-column: 2 / span 2;
  grid-row-start: 2;
  &::-webkit-input-placeholder {
    color: white;
  }
`
const InputStyleRight = styled(Input)`
  color: white;
  grid-column: 4 / span 2;
  grid-row-start: 2;
  &::-webkit-input-placeholder {
    color: white;
  }
`
const TextareaStyle = styled(Textarea)`
  color: white;
  grid-column: 2 / 6;
  grid-row: 3 / span 1;
  grid-row-start: 3;

  &::-webkit-input-placeholder {
    color: white;
  }
`
const ButtonStyle = styled(Button)`
  grid-column: 3 / span 2;
  grid-row-start: 4;
  padding: 0px;
`

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <Header color="white" title="Make an Appointment">
        #3-781 Marine Park Drive, Salmon Arm, BC V1E2W7
      </Header>
      {/*mailhound key needs to change for Kendra*/}
      <FormWrapper
        method="POST"
        action="https://mailhound.twostoryrobot.com?key=monika"
      >
        <InputStyleLeft placeholder="Name" name="name" />
        <InputStyleRight placeholder="Email" name="email" />
        <TextareaStyle placeholder="Message" name="message" />
        <ButtonStyle color="white">Send</ButtonStyle>
      </FormWrapper>
    </ContactFormWrapper>
  )
}

export default ContactForm
