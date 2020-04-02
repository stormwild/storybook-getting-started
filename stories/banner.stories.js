import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';

storiesOf('Major Banner', module)
  .add('With Only Title', () => (
      <MajorBanner 
      title="Banner Title"
      photo="../Images/People Outdoors/shutterstock_116403520.jpg" />
    ));