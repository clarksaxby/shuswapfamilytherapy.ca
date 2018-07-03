import React from 'react'
import { storiesOf } from '@storybook/react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Button from '../components/Button'

storiesOf('Button', module)
  .add('Default with text', () => <Button>This is text</Button>)
  .add('Primary with text', () => <Button color="primary">This is text</Button>)
  .add('With icon', () => <Button icon={faSearch}>Icon</Button>)
  .add('Primary with icon', () => (
    <Button icon={faSearch} color="primary">
      Icon
    </Button>
  ))
  .add('Next button', () => <Button next>Next</Button>)
  .add('Primary next button', () => (
    <Button next color="primary">
      Next primary
    </Button>
  ))
