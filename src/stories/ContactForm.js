import React from 'react'
import { storiesOf } from '@storybook/react'
import { host } from 'storybook-host'
import queryString from 'query-string'
import ContactForm from '../components/ContactForm'

const redirect = queryString.parseUrl(location.href)
//  Regardless of whether there is already search params in the url, this will ass thanks=true
redirect.query.thanks = true
//  This reconstructs the whole url to use for the redirect field
const redirectUrl = `${redirect.url}?${queryString.stringify(redirect.query)}`
const checkThanks = window.location.search.includes('thanks=true')

storiesOf('Contact Form', module)
  .addDecorator(host({ background: '#90B6DF' }))
  .add('Default empty form no functionality', () => (
    <ContactForm
      action={
        'https://mailhound.twostoryrobot.com?key=' +
        process.env.STORYBOOK_MAILHOUND_KEY
      }
    />
  ))
  .add('empty form with working thankyou message', () => (
    <ContactForm
      action={
        'https://mailhound.twostoryrobot.com?key=' +
        process.env.STORYBOOK_MAILHOUND_KEY
      }
      showThanks={checkThanks}
      redirectUrl={redirectUrl}
    />
  ))
  .add('form with thankyou message', () => (
    <ContactForm
      action={
        'https://mailhound.twostoryrobot.com?key=' +
        process.env.STORYBOOK_MAILHOUND_KEY
      }
      showThanks={true}
    />
  ))
