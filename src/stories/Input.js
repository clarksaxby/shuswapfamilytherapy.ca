import React from 'react'
import { storiesOf } from '@storybook/react'
import host from 'storybook-host'

import Input from '../components/Input'

storiesOf('Input', module)
  .addDecorator(
    host({
      width: 250,
    })
  )
  .add('Text input', () => <Input />)
  .add('With placeholder', () => <Input placeholder="Username" />)
  .add('Password input', () => <Input placeholder="Password" type="password" />)
