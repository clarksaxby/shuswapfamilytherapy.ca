import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Router } from 'react-router'
import createMemoryHistory from 'history/createMemoryHistory'

import Menu, { MenuItem } from '../components/Menu'

const history = createMemoryHistory()

history.push = action('history.push')
history.replace = action('history.replace')
history.go = action('history.go')
history.goBack = action('history.goBack')
history.goForward = action('history.goForward')

const menuAction = item => action(`${item} clicked`)

storiesOf('Menu', module)
  .addDecorator(story => <Router history={history}>{story()}</Router>)
  .add('Empty', () => <Menu />)
  .add('With links', () => (
    <Menu>
      <MenuItem onClick={menuAction('Home')} to="/home">
        Home
      </MenuItem>
      <MenuItem onClick={menuAction('About')} to="/about">
        About
      </MenuItem>
      <MenuItem onClick={menuAction('Contact')} to="/contact">
        Contact
      </MenuItem>
    </Menu>
  ))
