import React from 'react'
import { storiesOf } from '@storybook/react'
import host from 'storybook-host'

import ContentPage from '../components/ContentPage'

storiesOf('ContentPage', module)
  .addDecorator(
    host({
      width: '90%',
    })
  )
  .add('With content', () => (
    <ContentPage>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
        aliquet enim. Nulla cursus, orci sed tempus rutrum, ligula diam iaculis
        magna, vel suscipit velit nisl vitae metus. Aliquam pharetra justo eu
        dolor mollis, nec ornare ex tristique. In faucibus gravida enim, et
        iaculis tellus. Etiam turpis enim, molestie a ex nec, ultrices gravida
        ex. Sed viverra elementum dolor nec tempor. Mauris quis orci justo.
        Praesent ultrices volutpat congue. Donec in sem eros. Pellentesque
        eleifend eu nunc id mollis. In semper pulvinar ex in rhoncus. Cras nisi
        quam, tempus at vulputate vel, tempus ac elit. Quisque dignissim sodales
        nisi, a molestie felis ullamcorper ut. Suspendisse tincidunt iaculis
        libero, vel iaculis enim venenatis in.
      </p>
      <p>
        Aliquam rhoncus, tortor eget placerat iaculis, orci massa ultricies
        quam, et tristique odio orci at dui. Sed eget tortor massa. Duis sit
        amet nulla maximus, tempor tortor vitae, hendrerit tellus. Phasellus et
        tellus eleifend leo accumsan egestas. Curabitur ut est sed risus mollis
        porta ac at sapien. Cras ac ante eros. Nulla viverra lorem vitae sem
        pulvinar, eget commodo neque semper. Etiam mi nibh, egestas sit amet
        consectetur vitae, venenatis et orci. Fusce ut molestie arcu, et commodo
        enim. Donec et tellus metus. In venenatis lorem eget urna facilisis
        molestie. Cras malesuada ornare iaculis. In auctor nibh non felis
        vestibulum aliquam.
      </p>
    </ContentPage>
  ))
  .add('With content and title', () => (
    <ContentPage title="Lorem Ipsum" subtitle="dolor sit amet">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
        aliquet enim. Nulla cursus, orci sed tempus rutrum, ligula diam iaculis
        magna, vel suscipit velit nisl vitae metus. Aliquam pharetra justo eu
        dolor mollis, nec ornare ex tristique. In faucibus gravida enim, et
        iaculis tellus. Etiam turpis enim, molestie a ex nec, ultrices gravida
        ex. Sed viverra elementum dolor nec tempor. Mauris quis orci justo.
        Praesent ultrices volutpat congue. Donec in sem eros. Pellentesque
        eleifend eu nunc id mollis. In semper pulvinar ex in rhoncus. Cras nisi
        quam, tempus at vulputate vel, tempus ac elit. Quisque dignissim sodales
        nisi, a molestie felis ullamcorper ut. Suspendisse tincidunt iaculis
        libero, vel iaculis enim venenatis in.
      </p>
      <p>
        Aliquam rhoncus, tortor eget placerat iaculis, orci massa ultricies
        quam, et tristique odio orci at dui. Sed eget tortor massa. Duis sit
        amet nulla maximus, tempor tortor vitae, hendrerit tellus. Phasellus et
        tellus eleifend leo accumsan egestas. Curabitur ut est sed risus mollis
        porta ac at sapien. Cras ac ante eros. Nulla viverra lorem vitae sem
        pulvinar, eget commodo neque semper. Etiam mi nibh, egestas sit amet
        consectetur vitae, venenatis et orci. Fusce ut molestie arcu, et commodo
        enim. Donec et tellus metus. In venenatis lorem eget urna facilisis
        molestie. Cras malesuada ornare iaculis. In auctor nibh non felis
        vestibulum aliquam.
      </p>
    </ContentPage>
  ))
