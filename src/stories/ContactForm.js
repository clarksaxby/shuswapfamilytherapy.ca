import React from 'react'
import { storiesOf } from '@storybook/react'
import { host } from 'storybook-host'
import ContactForm from '../components/ContactForm'

storiesOf('Contact Form', module)
  .addDecorator(host({ background: '#90B6DF' }))
  .add('Default empty form no functionality', () => (
    <ContactForm
      action="POST"
      data-netlify="true"
    />
  ))
  // .add('form with thankyou message', () => (
  //   <ContactForm
  //     action={
  //       'https://mailhound.twostoryrobot.com?key=' +
  //       process.env.STORYBOOK_MAILHOUND_KEY
  //     }
  //     showThanks={true}
  //   />
  // ))
