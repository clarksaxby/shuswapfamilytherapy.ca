import React from 'react'
import { storiesOf } from '@storybook/react'
import { host } from 'storybook-host'
import Icons from '../components/Icons'

storiesOf('Icons', module)
  .addDecorator(host({ background: '#9088D9' }))
  .add('Default', () => <Icons />)
