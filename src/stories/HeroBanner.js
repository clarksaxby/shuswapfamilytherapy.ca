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
  .add('With subtitle', () => (
    <HeroBanner title="Lorem Ipsum" subtitle="Dolor sit amet" />
  ))
  .add('With everything', () => (
    <HeroBanner
      image="http://placekitten.com/600/300"
      title="Lorem Ipsum Dolor Sit Amet"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit tristique nisl, eu porttitor velit. Ut justo lectus, consequat at mauris quis, finibus venenatis lacus. Nam non metus laoreet, convallis turpis id, congue arcu. Phasellus lorem urna, rutrum vel libero vel, auctor condimentum nunc. Ut posuere enim non cursus lacinia."
      action="Action"
      onAction={testAction()}
    />
  ))
