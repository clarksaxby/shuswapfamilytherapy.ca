import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import HeroBanner from '../components/HeroBanner'

const testAction = () => action('clicked')

storiesOf('HeroBanner', module)
  .add('With title', () => <HeroBanner title="Lorem Ipsum" />)
  .add('With background image and action', () => (
    <HeroBanner
      image="http://placekitten.com/600/300"
      title="Lorem Ipsum Dolor Sit Amet"
      action="Action"
      onAction={testAction()}
    />
  ))
