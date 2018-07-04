import React from 'react'
import { storiesOf } from '@storybook/react'
import host from 'storybook-host'

import TextArea from '../components/TextArea'

storiesOf('TextArea', module)
  .addDecorator(
    host({
      width: 250,
    })
  )
  .add('Empty', () => <TextArea />)
  .add('With lots of rows', () => <TextArea rows="20" />)
