import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Menu, { MenuItem } from '../components/Menu'

const menuAction = item => action(`${item} clicked`)

storiesOf('Menu', module)
  .add('Empty', () => <Menu />)
  .add('With links', () => (
    <Menu>
      <MenuItem>Home</MenuItem>
      <MenuItem current>About</MenuItem>
      <MenuItem onClick={menuAction()}>Contact</MenuItem>
    </Menu>
  ))
  .add('With logo', () => (
    <Menu logo="Lorem Ipsum Co.">
      <MenuItem onClick={menuAction('Home')}>Home</MenuItem>
      <MenuItem current onClick={menuAction('About')}>
        About
      </MenuItem>
      <MenuItem onClick={menuAction('Contact')}>Contact</MenuItem>
    </Menu>
  ))
