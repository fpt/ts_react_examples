import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Albums } from '../itunes_music';


storiesOf('iTunes Album Widget', module)
  .add('with query', () => (
    <div>
      <Albums query="jazz" />
      <Albums query="blues" />
    </div>
  ));
