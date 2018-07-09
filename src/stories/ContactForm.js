import React from 'react'
import { storiesOf } from '@storybook/react'
import { host } from 'storybook-host'

import ContactForm from '../components/ContactForm'

storiesOf('Contact Form', module)
  .addDecorator(host())
  .add('Default empty form', () => <ContactForm />)
