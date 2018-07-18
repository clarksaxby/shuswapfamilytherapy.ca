import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import Button from './Button'
import Input from './Input'
import Textarea from './TextArea'

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

const ThanksMessage = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 5%;
`
const ContactForm = ({ action, showThanks, redirectUrl }) => {
  return (
    <div>
      <Header color="white" title="Make an Appointment">
        #3-781 Marine Park Drive, Salmon Arm, BC V1E2W7
      </Header>
      {showThanks && (
        <ThanksMessage>
          Thank you for your inquiry, your message has been sent.
        </ThanksMessage>
      )}
      <FormWrapper method="POST" action={action}>
        <input
          type="hidden"
          name="_subject"
          value="New message for Shuswap Family Therapy"
        />
        <InputStyleLeft placeholder="Name" name="name" />
        <InputStyleRight placeholder="Email" name="email" />
        <TextareaStyle placeholder="Message" name="message" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <ButtonStyle color="white">Send</ButtonStyle>
        <input type="hidden" name="_next" value={redirectUrl} />
      </FormWrapper>
    </div>
  )
}

ContactForm.propTypes = {
  action: PropTypes.string.isRequired,
  showThanks: PropTypes.bool,
  redirectUrl: PropTypes.string,
}

export default ContactForm
