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
`
const InputStyleRight = styled(Input)`
  color: white;
  grid-column: 4 / span 2;
  grid-row-start: 2;
`
const TextareaStyle = styled(Textarea)`
  color: white;
  grid-column: 2 / 6;
  grid-row: 3 / span 1;
  grid-row-start: 3;
`
const ButtonStyle = styled(Button)`
  grid-column: 3 / span 2;
  grid-row-start: 4;
`

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, field) {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <ContactFormWrapper>
        <Header color="white" title="Make an Appointment">
          #3-781 Marine Park Drive, Salmon Arm, BC V1E2W7
        </Header>
        <FormWrapper>
          <InputStyleLeft
            onChange={e => this.handleChange(e.target.value, 'name')}
            placeholder="Name"
            value={this.state.name}
          />

          <InputStyleRight
            onChange={e => this.handleChange(e.target.value, 'email')}
            placeholder="Email"
            value={this.state.email}
          />

          <TextareaStyle
            onChange={e => this.handleChange(e.target.value, 'message')}
            placeholder="Message"
            value={this.state.message}
          />
          <ButtonStyle color="white">Send</ButtonStyle>
        </FormWrapper>
      </ContactFormWrapper>
    )
  }
}

export default ContactForm
