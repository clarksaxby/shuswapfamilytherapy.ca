import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import Textarea from './TextArea'

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr 0.25fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 4fr 1fr 0.5fr;
  grid-gap: 20px 20px;
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
const ContactForm = ({ showThanks, redirectUrl }) => {
  return (
    // <div>
    //   {showThanks && (
    //     <ThanksMessage>
    //       Thank you for your inquiry, your message has been sent.
    //     </ThanksMessage>
    //   )}
    //   <FormWrapper method="POST" action="POST" data-netlify="true">
    //     <input
    //       type="hidden"
    //       name="_subject"
    //       value="New message for Shuswap Family Therapy"
    //     />
    //     <InputStyleLeft placeholder="Name" name="name" color="white" />
    //     <InputStyleRight placeholder="Email" name="email" color="white" />
    //     <TextareaStyle placeholder="Message" name="message" color="white" />
    //     <input type="text" name="_gotcha" style={{ display: 'none' }} />
    //     <ButtonStyle color="white">Send</ButtonStyle>
    //     <input type="hidden" name="_next" value={redirectUrl} />
    //   </FormWrapper>

      <form action="POST" data-netlify="true">
        <div className="fields">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" rows="7"></textarea>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" /></li>
        </ul>
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  showThanks: PropTypes.bool,
  redirectUrl: PropTypes.string,
}

export default ContactForm
